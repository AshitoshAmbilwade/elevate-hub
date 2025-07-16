import mentorService from '../services/mentor.service.js';
import httpStatus from '../util/httpStatus.js'
import ApiError from '../helper/apiError.js'

const getAllMentors = async (req,res, next)=>{
    const mentors = await mentorService.getAllMentors();
    res.status(httpStatus.ok).json({
        success:true,
        mentors
    })
};

const getMentorInfoByUsername=async(req,res,next)=>{
    const {username}=req.params;
    const mentor=await mentorService.getMentorByUsername(username);
    if(!mentor){
        return next(new ApiError(httpStatus.notFound,"Mentor not found"));
    }
    res.status(httpStatus.ok).json({
        success:true,
        mentor
    })

}

export default{
    getAllMentors,
    getMentorInfoByUsername
}





