import React from "react";
import { Link } from "react-router-dom";
import "./AddCareers.scss";

const AddDashboardCareers = () => {
  return (
    <div className='add_career_wrapper'>
      <div className='add_career_redirect'>
        <div className='add_career_go_back'>
          <Link to='/dashboard/careers'>
            <p>Back to Webinars</p>
          </Link>
        </div>
        <div className='add_career_sub_title'>
          <span className='special_text'>Carrers > </span> <span> Add New</span>
        </div>
      </div>
      <div className='add_career_header'>
        <h1>Add Career</h1>
      </div>

      <div className='add_career_message_wrapper'>
        <form className='role__form'>
          <div className='add_career_message_form'>
            <div className='add_career_role__form-details'>
              <div className='add_career_role__form-group'>
                <label className='add_career_role__form-label'>Job Title</label>
                <input type='text' className='add_career_role__form-input' />
              </div>
              <div className='special__wrapper__careers'>
                <div className='add_career_role__form-group'>
                  <label className='add_career_role__form-label'>
                    Location
                  </label>
                  <input type='text' className='add_career_role__form-input' />
                </div>
                <div className='add_career_role__form-group '>
                  <label className='add_career_role__form-label'>Type</label>
                  <select className='add_career_role__select'>
                    <option>Select Users</option>
                  </select>
                </div>
              </div>
              <div className='add_career_role__form-group'>
                <label className='add_career_role__form-label'>
                  Description
                </label>
                <textarea
                  rows='8'
                  className='add_career_role__form-input'
                ></textarea>
              </div>
              <div className='add_career_role__form-group'>
                <label className='add_career_role__form-label'>
                  Resposibility
                </label>
                <textarea
                  rows='8'
                  className='add_career_role__form-input'
                ></textarea>
              </div>
              <div className='add_career_role__form-group'>
                <label className='add_career_role__form-label'>
                  Qualification
                </label>
                <textarea
                  rows='8'
                  className='add_career_role__form-input'
                ></textarea>
              </div>
            </div>
          </div>

          <div className='add_career_message_seo_wrapper'>
            <div className='add_career_role__people'>
              <button className='role__button'>PUBLISH</button>
              <div className='add_career_role__selectbox'>
                <h4 className='add_career_role__select--heading'>
                  Seo settings
                </h4>
                <div className='add_career_role__form-group'>
                  <label className='add_career_role__form-label'>
                  SEO Title
                  </label>
                  <input type='text' className='add_career_role__form-input' />
                </div>
                <div className='add_career_role__form-group'>
                  <label className='add_career_role__form-label'>
                    Slug
                  </label>
                  <input type='text' className='add_career_role__form-input' />
                </div>
                <div className='add_career_role__form-group'>
                  <label className='add_career_role__form-label'>
                  Meta Description
                  </label>
                  <textarea
                    rows='8'
                    className='add_career_role__form-input'
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDashboardCareers;
