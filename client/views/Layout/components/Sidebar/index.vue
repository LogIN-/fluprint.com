<template>
    <div style="z-index: 100;">
        <nav id="sidebar" class="animated bounceInLeft">
            <div class="sidebar-header">
                <h3 style="padding: 0;margin: 0;text-align: center;">
                    <router-link to="about" style="font-size: 40px;line-height: 40px;">FluPrint</router-link>
                    <span style="font-size: 10px;clear: both;line-height: 10px;float: left;text-align: center;width: 100%;">(official project website)</span>
                </h3>
            </div>

            <ul class="list-unstyled components">
                <li>
                    <router-link to="about">About project</router-link>
                    <router-link to="exploratory?page=edge">SIMON manuscript</router-link>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">FluPrint Database</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <router-link to="database">Overview</router-link>
                        </li>
                        <li>
                            <router-link to="database-access">On-line access</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link to="about-me">about me</router-link>
                </li>
            </ul>

            <ul class="list-unstyled components">
                <p>resources:</p>
                <li>
                    <a title="Powerful, flexible, open-source and easy to use knowledge discovery application" href="https://genular.org" class="article" target="_blank"
                        >@SIMON - knowledge discovery platform</a
                    >
                </li>
                <li>
                    <a title="open source fluprint database" href="https://github.com/LogIN-/fluprint" class="article" target="_blank">@fluprint - source</a>
                </li>
                <li>
                    <a title="calculate intersections with ease" href="https://github.com/LogIN-/mulset" class="article" target="_blank">@mulset - sparsity intersections</a>
                </li>
                <li>
                    <a title="send me an email" href="#" @click.prevent="contactForm = true">contact me</a>
                </li>
                <li>
                    <a title="follow me on twitter" href="https://twitter.com/TomicAdriana" target="_blank">@TomicAdriana</a>
                </li>
            </ul>
            <br />
            <a title="knowledge discovery platfom" href="https://genular.org" class="article" target="_blank">
                <div class="bottom-nav" title="SIMON Says..."></div>
            </a>
            <div style="clear: both; position: relative; margin-top: 25px;width: 100%;text-align: center;">
                <a href="https://www.iubenda.com/privacy-policy/86726075" class="iubenda-white iubenda-embed" title="Privacy Policy ">Privacy Policy</a>
            </div>
            <div style="clear: both; position: relative; margin-top: 0;width: 100%;text-align: center;">
                <a style="color: #FFFFFF;" href="https://github.com/LogIN-/fluprint.com" target="_blank">website source code</a>
            </div>
        </nav>
        <div class="main-contact panel panel-default animated bounceIn" v-if="contactForm === true">
            <div style="float: left;">Please contact me using form below:</div>
            <div style="float: right; cursor: pointer;" v-on:click="contactForm = false">close</div>
            <div tabindex="-1" id="contactform" ref="contactform">
                <iframe src="//mautic.genular.org/form/3" width="400" height="500"><p>Your browser does not support iframes.</p></iframe>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SideBar",
    data() {
        return {
            contactForm: false
        };
    },
    created() {},
    mounted() {
        console.log(this.$refs);
    }
};
</script>
<style rel="stylesheet/scss" lang="scss">
#sidebar {
    ul {
        li {
            a {
                &.router-link-active,
                &.router-link-exact-active {
                    background-color: #ffffff;
                    color: #6d7fcc;
                }
            }
        }
    }
}

.mauticform-label {
    color: #fff !important;
    font-size: 16px !important;
}

.main-contact {
    position: fixed;
    left: 50%;
    top: 50%;
    background-color: #7386d5;
    opacity: 1;
    padding: 50px;
    width: 500px;
    color: white;
    display: block;
    z-index: 999;
    height: 600px;
    margin-top: -300px;
    margin-left: -250px;

    p {
        color: #ffffff;
    }
    iframe {
        border: 0 none;
        margin-top: 15px;
    }
}
.bottom-nav {
    position: relative;
    background-image: url(/logo.png);
    background-repeat: no-repeat;
    background-size: contain;
    width: 100px;
    height: 100px;
    display: block;
    margin-left: 75px;
}
</style>
