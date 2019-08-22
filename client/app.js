/*
 * @Author: LogIN-
 * @Date:   2018-06-21 16:17:37
 * @Last Modified by:   LogIN-
 * @Last Modified time: 2019-08-22 12:27:09
 */

import Vue from "vue";
import { sync } from "vuex-router-sync";
import App from "./components/App";
import router from "./router";
import store from "./store";

import VueParticles from "vue-particles";

sync(store, router);

router.beforeEach((to, from, next) => {
	if (typeof gtag !== "undefined" && typeof gtag === "function") {
		if (typeof to.fullPath !== "undefined") {
			gtag("config", "UA-120200408-2", { page_title: to.name, page_path: to.fullPath });
		}
	}
	next();
});
Vue.use(VueParticles);

const app = new Vue({
	router,
	store,
	...App
});

export { app, router, store };
