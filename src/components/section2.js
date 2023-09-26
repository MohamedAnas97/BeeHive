import Person from "../assets/image/profile4.png";
import Quote from "../assets/image/quotetaion.png";
import Person2 from "../assets/image/profile5.png";
import Person3 from "../assets/image/profile8.png";

import { Carousel } from "react-responsive-carousel";
const Section2 = () => {
  return (
    <div className="sec2_container">
      <div className="main_sec2">
        <Carousel
          // renderArrowPrev={true}
          // renderArrowNext={true}
          showIndicators={false}
        >
          <div className="main_cont2">
            <img src={Person} alt="" />
            <h1>Mich Johnson, Australia</h1>
            <span>
              <img src={Quote} alt="" />
            </span>
            <span>
              <img src={Quote} alt="" />
            </span>

            <p>
              The multichannel sales engagement platform which automates
              personal email outreach, calls, and tasks, while Sales can focus
              on what really matters - closing while Sales can focus on what
              really matters - closing
            </p>
          </div>
          <div className="main_cont2">
            <img src={Person2} alt="" />
            <h1>Mich Johnson, Australia</h1>

            <span>
              <img src={Quote} alt="" />
            </span>
            <span>
              <img src={Quote} alt="" />
            </span>

            <p>
              The multichannel sales engagement platform which automates
              personal email outreach, calls, and tasks, while Sales can focus
              on what really matters - closing while Sales can focus on what
              really matters - closing
            </p>
          </div>
          <div className="main_cont2">
            <img src={Person3} alt="" />
            <h1>Mich Johnson, Australia</h1>

            <span>
              <img src={Quote} alt="" />
            </span>
            <span>
              <img src={Quote} alt="" />
            </span>
            <p>
              The multichannel sales engagement platform which automates
              personal email outreach, calls, and tasks, while Sales can focus
              on what really matters - closing while Sales can focus on what
              really matters - closing
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Section2;
