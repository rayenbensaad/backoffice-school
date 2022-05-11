import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
// import Icons from "views/examples/Icons.js";
import CreateCP from "views/examples/CreateCP";
import ListCP from "views/examples/ListCP";
import CreateArchive from "views/examples/CreateArchive";
import ListArchive from "views/examples/ListArchive";
import UpdateArchive from "views/examples/UpdateArchive";

var routes = [
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin",
  // },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/create-cadre-pedagogique",
    name: "Create Cadre Pedagogique",
    icon: "ni ni-fat-add",
    component: CreateCP,
    layout: "/admin",
  },
  {
    path: "/create-archive",
    name: "Create Archive",
    icon: "ni ni-fat-add",
    component: CreateArchive,
    layout: "/admin",
  },
  {
    path: "/list-cadre-pedagogiquep",
    name: "List Cadre Pedagogique",
    icon: "ni ni-bullet-list-67 text-red",
    component: ListCP,
    layout: "/admin",
  },
  {
    path: "/list-archive",
    name: "List Archive",
    icon: "ni ni-bullet-list-67 text-red",
    component: ListArchive,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/update-archive",
    component: UpdateArchive,
    layout: "/admin",
  },
];
export default routes;
