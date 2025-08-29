
import Modal from 'react-bootstrap/Modal';
import { Nav, Navbar, Container, Image, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaPaperPlane, FaPlay, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "bootstrap-icons/font/bootstrap-icons.css";
function Navbar1() {
    return (
        <>
            {/** Navbar */}
            <Container className="d-flex align-items-center justify-content-between fs-3 text-dark" style={{ flexWrap: "nowrap" }}>
                {/* left side */}
                <nav className="navbar navbar-expand-lg navbar-light p-0" style={{ flex: 1 }}>
                    <Row className="w-100 align-items-center" style={{ flexWrap: "nowrap" }}>
                        <Col className="d-flex align-items-center" >
                            <div className="d-flex align-items-center">
                                <Navbar.Brand as={Link} to="/">
                                    <Image src="/Images/logo.png" alt="Logo" />
                                </Navbar.Brand>
                            </div>
                        </Col>
                        <Col xs={4} style={{ flex: "0 0 auto" }}>
                            {/* middle */}
                            <div className="d-flex me-auto align-items-center justify-content-center gap-2  " style={{ padding: '10px' }}>
                                <Nav>
                                    <Nav.Link as={Link} to="/" style={{ color: '#0d1a4a' }}>Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about" style={{ color: '#0d1a4a' }}>About Us</Nav.Link>
                                    <Nav.Link as={Link} to="/courses" style={{ color: '#0d1a4a' }}>Courses</Nav.Link>
                                    <Nav.Link as={Link} to="/contact" style={{ color: '#0d1a4a' }}>Contact</Nav.Link>
                                </Nav>
                            </div>
                        </Col>
                        {/* right side */}
                        <Col xs={4} style={{ flex: "0 0 auto" }}>
                            <div className="d-flex gap-2" style={{ padding: '10px' }}>
                                <Button as={Link} to="/contact" style={{ borderRadius: "50px", borderColor: "green", backgroundColor: "#27ae60", color: "white" }}>Contact</Button>
                                <Button as={Link} to="/account" variant="outline-secondary" style={{ borderRadius: "50px", backgroundColor: "white", color: "black" }}>Account</Button>
                            </div>
                        </Col>
                    </Row>
                </nav>
            </Container>
        </>
    );
}
export default Navbar1;