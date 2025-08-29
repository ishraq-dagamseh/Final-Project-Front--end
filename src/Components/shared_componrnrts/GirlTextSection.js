
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Nav, Navbar, Container, Image, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaPaperPlane, FaPlay, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "bootstrap-icons/font/bootstrap-icons.css";

function GirlTextSection(){


    return(
        <Container className='mt-5 mb-5' style={{ padding: '10px' }}>
                <Row>
                    <Col md={6}>
                        <img src="/Images/free-course-768x813.png" style={{ width: 550, height: 550 }} />
                    </Col>
                    <Col md={6}  className='w-20 fs-3 ab-content' style={{ padding: '10px' , width: 450, height: 450}}>
                        <h2 style={{ fontSize: "4rem" }}>Learn new skills to go <span className='text-decoration-underline' style={{ color: "#27ae60" }}>ahead for your</span> career.</h2>
                        <p style={{  color: "grey" }}>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply. From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.From blogs to emails to ad copies, auto-generate catchy, original and high-converting copies.</p>
                        <p style={{  color: "grey" }}><strong> Auto-generate catchy original and high-converting copies in popular tones languages. From blogs to emails to ad copies auto-generate catchy</strong></p>

                        <div className='d-flex justify-content-center'>
                        <Button className='hover-btn rounded-pill fs-4 mb-5 border-0 w-34'
                                    as={Link}
                                    to="/"
                                >
                                    Explore More
                                </Button>
                            </div>

                    </Col>
                </Row>
            </Container>

    );
}
export default GirlTextSection;

