import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Nav, Navbar, Container, Image, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaPaperPlane, FaPlay, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar1 from '../shared_componrnrts/Navbar';
import Footer from '../shared_componrnrts/Footer';
import FirstCards from '../shared_componrnrts/FirstFoodCards';
import GirlTextSection from '../shared_componrnrts/GirlTextSection';
import CountCards from '../shared_componrnrts/CountCards';
import DropDownQuestions from '../shared_componrnrts/DropDownQuestions';

function About() {
    const [count, setCount] = useState(0); // State to hold the count value

    const handleIncrement = () => {
        setCount(count + 1);
    };

   

    return (
        <>
            <Navbar1 />

            {/** Text section */}
            <section
                id="home"
                className="home_bg2"
                style={{
                    backgroundImage: "url('https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/section-bg-2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    width: "100%",
                    height: "300px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <div className='text-success p-3 text-center'>
                    <h1 className='text-center' style={{ fontSize: "4rem", color: "#212058ff" }}>
                        About Us
                    </h1>
                    <p className='fs-5 text-center' style={{ backgroundColor: "white" }}>
                        <a style={{ textDecoration: "none", color: "black" }} href="/"><span className='hover-text'>Home</span> / About Us</a>
                    </p>
                </div>
            </section>
            {/** first card Section */}
            <Container className='my-5'>
                <FirstCards />
            </Container>
            
            {/** Girl Text Section */}
            <GirlTextSection />
            {/** why edusion Section */}
            <Container className='mt-5 mb-5 my-5'>
                            <Row className="mb-5">
                                    <Col md={6} className="d-flex flex-column  border-0 justify-content-center align-items-start " style={{ 
                                        padding: '10px' }}>
                                        <h5 style={{ color: "#27ae60" }}> Why Choose Edusion ________________</h5>
                                        <h1 style={{ fontSize: "3.5rem" }}>
                                         Find the <span className='text-decoration-underline' style={{ color: "#27ae60" }}>best features</span> of Edusion
                                        </h1>
                                    </Col>
                                </Row>
            <Row className="mb-5">
                {/* 6 cards 3 in each row */}
                <Col md={4}>
                    <Card className='text-center h-100 d-flex flex-column justify-content-between'>
                        <Card.Body className='d-flex flex-column justify-content-between h-100'>
                            <div className="d-flex align-items-center w-100 mb-3" style={{gap: '1rem'}}>
                                <Image src='/Images/b.PNG' />
                                <Card.Title className='fs-1 mb-0  w-50' style={{ color: '#0b223aff' }}>
                                    <a style={{ textDecoration: "none", color: "#0b223aff" }} href="./about">Learn More Anywhere</a>
                                </Card.Title>
                            </div>
                            <div className="flex-grow-1 d-flex align-items-end w-100">
                                <Card.Text className="w-50">
                                    <p className='fs-5 text-muted text-start mb-0'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='text-center h-100 d-flex flex-column justify-content-between'>
                        <Card.Body className='d-flex flex-column justify-content-between h-100'>
                            <div className="d-flex align-items-center w-100 mb-3" style={{gap: '1rem'}}>
                                <Image src='/Images/h.PNG' />
                                <Card.Title className='fs-1 mb-0  w-50' style={{ color: '#0b223aff' }}>
                                    <a style={{ textDecoration: "none", color: "#0b223aff" }} href="./about">Expert
Instructor</a>
                                </Card.Title>
                            </div>
                            <div className="flex-grow-1 d-flex align-items-end w-100">
                                <Card.Text className="w-50">
                                    <p className='fs-5 text-muted text-start mb-0'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='text-center h-100 d-flex flex-column justify-content-between'>
                        <Card.Body className='d-flex flex-column justify-content-between h-100'>
                            <div className="d-flex align-items-center w-100 mb-3" style={{gap: '1rem'}}>
                                <Image src='/Images/p.PNG' />
                                <Card.Title className='fs-1 mb-0  w-50' style={{ color: '#0b223aff' }}>
                                    <a style={{ textDecoration: "none", color: "#0b223aff" }} href="./about">Team Management Instructor</a>
                                </Card.Title>
                            </div>
                            <div className="flex-grow-1 d-flex align-items-end w-100">
                                <Card.Text className="w-50">
                                    <p className='fs-5 text-muted text-start mb-0'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <Row>
                
                <Col md={4}>
                    <Card className='text-center h-100 d-flex flex-column justify-content-between'>
                        <Card.Body className='d-flex flex-column justify-content-between h-100'>
                            <div className="d-flex align-items-center w-100 mb-3" style={{gap: '1rem'}}>
                                <Image src='/Images/e.PNG' />
                                <Card.Title className='fs-1 mb-0  w-50' style={{ color: '#0b223aff' }}>
                                    <a style={{ textDecoration: "none", color: "#0b223aff" }} href="./about">Course Planning</a>
                                </Card.Title>
                            </div>
                            <div className="flex-grow-1 d-flex align-items-end w-100">
                                <Card.Text className="w-50">
                                    <p className='fs-5 text-muted text-start mb-0'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='text-center h-100 d-flex flex-column justify-content-between'>
                        <Card.Body className='d-flex flex-column justify-content-between h-100'>
                            <div className="d-flex align-items-center w-100 mb-3" style={{gap: '1rem'}}>
                                <Image src='/Images/l.PNG' />
                                <Card.Title className='fs-1 mb-0  w-50' style={{ color: '#0b223aff' }}>
                                    <a style={{ textDecoration: "none", color: "#0b223aff" }} href="./about">Teacher Monitoring</a>
                                </Card.Title>
                            </div>
                            <div className="flex-grow-1 d-flex align-items-end w-100">
                                <Card.Text className="w-50">
                                    <p className='fs-5 text-muted text-start mb-0'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='text-center h-100 d-flex flex-column justify-content-between'>
                        <Card.Body className='d-flex flex-column justify-content-between h-100'>
                            <div className="d-flex align-items-center w-100 mb-3" style={{gap: '1rem'}}>
                                <Image src='/Images/em.PNG' />
                                <Card.Title className='fs-1 mb-0  w-50' style={{ color: '#0b223aff' }}>
                                    <a style={{ textDecoration: "none", color: "#0b223aff" }} href="./about">24/7 Strong Support</a>
                                </Card.Title>
                            </div>
                            <div className="flex-grow-1 d-flex align-items-end w-100">
                                <Card.Text className="w-50">
                                    <p className='fs-5 text-muted text-start mb-0'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>

            {/**Count cards */}
            <Container className='my-5'>
                <CountCards />
            </Container>

            <Container className='mt-5 mb-5 my-5'>
                            <Row className="mb-5">
                                    <Col md={6} className="d-flex flex-column  border-0 justify-content-center align-items-start " style={{ 
                                        padding: '10px' }}>
                                        <h5 style={{ color: "#27ae60" }}> Team Member ________________</h5>
                                        <h1 style={{ fontSize: "3.5rem" }}>
                                         Our Expert <span className='text-decoration-underline' style={{ color: "#27ae60" }}>Instructors</span> 
                                        </h1>
                                    </Col>
                                </Row>

                                {/*cards image above texts as instructors cards*/}
                                <Row>
                                    <Col md={3}>
                                        <Card className='text-center'>
                                            <Card.Img variant="top" src="/Images/Daniel.PNG" class="attachment-full size-full" sizes="(max-width: 330px) 100vw, 330px">
                                            </Card.Img>
                                            <Card.Body>
                                                <Card.Text>
                                                    <div><h3><a style={{ textDecoration: 'none', color: "#27ae60" }} href="https://wpdemothemes.com/edusion/profile/daniel?view=instructor">Daniel Miller</a></h3></div>
                                                    <span className="post">Logo Expert</span>
                                                    <div >
                                                        <div>
                                                            <span ><Image src="/Images/note.PNG"  /></span>
                                                            <p style={{ display: 'inline-block', marginLeft: '10px', textDecoration: 'underline' }}><h5>3 Courses</h5></p>
                                                            <span ><Image src="/Images/pp.PNG"  /></span>
                                                            <p style={{ display: 'inline-block', marginLeft: '10px', textDecoration: 'underline' }}><h5>3 Students</h5></p>
                                                            </div>
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={3}>
                                        <Card className='text-center'>
                                            <Card.Img variant="top"  src="/Images/d2.PNG" class="attachment-full size-full"  sizes="(max-width: 330px) 100vw, 330px">
                                            </Card.Img>
                                            <Card.Body>
                                                <Card.Text>
                                                    <div><h3><a href="https://wpdemothemes.com/edusion/profile/edusion?view=instructor">Masum Billah</a></h3></div>
                                                    <span className="post">Developer</span>
                                                    <div >
                                                        <div>
                                                            <span ><Image src="/Images/note.PNG"  /></span>
                                                            <p style={{ display: 'inline-block', marginLeft: '10px', textDecoration: 'underline' }}><h5>6 Courses</h5></p>
                                                            <span ><Image src="/Images/pp.PNG"  /></span>
                                                            <p style={{ display: 'inline-block', marginLeft: '10px', textDecoration: 'underline' }}><h5>5 Students</h5></p>
                                                            </div>
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={3}>
                                        <Card className='text-center'>
                                            <Card.Img variant="top" decoding="async" src="/Images/sm.PNG"  sizes="(max-width: 330px) 100vw, 330px">
                                            </Card.Img>
                                            <Card.Body>
                                                <Card.Text>
                                                    <div><h3><a href="https://wpdemothemes.com/edusion/profile/kenneth?view=instructor">Kenneth Renteria</a></h3></div>
                                                    <span className="post">Marketer</span>
                                                    <div >
                                                        <div>
                                                            <span ><Image src="/Images/note.PNG"  /></span>
                                                            <p style={{ display: 'inline-block', marginLeft: '10px', textDecoration: 'underline' }}><h5>0 Courses</h5></p>
                                                            <span ><Image src="/Images/pp.PNG"  /></span>
                                                            <p style={{ display: 'inline-block', marginLeft: '10px', textDecoration: 'underline' }}><h5>0 Students</h5></p>
                                                            </div>
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={3}>
                                        <Card className='text-center'>
                                            <Card.Img variant="top" decoding="async" src="/Images/ka.PNG"  sizes="(max-width: 330px) 100vw, 330px">
                                            </Card.Img>
                                            <Card.Body>
                                                <Card.Text>
                                                    <div><h3><a href="https://wpdemothemes.com/edusion/profile/richard?view=instructor">Richard Hood</a></h3></div>
                                                    <span className="post">Marketer</span>
                                                    <div >
                                                        <div>
                                                            <span ><Image src="/Images/note.PNG"  /></span>
                                                            <p style={{ display: 'inline-block', marginLeft: '10px', textDecoration: 'underline' }}><h5>2 Courses</h5></p>
                                                            <span ><Image src="/Images/pp.PNG"  /></span>
                                                            <p style={{ display: 'inline-block', marginLeft: '10px', textDecoration: 'underline' }}><h5>0 Students</h5></p>
                                                            </div>
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                </Container>

            {/**/}
            <Container className=" p-3  mb-5 bg-light rounded " style={{ padding: '10px' }}>
                <Row>
                    <Col md={6} className=" mb-5 d-flex flex-column justify-content-center align-items-start" 
                    >
                       <p className="text-success" style={{ color: "#27ae60" }}><h4>Frequently Asked Question_______________</h4></p>
                       <h1 style={{ fontSize: "5rem" }}>General<span className='text-decoration-underline' style={{ color: "#27ae60" }}>Questions</span></h1>
                       <div className='buttons-container'>
					    <DropDownQuestions />

                       </div>
                    </Col>
                    <Col md={6} style={{ fontSize: "5rem" }}>
                        <section style={{ background: "url(https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/section-bg-2.png)" }}>
                          <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0" style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                            <div className="cp_img " >
                                <Image  decoding="async" src="/Images/faq.png"
                                     alt="Best Online Learning Platform" style={{ width: 550, height: 550 }}/>

						</div>
					</div>		  
		</section>

        </Col>
        </Row>
        </Container>

        <Container>
            {/** Trusted Company section */}
                          <div className="my-4 text-center">
                            <h3 style={{ fontSize: "2rem" }} className='bg-success bg-opacity-10 text-success fw-bold p-3 rounded-pill d-inline-block'> Trusted Company Around the World!</h3>
                          </div>
                          
        </Container>
       


            <Footer />
        </>
    );
}
export default About;