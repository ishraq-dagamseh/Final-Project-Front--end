import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Nav, Navbar, Container, Image, Form, Button, InputGroup, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaPaperPlane, FaPlay, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar1 from '../shared_componrnrts/Navbar';
import Footer from '../shared_componrnrts/Footer';
import DropdownBtn from './Dropdown';

function Courses() {
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
                        Courses
                    </h1>
                    <p className='fs-5 text-center' style={{ backgroundColor: "white" }}>
                        <a style={{ textDecoration: "none", color: "black" }} href="/"><span className='hover-text'>Home</span> / Courses</a>
                    </p>
                </div>
            </section>
            <Container className="my-4" style={{ fontSize: '1.2rem', padding: '5rem' }} >
                <DropdownBtn />
                </Container>


        <Footer />

        </>

    );
}
export default Courses;