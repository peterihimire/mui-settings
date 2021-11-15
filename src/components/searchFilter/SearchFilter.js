import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import "./SearchFilter.css";

const SearchFilter = ({placeholder, ExtraComponent}) => {
  return (
    <div className='Search-filter-wrapper'>
      <div className='search-container'>
        <span style={{ fontSize: "1.5rem" }}>
          <BiSearch />
        </span>
        <input
          type='text'
          placeholder={placeholder ||'Search list of individual subscribers'}
        />
      </div>
      <div className='search-other-components'>
        <ul className='search-other-components-container'>
          <li>
            <span className='align__icons'>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 4H13V6H3V4ZM0 0H16V2H0V0ZM6 8H10V10H6V8Z" fill="#F4F4F4" fill-opacity="0.8"/>
          </svg>
            </span>
            <span className='single-icon'>Filter By</span>
            <span className='align__icons'>
              <IoIosArrowDown />
            </span>
          </li>
          <li>
            <span className='align__icons'>
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 14H10V5H13L9 0L5 5H8V14Z" fill="#F4F4F4" fill-opacity="0.8"/>
          <path d="M2 20H16C17.103 20 18 19.103 18 18V9C18 7.897 17.103 7 16 7H12V9H16V18H2V9H6V7H2C0.897 7 0 7.897 0 9V18C0 19.103 0.897 20 2 20Z" fill="#F4F4F4" fill-opacity="0.8"/>
          </svg>
            </span>
            <span className='single-icon'>Export</span>
            <span className='align__icons'>
              <IoIosArrowDown />
            </span>
          </li>
          <li>
            <span className='align__icons'>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5.99964C20.0097 5.92998 20.0097 5.8593 20 5.78964V5.70964C19.9828 5.65382 19.9593 5.60014 19.93 5.54964C19.917 5.52084 19.9002 5.49393 19.88 5.46964L19.78 5.33964L19.7 5.27964L19.58 5.18964L10.58 0.189639C10.428 0.10187 10.2555 0.0556641 10.08 0.0556641C9.90446 0.0556641 9.73202 0.10187 9.58 0.189639L0.58 5.18964L0.49 5.25964L0.38 5.33964C0.350949 5.37234 0.327316 5.40947 0.31 5.44964C0.278005 5.47834 0.250974 5.51213 0.23 5.54964C0.204035 5.59352 0.183867 5.64058 0.17 5.68964C0.164405 5.72274 0.164405 5.75654 0.17 5.78964C0.101246 5.84892 0.0436692 5.92005 0 5.99964V13.9996C0.00129782 14.1778 0.050188 14.3524 0.141611 14.5054C0.233035 14.6584 0.36367 14.7841 0.52 14.8696L9.52 19.8696C9.56132 19.8937 9.60485 19.9138 9.65 19.9296H9.75C9.91428 19.9695 10.0857 19.9695 10.25 19.9296H10.35L10.49 19.8696L19.49 14.8696C19.6445 14.7828 19.7731 14.6565 19.8627 14.5036C19.9523 14.3508 19.9997 14.1768 20 13.9996V5.99964ZM10 9.86964L3.06 5.99964L5.82 4.47964L12.65 8.37964L10 9.86964ZM10 2.14964L16.94 5.99964L14.7 7.24964L7.87 3.33964L10 2.14964ZM2 7.69964L9 11.6196V17.2996L2 13.4096V7.69964ZM11 17.2996V11.6196L14 9.93964V12.9996L16 11.9996V8.81964L18 7.70964V13.4096L11 17.2996Z" fill="#F4F4F4" fill-opacity="0.8"/>
            </svg>
            </span>
            <span className='single-icon'>Bulk Action</span>
            <span className='align__icons'>
              <IoIosArrowDown />
            </span>
          </li>
            {
              ExtraComponent &&
            <li>
                {ExtraComponent}
            </li>
            }
        </ul>
      </div>
    </div>
  );
};

export default SearchFilter;
