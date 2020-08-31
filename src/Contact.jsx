import emailjs from "emailjs-com";
import React from 'react';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'contacttemplate', e.target, 'user_Zrgukw032OBrC2lp0CMgw')
        .then((result) => {
            console.log(result.text);
            alert('Message Sent!')
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <section id="contact-section">
            <div className="container">
            <h2>Contact Us</h2><br></br>
              <p>Email us and keep upto date with our latest news</p>
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto contact-form" >
                        <div className="col-8 form-group mx-auto contact-input">
                            <input type="text" className="form-control" placeholder="Name" name="name" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto contact-input">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto  contact-input">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto contact-textarea">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="submit" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
            </section>
        </div>
    )
}