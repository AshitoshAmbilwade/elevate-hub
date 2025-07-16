import React, { useEffect, useState } from "react";
import useMentorStore from "../store/mentors";
import mentorApi from "../apiManager/mentor";
import MentorCard from "./MentorCard";
import { Button, Spin } from "antd";

const TopMentors = () => {
  const [topMentors, setTopMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setMentorsData } = useMentorStore();

  const selectTopMentor = (mentors) => {
    const topselectedMentors = [];
    const totalMentors = mentors.length;

    while (topselectedMentors.length < 4 && topselectedMentors.length < totalMentors) {
      const randomIndex = Math.floor(Math.random() * totalMentors);
      const randomMentor = mentors[randomIndex];
      if (!topselectedMentors.includes(randomMentor)) {
        topselectedMentors.push(randomMentor);
      }
    }
    return topselectedMentors;
  };

  const fetchAllMentors = async () => {
    try {
      const response = await mentorApi.getAllMentors();
      console.log(response);

      const allMentors = response?.data?.mentors || [];
      setMentorsData(allMentors);
      setTopMentors(selectTopMentor(allMentors));
      
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchAllMentors();
  }, []);
  return (
    <>
      <div>
        <h1>Top Mentors</h1>
        <div>
          {topMentors.map((mentor) => {
             return <MentorCard mentor={mentor} key={mentor?._id} />; 
            /* return <p key={mentor._id} >{mentor.name}</p> */

          })}
        </div>
      </div>
    </>
  );
};

export default TopMentors;
