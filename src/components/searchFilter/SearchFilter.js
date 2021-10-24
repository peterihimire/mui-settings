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
            <span>
              <IoIosArrowDown />
            </span>
            <span className='single-icon'>Filter By</span>
            <span>
              <IoIosArrowDown />
            </span>
          </li>
          <li>
            <span>
              <IoIosArrowDown />
            </span>
            <span className='single-icon'>Export</span>
            <span>
              <IoIosArrowDown />
            </span>
          </li>
          <li>
            <span>
              <IoIosArrowDown />
            </span>
            <span className='single-icon'>Bulk Action</span>
            <span>
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
