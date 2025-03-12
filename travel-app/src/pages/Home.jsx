
import { Container, Row, Col, Card, Button, Carousel, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import dsTour from "../data/dsTour";

  

function Home() {
    const hotTours = dsTour.filter((tour) => tour.hot === "1");
    const regularTours = dsTour.filter((tour) => tour.hot === "0"); // Tour du lịch
    // const handleCardClick = (tourId) => {
    //   console.log("Clicked tour ID:", tourId);
    //   navigate(`/tour/${tourId}`); // Điều hướng đến trang chi tiết tour
    // };
    
  return (
    <Container fluid className="my-5">
      {/* SLIDER */}
      <div className="slider">
        <Carousel id="demo" className="w-100">
          <Carousel.Item>
            <img 
              className="d-block w-100 img-fluid"
              src="/src/image/HoiAn.jpg" 
              alt="Hoi An"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src="/src/image/grand-world-phu-quoc-3-min.jpg"
              alt="Phu Quoc"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src="/src/image/river-4705974_1280.jpg"
              alt="River"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* SEARCH TOOL */}
      <div className="search-tool mt-4 rounded-3">
        <Form className="p-4 border border-2 border-white rounded-circle">
          <Row className="g-2 align-items-center">
            <Col md={3}>
              <InputGroup className="border ">
                <Form.Control  type="text" name="departure" id="departure" placeholder="Điểm khởi hành" required autoComplete="off"
                />
                <InputGroup.Text >
                  <i className="  fa-solid fa-plane-departure"></i>
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col md={3}>
              <InputGroup className="border ">
                <Form.Control  type="text" name="destination" id="destination" placeholder="Điểm đến" required autoComplete="off"
                />
                <InputGroup.Text>
                  <i className=" fa-solid fa-plane-arrival"></i>
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col md={3}>
              <InputGroup className="border ">
                <Form.Control placeholder="Thời gian" required type="datetime" name="time" id="time" class="form-control border-0 m-0 px-0 py-1"  autocomplete="off"
                />
                <InputGroup.Text>
                  <i className="  fa-solid fa-calendar"></i>
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col md={3}>
              <Button variant="danger" type="submit" className="w-100 " style={{padding:"12px 12px"}}>
                Tìm kiếm
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

      {/* TOUR KHUYẾN MÃI */}
      <div className="content mt-4 py-4 p">
        <div className="content-item">
          <h3 className="fw-bold text-primary">Tour khuyến mãi</h3>
          <hr className="mb-4" />
          <Row id="table1">
          {hotTours.map((tour) => (
                        <Col md={4} key={tour.maTour} className="mb-4">
                        <Link to={`/tour/${tour.maTour}`} style={{ textDecoration: "none" }}>
                          <Card className="card-hover" 
                            >
                             
                          <div className="image-container">
                              <img src={tour.hinhAnh} className="hinh1 img-fluid" alt={tour.tenTour} />
                              <img src={tour.hinhAnh2} className="hinh2 img-fluid" alt={tour.tenTour} />
                            </div>
                            <Card.Body>
                              <Card.Title className=" text-blue">{tour.tenTour}</Card.Title>
                              <Card.Text>
                              <p>
                                  <i className="fa-solid fa-clock me-2"></i> Thời gian: {tour.thoiGian}
                                </p>
                                <p>
                                  <i className="fa-solid fa-plane me-2"></i> Phương tiện: {tour.phuongTien}
                                </p>
                                <p>
                                  <i className="fa-solid fa-calendar-day me-2"></i> Ngày khởi hành: {tour.ngayKhoiHanh}
                                </p>
                                <div className="tour-price">
                                  <span className="discount-price h4">{tour.gia}</span>
                                  <span className="price h6">{tour.giaTruocKhiGiam}</span>
                                </div>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                         </Link>  
                        </Col>

              ))}
            
          </Row>
          <Button variant="primary" className="d-block mx-auto mt-3">
            Xem thêm
          </Button>
        </div>
      </div>


      {/* TOUR DU LICH */}
      <div className="content mt-4 py-4 ">
        <div className="content-item">
          <h3 className="fw-bold text-primary">Tour du lich</h3>
          <hr className="mb-4" />
          <Row id="table1">
          {regularTours.map((tour) => (
            <Col md={4} key={tour.maTour} className="mb-4">
              <Link to={`/tour/${tour.maTour}`} style={{ textDecoration: "none" }}>
                <Card className="card-hover" 
                  >
                   
                <div className="image-container">
                    <img src={tour.hinhAnh} className="hinh1 img-fluid" alt={tour.tenTour} />
                    <img src={tour.hinhAnh2} className="hinh2 img-fluid" alt={tour.tenTour} />
                  </div>
                  <Card.Body>
                    <Card.Title className=" text-blue">{tour.tenTour}</Card.Title>
                    <Card.Text>
                    <p>
                        <i className="fa-solid fa-clock me-2"></i> Thời gian: {tour.thoiGian}
                      </p>
                      <p>
                        <i className="fa-solid fa-plane me-2"></i> Phương tiện: {tour.phuongTien}
                      </p>
                      <p>
                        <i className="fa-solid fa-calendar-day me-2"></i> Ngày khởi hành: {tour.ngayKhoiHanh}
                      </p>
                      <div className="tour-price">
                        <span className="discount-price h4">{tour.gia}</span>
                        <span className="price h6">{tour.giaTruocKhiGiam}</span>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
               </Link>  
              </Col>
              ))}
            
          </Row>
          <Button variant="primary" className="d-block mx-auto mt-3">
            Xem thêm
          </Button>
        </div>
      </div>

     
    </Container>
  );
}

export default Home;
