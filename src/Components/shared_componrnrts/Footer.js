import Modal from 'react-bootstrap/Modal';
import { Nav, Navbar, Container, Image, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaPaperPlane, FaPlay, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
    return (

        <>
        {/** footer */}
                {/* 4 columns of texts first one with image */}
                <Container className='my-5 text-center text-white' style={{ padding: '15px', backgroundColor: '#002a55ff' }}>
                    <Row>
                        <Col md={3} className="mb-4 fs-5" style={{ padding: '15px' }}>
                            <Image src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/logo3.png" 
                            alt="Logo" fluid className="mb-3 "
                            style={{ maxWidth: '120px', height: 'auto' }} />
                            <p className="text-white fs-5" style={{ padding: '15px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p > CONNECT WITH: <a href="#"><i className=" hover-text3 bi-instagram"></i></a>, <a href="#"><i className=" hover-text3 bi-facebook"></i></a>, <a href="#"><i className=" hover-text3 bi-youtube"></i></a>, <a href="#"><i className=" hover-text3 bi-twitter"></i></a></p>
                        </Col>
                        <Col md={3} className="mb-4 text-white" style={{ padding: '15px' }}>
                            <p><h4> Courses</h4></p>
                            <p className="hover-text3 fs-5">Creative Writing</p>
                            <p className="hover-text3 fs-5">Digital Marketing</p>
                            <p className="hover-text3 fs-5">SEO Business</p>
                            <p className="hover-text3 fs-5">Social Marketing</p>
                            <p className="hover-text3 fs-5">Graphic Design</p>
                            <p className="hover-text3 fs-5">Website Development</p>
        
        
                        </Col>
                        <Col md={3} className="mb-4 text-white " style={{ padding: '15px' }}>
                            <p className='text-center'><h4> Company</h4></p>
        
                            <p className="hover-text3 fs-5">About Us</p>
                            <p className="hover-text3 fs-5">Our Team</p>
                            <p className="hover-text3 fs-5">Careers</p>
                            <p className="hover-text3 fs-5">Contact</p>
                            <p className="hover-text3 fs-5">Privacy Policy</p>
                            <p className="hover-text3 fs-5">Website Development</p>
        
        
                        </Col>
                        <Col md={3} className="mb-4 text-white" style={{ padding: '15px' }}>
                            <p className='text-center'><h5>CONTACT INFO</h5></p>
                             <div style={{ padding: '15px' }}> <h5> <FaPhone style={{ marginRight: 4 }} />
                       Phone Number</h5> <div className='fs-6'>+123 456 7890</div> </div>
                            <div style={{ padding: '15px' }}><h5> <FaEnvelope style={{ marginRight: 4 }} />
        Email Address</h5> <div className='fs-6'>example@yourmail.com</div></div>
                            <div style={{ padding: '15px' }}><h5> <FaMapMarkerAlt style={{ marginRight: 4 }} />
        Location</h5><div className='fs-6'>california,USA</div></div>
                        </Col>
                    </Row>
                    <p className='text-center' style={{ color: '#282aa0ff' }}>  _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
                    <footer className='text-center'>
                        <p className='text-white fs-5 text-start'>© 2025 Education. All rights reserved.</p>
                        <p className='text-white fs-5 text-end hover-text3'><a className='hover-text3' href="# ">Terms & Conditions</a>   <a className='hover-text3' href="#">Special</a>  <a className='hover-text3' href="#">Privacy Policy</a></p>
                    </footer>
                </Container>
                </>

    );
}

export default Footer;
