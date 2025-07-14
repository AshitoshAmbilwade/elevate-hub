import { TOKEN } from "../const";

const setToken =()=>{
    return sessionStorage.setItem(TOKEN)
}

const getToken =()=>{
    return sessionStorage.getItem(TOKEN);
};

const removeToken =()=>sessionStorage.removeItem(TOKEN);


export {setToken, getToken, removeToken}