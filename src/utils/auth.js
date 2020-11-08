import Cookies from "js-cookie";

export const login = (user) => {
    Cookies.set("USER", user);
};

export const logout = () => {
    Cookies.remove("USER");
}

export const isLogin = () => {
    if (Cookies.get("USER")) {
        return true;
    }
    return false;
};