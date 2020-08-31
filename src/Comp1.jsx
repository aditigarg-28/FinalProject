import React from "react"
import web from "../src/images/img1.jpg"
import Typical from "react-typical"
const Comp1=()=>{
    return(
        <div>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>Fit learning into your life</h1>
                          
                            <h5 className="my-3"> 
                            <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'Blinkist brings you the knowledge from top nonfiction, so you can learn anytime, anywhere.',1000
                            ]}
                            />
                            </h5>
                            
                            <div className="mt-3">
                                <a href="" className="btn-get-started">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={web} className="img-fluid animated" alt="homeimg"/>
                        </div>    
                    </div>
                 </div>
                 </div>
                 </div>
        </section>
        </div>
    );

};
export default Comp1;