/* mentor api folder */
import AxiosInstances from ".";

const getAllMentors=()=>{
    return AxiosInstances.get("api/mentor")

}

const getMentorByUsername=(username)=>{
    return AxiosInstances.get("api/mentor"+username)
}

//now make a const
const mentorApi ={
    getAllMentors,
    getMentorByUsername
}

export default mentorApi;

