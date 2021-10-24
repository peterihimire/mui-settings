import React from "react";
import SearchFilter from "../../../components/searchFilter/SearchFilter";
import one from "../../../assets/images/Group 35.png";
import "./DashboardCourses.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const DashboardCourses = () => {
  return (
    <div className='courses_wrapper'>
      <h1>Courses</h1>

      <div className='search_filter_wrapper'>
        <SearchFilter />
      </div>

      <div className='courses_module'>
        <Link to='/dashboard/course/1'>
          <div className='single_courses'>
            <div className='courses_cta'>
              <input type='checkbox' name='' id='' />
              <span>
                <BiDotsVerticalRounded />
              </span>
            </div>
            <div className='course_content_wrapper'>
              <img src={one} alt='' />
              <h3>Amazon Web Services</h3>
              <p>
                <span>2108 </span>{" "}
                <span className='special_letter'>Videos</span>
              </p>
            </div>
          </div>
        </Link>
        <div className='single_courses'>
          <div className='courses_cta'>
            <input type='checkbox' name='' id='' />
            <span>
              <BiDotsVerticalRounded />
            </span>
          </div>
          <div className='course_content_wrapper'>
            <img src={one} alt='' />
            <h3>Amazon Web Services</h3>
            <p>
              <span>2108 </span> <span className='special_letter'>Videos</span>
            </p>
          </div>
        </div>
        <div className='single_courses'>
          <div className='courses_cta'>
            <input type='checkbox' name='' id='' />
            <span>
              <BiDotsVerticalRounded />
            </span>
          </div>
          <div className='course_content_wrapper'>
            <img src={one} alt='' />
            <h3>Amazon Web Services</h3>
            <p>
              <span>2108 </span> <span className='special_letter'>Videos</span>
            </p>
          </div>
        </div>
        <div className='single_courses'>
          <div className='courses_cta'>
            <input type='checkbox' name='' id='' />
            <span>
              <BiDotsVerticalRounded />
            </span>
          </div>
          <div className='course_content_wrapper'>
            <img src={one} alt='' />
            <h3>Amazon Web Services</h3>
            <p>
              <span>2108 </span> <span className='special_letter'>Videos</span>
            </p>
          </div>
        </div>
        <div className='single_courses'>
          <div className='courses_cta'>
            <input type='checkbox' name='' id='' />
            <span>
              <BiDotsVerticalRounded />
            </span>
          </div>
          <div className='course_content_wrapper'>
            <img src={one} alt='' />
            <h3>Amazon Web Services</h3>
            <p>
              <span>2108 </span> <span className='special_letter'>Videos</span>
            </p>
          </div>
        </div>
        <div className='single_courses'>
          <div className='courses_cta'>
            <input type='checkbox' name='' id='' />
            <span>
              <BiDotsVerticalRounded />
            </span>
          </div>
          <div className='course_content_wrapper'>
            <img src={one} alt='' />
            <h3>Amazon Web Services</h3>
            <p>
              <span>2108 </span> <span className='special_letter'>Videos</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCourses;
