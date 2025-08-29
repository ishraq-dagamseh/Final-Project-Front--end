import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import { Row, Col, Card, Container, Image, Pagination } from 'react-bootstrap';

function DropdownBtn() {
  // All courses
  const allCourses = [
    { 
      title: "Business", 
      price: 265, 
      lessons: 6, 
      duration: 4, 
      rating: 4.5, 
      level: "All levels", 
      image: "/Images/pexels-karolina-grabowska-5882683.jpg",
      releaseDate: "2024-12-10",
      name: "Financial Security Thinking and Principles Theory",
      url: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881',
      url2: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881'
    },
    { 
      title: "Finance", 
      price: 250, 
      lessons: 15, 
      duration: 4, 
      rating: 5.0, 
      level: "All levels", 
      image: "/Images/pexels-olia-danilevich-4974912-420x280.jpg",
      releaseDate: "2025-01-15",
      name: "Professional Ceramic Moulding for Beginners",
      url: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881'
    },
    { 
      title: "UI/UX Design", 
      price: 0, 
      lessons: 16, 
      duration: 22.5, 
      rating: 5.0, 
      level: "Intermediate", 
      image: "/Images/pexels-tiia-pakk-4350767.jpg",
      releaseDate: "2024-10-01",
      name: "Basic Fundamentals of Interior & Graphics Design",
      url: "https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881",
      url2: "https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881"
    },
    { 
      title: "Digital Program", 
      price: 0, 
      lessons: 15, 
      duration: 7.5, 
      rating: 4.33, 
      level: "Beginner", 
      image: "/Images/pexels-pixabay-265667.jpg",
      releaseDate: "2025-02-01",
      name: "WordPress for Beginners Master WordPress",
      url: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881',
      url2: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881'
    },
    { 
      title: "Data Science", 
      price: 300, 
      lessons: 14, 
      duration: 18.3, 
      rating: 4.0, 
      level: "Intermediate", 
      image: "/Images/pexels-christina-morillo-1181359.jpg",
      releaseDate: "2024-11-05",
      name: "The Complete Python Course for Beginner 2023",
      url: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881',
      url2: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881'
    },
    { 
      title: "UI/UX Design", 
      price: 'Free', 
      lessons: 14, 
      duration: 13.3, 
      rating: 3.33, 
      level: "All levels", 
      image: "/Images/pexels-caio-56759.jpg",
      releaseDate: "2025-01-20",
      name: "Ultimate Photoshop Training: From Beginner",
      url: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881',
      url2: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881'
    },
            { 
      title: "Modern Physics", 
      price: 'Free', 
      lessons: 15, 
      duration: '10hours40minutes', 
      rating: 4.50, 
      level: "Beginners", 
      image: "/Images/pexels-eugene-capon-1261823.jpg",
      releaseDate: "2025-2-10",
      name: "User Experience Design Essentials Adobe xd UI UX Design",
      url: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881',
      url2: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881'
    },
    { 
      title: "Modern Physics", 
      price: 180, 
      lessons: 15, 
      duration: '15hours20minutes', 
      rating: 5.0, 
      level: "Beginners", 
      image: "/Images/pexels-josh-sorenson-1714202.jpg",
      releaseDate: "2025-03-15",
      name: "Basic Fundamentals of Interior & Graphics Design",
      url: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881',
      url2:'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881'
    },
    { 
      title: "Finance,Modern Physics", 
      price: 'Free', 
      lessons: 14, 
      duration: '2hours20minutes', 
      rating: 4.0, 
      level: "Experts", 
      image: "/Images/pexels-mikael-blomkvist-6476595.jpg",
      releaseDate: "2025-10-01",
      name: "Sales Training: Practical Sales Techniques",
      url: "https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881",
      url2: "https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881"
    },
    { 
      title: "Digital Program", 
      price: 'Free', 
      lessons: 14, 
      duration: '3hours20minutes', 
      rating: 4.5, 
      level: "Intermediate", 
      image: "/Images/pexels-pixabay-356056.jpg",
      releaseDate: "2025-11-01",
      name: "Increasing Engagement with Instagram & Facebook",
      url: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881',
      url2: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881'
    },
    { 
      title: "UI/UX Design", 
      price: 'Free', 
      lessons: 15, 
      duration: '17hours20minutes', 
      rating: 4.33, 
      level: "All Levels", 
      image: "/Images/pexels-pew-nguyen-153729021.jpg",
      releaseDate: "2025-11-05",
      name: "Introduction to Color Theory & Basic UI/UX",
      url: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881',
      url2: 'https://preview.themeforest.net/item/edusion-education-lms-wordpress-theme/full_screen_preview/49120881'
    },
    


  ];

  const [courses, setCourses] = useState(allCourses);

  // Sorting function
  const handleSort = (sortOption) => {
    let sorted = [...courses];

    switch (sortOption) {
      case "newest":
        sorted.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        break;
      case "oldest":
        sorted.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
        break;
      case "title-az":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "title-za":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    setCourses(sorted);
  };


  // Pagination state
  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(courses.length / cardsPerPage);
  const pagedCourses = courses.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <Container>
      {/* Dropdown Sort */}
      <Dropdown className="mb-4">
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Sort Courses
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleSort('newest')}>Release Date (newest first)</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('oldest')}>Release Date (oldest first)</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('title-az')}>Course Title (A-Z)</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('title-za')}>Course Title (Z-A)</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Cards Grid */}
      <Row>
        {pagedCourses.map((course, i) => (
          <Col md={4} key={i} className="d-flex align-items-stretch">
            <Card className="mb-4 shadow-lg rounded-4 border-0 w-100" style={{ minHeight: 440, background: '#f9f9f9', position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <Card.Img
                  variant="top"
                  src={course.image}
                  alt={course.title}
                  style={{
                    height: 200,
                    objectFit: 'cover',
                    borderTopLeftRadius: '1rem',
                    borderTopRightRadius: '1rem',
                  }}
                />
                {/* Price badge overlay */}
                <div className='position-absolute top-0 start-0 m-3 p-2 bg-success text-white rounded-circle' 
                                        style={{backgroundColor:'#27ae60', fontWeight: 600, fontSize: 13,
                                            borderRadius: "30%",
                                           width: "40px",
                                          height: "40px",
                                         }}>
                  {course.price === 0 ? 'Free' : `$${course.price}`}
                </div>
              </div>
              <Card.Body className="d-flex flex-column justify-content-between" style={{ minHeight: 180 }}>
                <div>
                  <Card.Title as="h5" className="fw-bold mb-2 text-primary" style={{ fontSize: 22 }}>
                    <button
                      className="btn btn-outline-primary px-3 py-1 fw-bold"
                      style={{ fontSize: 12, backgroundColor: "#27ae60", border: "none", color: "white" }}
                      onClick={() => window.open(course.url, '_blank')}
                    >
                      {course.title}
                    </button>
                  </Card.Title>
                  <Card.Text as="div" className="mb-2">
                    <a
                      className="text-decoration-none hover-text"
                      style={{ fontSize: 18, fontWeight: 500 }}
                      href={course.url}
                    >
                      {course.name}
                    </a>
                  </Card.Text>
                </div>
              </Card.Body>
              <Card.Footer className="bg-white border-0 rounded-bottom-4 px-3 py-2 mt-auto">
                <div className="d-flex justify-content-between align-items-center" style={{ fontSize: 12, color: '#143755ff' }}>
                  <span>
                    <Image src="/Images/Capture1.PNG" alt="Capture1" style={{ width: 22, marginRight: 6 }} /> {course.lessons} Lessons
                  </span>
                  <span>
                    <Image src="/Images/Capture2.PNG" alt="Capture2" style={{ width: 22, marginRight: 6 }} /> {course.duration}h
                  </span>
                  <span>
                    <Image src="/Images/Capture3.PNG" alt="Capture3" style={{ width: 22, marginRight: 6 }} /> {course.rating}
                  </span>
                  <span>
                    <Image src="/Images/Capture4.PNG" alt="Capture4" style={{ width: 22, marginRight: 6 }} />
                    <b> {course.level}</b>
                  </span>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center my-4">
        <Pagination>
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
          {[...Array(totalPages)].map((_, idx) => (
            <Pagination.Item
              key={idx + 1}
              active={currentPage === idx + 1}
              onClick={() => handlePageChange(idx + 1)}
            >
              {idx + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
        </Pagination>
      </div>
    </Container>
  );
}

export default DropdownBtn;
