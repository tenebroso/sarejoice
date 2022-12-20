import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../../components/layout';
import Header from '../../components/Header';
import cover from "../../images/cover.jpg";

// styles
const contentStyle = {
  backgroundColor: 'white',
  color: 'black',
}

// markup
const FiveKPage = () => {
  return (
    <Layout>
      <Header showLogo={true}>
        {/* <StaticImage src="../../images/5k-poster.jpg" alt="Commissioning 2023" /> */}
      </Header>
      <section className="about-section no-shadow" id="about"  style={contentStyle}>
        <div className="container flex wrap">
            {/* <h2 className="about-heading">5K Run for the World</h2> */}
            <div className="about-poster">
              <StaticImage src="../../images/5k-poster.jpg" alt="Commissioning 2023" />
            </div>
            <div className="about-copy">
            <p><strong>Date:</strong>	Saturday, June 11, 2023<br />
            <strong>Time:</strong>		7:00AM Start<br />
            <strong>Location:</strong>	Juneau Park - 900 N. Prospect Ave. Milwaukee, WI  53202<br />
            <strong>Registration:</strong>	Select the 5k option on your Commissioning registration. Please be sure to also download the <a href="/2023-5K-Waiver-Form.pdf">Waiver</a> and the <a href="/2023-5K-World-Services-Pledge-Form.pdf">Pledge Form</a>. Use the Pledge Form to fund-raise and bring both completed forms to the Packet Pick-up on Friday, June 10th, 2023.</p>

            <hr />

            <p>Join us for the 2023 Commissioning <strong>5K Run for the World!</strong></p>
              <p>If you are looking for a <em>fun event</em> this year at Commissioning, sign up for the 5K!!&nbsp;&nbsp;It doesn&rsquo;t matter if you think you are a &ldquo;runner&rdquo; or not&hellip; all ages and fitness levels are welcome! We have <strong>lots of walkers</strong> as well as runners!!</p>
              <p><em>You&rsquo;ll receive a T-shirt just for registering!</em></p>
              <p>Refreshments will be available along the route and at the start/finish line along with lively music and lots of fun!&nbsp;</p>
              <p>Everyone participating will also have the opportunity to raise funds for World Services. &nbsp;</p>
              <p>This is a great opportunity to raise money for World Services, get more active and fellowship with others during Commissioning weekend.</p>
              <p><strong>THE FACTS</strong>:</p>
              <ul>
                  <li>5k Run/Walk (3.1 miles) RAIN OR SHINE</li>
                  <li>$10.00 registration fee (includes t-shirt &ndash; guaranteed only if registered by May 13th)</li>
                  <li>7:00 AM START</li>
                  <li>Parking available</li>
                  <li>On course Water Stations and Post Race food</li>
                  <li>Here are a few helpful links to 5K training schedules:</li>
              </ul>
              <p><a href="http://www.5ktrainingschedules.com/training-schedules/5k-training-program-jeff-galloway.html">http://www.5ktrainingschedules.com/training-schedules/5k-training-program-jeff-galloway.html</a></p>
              <p><a href="http://www.c25k.com/">http://www.c25k.com/</a></p>
              <p><strong>TIMING</strong></p>
              <ul>
                  <li>This is a FUN RUN! We will not be providing official chip times</li>
              </ul>
              <p><strong>PACKET PICK-UP &amp; LATE REGISTRATION</strong></p>
              <ul>
                  <li>Packet pick-up will be at the Registration area on Friday, June 10<sup>th</sup> from 2:00-7:30PM</li>
                  <li>When you pick up your packet, please be prepared to turn in your pledge money, or the amount you gave to your Corps World Services.</li>
                  <li>Late Registrations are available on Friday at the packet pick-up site but</li>
              </ul>
              <p><strong>T-shirts are NOT guaranteed for late registrations and won&rsquo;t be available until the morning of the race, at the park.</strong></p>
              <ul>
                  <li>Maps to the park will be available at the Packet Pick-up.</li>
              </ul>
              
              <p><strong>FUNDRAISING OPPORTUNITIES FOR WORLD SERVICES</strong></p>
              <ul>
                  <li><a href="/2023-5K-World-Services-Pledge-Form.pdf">Download a copy of the pledge form</a> for World Missions when you register for Commissioning. Bring your donations to the Packet Pick-up on Fri., June 10th at the Registration area!</li>
              </ul>
              
              
              
              
              <p>For additional questions, please email</p>
              <p>&nbsp;<a href="mailto:steve.woodard@usc.salvationarmy.org">steve.woodard@usc.salvationarmy.org</a>.</p>

            </div>
          </div>
      </section>
      <footer className="footer">
        <div className="container">
            <div id="df-footer-wrapper" className="df-footer-light lazy-wrapper full no-padding">
            <div className="df-container-footer df-container-fluid">
            <div>
              <div className="df-footer-top">
                <div className="col-lg-12 df-footer-2-inner">
                  <span className="df-footer-logo">
                    <img alt="Get Connected" data-src="https://salarmycentral.org/wp-content/uploads/shield.png" className="center-block df-footer-logo-img lazyloaded" src="https://salarmycentral.org/wp-content/uploads/shield.png" loading="lazy" /><noscript><img src="https://salarmycentral.org/wp-content/uploads/shield.png" className="center-block df-footer-logo-img" alt="Get Connected" /></noscript>
                  </span>
                  <div className="df-footer-description">
                    <p><strong>The Salvation Army Mission Statement</strong></p>

                    <p>The Salvation Army, an international movement, is an evangelical part of the universal Christian Church. Its message is based on the Bible. Its ministry is motivated by the love of God. Its mission is to preach the gospel of Jesus Christ and to meet human needs in His name without discrimination.</p>

                    <p>The Salvation Army Central Territory Headquarters<br />
                    Serving communities in Michigan, Wisconsin, Minnesota, North &amp; South Dakota, Nebraska, Kansas, Missouri, Illinois, Iowa and Indiana<br />
                    5550 Prairie Stone Parkway, Hoffman Estates, IL 60192 | 1-800-SAL-ARMY | Privacy Policy | © The Salvation Army Central Territory<br />
                    <a href="https://easternusa.salvationarmy.org/">Eastern Territory</a> | <a href="https://salvationarmysouth.org/">Southern Territory</a> | <a href="https://westernusa.salvationarmy.org/">Western Territory</a> | <a href="https://www.salvationarmy.org/ihq/">International Headquarters</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="df-container-subfooter df-container-fluid">
          </div>
    </div>
        </div>
      </footer>
    </Layout>
  )
}

export default FiveKPage
