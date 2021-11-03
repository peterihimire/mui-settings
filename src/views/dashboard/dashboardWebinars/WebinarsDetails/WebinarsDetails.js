import React from "react";
import "./WebinarsDetails.scss";
import one from "../../../../assets/images/Bg-03.png";
import { Link } from "react-router-dom";

const WebinarsDetails = () => {
  return (
    <div className='webdetails_wrapper'>
      <div className='webdetails_redirect'>
        <div className='webdetails_go_back'>
          <Link to='/dashboard/webinars'>
            <p>Back to Webinars</p>
          </Link>
        </div>
        <div className='webdetails_sub_title'>
          <span className='special_text'>Webinars &gt; </span>{" "}
          <span> Supercharging your ....</span>
        </div>
      </div>
      <div className='webdetails_header'>
        <h1>Supercharging Your Document Management with Formpipe.cloud</h1>
        <div className='webdetails_cta_btns'>
          <div className='cta__edit'>Edit</div>
          <div className='cta__delete'>Delete</div>
          {/* <div className='cta__add'><img src={addimg} alt="img" /> <p>Add New</p> </div>
          <DeleteModal /> */}
        </div>
      </div>

      <div className='webdetails_contents'>
        <div className='webdetails_schedule'>
          <img src={one} alt='' />
          <div className='schedule__info'>
            <h2>Schedule</h2>

            <div className='schedule__event'>
              <div className='schedule__single__event'>
                <div className='single__content1'>
                  <div className='first__content'>
                    <h3>13</h3>
                    <p>July</p>
                  </div>
                  <div className='second__content'>
                    <h3>Online Event</h3>
                    <p>10:00 CST</p>
                  </div>
                </div>
                <div className='single__content2'>
                  <div className='first__content'>
                    <h3>15</h3>
                    <p>July</p>
                  </div>
                  <div className='second__content'>
                    <h3>Online Event</h3>
                    <p>10:00 CST</p>
                  </div>
                </div>
              </div>

              <div className='schedule__single__event'></div>
            </div>

            <h2>Speakers</h2>
            <p>Dene Palmer</p>
          </div>
        </div>
        <div className='webdetails_summary'>
          <h2>Summary</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
            vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
            nibh diam nulla senectus justo, donec etiam. Donec hendrerit
            consequat.
          </p>

          <h2>Benefit for you to get</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dictum enim, suscipit suspendisse. Auctor aliquam accumsan diam sed
            cursus placerat semper nam. Venenatis dictumst viverra quis pulvinar
            molestie etiam adipiscing id. Egestas nullam est ac eget lorem
            massa. At nulla egestas magna potenti. Mi neque faucibus cras vitae
            duis cursus. Sodales aenean quis sit tristique elementum. In
            imperdiet scelerisque integer sit vel ut sapien. Interdum quam
            sapien, id non platea. Ut id feugiat aliquam pharetra aliquet.
            Ultrices dolor cursus morbi lacus, tristique neque nisi. Quam
            ultrices ut faucibus duis ullamcorper. Sed suspendisse volutpat
            pharetra hac aliquet nibh. Ipsum vitae phasellus arcu cursus cursus.
            Read More
          </p>

          <h2>Statistics</h2>
          <div className='statistic_data'>
            <div className='first__data'>
              <h1>12,000</h1>
              <p>Webinar Views</p>
            </div>
            <div className='first__data'>
              <h1>12,000</h1>
              <p>Webinar Views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarsDetails;
