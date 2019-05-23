<template>
    <div class="container-fluid">
        <div class="boxes">
            <div class="title">FluPRINT</div>
            <div class="intro">
                A research project that investigates influenza vaccines imprint on immune system funded by the European Commission as a part of the Marie Sklodowska-Curie Research
                Program.
            </div>

            <section>
                <div class="heading">The problem</div>
                <div class="row block">
                    <div class="col-sm-4">
                        <img class="img-fluid" src="about/section_1.png" />
                    </div>
                    <div class="col-sm-8 description">
                        Influenza virus has a devastating societal impact, causing up to 650,000 deaths every year worldwide. Specifically, vulnerable are children and elderly. It
                        is estimated that 1 in 1000 children and elderly every year are hospitalized due to influenza infection. Vaccination can prevent influenza-like illnesses,
                        and thus lower the risk of the virus outbreak. However, currently available vaccines do not always provide protection, even among otherwise-healthy people,
                        leading to serious pandemics. Development of better vaccines depends on our understanding why current vaccines work in some individuals, while fail in
                        others.
                    </div>
                </div>
            </section>

            <section>
                <div class="heading">The idea</div>
                <div class="row block">
                    <div class="col-sm-4">
                        <img class="img-fluid" src="about/section_2.png" />
                    </div>
                    <div class="col-sm-8 description">
                        Recent advances in the computational biology and the development of novel machine learning algorithms make it possible to extract knowledge and identify
                        patterns in an unbiased manner from large clinical datasets. Application of machine learning algorithms to clinical datasets can reveal immune cell
                        populations and genes that mediate stronger antibody responses to influenza vaccines. Specifically, it is of the utmost importance to include single-cell
                        analysis at the protein level, such as mass cytometry combined with multiple high-dimensional biological measurements, since these have power to reveal
                        heterogeneity of the immune system and capture interindividual variability.
                    </div>
                </div>
            </section>

            <section>
                <div class="heading">The tool</div>
                <div class="row block">
                    <div class="col-sm-4">
                        <img class="img-fluid" src="about/section_3.png" />
                    </div>
                    <div class="col-sm-8 description">
                        To identify cellular biomarkers that can predict antibody responses to inactivated influenza vaccine, we developed a tool to automate machine learning
                        process - SIMON - Sequential Iterative Modelling “OverNight”. SIMON is a fully automated binary classifier that utilizes 128 different machine learning
                        algorithms to select relevant and informative features. Such an iterative approach facilitated data reduction and improved overall performance, ultimately
                        increasing the predictive accuracy. Preprint available
                        <a
                            title="SIMON, an automated machine learning system reveals immune signatures of influenza vaccine responses"
                            href="https://www.biorxiv.org/content/10.1101/545186v1"
                            class="article"
                            target="_blank"
                            >@BioRxiv</a
                        >.
                    </div>
                </div>
            </section>

            <div class="sponsors">
                This work is supported by the EU’s Horizon 2020 research and innovation program under the Marie Sklodowska-Curie<br />
                Grant (FluPRINT, Project No 796636) and National Institutes of Health (NIH) grants (U19 AI090019, U19 AI057229) <br />
                <img style="max-height: 50px;" class="img-fluid" src="sponsors/ec-logo-horiz-web_en.jpg" />
                <img style="max-height: 50px; margin-left: 10px; " class="img-fluid" src="sponsors/nih-logo-color.png" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "about",
    data() {
        return {};
    },
    mounted() {},
    methods: {}
};
</script>
<style lang="scss"></style>
