import React from "react";
import "./CoursesDetails.scss";
import img from "../../../../assets/images/aws-2 2.png";
import { Link } from "react-router-dom";
import CoursedetailsTabs from "../coursedetailsTabs/CoursedetailsTabs";

const CoursesDetails = () => {
  return (
    <div className='course_details_wrapper'>
      <div className='course_details_redirect'>
        <div className='course_details_go_back'>
          <Link to='/dashboard/courses'>
            <p>Back to Courses</p>
          </Link>
        </div>
        <div className='course_details_sub_title'>
          <span className='special_text'>Roles > </span>{" "}
          <span> Administrator</span>
        </div>
      </div>
      <div className='course_details__header'>
        <img src={img} alt='img' />
        <h1>Amazon Web Services</h1>
      </div>
      <div className='course_details_info_wrapper'>
        <div className='course_details_text'>
          <p>
            Amazon Web Services (AWS) is the world’s most comprehensive and
            broadly adopted cloud platform, offering over 200 fully featured
            services from data centers globally. Millions of customers—including
            the fastest-growing startups, largest enterprises, and leading
            government agencies—are using AWS to lower costs, become more agile,
            and innovate faster.
          </p>
        </div>
        <div className='course_details_cta'>
          <div className='cta__add'>Add New</div>
          <div className='cta__delete'>Delete</div>
        </div>
      </div>

      <div className="course_details_tabs">
          <CoursedetailsTabs />
      </div>
    </div>
  );
};

export default CoursesDetails;
