import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddWebinar.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    background: "#212121",
    color: "rgba(244, 244, 244, 0.8)",
    border: "none",
    marginTop: "12px",

    "& .ql-container": {
      minHeight: "300px",
    },

    "& .ql-container.ql-snow": {
      border: "none",
    },

    "& .ql-toolbar.ql-snow": {
      border: "0.4px solid rgba(107, 107, 107, 0.8)",
      boxSizing: "border-box",
      padding: "8px",
      color: "rgba(244, 244, 244, 0.8)",
    },
  },
});

const AddWebinar = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  console.log("value", value);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <div className='add_career_wrapper'>
      <div className='add_career_redirect'>
        <div className='add_career_go_back'>
          <Link to='/dashboard/webinars'>
            <p>Back to Webinars</p>
          </Link>
        </div>
        <div className='add_career_sub_title'>
          <span className='special_text'>Webinars &gt; </span>{" "}
          <span> Add New</span>
        </div>
      </div>
      <div className='add_career_header'>
        <h1>Add Webinars</h1>
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
                <label className='add_career_role__form-label'>Comments</label>
                <ReactQuill
                  theme='snow'
                  className={classes.root}
                  value={value}
                  onChange={setValue}
                  modules={modules}
                  formats={formats}
                />
              </div>

              <div className='add_career_role__form-group'>
                <label className='add_career_role__form-label'>Comments</label>
                <ReactQuill
                  theme='snow'
                  className={classes.root}
                  value={value}
                  onChange={setValue}
                  modules={modules}
                  formats={formats}
                />
              </div>

              <h4 className='add_career_role__select--heading'>
                Media Settings
              </h4>

              <div className='add_career_role__form-group'>
                <label className='add_career_role__form-label'>
                  Image Settings
                </label>
                <input type='text' className='add_career_role__form-input' />
              </div>
              <div className='add_career_role__form-group'>
                <label className='add_career_role__form-label'>Alt</label>
                <input type='text' className='add_career_role__form-input' />
              </div>

              <div className='add_career_role__form-group'>
                <label className='add_career_role__form-label'>
                  Image Settings
                </label>
                <input type='text' className='add_career_role__form-input' />
              </div>
              <div className='add_career_role__form-group'>
                <label className='add_career_role__form-label'>Alt</label>
                <input type='text' className='add_career_role__form-input' />
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
                  <label className='add_career_role__form-label'>Slug</label>
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

export default AddWebinar;
