import React, { useState } from "react";
import { Pagination, Row, Col, Image, cards } from "react-bootstrap";

const cards = [
  "https://via.placeholder.com/200x150?tex+1t=Image",
  "https://via.placeholder.com/200x150?text=Image+2",
  "https://via.placeholder.com/200x150?text=Image+3",
  "https://via.placeholder.com/200x150?text=Image+4",
  "https://via.placeholder.com/200x150?text=Image+5",
  "https://via.placeholder.com/200x150?text=Image+6",
];

function ImageGallery() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (page - 1) * itemsPerPage;
  const currentImages = cards.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  return (
    <div className="text-center">
      <Row className="justify-content-center my-3">
        {currentImages.map((src, i) => (
          <Col key={i} xs={6} md={4}>
            <Image src={src} thumbnail />
          </Col>
        ))}
      </Row>

      <Pagination>
        {[...Array(totalPages)].map((_, i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === page}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}

export default ImageGallery;
