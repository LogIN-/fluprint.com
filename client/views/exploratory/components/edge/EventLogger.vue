<template>
    <div>
    <div class="panel panel-default" v-if="details.Name.length > 0">
        <div class="panel-heading">Features: </div>
        <div class="panel-body log">
            <div v-for="cell in details.Name">
                <span>{{cell}}</span>
            </div>
        </div>
    </div>
    <div class="panel panel-default" v-if="details.Score.length > 0">
        <div class="panel-heading">Variable importance: </div>
        <div class="panel-body log">
            <div>
                <span>{{details.Score.join(", ")}}</span>
            </div>
        </div>
    </div>
    <div class="panel panel-default" v-if="details.FeatureSet.length > 0">
        <div class="panel-heading">Datasets: </div>
        <div class="panel-body log">
            <div>
                <span>{{details.FeatureSet.join(", ")}}</span>
            </div>
        </div>
    </div>
    <div class="panel panel-default" v-if="details.Model.length > 0">
        <div class="panel-heading">ML Algorithms: </div>
        <div class="panel-body log">
            <div v-for="model in details.Model">
                <span v-on:click="modelInfo(model, $event)" style="cursor: pointer;">{{model.replace("-", ".")}}</span>
            </div>
        </div>
    </div>

    </div>
</template>
<script>
import packages from "./packages.json";
export default {
    props: {
        details: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            currentPopover: ""
        };
    },
    mounted() {
        $(document).on("click", ".popover .close", function() {
            $(this)
                .parents(".popover")
                .popover("hide");
        });
    },
    methods: {
        modelInfo(model, event) {
            model = model.replace("-", ".");

            if (typeof gtag !== "undefined" && typeof gtag === "function") {
                gtag("event", "click", {
                    event_category: "fp-model",
                    event_label: model,
                    transport_type: "beacon"
                });
            }

            if (typeof packages[model] !== "undefined") {
                const modelDetails = packages[model];
                console.log(modelDetails);
                const popOverSettings = {
                    placement: "right",
                    container: "body",
                    html: true,
                    title: "About " + model + ' algorithm <a href="#" class="close" data-dismiss="alert">&times;</a>',
                    content: function() {
                        let html =
                            "<div class='pop-item'><div class='pop-item-label'>Label:</div><div class='pop-item-desc'>" +
                            modelDetails.label.join(",") +
                            " </div></div>";
                        html =
                            html +
                            "<div class='pop-item'><div class='pop-item-label'>Library:</div><div class='pop-item-desc'>" +
                            modelDetails.library.join(",") +
                            " </div></div>";
                        html =
                            html +
                            "<div class='pop-item'><div class='pop-item-label'>Type:</div><div class='pop-item-desc'>" +
                            modelDetails.type.join(",") +
                            " </div></div>";
                        html =
                            html +
                            "<div class='pop-item'><div class='pop-item-label'>Tags:</div><div class='pop-item-desc'>" +
                            modelDetails.tags.join(",") +
                            " </div></div>";
                        return html;
                    },
                    trigger: "manual"
                };
                $(event.target).popover(popOverSettings);
                this.currentPopover = model;
                $(event.target).popover("show");
            }
        }
    }
};
</script>
<style lang="scss">
.pop-item {
    width: 100%;
    font-size: 15px;
    &:not(:first-child) {
        padding-top: 10px;
    }
    .pop-item-label {
    }
    .pop-item-desc {
    }
}

.panel {
    &:not(:first-child) {
        padding-top: 15px;
    }
    .panel-heading {
        font-weight: bold;
        font-size: 22px;
    }
    .log {
        max-height: 250px;
        overflow-x: auto;
        overflow-y: auto;
        overflow: auto;
        text-align: left;

        span {
            font-family: "Poppins", sans-serif;
            margin: 0;
            padding: 0;
            font-size: 1.1em;
            font-weight: 300;
            line-height: 1.7em;
            color: #999;
        }
    }
}
</style>
