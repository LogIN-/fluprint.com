<template>
    <section>
        <transition name="router-fade" mode="out-in">
            <keep-alive v-if="$route.meta.keepAlive">
                <router-view class="animated bounceInRight" :key="$route.name + ($route.params.id || null)"></router-view>
            </keep-alive>
            <router-view class="animated bounceInLeft" v-else :key="$route.name + ($route.params.id || null)"></router-view>
        </transition>
    </section>
</template>
<script>
export default {
    name: "MainContainer",
    data() {
        return {};
    },
    mounted() {
        if (this.$route.path === "/") {
            this.$router.push("/about");
        }
    }
};
</script>
<style rel="stylesheet/scss" lang="scss">
</style>
