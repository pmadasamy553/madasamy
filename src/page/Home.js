import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data before submission:', formData); // Log form data before submission
        try {
          const response = await axios.post('http://localhost:5000/api/contacts', formData);
          console.log('Response:', response); // Log response from the backend
          alert('Message sent successfully!');
        } catch (error) {
          console.error('Error:', error); // Log any errors that occur
          alert('Failed to send message.');
        }
        console.log('Form Data after submission:', formData); // Log form data after submission
      };
  return (   
     <>




<div id="about_us" class="about-us container-fluid">
           <div class="container">
               <div class="session-title row">
                    <h2>About Me</h2>
                    <p>I am  (M.Sc)Scond-year college student and self-taught full-stack developer.</p>
                    <div class="heading-line"></div>
                </div>
                <div class="about-row row">
                   <div class="image-col col-md-4">
                       <img src="assets/me/madasamy p s.jpg" alt="" />
                       <a href="./assets/images/madasamy.pdf" className="btn btn-primary text-white">
                  <i className="fas fa-download"></i> Download CV
                </a>
                   </div>
                   <div class="detail-col col-md-8">
                       <h2>MADASAMY </h2>
                        <h6>Freelance Web Designer</h6>
                        <p> I am proficient in a variety of programming languages, such as TypeScript, Rust, and C.
                            I am also familiar with a range of web development frameworks and tools such as React,
                            Next.js, and Vite and database management systems such as MongoDB and Prisma.</p>
                          <div class="row">
                            <div class="col-md-6 col-12">
                                <div class="info-list">
                                    <ul>
                                        <li><span>Birthday:</span>05. 05.2003</li>
                                        <li><span>City:</span>Rajapalayam</li>
                                        <li><span>Study:</span>Ayya Nadar Janaki Ammal <br/>College(Autonomous)Sivakas</li>
                                        <li><span>Website:</span>https://madasamy.vercel.app/</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-12">
                                <div class="info-list">
                                    <ul>
                                        <li><span>Age:</span>21 Years</li>
                                        <li><span>Degree:</span>Master</li>
                                        <li><span>Mail:</span>pmadasamy553@gmail.com</li>
                                        <li><span>Phone:</span>+91 63 81 25 95 11</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                   </div>
                    
                    
                  
                </div>
           </div>    
            
    

<div id="services"  class="services container-fluid">
           <div class="container">
               <div class="session-title row">
                    <h2>Servcies I Provide</h2>
                   
                    <div class="heading-line"></div>
                </div>
                <div class="services-row row">
                    <div class="col-md-4 seric-div">
                        <div class="service-card">
                            <i class="far fa-file-image"></i>
                            <h4>Graphic Design</h4>
                          
                        </div>
                    </div>
                    <div class="col-md-4 seric-div">
                        <div class="service-card">
                           <i class="fas fa-desktop"></i>
                            <h4>Web Development</h4>
                          
                        </div>
                    </div>
                    <div class="col-md-4 seric-div">
                        <div class="service-card">
                            <i class="fas fa-bullhorn"></i>
                            <h4>Digital Marketing</h4>
                          
                        </div>
                    </div>
                    <div class="col-md-4 seric-div">
                        <div class="service-card">
                            <i class="fab fa-uikit"></i>
                            <h4>UI/UX Design</h4>
                          
                        </div>
                    </div>
                    <div class="col-md-4 seric-div">
                        <div class="service-card">
                           <i class="fas fa-suitcase"></i>
                            <h4>Business Analysis</h4>
                          
                        </div>
                    </div>
                    <div class="col-md-4 seric-div">
                        <div class="service-card">
                            <i class="fas fa-mobile-alt"></i>
                            <h4>Mobile App Development</h4>
                          
                        </div>
                    </div>
                </div>
              </div>
        </div>






  <div id="skills" class="skills container-fluid">
            <div class="row">
                <div class="col-md-6 skii-div tech-skill">
                    <div class="title">
                        <h2>Technical Skill</h2>
                       
                    </div>
                    
                    <ul>
                        <li>
                            <label for="">UI/UX Designer</label>
                                <div class="progress">
                                  <div class="progress-bar bg-warning" role="progressbar" style= {{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                        </li>
                         <li>
                            <label for="">JavaScript</label>
                                <div class="progress">
                                  <div class="progress-bar bg-warning" role="progressbar" style= {{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                        </li>
                         <li>
                            <label for="">Java web development ( JSP )</label>
                                <div class="progress">
                                  <div class="progress-bar bg-warning" role="progressbar" style= {{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                        </li>
                         <li>
                            <label for="">Python web framework</label>
                                <div class="progress">
                                  <div class="progress-bar bg-warning" role="progressbar" style={{ width:"65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                        </li>
                         
                    </ul>
                </div>
                <div class="col-md-6 skii-div pro-skill">
                    <div class="title">
                        <h2>Technical Skill</h2>
                       
                    </div>
                     <ul>
                        <li>
                            <label for="">Cyber Security( bug bounty )</label>
                            <div class="progress">
                              <div class="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </li>
                         <li>
                            <label for="">Unity (Game Engine)</label>
                            <div class="progress">
                              <div class="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </li>
                         <li>
                            <label for="">Adobe Premiere Pro</label>
                            <div class="progress">
                              <div class="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </li>
                         <li>
                            <label for="">Linux( kali )</label>
                            <div class="progress">
                              <div class="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{ width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>  

        <div id="services"  class="services container-fluid">
           <div class="container">
               <div class="session-title row">
                    <h2>Project</h2>
                    <div class="heading-line"></div>
                      <div class="row">
                      <div className="marquee">
   

                      <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4" style={{ width: "100%" }}>
            <img src="./assets/images/tech.png" className="card-img-top" alt="Techunison Software" />
            <div className="card-body">
              <h5 className="card-title">Techunison Software <br /> website with(Chatbot)</h5>
              <a href="https://techunison.vercel.app/" className="btn btn-primary">Link</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4" style={{ width: "100%" }}>
            <img src="./assets/images/me.png" className="card-img-top" alt="Techunison Software" />
            <div className="card-body">
              <h5 className="card-title">My Profile Portfolio</h5>
              <a href="https://madasamy.vercel.app/" className="btn btn-primary">Link</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4" style={{ width: "100%" }}>
            <img src="./assets/images/mrtamil.png" className="card-img-top" alt="Techunison Software" />
            <div className="card-body">
              <h6 className="card-title">Mrtamil studio&photography</h6>
              <a href="https://mrtamil.vercel.app/" className="btn btn-primary">Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
              </div>
      </div>
      </div>
      </div>             




<div id="portfolio" class="gallery">    
           <div class="container">
              <div class="session-title row">
                    <h2>Portfolio</h2>
                 
                    <div class="heading-line"></div>
                </div>
              <div class="row">
                



            <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe">
                <img src="./assets/me/1.jpg" class="img-responsive" alt='img' />
            </div>

            <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter sprinkle">
                <img src="./assets/me/2.jpg" class="img-responsive" alt='img' />
            </div>

            <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe">
                <img src="./assets/me/4.jpg" class="img-responsive" alt='img' />
            </div>

            <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter irrigation">
                <img src="./assets/me/3.jpg" class="img-responsive" alt='img' />
            </div>

            <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter spray">
                <img src="./assets/me/10.jpg" class="img-responsive" alt='img' />
            </div>

          

            <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter spray">
                <img src="./assets/me/7.jpg" class="img-responsive" alt='img' />
            </div>

            <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter irrigation">
                <img src="./assets/me/8.jpg" class="img-responsive" alt='img' />
            </div>

            <div class="gallery_product col-lg-3 col-md-4 col-sm-3 col-xs-6 filter irrigation">
                <img src="./assets/me/9.jpg" class="img-responsive" alt='img' />
            </div>

            
        </div>
    </div>
       
       
       </div>



<section id="cntact_us" class="contact-us-single">
        <div class="row no-margin">
            <div class="col-sm-6 no-padding">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d585.20781696806!2d77.46431188642677!3d9.35155609693608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06edf9a82b7d5b%3A0xfc30703d11be5da!2sVanniya%20raja%20kovil!5e0!3m2!1sen!2sin!4v1717143291147!5m2!1sen!2sin"
  width="600"
  height="480"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Google Maps - Vanniya Raja Kovil"
></iframe>
  </div>
  <div className="col-sm-6 cop-ck">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row cf-ro">
          <div className="col-sm-3">
            <label>Enter Name :</label>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              className="form-control input-sm"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row cf-ro">
          <div className="col-sm-3">
            <label>Email Address :</label>
          </div>
          <div className="col-sm-8">
            <input
              type="email"
              placeholder="Enter Email Address"
              name="email"
              className="form-control input-sm"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row cf-ro">
          <div className="col-sm-3">
            <label>Mobile Number:</label>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              placeholder="Enter Mobile Number"
              name="mobile"
              className="form-control input-sm"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row cf-ro">
          <div className="col-sm-3">
            <label>Enter Message:</label>
          </div>
          <div className="col-sm-8">
            <textarea
              rows="5"
              placeholder="Enter Your Message"
              name="message"
              className="form-control input-sm"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="row cf-ro">
          <div className="col-sm-3">
            <label></label>
          </div>
          <div className="col-sm-8">
            <button className="btn btn-primary btn-sm" type="submit">Send Message</button>
          </div>
        </div>
      </form>
    </div>
        </div>
    </section>   
</>
   
  );
}

export default Home;
