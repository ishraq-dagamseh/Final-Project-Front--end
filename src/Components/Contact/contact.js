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
import Stack from 'react-bootstrap/Stack';

function Contact() {
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
                    <h1 className='text-center' style={{ fontSize: "4rem" , color: "#212058ff"}}>
                        Contact
                    </h1>
                    <p className='fs-5 text-center' style={{ backgroundColor: "white" }}>
                        <a style={{ textDecoration: "none", color: "black" }} href="/"><span className='hover-text'>Home</span> / Contact</a>
                    </p>
                </div>
            </section>
            <Container className="my-4 w-50 h-600" style={{ fontSize: '1.2rem', padding: '5rem' }} >
                <Row>
                    <Stack direction="horizontal" gap={3}>
                        <Col >
                            <Image className="d-block mx-auto" src="/Images/map2.PNG" />
                            <h2 className="text-center" style={{ fontSize: "2rem", color: "#212058ff" }}>Our Location</h2>
                            <p className="text-center text-muted">3481 Melrose Place, Beverly Hills
CA 90210</p>
                        </Col>
                        <div className="vr" /> {/* This creates the vertical line */}

                    <Col >
                        <Image className="d-block mx-auto" src="/Images/phone2.PNG" />
                        <h2 className="text-center" style={{ fontSize: "2rem", color: "#212058ff" }}>Telephone</h2>
                        <p className="text-center text-muted">(+1) 517 397 7100</p>
                        <p className="text-center text-muted">(+1) 411 315 8138</p>

                    </Col>
                    <div className="vr" /> {/* This creates the vertical line */}
                    <Col >                       
                        <Image className="d-block mx-auto" src="/Images/emal2.PNG" />
                        <h2 className="text-center" style={{ fontSize: "2rem", color: "#212058ff" }}>Send email</h2>
                        <p className="text-center text-muted">Info@example.com</p>
                        <p className="text-center text-muted">admin@example.com</p>

                    </Col></Stack>
                </Row>
                
            </Container>








            <Container className="my-4 w-50 h-300" style={{ fontSize: '1.2rem' }}>
                      {/* Contact Form */}
                      <h1 className="text-center mb-4" style={{ fontSize: "4rem", color: "#212058ff" }}>Send Your Message.</h1>

                      <Form  >
                        <Row className="mb-4">
                          <Col >
                            <Form.Group className="mb-3" controlId="Name">
                              <Form.Label>Name</Form.Label>
                              <Form.Control className="bg-light border-0" type="text"  required />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3" controlId="Email">
                              <Form.Label>Your Email</Form.Label>
                              <Form.Control className="bg-light border-0" type="email"  required />
                        </Form.Group>
                        </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="Subject">
                          <Form.Label>Your Subject</Form.Label>
                          <Form.Control className="bg-light border-0" style={{ maxHeight: "300px" }} as="textarea" rows={2} required />
                        </Form.Group>
                
                        <Form.Group className="mb-3" controlId="Message">
                          <Form.Label>Message</Form.Label>
                          <Form.Control className="bg-light border-0" style={{ maxHeight: "500px" }} as="textarea" rows={5} required />
                        </Form.Group>
                
                        <div className="text-center">
                          <Button variant="primary rounded-pill fs-5 mb-5 border-0" style={{ backgroundColor: " #27ae60", border: "none" }} type="submit">
                            Send Message
                          </Button>
                        </div>
                      </Form>
                </Container>

        <Footer />

        </>

    );
}
export default Contact;