import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import "./AddInsight.scss";
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

const AddInsight = () => {
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
          <Link to='/dashboard/Insight'>
            <p>Back to insight</p>
          </Link>
        </div>
        <div className='add_career_sub_title'>
          <span className='special_text'>Insight &gt; </span>{" "}
          <span> Add New</span>
        </div>
      </div>
      <div className='add_career_header'>
        <h1>Add Insight</h1>
      </div>

      <div className='add_career_message_wrapper'>
        <form className='role__form' style={{alignItems:"start"}}>
          <div className='add_career_message_form'>
            <div className='add_career_role__form-details'>
              <div className='add_career_role__form-group'>
                <label className='add_career_role__form-label'>Title</label>
                <input type='text' className='add_career_role__form-input' />
              </div>
              <div className='add_career_role__form-group'>
                <label className='add_career_role__form-label'>Comments <span className="required">*</span></label>
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
                Image Settings
              </h4>

              <div className='add_career_role__form-group'>
                <label className='add_career_role__form-label'>
                  Image Settings  <span className="required">*</span>
                </label>
                <input type='text' className='add_career_role__form-input' />
              </div>
              <div className='add_career_role__form-group'>
                <label className='add_career_role__form-label'>Alt Text <span className="required">*</span></label>
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

export default AddInsight;
