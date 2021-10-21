import React from "react";
import "./DashboardWebinars.css";
import SearchFilter from "../../../components/searchFilter/SearchFilter";
import one from "../../../assets/images/Bg-03.png";
import two from "../../../assets/images/Bg-03 (1).png";
import three from "../../../assets/images/Bg-03 (2).png";
import four from "../../../assets/images/Bg-03 (3).png";
import five from "../../../assets/images/Bg-03 (4).png";
import six from "../../../assets/images/Bg-03 (5).png";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const DashboardWebinars = () => {
  return (
    <div className='dashboard_webinars_wrapper'>
      <h1>Webinars</h1>

      <div className='search_filter_wrapper'>
        <SearchFilter />
      </div>

      <div className='webinar_contents'>
        <Link to='/dashboard/webinar/1'>
          <div className='single_box'>
            <img src={one} alt='' />
            <div className='single_box_contents'>
              <h3>
                Supercharging Your Document Management with Formpipe.cloud
              </h3>
              <div className='single_box_view'>
                <p>Dene Palmer</p>
                <span>
                  <BiDotsVerticalRounded />
                </span>
              </div>
            </div>
          </div>
        </Link>
        <div className='single_box'>
          <img src={two} alt='' />
          <div className='single_box_contents'>
            <h3>Advance Your Business TedXTalk Show</h3>
            <div className='single_box_view'>
              <p>Gary Maystead</p>
              <span>
                <BiDotsVerticalRounded />
              </span>
            </div>
          </div>
        </div>
        <div className='single_box'>
          <img src={three} alt='' />
          <div className='single_box_contents'>
            <h3>Understanding and Managing Multi-Cloud Connectivity</h3>
            <div className='single_box_view'>
              <p>Jay Turner, Neil Templeton</p>
              <span>
                <BiDotsVerticalRounded />
              </span>
            </div>
          </div>
        </div>
        <div className='single_box'>
          <img src={four} alt='' />
          <div className='single_box_contents'>
            <h3>Don’t Let Machine Learning Become A Scam</h3>
            <div className='single_box_view'>
              <p>Dene Palmer</p>
              <span>
                <BiDotsVerticalRounded />
              </span>
            </div>
          </div>
        </div>
        <div className='single_box'>
          <img src={five} alt='' />
          <div className='single_box_contents'>
            <h3>
              Navigating Cloud Adoption In A Post-Pandemic Era - Disruptive C...
            </h3>
            <div className='single_box_view'>
              <p>Dene Palmer</p>
              <span>
                <BiDotsVerticalRounded />
              </span>
            </div>
          </div>
        </div>
        <div className='single_box'>
          <img src={six} alt='' />
          <div className='single_box_contents'>
            <h3>Catalyst for Cloud Migration: VMare Cloud Web Security</h3>
            <div className='single_box_view'>
              <p>Dene Palmer</p>
              <span>
                <BiDotsVerticalRounded />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWebinars;
