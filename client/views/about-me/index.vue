<template>
    <div class="container-fluid">
        <div class="boxes">
            <div class="title">Greetings stranger!</div>
            <div class="intro" style="max-width: 700px">
                I wish you warm welcome to my website! Let me try to give you short insight about myself and what am I trying to do here.
                If you find my work interesting and helpful I would be glad to hear from you!
            </div>

            <section>
                <div class="heading">Who am I?</div>
                <div class="row block">
                    <div class="col-sm-4">
                        <img class="img-fluid border-rad" src="about-me/section_1.png">
                    </div>
                    <div class="col-sm-8 description">
                        Hello, I am Adriana Tomic, system immunologist or simply put researcher trying to use computer algorithms to embrace the complexity of immune system. My journey into systems immunology started in 2017 after joining the <a style="color: #7386D5;" href="https://iti.stanford.edu/" target="_blank">Institute for Immunology, Transplantation and Infection </a>led by <a style="color: #7386D5;" href="https://en.wikipedia.org/wiki/Mark_M._Davis" target="_blank">Dr. Mark M. Davis</a> at Stanford University. However, the journey actually started even before, during my PhD studies at Hannover Medical School in Germany under supervision of prof. Martin Messerle. I believe the step toward systems approach was inevitable. 
                    </div>
                </div>
            </section>

            <section>
                <div class="heading">How do you become systems immunologists?</div>
                <div class="row block">
                    <div class="col-sm-4">
                        <img class="img-fluid border-rad" src="about-me/section_2.png">
                    </div>
                    <div class="col-sm-8 description">
                        Ever since I started doing science, my field of interest was to understand basic immunological phenomena such as immune response class switch with special interest in improper immune class responses leading to cancer, autoimmunity or chronic infections. During my undergraduate work I got acquainted with cytomegalovirus. I learned that viruses are incredible tools which can help us to understand how immune system works. Viruses co-evolved with the immune system. Soon I realized that better understanding of the immune system doesn't depend solely on dissecting receptors find on immune cells and especially that translation from mouse to human is not so straightforward and sometimes even not possible. 

                        So last 2.5 years of my PhD were devoted to focus only on human immune system. Researching the human immune system only confined to in vitro experiments or using humanized mice or organoid cultures, cannot give us full understanding of the immune complexity. The nature cannot be understood through manipulations screened only at the individual cell level. This is the point when I embraced idea about systems immunology. 

                        My long-term interest is to understand how interactions between immune cells can give rise to complex coordinated actions, such as immune responses to establish immunity to viruses, bacteria, tumors, or immune responses mediating autoimmunity or allergies.
                    </div>
                </div>
            </section>

            <section>
                <div class="heading">Current research</div>
                <div class="row block">
                    <div class="col-sm-4">
                        <img class="img-fluid border-rad" src="about-me/section_3.png">
                    </div>
                    <div class="col-sm-8 description">
                        My current interest is to develop computational methods for pattern recognition and knowledge extraction using machine learning. Application of machine learning to biological data has power to reveal underlying complexity. Coming from immunology field, I know that application of machine learning and other computational tools can be very hard for many biologists. Therefore, there is a need today to come closer with computer engineers and statisticians to develop tools which can be used by researchers with domain knowledge that maybe don’t have high computational skills. That is why I am currently collaborating with computer scientist to develop open-source platform for application of machine learning to biology which is based on our SIMON approach. If you are interested how to become the part of this community, please check out: <a style="color: #7386D5;" href="http://genular.org/" target="_blank" title="automated machine learning">genular.org</a>.
                    </div>
                </div>
            </section>
            <div class="sponsors">
                This work is supported by the EU’s Horizon 2020 research and innovation program under the Marie Sklodowska-Curie<br />
                Grant (FluPRINT, Project No 796636) and National Institutes of Health (NIH) grants (U19 AI090019, U19 AI057229) <br />
                <img style="max-height: 50px;" class="img-fluid" src="sponsors/ec-logo-horiz-web_en.jpg">
                <img style="max-height: 50px; margin-left: 10px; "class="img-fluid" src="sponsors/nih-logo-color.png">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "about-me",
    data() {
        return {

        };
    },
    mounted() {

    },
    methods: {

    }
};
</script>
<style lang="scss">
.border-rad {
    border-radius: 5px;
    transition: transform .8s ease-in-out;
}
.border-rad:hover {
    transform: scale(1.5);
    z-index: 100;
}
</style>
