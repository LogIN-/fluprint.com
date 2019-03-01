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
                                The FluPRINT is the name of a unified database for a large-scale study exploring novel cellular and molecular underpinnings of successful immunity
                                to influenza vaccines. It contains information on more than 3,000 parameters measured using mass cytometry, flow cytometry, phosphorylation-specific
                                cytometry (phospho-flow), multiplex ELISA, clinical lab tests (hormones and complete blood count), serological profiling with hemagglutination
                                inhibition assay, and virological tests. The dataset represents fully integrated and normalized immunology measurements from 747 individuals from
                                eight clinical studies conducted between 2007 to 2015 at the Human Immune Monitoring Center of Stanford University. The dataset represents a unique
                                source in terms of value and scale, which will broaden our understanding of influenza immunity.
                            </div>
                            <br /><br />
                            <div>
                                To download the entire FluPRINT database, please check out:
                                <br />
                                <a href="https://github.com/LogIN-/fluprint">
                                    <img src="https://img.shields.io/github/forks/LogIN-/fluprint.svg?style=social" alt="@fluprint at github" />
                                </a>
                                <a href="https://doi.org/10.5281/zenodo.2546017">
                                    <img src="https://zenodo.org/badge/DOI/10.5281/zenodo.2546017.svg" alt="@fluprint at zenodo" />
                                </a>
                            </div>
                            <br /><br />
                            <div>
                                <code>
                                    Cite as:<br />
                                    <pre>
@article {Tomic564062,
    author = {Tomic, Adriana and Tomic, Ivan and Dekker, Cornelia L and Maecker, Holden T and Davis, Mark M},
    title = {The FluPRINT dataset: A multidimensional analysis of the influenza vaccine imprint on the immune system},
    elocation-id = {564062},
    year = {2019},
    doi = {10.1101/564062},
    publisher = {Cold Spring Harbor Laboratory},
    abstract = {Recent advances in machine learning have allowed identification of molecular and cellular factors that underly successful antibody responses to influenza vaccines. Results of these studies have revealed the high level of complexity necessary to establish influenza immunity, and many different cellular and molecular components involved. However, identified correlates of protection fail to account for the majority of vaccinated cases across ages, cohorts, and influenza seasons. Major challenges arise from small sample sizes and from analysis of only one aspect of the biology such by using transcriptome data. The objective of the current study is to create a unified database, entitled FluPRINT, to enable a large-scale study exploring novel cellular and molecular underpinnings of successful immunity to influenza vaccines. Over 3,000 parameters were considered, including serological responses to influenza strains, serum cytokines, cell subset phenotypes, and cytokine stimulations. FluPRINT, thus facilitates application of machine learning algorithms for data mining. The data are publicly available and represent a resource to uncover new markers and mechanisms that drive successful influenza vaccination.},
    URL = {https://www.biorxiv.org/content/early/2019/02/28/564062},
    eprint = {https://www.biorxiv.org/content/early/2019/02/28/564062.full.pdf},
    journal = {bioRxiv}
}
                                    </pre>
                                </code>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="sponsors">
                    This work is supported by the EU’s Horizon 2020 research and innovation program under the Marie Sklodowska-Curie<br />
                    Grant (FluPRINT, Project No 796636)<br />
                    <img class="img-fluid" src="ec-logo-horiz-web_en.jpg" />
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
