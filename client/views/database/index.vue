<template>
    <div class="container-fluid">
        <div class="container-fluid">
            <div class="boxes">
                <div class="title">FluPRINT</div>
                <div class="intro">
                    A research project that investigates influenza vaccines imprint on immune system funded by the European Commission as a part of the Marie Sklodowska-Curie
                    Research Program.
                </div>

                <section>
                    <div class="heading">The FluPRINT database</div>
                    <div class="row block">
                        <div class="col-sm-4">
                            <img class="img-fluid" src="database/section_1.png" />
                        </div>
                        <div class="col-sm-8 description">
                            <div>
                                The FluPRINT is the name of a unified database for a large-scale study exploring novel cellular and molecular underpinnings of successful immunity to influenza vaccines. It contains information on more than 3,000 parameters measured using mass cytometry, flow cytometry, phosphorylation-specific cytometry (phospho-flow), multiplex ELISA, clinical lab tests (hormones and complete blood count), serological profiling with hemagglutination inhibition assay, and virological tests. The dataset represents fully integrated and normalized immunology measurements from 747 individuals from eight clinical studies conducted between 2007 to 2015 at the Human Immune Monitoring Center of Stanford University. The dataset represents a unique source in terms of value and scale, which will broaden our understanding of influenza immunity.
                            </div>
                            <br /><br />
                            <div>
                                To download the entire FluPRINT database, please check out:
                                <br />
                                <a href="https://github.com/LogIN-/fluprint">
                                    <img src="https://img.shields.io/github/forks/LogIN-/fluprint.svg?style=social" alt="@fluprint at github">
                                </a>
                                <a href="https://doi.org/10.5281/zenodo.2546017">
                                    <img src="https://zenodo.org/badge/DOI/10.5281/zenodo.2546017.svg" alt="@fluprint at zenodo">
                                </a>
                            </div>
                            <br /><br />
                            <div>
                                <code>
                                    Cite as:<br />
                                    Tomic, Adriana, & Tomic, Ivan. (2019, January 21).<br />
                                    The FluPRINT database. Zenodo. http://doi.org/10.5281/zenodo.2546017
                                </code>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="sponsors">
                    This work is supported by the EU’s Horizon 2020 research and innovation program under the Marie Sklodowska-Curie<br />
                    Grant (FluPRINT, Project No 796636)<br />
                    <img class="img-fluid" src="ec-logo-horiz-web_en.jpg">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "database",
    data() {
        return {};
    },
    mounted() {},
    methods: {}
};
</script>
<style lang="scss"></style>
