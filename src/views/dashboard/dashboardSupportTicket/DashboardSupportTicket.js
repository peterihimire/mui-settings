import React,{useState} from 'react';
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';
import sendimg from "../../../assets/images/sendticket.svg"

const DashboardSupportTicket = () => {
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
        <Link to="/dashboard/roles-management" className="role__top--left">
          <span>Back to Roles</span>
        </Link>
        <div className="role__top--right">
          <span>Webinar&#62;</span>
          <span>Add New</span>
        </div>
      </div>

      <h1 className="role__heading">Support Tickets</h1>
      <div className='tab-wrapper'>
        <ul className='tab-container'>
            <li
              className={tabOne ? "activeTab" : ""}
              style={{ cursor: "pointer" }}
              onClick={handleTabOne}
            >
              Contact Sales <span className='tab-count1'>4</span>
            </li>
            <li
              className={tabTwo ? "activeTab" : ""}
              style={{ cursor: "pointer" }}
              onClick={handleTabTwo}
            >
              Contact <span className='tab-count2'>450</span>
            </li>
          </ul>
          <div className='support-content'>
            <div className="alltickets">
              <div className="allticket__search">
                <BiSearch />
                <input type="text" placeholder="Search Names" />
              </div>
              <ul className="allticket__unread">  
                <div className="dotted-box">
                  <span className="dotted"></span>
                  <span className="dotted-text">UNREAD</span>
                  <span className="dotted-num">2</span>
                  <span className="dotted"></span>
                </div>
                <li className="allticket__item">
                  <div className="allticket__unread--heading">
                    <span className="avatar">JM</span>
                    <div className="allticket__unread--name">
                      <h3>Julian Maxwell</h3>
                      <p>theodessey@yahoo.com</p>
                    </div>
                    <span className="allticket__unread--time">Now</span>
                  </div>
                  <div className="allticket__unread--text">
                    <p>
                    Lorem ipsum dolor sit amet, consectet adipiscing elit. Cursus viverra non adipiscing 
                    </p>
                    <span>
                      1
                    </span>
                  </div>
                </li>
                <li className="allticket__item">
                  <div className="allticket__unread--heading">
                    <span className="avatar">TA</span>
                    <div className="allticket__unread--name">
                      <h3>Toby Aderweilrd</h3>
                      <p>immaculatobi@gmail.com</p>
                    </div>
                    <span className="allticket__unread--time">Yesterday</span>
                  </div>
                  <div className="allticket__unread--text">
                    <p>
                    volutpat proin. Elementum risus, pharetra erat. Sit vitae ut justo magna ultricies non, sed.
                    </p>
                    <span>
                      1
                    </span>
                  </div>
                </li>
              </ul>
              <ul>
                <div className="dotted-box">
                  <span className="dotted"></span>
                  <span className="dotted-text">READ</span>
                  <span className="dotted-num">2</span>
                  <span className="dotted"></span>
                </div>
                <li className="allticket__item allticket__item--active">
                  <div className="allticket__unread--heading">
                    <span className="avatar">JC</span>
                    <div className="allticket__unread--name">
                      <h3>Josh Cornell</h3>
                      <p>j.josh@cornellgroup.com</p>
                    </div>
                    <span className="allticket__unread--time">13 July 2021</span>
                  </div>
                </li>
                <li className="allticket__item">
                  <div className="allticket__unread--heading">
                    <span className="avatar">ER</span>
                    <div className="allticket__unread--name">
                      <h3>ESTHER ROCK</h3>
                      <p>ester.rockwell@outlook.com</p>
                    </div>
                    <span className="allticket__unread--time">09 July 2021</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="ticket">
              <div className="ticket__chatheading">
                <span>JC</span>
                <div className="ticket__chatheading--name">
                  <h3>Josh Cornell</h3>
                  <p>j.josh@cornellgroup.com</p>
                </div>
              </div>
              <div className="ticket__chatbody">
                    <div className="ticket__chatbody--time">13 July 2021</div>
                    <div className="ticket__chatbody--receive">
                      <span className="ticket__chatbody--receiveavatar">JC</span>
                      <p className="ticket__chatbody--receivetext">Hi, I will like to make enquiries for my business on how my employees can benefit from here</p>
                      <span className="ticket__chatbody--receivetime">02:04 PM</span>
                    </div>
                    <div className="ticket__chatbody--send">
                      <span className="ticket__chatbody--sendtime">02:04 PM</span>
                      <p className="ticket__chatbody--sendtext">
                      Thank you for contacting us ✌️ We offer different plans for different type of businesses. If i may ask, how many employees do you have?
                      </p>
                      <span className="ticket__chatbody--sendavatar">JC</span>
                    </div>
                    <div className="ticket__chatbody--time">14 July 2021</div>
                    <div className="ticket__chatbody--receive">
                      <span className="ticket__chatbody--receiveavatar">JC</span>
                      <p className="ticket__chatbody--receivetext">Employees in total is 610 I need a certification course</p>
                      <span className="ticket__chatbody--receivetime">02:04 PM</span>
                    </div>
              </div>
              <form className="ticket__form">
                <input className="ticket__input" type="text" placeholder="Message Josh" />
                <img src={sendimg} alt="send" />
              </form>
            </div>
          </div>
      </div>
    </div>
    )
}

export default DashboardSupportTicket;
