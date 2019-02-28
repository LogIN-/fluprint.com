<template>
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3 style="padding: 0;margin: 0;text-align: center;">
                <router-link to="about" style="font-size: 40px;line-height: 40px;">fluprint</router-link>
            </h3>
        </div>

        <ul class="list-unstyled components">
            <li class="active">
                <router-link to="about">About</router-link>
                <router-link to="database">Database</router-link>
                <router-link to="exploratory?page=edge">SIMON exploratory</router-link>
            </li>
            <!--
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                -->
        </ul>

        <ul class="list-unstyled components">
            <p>other:</p>
            <li>
                <a title="Powerful, flexible, open-source and easy to use knowledge discovery application" href="https://github.com/genular/simon-frontend" class="article" target="_blank">@SIMON</a>
            </li>
            <li>
                <a title="open source fluprint database" href="https://github.com/LogIN-/fluprint" class="article" target="_blank">@fluprint</a>
            </li>
            <li>
                <a title="calculate intersections with ease" href="https://github.com/LogIN-/mulset" class="article" target="_blank">@mulset</a>
            </li>
            <li>
                <a style="text-align: center;" title="star us on github" href="https://github.com/LogIN-/fluprint.com" class="article" target="_blank">
                    <img alt="GitHub forks" src="https://img.shields.io/github/forks/LogIN-/fluprint.com.svg?style=social">
                </a>
            </li>
        </ul>

        <a title="follow me on twitter" href="https://twitter.com/TomicAdriana" class="article" target="_blank">
            <div class="bottom-nav" title="SIMON Says..."></div>
        </a>
    </nav>
</template>
<script>
export default {
    name: "SideBar",
    data() {
        return {};
    },
    mounted() {}
};
</script>
<style rel="stylesheet/scss" lang="scss">
.bottom-nav {
    position: fixed;
    bottom: 5px;
    background-image: url(/logo.png);
    background-repeat: no-repeat;
    background-size: contain;
    width: 100px;
    height: 100px;
    display: block;
    margin-left: 75px;
}
</style>
