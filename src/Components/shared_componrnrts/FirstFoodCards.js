
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Nav, Navbar, Container, Image, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaPaperPlane, FaPlay, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "bootstrap-icons/font/bootstrap-icons.css";

function FirstCards() {
    return (
        <>
        {/* Popular Topics Cards */}
            <Container className='mt-4 mb-5' style={{ padding: '10px' }}>
                <Row className='w-100' style={{ margin: 0 }}>
                    <Col md={4} style={{ padding: 0 }}>
                        <Card className='border border-white shadow-sm'>
                            <Card.Body>
                                <Card.Title className='fs-3' style={{ fontWeight: 'bold' }}>Quality Education</Card.Title>
                                <Card.Text>
                                    <p className='fs-4'>lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </Card.Text>
                                <Button className='hover-btn2 fs-4 mb-5 border-0 text-dark rounded-pill'
                                    as={Link}
                                    to="/"
                                >
                                    EXPLORE COURSES {'->'}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} style={{ padding: 0 }}>
                        <Card className='border border-white shadow-sm'>
                            <Card.Body>
                                <Card.Title className='fs-3' style={{ fontWeight: 'bold' }}>Experienced Teachers</Card.Title>
                                <Card.Text>
                                    <p className='fs-4'>lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </Card.Text>
                                <Button className='hover-btn2 fs-4 mb-5 border-0 text-dark rounded-pill'
                                    as={Link}
                                    to="/"
                                >
                                    EXPLORE COURSES {'->'}
                                </Button> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} style={{ padding: 0 }}>
                        <Card className='border border-white shadow-sm'>
                            <Card.Body>
                                <Card.Title className='fs-3' style={{ fontWeight: 'bold' }}>Delicious Food</Card.Title>
                                <Card.Text>
                                    <p className='fs-4'>lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </Card.Text>
                                <Button className='hover-btn2 fs-4 mb-5 border-0 text-dark rounded-pill'
                                    as={Link}
                                    to="/"
                                >
                                    EXPLORE COURSES {'->'}
                                </Button>       
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </>
    );
}
export default FirstCards;