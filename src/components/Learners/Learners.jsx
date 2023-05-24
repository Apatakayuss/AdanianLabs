import React from 'react';
import "./Learners.css";


const Learners = () => {
    
	
  return (
    <div className="learners_container">
      <div className="learners_wrapper">
        <div className="learners_top_black learners_black">Home / Learners</div>

        <div className="learners_main_screen">
          <h2>Learners</h2>
          <p>Encourage your institution to join to access all learning benefits</p>
          <a href="/">Conatct us</a>
        </div>
        <div className="learners_bottom_black learners_black" >

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

        <div className="learners_white_section">
            <h4>Take charge of your life</h4>
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

        <div className="learners_blue_section">
          <h3>Encourage your institution to <span><a href="/">join Oracle Academy.</a></span></h3>
          <p>Is your institution a member? Sign in to the Student Hub.</p>
          <button>Sign In</button>
        </div>

      </div>
    </div>
  );
};

export default Learners;
