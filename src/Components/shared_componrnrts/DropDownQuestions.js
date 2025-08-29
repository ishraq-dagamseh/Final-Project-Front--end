import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
function DropDownQuestions() {
  return (
    <Container className="my-5" style={{ maxWidth: "800px", padding: "3rem" }}>
        <Accordion style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <Accordion.Item eventKey="0" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>
              <Accordion.Header style={{ fontSize: '2rem', padding: '1rem 0' }}><h4>What does it take to be an excellent author?</h4></Accordion.Header>
              <Accordion.Body style={{ fontSize: '1.5rem', padding: '1.25rem' }}>
              Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy, gotta love that. Great value and so easy to use.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>
              <Accordion.Header style={{ fontSize: '5rem', padding: '1rem 0' }}><h4>Who will view my content?</h4></Accordion.Header>
              <Accordion.Body style={{ fontSize: '1.5rem', padding: '1.25rem' }}>
              Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" style={{ marginBottom: '1.5rem', fontSize: '1.35rem' }}>
              <Accordion.Header style={{ fontSize: '2rem', padding: '1rem 0' }}><h4>What does it take become an author?</h4></Accordion.Header>
              <Accordion.Body style={{ fontSize: '1.5rem', padding: '1.25rem' }}>
              Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" style={{ marginBottom: '1.5rem', fontSize: '1.35rem' }}>
              <Accordion.Header style={{ fontSize: '2rem', padding: '1rem 0' }}><h4>How to change my password easily?</h4></Accordion.Header>
              <Accordion.Body style={{ fontSize: '1.5rem', padding: '1.25rem' }}>
              Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" style={{ marginBottom: '1.5rem', fontSize: '1.35rem' }}>
              <Accordion.Header style={{ fontSize: '2rem', padding: '1rem 0' }}><h4>How does it create content?</h4></Accordion.Header>
              <Accordion.Body style={{ fontSize: '1.5rem', padding: '1.25rem' }}>
              Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </Container>
  );
}

export default DropDownQuestions;
