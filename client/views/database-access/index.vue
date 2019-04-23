<template>
    <div class="container-fluid">
        <div class="boxes">
            <div class="title">FluPRINT on-line interface</div>
            <div class="intro" style="font-size: 16px;max-width: 80%;">
                Here you can browse and download simplified data contained in FluPrint MySQL database. We suggest building database from source by following directions explained
                <a style="color: #7386D5;" href="https://github.com/LogIN-/fluprint" target="_blank">here</a> on our
                <a style="color: #7386D5;" href="https://github.com/LogIN-/fluprint" target="_blank">main git repository</a>. In the case you don't know want to do that you can
                also <a style="color: #7386D5;" href="data/fluprint_database_full.csv" target="_blank">download full database export</a> in CSV format
                <a style="color: #7386D5;" href="data/fluprint_database_full.csv" target="_blank">here</a>.
            </div>

            <section>
                <div v-show="databaseData === null">Please wait, loading example data...</div>
                <hot-table ref="hotTableComponent" :settings="hotSettings"></hot-table>
            </section>
            <div class="sponsors">
                This work is supported by the EU’s Horizon 2020 research and innovation program under the Marie Sklodowska-Curie<br />
                Grant (FluPRINT, Project No 796636) and National Institutes of Health (NIH) grants (U19 AI090019, U19 AI057229) <br />
                <img style="max-height: 50px;" class="img-fluid" src="sponsors/ec-logo-horiz-web_en.jpg" />
                <img style="max-height: 50px; margin-left: 10px; " class="img-fluid" src="sponsors/nih-logo-color.png" />
            </div>
        </div>
        <div class="page-loading-outer" v-if="pageLoading == true">
            <div class="page-loading-inner spinner-grow text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>
<script>
import * as csv from "csvtojson";
export default {
    name: "database-access",
    data() {
        return {
            pageLoading: false,
            databaseData: null,
            hotSettings: {
                colHeaders: true,
                minSpareRows: 1,
                stretchH: "all",

                autoWrapRow: true,
                height: 487,

                manualRowResize: true,
                manualColumnResize: true,
                rowHeaders: true,
                manualRowMove: true,
                manualColumnMove: true,
                contextMenu: true,
                filters: true,
                dropdownMenu: true,
                licenseKey: "non-commercial-and-evaluation"
            },
            hotRef: null
        };
    },
    mounted() {
        this.hotRef = this.$refs.hotTableComponent.hotInstance;
        this.pageLoading = true;
        
        if (this.databaseData === null) {
            fetch("data/fluprint_database_example.csv", {
                headers: new Headers({
                    Authorization: "Basic " + btoa("fluprint:simon")
                })
            })
                .then(response => response.text())
                .then(response => {
                    csv({
                        output: "json",
                        noheader: false,
                        checkType: true
                    })
                        .fromString(response)
                        .then(jsonData => {
                            this.databaseData = jsonData;
                            this.refreshTable();
                            this.pageLoading = false;
                        });
                });
        }
    },
    methods: {
        refreshTable() {
            this.hotRef.loadData(this.databaseData);
            this.hotRef.loadData(this.databaseData);
        }
    }
};
</script>
<style lang="scss"></style>
