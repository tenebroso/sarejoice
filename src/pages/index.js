import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Header from "../components/Header"
import About from "../components/About"
// import Plus from '../components/Plus';
import poster from "../images/poster.jpg"

import { schedule, getIsThisHour, getIsThisAfter } from "../components/Schedule"

// styles
const posterStyle = {
  maxHeight: "calc(100vh - 40px)",
  width: "auto",
  margin: "0 auto",
  padding: "20px 0",
  display: "block",
}

const today = new Date()

const addAttr = (dates = []) => {
  if (!dates.length) {
    return false
  }

  return dates.some(date => getIsThisHour(date) && !getIsThisAfter(date, today))
}

const dateMap = {
  friday: "Friday, June 9th",
  saturday: "Saturday, June 10th",
  sunday: "Sunday, June 11th",
}

// markup
const IndexPage = () => {
  const [activeDay, setActiveDay] = useState({
    date: "friday",
    name: "Friday, June 9th",
  })
  const handleDayClick = event => {
    event &&
      event.target &&
      event.target.dataset &&
      event.target.dataset.name &&
      setActiveDay({
        date: event.target.dataset.name,
        name: dateMap[event.target.dataset.name],
      })
  }
  return (
    <Layout>
      <Header>
        <StaticImage
          src="../images/header-poster.jpg"
          alt="Commissioning 2023"
        />
      </Header>
      <section className="about-section" id="about">
        <div className="container flex wrap">
          <h2 className="about-heading">
            Rejoice – Commissioning Weekend 2023
          </h2>
          <div className="about-poster">
            <img
              style={posterStyle}
              alt="Rejoice 2023 | Commissioning & Ordination"
              src={poster}
            />
          </div>
          <div className="about-copy">
            <About />
          </div>
        </div>
      </section>
      {/* <section className="specialGuests-section" id="guests">
        <div className="container flex wrap">
          <h2 className="specialGuests-heading">Special Guests</h2>
          <div className="specialGuests-bio">

          <h3 className="specialGuests-names">The Chief of the Staff (Commissioner Lyndon Buckingham) and Commissioner Bronwyn Buckingham</h3>
          <p>Commissioners Bronwyn and Lyndon Buckingham, originally from the New Zealand, Fiji, Tonga and Samoa Territory, are passionate representatives of The Salvation Army. They have served as officers since they were commissioned in 1990 as members of the Ambassadors for Christ Session. Commissioner Lyndon assumed his current appointment as The Chief of the Staff on 3 August 2018 and Commissioner Bronwyn as the World Secretary for Spiritual Life Development on 1 January 2021, having previously served as the World Secretary for Women&rsquo;s Ministries.</p>
          <p>Over the years of their officership they have served in corps appointments in New Zealand and Canada, as Territorial Youth and Candidates Secretaries, Divisional Leaders and Territorial Programme Secretaries.</p>
          <p>On 1 February 2013 the Buckinghams were appointed to the Singapore, Malaysia and Myanmar Territory, firstly as Chief Secretary and Territorial Secretary for Women's Ministries, before assuming territorial leadership in June 2013. On 1 January 2018 they were appointed to lead the United Kingdom Territory with the Republic of Ireland, Commissioner Lyndon Buckingham as Territorial Commander and Commissioner Bronwyn Buckingham as Territorial Leader for Leader Development.</p>
          <p>Bronwyn and Lyndon are parents to Daniel and Emma, and their lovely daughter-in-law, Juanita. Daniel and Juanita are Corps Officers and Emma holds a Social Ministry appointment, all in New Zealand. They are proud grandparents to Israel and Tobias. They are continually blessed, encouraged and challenged by the desire of their adult children to serve God in their generation.</p>
          <p>In each of their appointments the Buckinghams have displayed a desire to see the great news of the gospel shared.</p>
          <p>Bronwyn is inspired by the belief that God has a new truth to reveal to her daily and compelled by the promise that He is continuing to grow and stretch her (Philippians 1:6). She desires to be the woman God is calling her to be and is passionate to be part of an Army where the next generation will choose to embrace their leadership calling.</p>
          <p>Lyndon is passionate about finding ways for The Salvation Army to be more effective in fulfilling its mission. He is determined to be faithful to the covenants he has made, and is motivated by verses from Paul&rsquo;s letter to the Colossians: &lsquo;Whatever you do, work at it with all your heart, as working for the Lord, not for men&rsquo; (Colossians 3:23)</p>
          <p>Both are intent on enjoying life, endeavouring to stay fit by walking and jogging. They enjoy reading, watching good movies and are avid supporters of New Zealand&rsquo;s &lsquo;All Blacks&rsquo; rugby team!</p>
          </div>
          <StaticImage src="../images/guests.jpg" alt="Rejoice | Commissioning 2023" />
        </div>
      </section> */}
      <section className="schedule-section" id="schedule">
        <ul className="schedule-key" onClick={handleDayClick}>
          <li data-name="friday">Friday</li>
          <li data-name="saturday">Saturday</li>
          <li data-name="sunday">Sunday</li>
        </ul>
        <ul className="schedule">
          <h3>{activeDay.name}</h3>
          {schedule[activeDay.date] &&
            schedule[activeDay.date].length &&
            schedule[activeDay.date].map((item, idx) => {
              return (
                <li key={idx} data-active={addAttr(item.dates)}>
                  <span className="time">{item.time}</span>
                  <span
                    className="title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <span className="location">{item.location}</span>
                  {item.notes && (
                    <span
                      className="notes"
                      dangerouslySetInnerHTML={{ __html: item.notes }}
                    />
                  )}
                </li>
              )
            })}
        </ul>

        <div className="container">
          <p>
            + By Invitation Only | **Available with Pre-Registration Only
            <br />
            Spanish, Laotian and Korean Translations will be provided for
            General Sessions
            <br />
            Transmitters will be distributed at the Miller High Life Theatre in
            the Box Office Lobby
            <br />
            <em>As of December 16, 2022 – Schedule is Subject to Change</em>
          </p>
        </div>
      </section>
      <section className="hotel-section" id="hotels">
        <div className="container">
          <h2 className="hotel-heading">Hotels</h2>
          <div className="hotel flex">
            <div className="hotel-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.009245121944!2d-87.91729708473113!3d43.04123697914698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880519fde39f20c3%3A0x4664baf352c61ec2!2s333%20W%20Kilbourn%20Ave%2C%20Milwaukee%2C%20WI%2053203!5e0!3m2!1sen!2sus!4v1645577245168!5m2!1sen!2sus"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
              <p className="hotel-address">
                <strong>Hyatt Regency Milwaukee</strong>
                <br />
                333 W. Kilbourn Ave.
                <br />
                Milwaukee, WI 53203
                <br />
                414-276-1234
              </p>
            </div>
            <div className="hotel-details">
              <h3 className="hotel-name">
                <a
                  target="_blank"
                  href="https://www.hyatt.com/en-US/group-booking/MKERM/G-SAVC"
                >
                  Hyatt Regency Milwaukee
                </a>
              </h3>
              <ul className="hotel-details-list">
                <li>
                  <strong>Rates:</strong>
                  <br /> $182.00 per night plus 15.5% tax ($210.21 per night)
                </li>
                <li>
                  <strong>Reservations:</strong>
                  <br /> Hotel Room Block will be available to book in Spring
                  2023
                  <br />
                </li>
                <li>
                  <strong>Cancellation Policy:</strong>
                  <br /> 48 Hours / 2 Days Prior to Arrival Date
                </li>
                <li>
                  <strong>Self-Parking:</strong>
                  <br />
                  Interstate Parking Structure (adjacent to the Hyatt Recency Milwaukee Hotel)
                  <br /><a href="https://goo.gl/maps/PfxKfWeYdAfZ65RL7" target="_blank">33 W. Wells St. Milwaukee, WI, 53203</a>
                  <br /><br />Located adjacent to the Hotel to the West, attached on the 2nd floor via Skywalk.
                  <br />For  most convenient access, park on level “W3”
                  <br /><br />$28.00 per 24 hours with in and out access
                </li>
                <li>
                  <strong>Valet Parking:</strong>
                  <br /> $31.00 Overnight Parking with in and out access
                </li>
                <li>
                  <strong>Hotel Policy:</strong>
                  <br />
                  Pets are allowed - $40.00 per night Non-Refundable Deposit
                  <br />
                  Maximum Weight: 150 lbs. (for 1 single dog or 75 lbs. for 2
                  smaller dogs)
                  <br />
                  Service Animals ARE allowed
                </li>
              </ul>
            </div>
          </div>

          <div className="hotel flex">
            <div className="hotel-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.1400338292706!2d-87.92042338473134!3d43.038485079147165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805199e0d5858a7%3A0x154ce7c19482c95a!2s509%20W%20Wisconsin%20Ave%2C%20Milwaukee%2C%20WI%2053203!5e0!3m2!1sen!2sus!4v1645578587763!5m2!1sen!2sus"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
              <p className="hotel-address">
                <strong>Hilton Milwaukee City Center Hotel</strong>
                <br />
                **LAST DAY TO MAKE RESERVATIONS IN THIS BLOCK IS MAY 18, 2023**
                <br />
                509 W. Wisconsin Ave.
                <br /> Milwaukee, WI 53203
                <br />
                414-271-7250
              </p>
            </div>
            <div className="hotel-details">
              <h3 className="hotel-name">
                <a
                  target="_blank"
                  href="https://www.hilton.com/en/hotels/mkemhhf-hilton-milwaukee-city-center/?SEO_id=BING-HI-MKEMHHF&y_source=1_MTIyMDkxOS00ODMtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D"
                >
                  Hilton Milwaukee City Center Hotel
                </a>
              </h3>
              <ul className="hotel-details-list">
                <li>
                  <strong>Rates:</strong>
                  <br /> $179.00 per night plus 15.5% tax ($206.75 per night)
                </li>
                <li>
                  <strong>Reservations:</strong>
                  <br /> **LAST DAY TO MAKE RESERVATIONS IN THIS BLOCK IS MAY
                  18, 2023**
                  <br />
                  <a
                    href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=MKEMHHF&groupCode=SARMY&arrivaldate=2023-06-08&departuredate=2023-06-11&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT"
                    target="_blank"
                  >
                    Book Reservation
                  </a>
                </li>
                <li>
                  <strong>Cancellation Policy:</strong>
                  <br /> 48 Hours / 2 Days Prior to Arrival Date
                </li>
                <li>
                  <strong>Self-Parking:</strong>
                  <br /> DISCOUNTED RATE of $15.00 Overnight Parking per day
                  with in and out access
                </li>
                <li>
                  <strong>Pet Policy:</strong>
                  <br />
                  Pets are allowed - $50.00 Non-Refundable Deposit
                  <br />
                  Maximum Weight: 75 lbs.
                  <br />
                  Service Animals ARE allowed
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="hotel flex">
            <div className="hotel-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.1480228484083!2d-87.92161108473125!3d43.03831697914711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805199dc2abf0b9%3A0xfbda3ab46b835bd7!2s611%20W%20Wisconsin%20Ave%2C%20Milwaukee%2C%20WI%2053203!5e0!3m2!1sen!2sus!4v1645747283989!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
              <p className="hotel-address"><strong>DoubleTree by Hilton Milwaukee Downtown</strong><br />**LAST DAY TO MAKE RESERVATIONS IS THIS BLOCK IS MAY 10, 2023**<br />611 W. Wisconsin Ave.<br />Milwaukee, WI 53203<br />414-727-2274</p>
            </div>
            <div className="hotel-details">
              <h3 className="hotel-name"><a target="_blank" href="https://www.hilton.com/en/hotels/mkeccdt-doubletree-milwaukee-downtown/?SEO_id=BING-DT-MKECCDT&y_source=1_MTM3MjU5MC00ODMtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D">DoubleTree by Hilton Milwaukee Downtown</a></h3>
              <ul className="hotel-details-list">
                <li><strong>Rates:</strong><br /> $169.00 per night plus 15.1% tax ($194.52 per night)</li>
                <li><strong>Reservations:</strong><br /> BLOCK IS AVAILABLE TO BOOK UNTIL MAY 10, 2023 <a href="https://www.hilton.com/en/attend-my-event/mkeccdt-sal-7c7db3b8-7121-4693-9519-193731d2f054/" target="_blank">Book Reservation</a></li>
                <li><strong>Cancellation Policy:</strong><br /> 48 Hours / 2 Days Prior to Arrival Date</li>
                <li><strong>Overnight Parking:</strong><br />$23.00 Overnight Parking per day with in and out access</li>
                <li><strong>Pet Policy:</strong><br />
                   Not allowed<br />
                  Service Animals ARE allowed
                </li>
              </ul>
            </div>
          </div> */}

          <div className="hotel flex">
            <div className="hotel-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.781371828172!2d-87.923545684731!3d43.04603127914675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88051970e2f49e9d%3A0x6cc095058809fec0!2s800%20W%20Juneau%20Ave%2C%20Milwaukee%2C%20WI%2053233!5e0!3m2!1sen!2sus!4v1645747773226!5m2!1sen!2sus"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
              <p className="hotel-address">
                <strong>Hyatt Place Milwaukee Downtown</strong>
                <br />
                **LAST DAY TO MAKE RESERVATIONS IN THIS BLOCK IS MAY 5, 2023**
                <br />
                800 W. Juneau Ave.
                <br />
                Milwaukee, WI 53233
                <br />
                414-808-3880
              </p>
            </div>
            <div className="hotel-details">
              <h3 className="hotel-name">
                <a
                  target="_blank"
                  href="https://www.hyatt.com/en-US/hotel/wisconsin/hyatt-place-milwaukee-downtown/mkezd"
                >
                  Hyatt Place Milwaukee Downtown
                </a>
              </h3>
              <ul className="hotel-details-list">
                <li>
                  <strong>Rates:</strong>
                  <br /> $169.00 per night plus 15.5% tax ($195.20 per night)
                </li>
                <li>
                  <strong>Reservations:</strong>
                  <br /> BLOCK IS AVAILABLE TO BOOK UNTIL MAY 5, 2023
                  <br />
                  <a href="https://www.hyatt.com/en-US/hotel/wisconsin/hyatt-place-milwaukee-downtown/mkezd?corp_id=G-FTSA">
                    Book Reservation
                  </a>
                </li>
                <li>
                  <strong>Cancellation Policy:</strong>
                  <br /> 48 Hours / 2 Days Prior to Arrival Date
                </li>
                <li>
                  <strong>Overnight Parking:</strong>
                  <br />
                  $20.00 Overnight Parking plus tax per day with in and out
                  access
                  <br />
                  $32.00 Valet Parking plus tax per day with in and out access
                </li>
                <li>
                  <strong>Pet Policy:</strong>
                  <br />
                  Pets are allowed – Call for fee
                  <br />
                  Service Animals ARE allowed at no charge
                </li>
              </ul>
            </div>
          </div>

          <p>Parking Fees and Wisconsin State Taxes are Subject to Change</p>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div
            id="df-footer-wrapper"
            className="df-footer-light lazy-wrapper full no-padding"
          >
            <div className="df-container-footer df-container-fluid">
              <div>
                <div className="df-footer-top">
                  <div className="col-lg-12 df-footer-2-inner">
                    <span className="df-footer-logo">
                      <img
                        alt="Get Connected"
                        data-src="https://salarmycentral.org/wp-content/uploads/shield.png"
                        className="center-block df-footer-logo-img lazyloaded"
                        src="https://salarmycentral.org/wp-content/uploads/shield.png"
                        loading="lazy"
                      />
                      <noscript>
                        <img
                          src="https://salarmycentral.org/wp-content/uploads/shield.png"
                          className="center-block df-footer-logo-img"
                          alt="Get Connected"
                        />
                      </noscript>
                    </span>
                    <div className="df-footer-description">
                      <p>
                        <strong>The Salvation Army Mission Statement</strong>
                      </p>

                      <p>
                        The Salvation Army, an international movement, is an
                        evangelical part of the universal Christian Church. Its
                        message is based on the Bible. Its ministry is motivated
                        by the love of God. Its mission is to preach the gospel
                        of Jesus Christ and to meet human needs in His name
                        without discrimination.
                      </p>

                      <p>
                        The Salvation Army Central Territory Headquarters
                        <br />
                        Serving communities in Michigan, Wisconsin, Minnesota,
                        North &amp; South Dakota, Nebraska, Kansas, Missouri,
                        Illinois, Iowa and Indiana
                        <br />
                        5550 Prairie Stone Parkway, Hoffman Estates, IL 60192 |
                        1-800-SAL-ARMY | Privacy Policy | © The Salvation Army
                        Central Territory
                        <br />
                        <a href="https://easternusa.salvationarmy.org/">
                          Eastern Territory
                        </a>{" "}
                        |{" "}
                        <a href="https://salvationarmysouth.org/">
                          Southern Territory
                        </a>{" "}
                        |{" "}
                        <a href="https://westernusa.salvationarmy.org/">
                          Western Territory
                        </a>{" "}
                        |{" "}
                        <a href="https://www.salvationarmy.org/ihq/">
                          International Headquarters
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="df-container-subfooter df-container-fluid"></div>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default IndexPage
