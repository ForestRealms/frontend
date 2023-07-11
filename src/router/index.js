import Vue from "vue";
import VueRouter from "vue-router";
import ResumeUploader from "../components/Forms/ResumeUploader.vue";
import LoginPage from "@/components/Forms/Login-Page.vue";
import vform_table from "@/components/vform_table.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: LoginPage
    },
    {
        path: "/ResumeUploader",
        name: "ResumeUploader",
        component: ResumeUploader
    },
    {
        path: "/table",
        name: "table",
        component: vform_table
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
