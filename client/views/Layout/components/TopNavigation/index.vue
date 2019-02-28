<template>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" @click="toggleSidebar" class="btn btn-info">
                        <i class="fas fa-align-left"></i>
                        <span>Toggle</span>
                    </button>
                    <!--
                        <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-align-justify"></i>
                        </button>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="this.$router.currentRoute === 'exploratory'">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item active">
                                 <router-link class="nav-link" to="exploratory?page=edge">Edge graph</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="exploratory?page=analysis">Multi-sets intersections</router-link>
                            </li>
                        </ul>
                    </div>
                    -->
                </div>
            </nav>
</template>
<script>
export default {
    name: "TopNavigation",
    data() {
        return {};
    },
    mounted() {

    },
    methods: {
        toggleSidebar() {
            $("#sidebar").toggleClass("active");
        }
    }
};
</script>
<style rel="stylesheet/scss" lang="scss">
</style>
