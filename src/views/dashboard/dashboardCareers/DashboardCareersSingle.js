import React from 'react'
import {Link} from "react-router-dom"

function DashboardCareersSingle() {
    return (
        <div className='subscribers-wrapper'>
            <div className="role__top">
                <Link to="/dashboard/roles-management" className="role__top--left">
                    <span>Back to Roles</span>
                </Link>
                <div className="role__top--right">
                    <span>Careers&#62; </span>
                    <span>Sr. Product Designer</span>
                </div>
            </div>
            <div>
                <h1 className="role__heading">Sr. Product Designer</h1>
                
            </div>
        </div>
    )
}

export default DashboardCareersSingle
