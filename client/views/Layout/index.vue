<template>
    <div class="wrapper">
        <vue-particles
            style="position: fixed;left: 0;right: 0;top: 0;bottom: 0;width: 100%;height: 100%; z-index:0;"
            color="#dedede"
            :particleOpacity="0.85"
            :particlesNumber="80"
            shapeType="triangle"
            :particleSize="4"
            linesColor="#7386D5"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="1"
            :hoverEffect="false"
            hoverMode="grab"
            :clickEffect="false"
            clickMode="push"
        >
        </vue-particles>
        <sidebar></sidebar>
        <div id="content">
            <top-navigation></top-navigation>
            <main-container></main-container>
        </div>
    </div>
</template>
<script>
import { MainContainer, Sidebar, TopNavigation } from "./components";

export default {
    name: "Layout",
    components: {
        MainContainer,
        Sidebar,
        TopNavigation
    },
    mounted() {
        console.log("Layout mounted");
    }
};
</script>
<style lang="scss">
/* Import Bootstrap Vue Styles */

@import "~bootstrap/scss/bootstrap";

@import "~handsontable/dist/handsontable.full.css";

// Import Main styles for this application
@import "@/styles/main.scss";
</style>
