<template>
    <div class="wrapper">
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
// Import Main styles for this application
@import "@/styles/main.scss";
</style>
