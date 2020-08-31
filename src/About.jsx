import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../src/images/img1.jpg"
import one from "../src/images/one.jpg"
import two from "../src/images/two.jpg"
import three from "../src/images/three.jpg"
const myCard={
  border: '2px solid black',
  borderRadius: '6px'
}
const About = ()=>{
    return(
        <div>
        <section id="abt" className="d-flex align-items-center" >
            <div className="container">
        <h2>ABOUT US</h2><br></br>
              <p> How a group of readers, writers, developers, designers and planners are bringing the ideas from the best nonfiction to some of the busiest people on the planet.</p>
    </div>
        </section>
        <br></br>
        <div className="container">
  <div className="row">
    <div className="col-sm">
    <div className="card" style={myCard}>
  <img className="card-img-top" src={one} alt="Card image cap"/>
  <div className="card-body">
    <h4 className="card-title"><strong>Creating a meaningful product</strong></h4>
    <p className="card-text">To help people integrate fresh and relevant ideas into their busy lives, we created a new format—the book-in-blinks. You get the key insights from a nonfiction book in just 15-minutes.</p>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div className="card" style={myCard} >
  <img className="card-img-top" src={two} alt="Card image cap"/>
  <div className="card-body">
    <h4 className="card-title"><strong>Humans before algorithms</strong></h4>
    <p className="card-text">We collaborate directly with authors as well as combing bestseller lists, new releases and recommendations to find the most intriguing books, which our expert readers distill into short Blinks and quality assured by Blinkist editors.</p>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div className="card" style={myCard}>
  <img className="card-img-top" src={three} alt="Card image cap"/>
  <div className="card-body">
    <h4 className="card-title"><strong>Awards and wonderful teammates</strong></h4>
    <p className="card-text">Unique company culture, built on self-organization, helps us ensure that everything we do is worth. International recognition for our work includes a United Nations World Summit Award.</p>
  </div>
</div>
    </div>
  </div>
</div>
        </div>
    );

};
export default About;