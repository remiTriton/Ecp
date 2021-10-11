import { createRouter, createWebHistory } from "vue-router";


const routes = [{
  path: '/',
  name: 'Homepage',
  component: () => import('./components/HomePage.vue'),
}, {
  path: "/print",
  name: "Print",
  component: () => import('./components/Print.vue'),
},
{
  path:'/new-post',
  name:'NewPost',
  component: () => import('./components/AddPost.vue'),
},
{
  path:'/profile',
  name:'profile',
  component: () => import('./components/Profile.vue'),
},
{
  path: "/admin/ads",
  name: "AdminAds",
  component: () => import('./views/AdminAds.vue'),
}, {
  path: "/admin/coms",
  name: "AdminComs",
  component: () => import('./views/AdminComs.vue'),
}, {
  path: "/admin/users",
  name: "AdminUser",
  component: () => import('./views/AdminUser.vue'),
},
{
  path: "/print/:id",
  name: "UnicVue",
  component: () => import('./views/UnicAd.vue'),
},
{
  path: "/editpost/:id",
  name: "Editpost",
  component: () => import('./views/EditPost.vue'),
},
{
  path: "/edituser/:id",
  name: "Edituser",
  component: () => import('./views/EditUser.vue'),
},
{
  path:"/login",
  name:"loginForm",
  component : () => import('./views/LoginForm.vue'),
},
{
  path:"/register",
  name:"registerForm",
  component : () => import('./views/RegisterForm.vue'),
},
{ path: '/:catchAll(.*)', 
name:'NotFound',
component : () => import('./components/admin/WrongRole.vue'),
},  
{
  path:'/edit-profile',
  name:'editporifle',
  component: () => import('./components/UpdateProfile.vue'),
},
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
