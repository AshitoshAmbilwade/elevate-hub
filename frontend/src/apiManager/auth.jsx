import AxiosInstances from ".";
const signin=(data)=>{
    return AxiosInstances.post("/api/auth/signin",data)

}

const signup=(data)=>{
    return AxiosInstances.post("/api/auth/signup",data)
}

export default {signin,signup}