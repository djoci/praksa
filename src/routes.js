import Home from './Home.vue'
import Forgot from './components/Forgot.vue'
import Login from './components/Login.vue'
import NewPass from './components/NewPass.vue'
import Register from './components/Register.vue'
import Thanks from './components/Thanks.vue'
import Users from './components/Users.vue'
import ModalAdduser from './components/ModalAdduser.vue'
import EditUser from './components/EditUser.vue'
import DeleteUser from './components/DeleteUser.vue'

export const routes = [
    {
        path: '',
        name:'Home',
        component:Home
    },
    {
        path: '/Forgot',
        name:'Forgot',
        component:Forgot
    },
    {
        path: '/Login',
        name:'Login',
        component:Login
    },
    {
        path: '/NewPass',
        name:'NewPass',
        component:NewPass
    },
    {
        path: '/Register',
        name:'Register',
        component:Register
    },
    {
        path: '/Thanks',
        name:'Thanks',
        component:Thanks
    },
    {
        path: '/Users',
        name:'Users',
        component:Users, children: [
            {path: '', component: ModalAdduser},
            {path: ':edit', component: EditUser},
            {path: ':delete', component: DeleteUser}
        ],

        beforeEnter(to, from, next) {
            if (localStorage.token) {
              next();
            } else {
              next("/Login");
            }
}
    },

    {path: '*', redirect: '/'}
   

];