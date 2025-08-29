import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Nav, Navbar, Container, Image, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaPaperPlane, FaPlay, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "bootstrap-icons/font/bootstrap-icons.css";

function CountCards() {
    return (
        <Container className='mt-5 mb-5 my-5'>
                            <Row className="mb-5">
                                    <Col md={6} className="d-flex flex-column  border-0 justify-content-center align-items-start " style={{ 
                                        padding: '10px' }}>
                                        <h5 style={{ color: "#27ae60" }}> SOME OUR FACT ________________</h5>
                                        <h1 style={{ fontSize: "4rem" }}>
                                         Our Great <span className='text-decoration-underline' style={{ color: "#27ae60" }}>Achievements</span>
                                        </h1>
                                    </Col>
                                </Row>
            <Row>
                <Col md={3}>
                    <Card className='text-center shadow-sm '>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Image src='/Images/smile.PNG' style={{ width: 50, height: 50 }} />
                                </Col>
                                <Col>
                                    <Card.Title className='fs-1'  style={{ color: '#0b223aff' }}>854</Card.Title>
                                    <Card.Text><p className='fs-5 text-muted'>Enrolled Students</p></Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='text-center'>
                        <Card.Body>
                             <Row>
                                <Col>
                                    <Image src='/Images/headphone.PNG' style={{ width: 50, height: 50 }} />
                                </Col>
                                <Col>
                                    <Card.Title className='fs-1'  style={{ color: '#0b223aff' }}>521</Card.Title>
                                    <Card.Text><p className='fs-5 text-muted'>Academic Programs</p></Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='text-center'>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Image src='/Images/paper.PNG' style={{ width: 50, height: 50 }} />
                                </Col>
                                <Col>
                                    <Card.Title className='fs-1'  style={{ color: '#0b223aff' }}>163</Card.Title>
                                    <Card.Text><p className='fs-5 text-muted'>Winning Award</p></Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='text-center'>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Image src='/Images/person.PNG' style={{ width: 50, height: 50 }} />
                                </Col>
                                <Col>
                                    <Card.Title className='fs-1' style={{ color: '#0b223aff' }}>93</Card.Title>
                                    <Card.Text><p className='fs-5 text-muted'>Certified Students</p></Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default CountCards;
