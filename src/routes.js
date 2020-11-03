import LandingPage from './containers/LandingPage'
import Login from './containers/Login'
import Register from './containers/Register'
import HistoryPemesanan from './containers/HistoryPemesanan'

export const APP_ROUTE = [
    {
        name: "Home",
        path: "/",
        exact: true,
        component: LandingPage,
        restricted: false,
    },
    {
        name: "Login",
        path: "/",
        exact: true,
        component: Login,
        restricted: true,
    },
    {
        name: "Register",
        path: "/",
        exact: true,
        component: Register,
        restricted: true,
    },
    {
        name: "History Pemesanan",
        path: "/",
        exact: true,
        component: HistoryPemesanan,
        restricted: true,
    },
];