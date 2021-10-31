import React, {useState} from 'react'
import {Link} from "react-router-dom"

function DashboardCareersSingle() {
    const [tabOne, setTabOne] = useState(true);
    const [tabTwo, setTabTwo] = useState(false);
    const handleTabOne = () => {
        setTabOne(true);
        setTabTwo(false);
      };
    
      const handleTabTwo = () => {
        setTabOne(false);
        setTabTwo(true);
      };
    return (
        <div className='subscribers-wrapper'>
            <div className="role__top">
                <Link to="/dashboard/careers" className="role__top--left">
                    <span>Back to Careers</span>
                </Link>
                <div className="role__top--right">
                    <span>Careers&#62; </span>
                    <span>Sr. Product Designer</span>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="career__heading">Sr. Product Designer</h1>
                    <div className="career__subheading">
                        <span>Full-Time</span>
                        <span>Temporarily</span>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <ul className='tab-container'>
                <li
                    className={tabOne ? "activeTab" : ""}
                    style={{ cursor: "pointer" }}
                    onClick={handleTabOne}
                >
                    Individual <span className='tab-count1'>300</span>
                </li>
                <li
                    className={tabTwo ? "activeTab" : ""}
                    style={{ cursor: "pointer" }}
                    onClick={handleTabTwo}
                >
                    Business <span className='tab-count2'>200</span>
                </li>
            </ul>
        </div>
    )
}

export default DashboardCareersSingle
