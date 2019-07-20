import Vue from "vue";
import Router from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectDetailView from "../views/ProjectDetailView.vue";
import UserDetailView from "../views/UserDetailView.vue";
import MyPageView from "../views/MyPageView.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "home"
    },
    {
      path: "/home",
      name: "home",
      component: HomeView
    },
    {
      path: "/projects/:id",
      name: "projectDetail",
      component: ProjectDetailView
    },
    {
      path: "/users/:id",
      name: "userDetail",
      component: UserDetailView
    },
    {
      path: "/my",
      name: "myPage",
      component: MyPageView
    }
  ]
});
