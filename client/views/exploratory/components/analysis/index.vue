<template>
    <div>
          <div id="chartContainer"></div>
    </div>
</template>
<script>
import * as CanvasJS from "@/vendor/canvasjs.min.js";
export default {
    name: "analysis",
    data() {
        return {
            dataFeatures: null,
            dataSubjects: null,
            dataAUC: null,
            chart: null
        };
    },
    computed: {},
    created() {},
    mounted() {
        if (this.dataFeatures === null) {
            fetch("/features.json", {
                headers: new Headers({
                    Authorization: "Basic " + btoa("fluprint:simon")
                })
            })
                .then(r => r.json())
                .then(jsonData => {
                    this.dataFeatures = jsonData;
                });
        }
        if (this.dataSubjects === null) {
            fetch("/subjects.json", {
                headers: new Headers({
                    Authorization: "Basic " + btoa("fluprint:simon")
                })
            })
                .then(r => r.json())
                .then(jsonData => {
                    this.dataSubjects = jsonData;
                });
        }
        if (this.dataAUC === null) {
            fetch("/auc.json", {
                headers: new Headers({
                    Authorization: "Basic " + btoa("fluprint:simon")
                })
            })
                .then(r => r.json())
                .then(jsonData => {
                    this.dataAUC = jsonData;
                });
        }
    },
    watch: {
        dataFeatures(value) {
            if (this.dataFeatures !== null && this.dataSubjects !== null && this.dataAUC !== null) {
                if (this.chart === null) {
                    this.initChart();
                }
            }
        },
        dataSubjects(value) {
            if (this.dataFeatures !== null && this.dataSubjects !== null && this.dataAUC !== null) {
                if (this.chart === null) {
                    this.initChart();
                }
            }
        },
        dataAUC(value) {
            if (this.dataFeatures !== null && this.dataSubjects !== null && this.dataAUC !== null) {
                if (this.chart === null) {
                    this.initChart();
                }
            }
        }
    },
    methods: {
        initChart() {
            this.chart = new CanvasJS.Chart("chartContainer", {
                exportEnabled: true,
                animationEnabled: true,
                theme: "light2", // "light1", "light2", "dark1", "dark2"
                title: {
                    text: "Multi-set intersection generated datasets",
                    fontFamily: "Arial",
                    fontColor: "black"
                },
                axisX: {
                    title: "Sets",
                    titleFontFamily: "Arial",
                    labelFontFamily: "Arial",
                    titleFontColor: "black",
                    labelFontColor: "black",
                    crosshair: {
                        enabled: true,
                        snapToDataPoint: true
                    }
                },
                axisY: {
                    title: "Features",
                    titleFontFamily: "Arial",
                    labelFontFamily: "Arial",
                    titleFontColor: "#ce0000ff",
                    labelFontColor: "#ce0000ff",
                    prefix: ""
                },
                axisY2: {
                    title: "Subjects",
                    titleFontFamily: "Arial",
                    labelFontFamily: "Arial",
                    titleFontColor: "#a0a0a4ff",
                    labelFontColor: "#a0a0a4ff",
                    prefix: ""
                },
                toolTip: {
                    shared: true
                },
                legend: {
                    cursor: "pointer",
                    fontFamily: "Arial",
                    itemmouseover: function(e) {
                        e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness * 2;
                        e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize + 2;
                        e.chart.render();
                    },
                    itemmouseout: function(e) {
                        e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness / 2;
                        e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize - 2;
                        e.chart.render();
                    },
                    itemclick: function(e) {
                        if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
                            e.dataSeries.visible = false;
                        } else {
                            e.dataSeries.visible = true;
                        }
                        e.chart.render();
                    }
                },
                data: [
                    {
                        type: "column",
                        name: "Subjects",
                        color: "#a0a0a4ff",
                        showInLegend: true,
                        axisYType: "secondary",
                        dataPoints: this.dataSubjects
                    },
                    {
                        type: "line",
                        name: "AUC (max)",
                        connectNullData: false,
                        showInLegend: true,
                        lineColor: "#000000",
                        color: "#000000",
                        markerBorderThickness: 3,
                        dataPoints: this.dataAUC
                    },
                    {
                        type: "area",
                        name: "Features",
                        color: "#ce0000ff",
                        connectNullData: true,
                        //nullDataLineDashType: "solid",
                        markerBorderColor: "white",
                        markerBorderThickness: 2,
                        showInLegend: true,
                        dataPoints: this.dataFeatures
                    }
                ]
            });

            this.chart.render();
        }
    }
};
</script>
