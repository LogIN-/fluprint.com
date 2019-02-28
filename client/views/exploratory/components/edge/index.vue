<template>
    <div class="container-fluid">
        <div class="row d3graph-container">
            <div class="progress" style="margin-left: 15px;margin-right: 15px;margin-bottom: 25px;" v-if="loading">
                <div
                    class="progress-bar progress-bar-striped progress-bar-animated  bg-info"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 100%"
                ></div>
            </div>
            <div class="col-sm-3" style="float: left; text-align: left;">
                <div class="panel panel-default">
                    <div class="panel-heading" style="font-weight: bold; font-size: 22px;">Selected Node:</div>
                    <div class="panel-body">
                        <div class="form-horizontal">
                            <div class="form-group">
                                <span v-if="highlightedNode">{{ highlightedNode.data.text }}</span>
                                <span v-else>Nothing selected</span>
                            </div>
                        </div>
                    </div>
                </div>
                <event-logger :details="selectedItemChunks" />
            </div>

            <div class="col-sm-9 panel panel-default" style="float: right;">
                <hierarchical-edge-bundling
                    class="graph-root"
                    ref="graph"
                    :maxTextWidth="85"
                    identifier="key"
                    :duration="duration"
                    @mouseNodeClick="mouseNodeClick"
                    @mouseNodeOver="mouseNodeOver"
                    @mouseNodeOut="mouseNodeOut"
                    :data="tree"
                    node-text="text"
                    :margin-x="marginX"
                    :margin-y="marginY"
                />
            </div>
        </div>
        <div class="row">
            <div class="boxes">
                <section>
                    <div class="heading">Exploratory analysis</div>
                    <div class="row block">
                        <div class="col-sm-12 description">
                            SIMON successfully processed several models able to discriminate high and low influenza vaccine responders. In total, 127 features were selected across
                            two datasets in models built with training and test AUROC≥0.7 and specificity/sensitivity>0.5. To further narrow down exploratory analysis and identify
                            features of interest, we ordered features selected in models based on their variable importance score. The variable importance score is a measurement of
                            the contribution of each feature to the model. This allowed us to explore in how many datasets and in how many different models, same features were
                            selected and with which variable importance score. For example, the first feature CD27+ CD8+ T cells had the highest variable importance score in 5
                            different machine learning algorithms in both datasets, indicating that this feature contributes to the discrimination of the high and low responders
                            with high accuracy and reproducibility.
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
import HierarchicalEdgeBundling from "./HierarchicalEdgeBundling.vue";
import EventLogger from "./EventLogger";

import * as d3 from "d3";

export default {
    name: "edge",
    components: {
        HierarchicalEdgeBundling,
        EventLogger
    },
    data() {
        return {
            loading: true,
            duration: 50,
            marginX: 0,
            marginY: 0,
            events: [],
            highlightedNode: false,
            highlightedNodeId: "",
            selectedItemChunks: {
                Model: [],
                Name: [],
                Score: [],
                FeatureSet: []
            },
            tree: null
        };
    },
    mounted() {
        if (this.tree === null) {
            fetch("/data.json", {
                headers: new Headers({
                    Authorization: "Basic " + btoa("fluprint:simon")
                })
            })
                .then(r => r.json())
                .then(jsonData => {
                    this.loading = false;
                    this.tree = jsonData;

                    this.preselectFirstItem();
                });
        }
    },
    methods: {
        preselectFirstItem() {},
        itemToStructure(selected, data) {
            const selectedChunks = selected.split(".");
            this.selectedItemChunks = {
                Model: [],
                Name: [],
                Score: [],
                FeatureSet: []
            };
            this.selectedItemChunks[selectedChunks[0]].push(selectedChunks[1]);

            data.forEach(element => {
                const chunks = element.split(".");
                this.selectedItemChunks[chunks[0]].push(chunks[1]);
            });
            if (typeof gtag !== "undefined" && typeof gtag === "function") {
                gtag("event", "click", {
                    event_category: "fp-graph",
                    event_label: selectedChunks[1],
                    transport_type: "beacon"
                });
            }
        },
        changeCurrent(value) {
            this.highlightedNode = value;
        },
        onEvent(eventName, data) {
            this.events.push({
                eventName,
                data: data.data
            });
        },
        mouseNodeClick(event) {
            console.log(event.element);

            if (this.highlightedNodeId !== event.data.key) {
                this.itemToStructure(event.data.name, event.data.imports);
                this.highlightedNodeId = event.data.key;
                this.changeCurrent(event.element);
            } else {
                this.highlightedNodeId = "";
                this.selectedItemChunks = {
                    Model: [],
                    Name: [],
                    Score: [],
                    FeatureSet: []
                };
                this.changeCurrent(null);
            }
        },
        mouseNodeOver(event) {
            // this.onEvent("mouseNodeOver", event);
            // this.changeCurrent(event.element);
        },
        mouseNodeOut(event) {
            // this.onEvent("mouseNodeOut", event);
            // this.changeCurrent(null);
        }
    },
    watch: {
        highlightedNode(value) {
            this.$refs["graph"].highlightedNode = value;
        }
    }
};
</script>
<style lang="scss">
.d3graph-container {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.tree {
    height: 600px;
    width: 100%;
}

.graph-root {
    height: 800px;
    width: 100%;
}
</style>
