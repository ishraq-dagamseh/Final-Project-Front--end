import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Nav, Navbar, Container, Image, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaPaperPlane, FaPlay, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from '../shared_componrnrts/Footer';
import FirstCards from '../shared_componrnrts/FirstFoodCards';
import GirlTextSection from '../shared_componrnrts/GirlTextSection';
import CountCards from '../shared_componrnrts/CountCards';

import Navbar1 from '../shared_componrnrts/Navbar';
function Home1() {
    const [query, setQuery] = useState('');

    // State for YouTube modal (legacy, can be removed if not used)
    const [showModal, setShowModal] = useState(false);
    // State for new video modal
    const [showVideo, setShowVideo] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', query);
    };

    // Use an array for each button's clicked state
    const [clicked, setClicked] = useState([false, false, false, false]);

    const handleClick = (index) => {
        setClicked(prev =>
            prev.map((val, i) => (i === index ? !val : val))
        );
    };

    return (
        <>
        {/* first Navbar */}
<Navbar style={{ backgroundColor: "#27ae60" }} variant="dark">
                <Container className="d-flex justify-content-between text-white">
                    <div className="d-flex gap-4">
                        <span><Image src="Images/ph.jpg" alt="phone" width={12} height={12} /> + (354) 6800 37849</span>
                        <span><Image src="Images/email_icon.jpg" alt="Email" width={12} height={12} /> hello@edusion.com</span>
                        <span><Image src="Images/clock.png" alt="clock" width={12} height={12} /> Mon to Sat Open: 9am - 6pm</span>
                    </div>
                    <div className="d-flex gap-2">
                        <div className="d-flex align-items-center justify-content-center rounded-circle border bg-white" style={{ width: "30px", height: "30px" }}>
                            <Image src="Images/tw.png" alt="Twitter" width={14} height={14} />
                        </div>
                        <div className="d-flex align-items-center justify-content-center rounded-circle border bg-white" style={{ width: "30px", height: "30px" }}>
                            <Image src="Images/face.png" alt="Facebook" width={14} height={14} />
                        </div>
                        <div className="d-flex align-items-center justify-content-center rounded-circle border bg-white" style={{ width: "30px", height: "30px" }}>
                            <Image src="Images/youtube.png" alt="Youtube" width={14} height={14} />
                        </div>
                        <div className="d-flex align-items-center justify-content-center rounded-circle border bg-white" style={{ width: "30px", height: "30px" }}>
                            <Image src="Images/pain.png" alt="Pinterest" width={16} height={16} />
                        </div>
                    </div>
                </Container>
            </Navbar>

        {/* second Navbar */}
            <Navbar1 />



            {/* Text section */}
                <section
                id="home"
                className="home_bg2"
                style={{
                    backgroundImage: "url('https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/home2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    justifyContent: "center"
                }}>
                <h1 style={{ fontSize: "8rem",  justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                    Get Smart <span className='text-decoration-underline' style={{  justifyContent: "center", alignItems: "center", color: "#27ae60" }}>Opportunity for </span> your best Future
                </h1>
                <p  className='fs-5 text-center text-muted'>It is a long established fact that reader will be distracted readable content of a page when.</p>
                <div className=" col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center" style={{ padding: '10px' }}>
                    <div className="my-4 text-center">
                        <Form onSubmit={handleSubmit} >
                            <InputGroup InputGroup size="lg" className="rounded-pill overflow-hidden shadow-sm" style={{  width: "500px", margin: "0 auto" }}>

                                <Form.Control
                                    type="text"
                                    placeholder="Search Your Course Here"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    style={{ borderRadius: "50px 50px 50px 50px", maxWidth: "500px" }} />
                                <Button type="submit" variant="success" className="fw-bold px-4" style={{ 
                                    borderRadius: "50px 50px 50px 50px", 
                                    backgroundColor: "#27ae60",
                                     color: "white", 
                                     
                                     }}>
                                    <div className='d-flex align-items-center'><h4 className='mb-0'>search</h4>
                                        <FaPaperPlane className="text-white" /></div>
                                </Button>
                            </InputGroup>
                        </Form>
                    </div>
                </div>
            </section>
            <Container className='text-center fs-4 mt-3' style={{ padding: '10px' }}>
                <p className='text-muted'> Popular Topics:<span style={{ fontWeight: 'bold' }}> Business,  Data Science, Digital Program, Finance</span></p>
            </Container>

            {/** First Cards Section */}
            <FirstCards />

            {/**Start Learning Section */}
            <Container className='shadow-none p-3 mb-5 bg-light rounded' style={{ padding: '10px' }}>
                    <Row className="mb-5">
                        <Col md={6} className="d-flex flex-column justify-content-center align-items-start" style={{ padding: '10px' }}>
                            <h5 style={{ color: "#27ae60" }}> START LEARNING ________________</h5>
                            <h4 style={{ fontSize: "3rem" }}>
                            Popular <span className='text-decoration-underline' style={{ color: "#27ae60" }}>Topics To Learn </span> From Today.
                            </h4>
                        </Col>
                        <Col md={6}></Col>
                    </Row>
                    {/** Card Section2 */}
                    <Row className="mb-5">
                        <Col md={4}>
                            <Card className='border border-white shadow-sm w-35 mb-3 fs-1' style={{ padding: '10px' }}>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <img src="/Images/ct5.svg" alt="Business" style={{ width: 60, height: 60, marginRight: 16 }} />
                                        <div>
                                            <Card.Title className='fs-1'>Business</Card.Title>
                                            <Card.Text>
                                                <h6 style={{ color: "#27ae60" }}>1 Courses</h6>
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className='border border-white shadow-sm w-35 mb-3 fs-1' style={{ padding: '10px' }}>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <img src="/Images/ct6.svg" alt="Data Science" style={{ width: 60, height: 60, marginRight: 16 }} />
                                        <div>
                                            <Card.Title className='fs-1'>Data Science</Card.Title>
                                            <Card.Text>
                                                <h6 style={{ color: "#27ae60" }}>1 Courses</h6>
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className='border border-white shadow-sm w-35 mb-3 fs-1' style={{ padding: '10px' }}>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <img src="/Images/ct2.svg" alt="Digital Program" style={{ width: 60, height: 60, marginRight: 16 }} />
                                        <div>
                                            <Card.Title className='fs-1'>Digital Program</Card.Title>
                                            <Card.Text>
                                                <h6 style={{ color: "#27ae60" }}>2 Courses</h6>
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className='border border-white shadow-sm w-35 mb-3 fs-1' style={{ padding: '10px' }}>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <img src="/Images/ct3.svg" alt="Finance" style={{ width: 60, height: 60, marginRight: 16 }} />
                                        <div>
                                            <Card.Title className='fs-1'>Finance</Card.Title>
                                            <Card.Text>
                                                <h6 style={{ color: "#27ae60" }}>3 Courses</h6>
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className='border border-white shadow-sm w-35 mb-3 fs-1' style={{ padding: '10px' }}>
                                <Card.Body>
                                <div className="d-flex align-items-center">
                                    <img src="/Images/ct4.svg" alt="Modern Physics" style={{ width: 60, height: 60, marginRight: 16 }} />
                                    <div>
                                    <Card.Title className='fs-1'>Modern Physics</Card.Title>
                                    <Card.Text>
                                        <h6 style={{ color: "#27ae60" }}>3 Courses</h6>
                                    </Card.Text>
                                    </div>
                                </div>
                                </Card.Body>
                            </Card>
                            </Col>
                        <Col md={4}>
                            <Card className='border border-white shadow-sm w-35 mb-3 fs-1' style={{ padding: '10px' }}>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <img src="/Images/ct1.svg" alt="UI/UX Design" style={{ width: 60, height: 60, marginRight: 16 }} />
                                        <div>
                                            <Card.Title className='fs-1'>UI/UX Design</Card.Title>
                                            <Card.Text>
                                                <h6 style={{ color: "#27ae60" }}>3 Courses</h6>
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>

            {/** image beside text */}
            <GirlTextSection />
            {/**popular courses */}
            <Container className='shadow-none p-3 mb-5 bg-light rounded' style={{ padding: '10px' }}>
                    <Row className="mb-5">
                        <Col md={6} className="d-flex flex-column justify-content-center align-items-start" style={{ padding: '10px' }}>
                            <h5 style={{ color: "#27ae60" }}> POPULAR COURSES ________________</h5>
                            <h1 style={{ fontSize: "4rem" }}>
                            Choose Our <span className='text-decoration-underline' style={{ color: "#27ae60" }}>Top Courses </span>
                            </h1>
                        </Col>
                    </Row>
                    {/** Card Section2 */}
                    <Row>
                        <Col md={6}>
                            <Card className='mb-4 p-4'>
                                <Card.Body>
                                    {/* Use Flexbox to align items horizontally with spacing */}
                                    <div className="d-flex align-items-start gap-4">
                                        {/* Image on the left */}
                                        <img 
                                        style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: 250,
                                        height: 200,
                                        objectFit: 'cover',
                                        borderRadius: '0.5rem 0.5rem 0 0',
                                    }}
                                        src="/Images/pexels-karolina-grabowska-5882683.jpg" 
                                        alt="Business" 
                                        />
                                        <div className='position-absolute text-center top-0 start-0 m-3 p-2 bg-success text-white rounded-circle'
                                         style={{backgroundColor:'#27ae60',
                                            borderRadius: "30%",
                                           width: "50px",
                                          height: "50px",
                                         }}>
                                            <span >
												<h4>$265</h4>
												</span>
                                        </div>
                                        {/* Text content on the right */}
                                        <div>
                                        <Card.Title className='text-decoration-underline hover-text'style={{position: 'relative',

                                        top: 0,
                                        left: 250,
                                          }} >
                                            <a className='hover-text' href="/business">Business</a>
                                        </Card.Title>
                                        <Card.Text className='hover-text ' style={{position: 'relative',

                                        top: 0,
                                        left: 250,
                                        width: 200,
                                        height: 200,  }} >
                                            <h2 ><a  className='hover-text'  style={{ textDecoration: 'none'}} href="https://wpdemothemes.com/edusion/courses/financial-security-thinking-and-principles-theory/">Financial Security Thinking and Principles Theory</a></h2>
                                        </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Text className='d-flex justify-content-between align-items-center p-3' style={{ backgroundColor: "white" }}>
                                    <span className='fs-4 ' > <Image  src="/Images/Capture1.PNG" alt="Capture1" /> 6 Lessons</span>
                                    <span className='fs-4 ' > <Image src="/Images/Capture2.PNG" alt="Capture2" /> 4 hours</span>
                                    <span className='fs-4 '> <Image src="/Images/Capture3.PNG" alt="Capture3" /> 4.50</span>
                                    <span className='fs-4 ' > <Image src="/Images/Capture4.PNG" alt="Capture4" /><b> All levels</b></span>


                                </Card.Text>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card className='mb-4 p-4'>
                                <Card.Body>
                                    {/* Use Flexbox to align items horizontally with spacing */}
                                    <div className="d-flex align-items-start gap-4">
                                        
                                        {/* Image on the left */}
                                        <img 
                                        style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: 250,
                                        height: 200,
                                        objectFit: 'cover',
                                        borderRadius: '0.5rem 0.5rem 0 0',
                                    }}
                                        src="/Images/pexels-olia-danilevich-4974912-420x280.jpg" 
                                        alt="Business" 
                                        />
                                        <div className='position-absolute top-0 start-0 m-3 p-2 bg-success text-white rounded-circle' 
                                        style={{backgroundColor:'#27ae60',
                                            borderRadius: "30%",
                                           width: "40px",
                                          height: "40px",
                                         }}>
                                            <span >
												<h5>$250</h5>
												</span>
                                        </div>
                                        {/* Text content on the right */}
                                        <div>
                                        <Card.Title className='text-decoration-underline hover-text'style={{position: 'relative',

                                        top: 0,
                                        left: 250,
                                          }} >
                                            <a className='hover-text' href="https://wpdemothemes.com/edusion/course-category/finance/?tutor-course-filter-category=62">Finance</a>
                                        </Card.Title>
                                        <Card.Text  style={{position: 'relative',

                                        top: 0,
                                        left: 250,
                                        width: 200,
                                        height: 200,  }} >
                                            <h2 ><a className='hover-text ' style={{ textDecoration: 'none'}} href="https://wpdemothemes.com/edusion/courses/professional-ceramic-moulding-for-beginners/">Professional Ceramic Moulding for Beginners</a></h2>
                                        </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Text className='d-flex justify-content-between align-items-center p-3' style={{ backgroundColor: "white" }}>
                                    <span className='fs-4 ' > <Image  src="/Images/Capture1.PNG" alt="Capture1" /> 15 Lessons</span>
                                    <span className='fs-4 ' > <Image src="/Images/Capture2.PNG" alt="Capture2" /> 4 hours</span>
                                    <span className='fs-4 '> <Image src="/Images/Capture3.PNG" alt="Capture3" /> 5.00</span>
                                    <span className='fs-4 ' > <Image src="/Images/Capture4.PNG" alt="Capture4" /><b> All levels</b></span>


                                </Card.Text>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                            <Col md={6}>
                            <Card className='mb-4 p-4'>
                                <Card.Body>
                                    {/* Use Flexbox to align items horizontally with spacing */}
                                    <div className="d-flex align-items-start gap-4">
                                        
                                        {/* Image on the left */}
                                        <img 
                                        style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: 250,
                                        height: 200,
                                        objectFit: 'cover',
                                        borderRadius: '0.5rem 0.5rem 0 0',
                                    }}
                                        src="/Images/pexels-tiia-pakk-4350767.jpg" 
                                        />
                                        <div className='position-absolute top-0 start-0 m-3 p-2 bg-success text-white rounded-circle'
                                         style={{backgroundColor:'#27ae60',
                                            borderRadius: "30%",
                                           width: "40px",
                                          height: "40px",
                                         }}>
                                            <span >
												<h4>Free</h4>
												</span>
                                        </div>
                                        {/* Text content on the right */}
                                        <div>
                                        <Card.Title className='text-decoration-underline hover-text'style={{position: 'relative',

                                        top: 0,
                                        left: 250,
                                          }} >
                                            <a className='hover-text' href="https://wpdemothemes.com/edusion/course-category/ui-ux-design/?tutor-course-filter-category=43">UI/UX Design</a>
                                        </Card.Title>
                                        <Card.Text className='hover-text ' style={{position: 'relative',

                                        top: 0,
                                        left: 250,
                                        width: 200,
                                        height: 200,  }} >
                                            <h2 ><a className='hover-text' style={{ textDecoration: 'none'}} href="https://wpdemothemes.com/edusion/courses/basic-fundamentals-of-interior-graphics-design/">Basic Fundamentals of Interior &amp; Graphics Design</a></h2>
                                        </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Text className='d-flex justify-content-between align-items-center p-3' style={{ backgroundColor: "white" }}>
                                    <span className='fs-4 ' > <Image  src="/Images/Capture1.PNG" alt="Capture1" /> 16 Lessons</span>
                                    <span className='fs-4 ' > <Image src="/Images/Capture2.PNG" alt="Capture2" /> 22hours30minutes</span>
                                    <span className='fs-4 '> <Image src="/Images/Capture3.PNG" alt="Capture3" /> 5.00</span>
                                    <span className='fs-4 ' > <Image src="/Images/Capture4.PNG" alt="Capture4" /> <b>Intermediate</b></span>


                                </Card.Text>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className='mb-4 p-4'>
                                <Card.Body>
                                    {/* Use Flexbox to align items horizontally with spacing */}
                                    <div className="d-flex align-items-start gap-4">
                                        
                                        {/* Image on the left */}
                                        <img 
                                        style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: 250,
                                        height: 200,
                                        objectFit: 'cover',
                                        borderRadius: '0.5rem 0.5rem 0 0',
                                    }}
                                        src="/Images/pexels-pixabay-265667.jpg" 
                                        alt="Business" 
                                        />
                                        <div className='position-absolute top-0 start-0 m-3 p-2 bg-success text-white rounded-circle'
                                         style={{backgroundColor:'#27ae60',
                                            borderRadius: "30%",
                                           width: "40px",
                                          height: "40px",
                                         }}>
                                            <span >
												<h4>Free</h4>
												</span>
                                        </div>
                                        {/* Text content on the right */}
                                        <div>
                                        <Card.Title className='text-decoration-underline hover-text'style={{position: 'relative',

                                        top: 0,
                                        left: 250,
                                          }} >
                                            <a className='hover-text' href="https://wpdemothemes.com/edusion/course-category/digital-program/?tutor-course-filter-category=61">Digital Program</a>
                                        </Card.Title>
                                        <Card.Text className='hover-text ' style={{position: 'relative',

                                        top: 0,
                                        left: 250,
                                        width: 200,
                                        height: 200,  }} >
                                            <h2 ><a className='hover-text' style={{ textDecoration: 'none'}}href="https://wpdemothemes.com/edusion/courses/wordpress-for-beginners-master-wordpress/">WordPress for Beginners – Master WordPress</a></h2>
                                        </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Text className='d-flex justify-content-between align-items-center p-3' style={{ backgroundColor: "white" }}>
                                    <span className='fs-4 ' > <Image  src="/Images/Capture1.PNG" alt="Capture1" /> 15 Lessons</span>
                                    <span className='fs-4 ' > <Image src="/Images/Capture2.PNG" alt="Capture2" /> 7hours30minutes</span>
                                    <span className='fs-4 '> <Image src="/Images/Capture3.PNG" alt="Capture3" /> 4.33</span>
                                    <span className='fs-4 ' > <Image src="/Images/Capture4.PNG" alt="Capture4" /> <b>Beginner</b></span>


                                </Card.Text>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                            <Col md={6}>
                            <Card className='mb-4 p-4'>
                                <Card.Body>
                                    {/* Use Flexbox to align items horizontally with spacing */}
                                    <div className="d-flex align-items-start gap-4">
                                        
                                        {/* Image on the left */}
                                        <img 
                                        style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: 250,
                                        height: 200,
                                        objectFit: 'cover',
                                        borderRadius: '0.5rem 0.5rem 0 0',
                                    }}
                                        src="/Images/pexels-christina-morillo-1181359.jpg" 
                                        alt="Business" 
                                        />
                                        <div className='position-absolute top-0 start-0 m-3 p-2 bg-success text-white  text-center rounded-circle'
                                         style={{backgroundColor:'#27ae60',
                                            borderRadius: "30%",
                                           width: "40px",
                                          height: "40px",
                                         }}>
                                            <span >
												<h5>$300</h5>
												</span>
                                        </div>
                                        
                                        {/* Text content on the right */}
                                        <div>
                                        <Card.Title className='text-decoration-underline hover-text'style={{position: 'relative',

                                        top: 0,
                                        left: 250,
                                          }} >
                                            <a className='hover-text' href="https://wpdemothemes.com/edusion/course-category/data-science/?tutor-course-filter-category=65">Data Science</a>
                                        </Card.Title>
                                        <Card.Text className='hover-text ' style={{position: 'relative',

                                        top: 0,
                                        left: 250,
                                        width: 200,
                                        height: 200,  }} >
                                            <h2 ><a className='hover-text' style={{ textDecoration: 'none'}} href="https://wpdemothemes.com/edusion/courses/the-complete-python-course/">The Complete Python Course for Beginner 2023</a></h2>
                                        </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Text className='d-flex justify-content-between align-items-center p-3' style={{ backgroundColor: "white" }}>
                                    <span className='fs-4 ' > <Image  src="/Images/Capture1.PNG" alt="Capture1" /> 14 Lessons</span>
                                    <span className='fs-4 ' > <Image src="/Images/Capture2.PNG" alt="Capture2" />18hours20minutes</span>
                                    <span className='fs-4 '> <Image src="/Images/Capture3.PNG" alt="Capture3" /> 4.00</span>
                                    <span className='fs-4 ' > <Image src="/Images/Capture4.PNG" alt="Capture4" /><b> Intermediate</b></span>


                                </Card.Text>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className='mb-4 p-4'>
                                <Card.Body>
                                    {/* Use Flexbox to align items horizontally with spacing */}
                                    <div className="d-flex align-items-start gap-4">
                                        
                                        {/* Image on the left */}
                                        <img 
                                        style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: 250,
                                        height: 200,
                                        objectFit: 'cover',
                                        borderRadius: '0.5rem 0.5rem 0 0',
                                    }}
                                        src="/Images/pexels-caio-56759.jpg" 
                                        />
                                        <div className='position-absolute top-0 start-0 m-2 p-2 bg-success text-white rounded-circle'
                                         style={{backgroundColor:'#27ae60',
                                            borderRadius: "30%",
                                           width: "40px",
                                          height: "40px",
                                         }}>
                                            <span >
												<h4>Free</h4>
												</span>
                                        </div>
                                        {/* Text content on the right */}
                                        <div>
                                        <Card.Title className='text-decoration-underline hover-text'style={{position: 'relative',

                                        top: 0,
                                        left: 250,
                                          }} >
                                            <a className='hover-text' href="https://wpdemothemes.com/edusion/course-category/ui-ux-design/?tutor-course-filter-category=43">UI/UX Design</a>
                                        </Card.Title>
                                        <Card.Text className='hover-text ' style={{position: 'relative',

                                        top: 0,
                                        left: 250,
                                        width: 200,
                                        height: 200,  }} >
                                            <h2 ><a className='hover-text' style={{ textDecoration: 'none'}} href="https://wpdemothemes.com/edusion/courses/ultimate-photoshop-training-from-beginner-to-pro/">Ultimate Photoshop Training: From Beginner</a></h2>
                                        </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Text className='d-flex justify-content-between align-items-center p-3' style={{ backgroundColor: "white" }}>
                                    <span className='fs-4 ' > <Image  src="/Images/Capture1.PNG" alt="Capture1" /> 14 Lessons</span>
                                    <span className='fs-4 ' > <Image src="/Images/Capture2.PNG" alt="Capture2" /> 13hours20minutes</span>
                                    <span className='fs-4 '> <Image src="/Images/Capture3.PNG" alt="Capture3" /> 3.33</span>
                                    <span className='fs-4 ' > <Image src="/Images/Capture4.PNG" alt="Capture4" /><b> All levels</b></span>


                                </Card.Text>
                            </Card>
                        </Col>
                    </Row>
                    <div className='d-flex justify-content-center'>
                        <Button className='hover-btn rounded-pill fs-4 mb-5 border-0'
                                    as={Link}
                                    to="/"
                                >
                                    View All Courses
                                </Button>
                            </div>
            </Container>

            {/** Count Cards Section */}

            <Container className='my-5'>
                <CountCards />
            </Container>

            {/** Video Section */}

            <Container className='my-5 '>
                <div style={{ position: "relative", width: "100%", height: "500px", margin: "0 auto" }}>
                    <img
                        src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/video.jpg"
                        alt="Background"
                        style={{ width: "100%", height: "500px", display: "block" }}
                    />
                    <Button
                        className="video-play-button"
                        onClick={() => setShowVideo(true)}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "#27ae60",
                            border: "none",
                            borderRadius: "50%",
                            width: "80px",
                            height: "80px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 20px #27ae60",
                            zIndex: 2,
                        }}
                        aria-label="Play YouTube Video"
                    >
                        <FaPlay style={{ color: "white", fontSize: "2.5rem" }} />
                    </Button>
                </div>

                <Modal show={showVideo} onHide={() => setShowVideo(false)} centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Watch Our Video</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ padding: 0 }}>
                        <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '56.25%' }}>
                            <iframe
                                src="https://www.youtube.com/embed/0KYxN1kJSb0?autoplay=1"
                                title="YouTube video player"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '50%',
                                    height: '50%',
                                    border: 'none'
                                }}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Modal.Body>
                </Modal>
            </Container>

            {/** Trusted Company section */}
            <Container>
              <div className="my-4 text-center">
                <h3 style={{ fontSize: "2rem" }} className='bg-success bg-opacity-10 text-success fw-bold p-3 rounded-pill d-inline-block'> Trusted Company Around the World!</h3>
              </div>
              
            </Container>

            {/** Best platform section */}

            <Container className=" p-3  mb-5 bg-light rounded " style={{ padding: '10px' }}>
                <Row>
                    <Col md={6} className=" mb-5 d-flex flex-column justify-content-center align-items-start" 
                    >
                       <p className="text-success"><h4>Best Online Learning Platform</h4></p>
                       <h1 style={{ fontSize: "5rem" }}>One Platform & Many <span className='text-decoration-underline' style={{ color: "#27ae60" }}>Courses</span> For You</h1>
                       <p className="text-muted fs-2 "> From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.</p>
                       <h3><Image src="/Images/true.PNG" className="img-fluid fs-2"/>9/10 Average Satisfaction Rate</h3>
                       <h3><Image src="/Images/true.PNG" className="img-fluid fs-2"  />96% Completitation Rate</h3>
                       <h3><Image src="/Images/true.PNG" className="img-fluid fs-2" />Friendly Environment & Expert Teacher</h3>                                            
                    
                    
                    </Col>
                    <Col md={6} style={{ fontSize: "5rem" }}>
                        <section style={{ background: "url(https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/section-bg-2.png)" }}>
                          <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0" style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                            <div className="cp_img " >
                                <Image  decoding="async" src="/Images/about5.png"
                                     alt="Best Online Learning Platform" style={{ width: 550, height: 550 }}/>

						</div>
					</div>		  
		</section>

        </Col>
        </Row>
                  <div>
                    <Button className='hover-btn2 fs-4 mb-5 border-0 text-dark rounded-pill'
                                    as={Link}
                                    to="/courses"
                                >
                                    EXPLORE OUR COURSES {'->'}
                                </Button>  
                  </div>
            </Container>

            {/**  */}
            <Container>
                <div>
                <p className="text-success" style={{ color: "#27ae60" }}><h4>Popular Courses _______________
</h4></p>
                       <h1 style={{ fontSize: "5rem" }}>Choose Our <span className='text-decoration-underline' style={{ color: "#27ae60" }}>Top Courses</span> </h1>

                </div>

            <Container className="my-5">
                <Row >
                    <Col md={4}>
                    <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
                        <Card.Body>
                                    <Card.Title>
                                        <h1 style={{ fontSize: "3rem" }}>Free</h1>
                                    </Card.Title>
                                    <Card.Text>
                                        <h1>$0</h1>
                                        <p className="fs-5 text-muted">/Month</p>
                                        <p className="fs-3 text-decoration-underline"
                                         style={{ color: "#27ae60", fontWeight: "bold" }}>Upgrade as you need</p>
                                        <p className='text-muted'>   _______________________________________________________________________________</p> 
                                        <ul className="list-unstyled text-start my-4">
                                            <li className="mb-3">
                                                <i className="bi bi-journal-text text-success me-2"></i>
                                                Learn at your own pace
                                                </li>
                                                <li className="mb-3">
                                                <i className="bi bi-file-earmark-text text-success me-2"></i>
                                                Learn at your own pace
                                                </li>
                                                <li className="mb-3">
                                                <i className="bi bi-lightbulb text-success me-2"></i>
                                                Learn at your own pace
                                                </li>
                                                <li className="mb-3">
                                                <i className="bi bi-star text-success me-2"></i>
                                                Learn at your own pace
                                                </li>
                                                 <li className="mb-3">
                                                    <i className="bi bi-camera-video text-success me-2"></i>
                                                    Learn at your own pace
                                                    </li>
                                                    <li className="mb-3">
                                                    <i className="bi bi-send text-success me-2"></i>
                                                    Learn at your own pace
                                                    </li>
                                                </ul>

                                                {/* Button */}
                                                <Button variant="success" className=" rounded-3 fw-bold">
                                                    Start Now
                                                </Button>
                                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
                                <Card.Body>
                                    <Card.Title>
                                        <h1 style={{ fontSize: "3rem" }}>Free</h1>
                                    </Card.Title>
                                    <Card.Text>
                                        <h1>$0</h1>
                                        <p className="fs-5 text-muted">/Month</p>
                                        <p className="fs-3 text-decoration-underline"
                                         style={{ color: "#27ae60", fontWeight: "bold" }}>Upgrade as you need</p>
                                        <p className='text-muted'>   _______________________________________________________________________________</p> 
                                        <ul className="list-unstyled text-start my-4">
                                            <li className="mb-3">
                                                <i className="bi bi-journal-text text-success me-2"></i>
                                                Learn at your own pace
                                            </li>
                                            <li className="mb-3">
                                                <i className="bi bi-file-earmark-text text-success me-2"></i>
                                                Learn at your own pace
                                            </li>
                                            <li className="mb-3">
                                                <i className="bi bi-lightbulb text-success me-2"></i>
                                                Learn at your own pace
                                            </li>
                                            <li className="mb-3">
                                                <i className="bi bi-star text-success me-2"></i>
                                                Learn at your own pace
                                            </li>
                                            <li className="mb-3">
                                                <i className="bi bi-camera-video text-success me-2"></i>
                                                Learn at your own pace
                                            </li>
                                            <li className="mb-3">
                                                <i className="bi bi-send text-success me-2"></i>
                                                Learn at your own pace
                                            </li>
                                        </ul>

                                        {/* Button */}
                                        <Button variant="success" className="px-4 py-2 rounded-3 fw-bold">
                                            Start Now
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
                                <Card.Body >
                                    <Card.Title>
                                        <h1 style={{ fontSize: "3rem" }}>Free</h1>
                                    </Card.Title>
                                    <Card.Text>
                                        <h1>$0</h1>
                                        <p className="fs-5 text-muted">/Month</p>
                                        <p className="fs-3 text-decoration-underline"
                                         style={{ color: "#27ae60", fontWeight: "bold" }}>Upgrade as you need</p>
                                        <p className='text-muted'>   _______________________________________________________________________________</p> 
                                        <ul className="list-unstyled text-start my-4">
                                            <li className="mb-3">
                                                <i className="bi bi-journal-text text-success me-2"></i>
                                                Learn at your own pace
                                            </li>
                                            <li className="mb-3">
                                                <i className="bi bi-file-earmark-text text-success me-2"></i>
                                                Learn at your own pace
                                            </li>
                                            <li className="mb-3">
                                                <i className="bi bi-lightbulb text-success me-2"></i>
                                                Learn at your own pace
                                            </li>
                                            <li className="mb-3">
                                                <i className="bi bi-star text-success me-2"></i>
                                                Learn at your own pace
                                            </li>
                                            <li className="mb-3">
                                                <i className="bi bi-camera-video text-success me-2"></i>
                                                Learn at your own pace
                                            </li>
                                            <li className="mb-3">
                                                <i className="bi bi-send text-success me-2"></i>
                                                Learn at your own pace
                                            </li>
                                        </ul>

                                        {/* Button */}
                                        <Button variant="success" className=" rounded-3 fw-bold">
                                            Start Now
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>
            </Container>
            <div 
                className="d-flex flex-column justify-content-center align-items-center text-center" 
                
                >
                <h1 style={{ fontSize: "3.5rem", position: 'relative',

                                        top: 0,
                                        left: 50,
                                        width: 500,
                                        height: 100,}}  >
                    Subscribe to our newsletter, We don't make any spam.
                </h1>
                <p className="text-muted" style={{ fontSize: "1.5rem", maxWidth: "700px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className=" col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center" style={{ padding: '10px' }}>
                    <div className="my-4 text-center">
                        <Form onSubmit={handleSubmit} >
                            <InputGroup InputGroup size="lg" className="rounded-pill overflow-hidden shadow-sm" style={{  width: "500px", margin: "0 auto" }}>

                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your Email Address"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    style={{ borderRadius: "50px 50px 50px 50px", maxWidth: "500px" }} />
                                <Button type="submit" variant="success" className="fw-bold px-4" style={{ 
                                    borderRadius: "50px 50px 50px 50px", 
                                    backgroundColor: "#27ae60",
                                     color: "white", 
                                     
                                     }}>
                                    <div className='d-flex align-items-center'><h4 className='mb-0'></h4>
                                        <FaPaperPlane className="text-white" /></div>
                                </Button>
                            </InputGroup>
                        </Form>
                    </div>
                </div>
                </div>


            </Container>
        {/**blog section */}
        <Container className='my-5' style={{ padding: '20px',
    backgroundImage: "url('https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/home2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    justifyContent: "center"
  }}
>
            <div>
                <p className="text-success" style={{ color: "#27ae60" }}><h4>News _______________
</h4></p>
                       <h1 style={{ fontSize: "5rem" }}>Our Latest  <span className='text-decoration-underline' style={{ color: "#27ae60" }}>Blogs</span> </h1>

                </div>


            <Row className="mt-4" style={{ padding: '10px' }}>
                <Col md={4} className="mb-4">
                    <Card className="shadow-sm border-0">
                        <Card.Img variant="top" 
                        src="/Images/pexels-thisisengineering-3861972-370x260.jpg"
                         />
                        <Card.Body>
                            <Card.Text>
                                <p style={{ fontSize: "1.5rem" , color: "#27ae60", fontWeight: "bold" }}> <span className='text-muted'>Jun 01, 2024 |</span>  Technology</p>
                                 <p><a className='hover-text fs-3' style={{ textDecoration: 'none', fontWeight: "bold" }} href="https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881">Professional Mobile Painting and Sculpting</a></p>
                            </Card.Text>
                            <Button className='hover-btn2 rounded-pill fs-4 mb-5 border-0'
                                    as={Link}
                                    to="https://wpdemothemes.com/edusion/professional-mobile-painting-and-sculpting/"
                                >
                                 <h4 style={{  color: "#1f1a36ff" }}>Read More {'->'}</h4>

                                </Button>
                        </Card.Body>
                    </Card>
                </Col>
            
                <Col md={4} className="mb-4">
                    <Card className="shadow-sm border-0">
                        <Card.Img variant="top" src="/Images/pexels-thisisengineering-3862132-370x260.jpg" />
                        <Card.Body>
                            <Card.Text>
                                <p style={{ fontSize: "1.5rem" , color: "#27ae60", fontWeight: "bold" }}> <span className='text-muted'>May 29, 2024 | </span> Programming</p>
                                <p><a className='hover-text fs-3' style={{ textDecoration: 'none', fontWeight: "bold" }} href="https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881">Professional Ceramic Moulding for Beginners</a></p>

                            </Card.Text>
                        <Button className='hover-btn2 rounded-pill fs-4 mb-5 border-0'
                                    as={Link}
                                    to="https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881"
                                >
                                    <h4 style={{  color: "#1f1a36ff" }}>Read More {'->'}</h4>
                                </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2} className="mb-4" >
                    <Card className="shadow-sm mt-4 border-0" style={{ width: '300px' }}>
                        <Card.Body>
                            <Card.Text>
                                <p style={{ fontSize: "1.5rem" , color: "#27ae60", fontWeight: "bold" }}> <span className='text-muted'>Jun 01, 2024 |  </span>Technology</p>
                               <p><a className='hover-text fs-3' style={{ textDecoration: 'none', fontWeight: "bold" }} href="https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881">Professional Mobile Painting and Sculpting</a></p>

                            </Card.Text>
                        <Button className='hover-btn2 rounded-pill fs-4 mb-5 border-0'
                                    as={Link}
                                    to="https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881"
                                >
                                 <h4 style={{  color: "#1f1a36ff" }}>Read More {'->'}</h4>

                                </Button>
                        </Card.Body>
                    </Card>

                    <Card className="shadow-sm mt-4 border-0" style={{ width: '300px' }}>
                        <Card.Body>
                            <Card.Text>
                                <p style={{ fontSize: "1.5rem" , color: "#27ae60", fontWeight: "bold" }}> <span className='text-muted'> May 29, 2024 | </span> Programming</p>                            
                               <p><a className='hover-text fs-3' style={{ textDecoration: 'none', fontWeight: "bold" }} href="https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881">Professional Ceramic Moulding for Beginners</a></p>

                            </Card.Text>
                        <Button className='hover-btn2 rounded-pill fs-4 mb-5 border-0'
                                    as={Link}
                                    to="https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881"
                                >
                                    <h4 style={{  color: "#1f1a36ff" }}>Read More {'->'}</h4>
                                </Button>                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Footer />
        
</>
    );
}
export default Home1;