import Vue from "vue";
import Router from "vue-router";
// Views loader
import _import from "./_import.js";

/* Layout */
import Layout from "@/views/Layout";

import About from "@/views/about";
import Database from "@/views/database";
import Exploratory from "@/views/exploratory";

Vue.use(Router);

const router = new Router({
    scrollBehavior: () => ({ y: 0 }),
    mode: "hash",
    routes: [
        {
            path: "/",
            component: Layout,
            children: [
                {
                    path: "about",
                    component: About,
                    name: "about",
                    meta: {
                        title: "about",
                        icon: "fa fa-icon fa-tachometer",
                        noCache: true
                    }
                },
                {
                    path: "database",
                    component: Database,
                    name: "database",
                    meta: {
                        title: "database",
                        icon: "fa fa-icon fa-tachometer",
                        noCache: true
                    }
                },
                {
                    path: "exploratory",
                    component: Exploratory,
                    props: route => ({ page: route.query.page || "edge" }),
                    name: "exploratory",
                    meta: {
                        title: "exploratory",
                        icon: "fa fa-icon fa-tachometer",
                        noCache: true
                    }
                }
            ]
        }
    ]
});
export default router;
