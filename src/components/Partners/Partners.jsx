import React from "react";
import "./Partners.css";

const Partners = () => {
  return (
    <div className="partners_container">
      <div className="partners_wrapper">
        <div className="top_black black">Home / Partners</div>
        <div className="partner_main_screen">
          <h2>Partners</h2>
          <p>Join us in our mission.</p>
          <a href="/">Conatct us</a>
        </div>
        <div className="bottom_black black">
          <ul>
            <li>
              <a href="/">Institution and Education</a>
            </li>
            <li>
              <a href="/">Partners</a>
            </li>
            <li>
              <a href="/">Learners</a>
            </li>
          </ul>
        </div>

        <div className="white_section">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            fugiat odio officiis consequuntur culpa nam dignissimos dicta saepe
            numquam in voluptates dolore id, suscipit quaerat porro iste? At,
            qui tempora.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            maiores voluptatum deserunt at officia, iste nulla omnis consequatur
            rerum excepturi illo, quae veritatis pariatur quibusdam voluptate
            provident reprehenderit doloremque maxime expedita eligendi facilis
            quaerat, similique commodi consequuntur! At optio ab excepturi
            dolore officia adipisci vel?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nulla
            fuga et reiciendis maxime debitis quidem dicta praesentium nostrum
            quia?
          </p>
        </div>

        <div className="blue_section">
          <h3>Join us in our mission</h3>
          <p>Contact Adanian academy today to explore partnership</p>
          <button>Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
