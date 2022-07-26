import React, {useState} from "react";
import { Link } from "react-router-dom";
// import SearchFilter from "../../../components/searchFilter/SearchFilter";
// import Table from "../../../components/Table/Table";
// import Dot from "../../../assets/images/three-dot.png"
// import add from "../../../assets/images/add.png"
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ReactQuill from "react-quill";
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
const AddDashboardRolesManagment = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
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
    <div className='subscribers-wrapper'>
      <div className='role__top'>
        <Link to='/dashboard/roles-management' className='role__top--left'>
          <span>Back to Roles</span>
        </Link>
        <div className='role__top--right'>
          <span>Webinar&#62;</span>
          <span>Add New</span>
        </div>
      </div>

      <h1 className='role__heading'>Add Role</h1>
      <form className='role__form'>
        <div className='role__form-details'>
          <div className='role__form-group'>
            <label className='role__form-label'>Role Name</label>
            <input type='text' className='role__form-input' />
          </div>
          {/* <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={this.onEditorStateChange}
            />; */}
          <div className='role__form-group'>
            <label className='role__form-label'>Description</label>
            <ReactQuill
                  theme='snow'
                  className={classes.root}
                  value={value}
                  onChange={setValue}
                  modules={modules}
                  formats={formats}
                />
          </div>
          <div className='role__form-group'>
            <label className='role__form-label'>Access Granted</label>
            <div className='role__form--checkboxes'>
              <label className='role__form--checkbox'>
                <input type='checkbox' /> <span>Courses</span>
              </label>
              <label className='role__form--checkbox'>
                <input type='checkbox' /> <span>Role Management</span>
              </label>
              <label className='role__form--checkbox'>
                <input type='checkbox' /> <span>Subscribers</span>
              </label>
              <label className='role__form--checkbox'>
                <input type='checkbox' /> <span>Webinars</span>
              </label>
              <label className='role__form--checkbox'>
                <input type='checkbox' /> <span>Careers</span>
              </label>
              <label className='role__form--checkbox'>
                <input type='checkbox' /> <span>Analysis</span>
              </label>
              <label className='role__form--checkbox'>
                <input type='checkbox' /> <span>Settings</span>
              </label>
            </div>
          </div>
        </div>
        <div className='role__people'>
          <button className='role__button'>PUBLISH</button>
          <div className='role__selectbox'>
            <h4 className='role__select--heading'>Added Users</h4>
            <select className='role__select'>
              <option>Select Users</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDashboardRolesManagment;
