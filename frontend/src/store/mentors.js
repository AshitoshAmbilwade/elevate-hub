import {create} from 'zustand';
import {devtools} from 'zustand/middleware';


const useMentorStore = create()(
    /* devtools is a middleware which enables our integration */
    devtools((set)=>({
        mentorsData:[],
        setMentorsData: (mentors)=> set(()=>({mentorsData:mentors}))
    }))
)

export default useMentorStore;