import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form, Dropdown, Alert } from "react-bootstrap";
import { useBooking } from "../components/BookingContext";
import dsTour from "../data/dsTour";

function Payment() {
    const { id } = useParams();
    const tour = dsTour.find((t) => t.maTour === parseInt(id));
    // Quản lý số lượng người lớn và trẻ em
    const [adultCount, setAdultCount] = useState(1); // Mặc định 1 người lớn
    const [childCount, setChildCount] = useState(0); // Mặc định 0 trẻ em


    // Quản lý thông tin hành khách
    const [adults, setAdults] = useState([
        { fullName: "", gender: "Nam", dob: "", singleRoom: false }, // Mặc định 1 người lớn
    ]);
    const [children, setChildren] = useState([]); // Mặc định 0 trẻ em

    // Hàm tăng/giảm số lượng
    const handleAdultDecrease = () => {
        setAdultCount(Math.max(0, adultCount - 1));
        setAdults(adults.slice(0, Math.max(0, adultCount - 1))); // Giảm số form
    };
    const handleAdultIncrease = () => {
        setAdultCount(adultCount + 1);
        setAdults([...adults, { fullName: "", gender: "Nam", dob: "" }]); // Thêm form mới
    };
    const handleChildDecrease = () => {
        setChildCount(Math.max(0, childCount - 1));
        setChildren(children.slice(0, Math.max(0, childCount - 1))); // Giảm số form
    };
    const handleChildIncrease = () => {
        setChildCount(childCount + 1);
        setChildren([...children, { fullName: "", gender: "Nam", dob: "" }]); // Thêm form mới
    };

    // Cập nhật thông tin người lớn
    const handleAdultChange = (index, field, value) => {
        const updatedAdults = [...adults];
        updatedAdults[index][field] = value;
        setAdults(updatedAdults);
    };

    // Cập nhật thông tin trẻ em
    const handleChildChange = (index, field, value) => {
        const updatedChildren = [...children];
        updatedChildren[index][field] = value;
        setChildren(updatedChildren);
    };

    if (!tour) {
        return <h2 className="text-center mt-5">Tour không tồn tại</h2>;
    }
    // Dữ liệu mẫu cho chuyến bay (có thể thay đổi sau)
    const flightInfo = {
        departure: {
            time: "11:15",
            date: "13/03/2025",
            location: "SGN",
            airline: "Bamboo Airways",
        },
        return: {
            time: "14:00",
            date: "17/03/2025",
            location: "DMK",
            airline: "Bamboo Airways",
        },
    };

    // sử dung context api
    const { bookTour } = useBooking();
    const navigate = useNavigate();
    
    const handleBooking = () => {
        console.log(tour.tenTour);
        if (validateBooking()) {
            const newTour = {
                // name: tour.tenTour, // Thay bằng state động nếu có
                // departureDate: tour.thoiGian,
                // price: tour.price,
                // passengers: 2,
                // image: tour.hinhAnh,
                // dateStart: tour.ngayKhoiHanh,
                // total: 100000

                
                name: tour.tenTour, // Thay bằng state động nếu có
                departureDate: tour.ngayKhoiHanh,
                price: tour.gia,
                image: tour.hinhAnh,
                passengers: (adultCount + childCount),
            };
    
            bookTour(newTour); // Lưu vào context
            alert("Đặt tour thành công!");
            navigate("/OrderHistory"); // Chuyển hướng đến lịch sử đặt tour
        }
        
       
    };

    
    const validateBooking = () => {
        // Kiểm tra thông tin liên lạc
        const contactName = document.querySelector('input[placeholder="Họ tên"]').value.trim();
        const contactPhone = document.querySelector('input[placeholder="Nhập số điện thoại"]').value.trim();
        const contactEmail = document.querySelector('input[placeholder="Nhập email"]').value.trim();
    
        if (!contactName || !contactPhone || !contactEmail) {
            alert("Vui lòng nhập đầy đủ thông tin liên lạc!");
            return false;
        }
    
        // Kiểm tra thông tin hành khách
        for (let i = 0; i < adultCount.length; i++) {
            if (!adultCount[i].fullName.trim() || !adults[i].dob) {
                alert(`Vui lòng nhập đầy đủ thông tin cho người lớn thứ ${i + 1}!`);
                return false;
            }
        }
    
        for (let i = 0; i < childCount.length; i++) {
            if (!childCount[i].fullName.trim() || !childCount[i].dob) {
                alert(`Vui lòng nhập đầy đủ thông tin cho trẻ em thứ ${i + 1}!`);
                return false;
            }
        }
    
        return true;
    };
    
    return (
        <Container className="my-5" style={{ marginTop: "80px", marginBottom: "20px" }}>
            <Row>
                <h3 className="fw-bold text-primary my-4">Thanh Toán</h3>
            </Row>
            <Row>
                {/* Cột trái: Thông Tin Liên Lạc và Hành Khách */}
                <Col md={6} sm={12}>
                    {/* Thông Tin Liên Lạc */}
                    <Card className="p-4 mb-4 shadow">
                        <h4 className="text-primary fw-bold">Thông Tin Liên Lạc</h4>
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>
                                            Họ tên <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="Họ tên" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>
                                            Liên hệ <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Form.Control type="tel" placeholder="Nhập số điện thoại" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>
                                            Email <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Form.Control type="email" placeholder="Nhập email" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Địa chỉ</Form.Label>
                                        <Form.Control type="text" placeholder="Nhập địa chỉ" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Card>


                    {/* Hành Khách */}
                    <Card className="p-4 mb-4 shadow">
                        <h4 className="text-primary fw-bold">Hành Khách</h4>
                        <Row className="align-items-center mb-3">
                            <Col>Người lớn</Col>
                            <Col className="d-flex justify-content-end">
                                <Button variant="outline-secondary" size="sm" className="me-2" onClick={handleAdultDecrease}
                                >
                                    -
                                </Button>
                                <Form.Control type="text" value={adultCount} readOnly className="w-25 text-center"
                                />
                                <Button variant="outline-secondary" size="sm" className="ms-2" onClick={handleAdultIncrease}
                                >
                                    +
                                </Button>
                            </Col>
                            <Col>{(parseInt(tour.gia.replace(/\./g, "").replace("đ", ""), 10) * adultCount).toLocaleString("vi-VN")}đ</Col>

                        </Row>
                        <small className="text-muted"></small>
                        <Row className="align-items-center mt-3">
                            <Col>Trẻ em</Col>
                            <Col className="d-flex justify-content-end">
                                <Button variant="outline-secondary" size="sm" className="me-2" onClick={handleChildDecrease}
                                >
                                    -
                                </Button>
                                <Form.Control type="text" value={childCount} readOnly className="w-25 text-center"
                                />
                                <Button variant="outline-secondary" size="sm" className="ms-2" onClick={handleChildIncrease}
                                >
                                    +
                                </Button>
                            </Col>
                            <Col>{(parseInt(tour.gia.replace(/\./g, "").replace("đ", ""), 10) * childCount * 0.5).toLocaleString("vi-VN")}đ</Col>


                        </Row>
                        <small className="text-muted">Từ 12 tuổi trở xuống</small>
                    </Card>

                    {/* Thông Tin Hành Khách */}
                    <Card className="p-4 mb-4 shadow">
                        <h4 className="text-primary fw-bold">Thông Tin Hành Khách</h4>
                        <p>
                            <small className="text-muted">
                                Tối đa được nhận viên tư vấn Vietravel trợ giúp nhập thông tin đăng ký dịch vụ
                            </small>
                        </p>

                        {/* Người lớn */}
                        <h5 className="mt-3">Người lớn (Từ 12 trở lên)</h5>
                        {adults.map((adult, index) => (
                            <div key={`adult-${index}`} className="mb-3">
                                <Row>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                Họ tên <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={adult.fullName}
                                                onChange={(e) => handleAdultChange(index, "fullName", e.target.value)}
                                                placeholder="Họ tên"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={2}>
                                        <Form.Group>
                                            <Form.Label>
                                                Giới tính <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Dropdown onSelect={(value) => handleAdultChange(index, "gender", value)}>
                                                <Dropdown.Toggle variant="outline-secondary" className="w-100">
                                                    {adult.gender || "Nam"}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey="Nam">Nam</Dropdown.Item>
                                                    <Dropdown.Item eventKey="Nữ">Nữ</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>
                                                Ngày sinh <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={adult.dob}
                                                onChange={(e) => handleAdultChange(index, "dob", e.target.value)}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>

                                </Row>
                            </div>
                        ))}

                        {/* Trẻ em */}
                        {childCount > 0 && (
                            <>
                                <h5 className="mt-3">Trẻ em (Từ 5 - 11 tuổi)</h5>
                                {children.map((child, index) => (
                                    <div key={`child-${index}`} className="mb-3">
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        Họ tên <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={child.fullName}
                                                        onChange={(e) => handleChildChange(index, "fullName", e.target.value)}
                                                        placeholder="Họ tên"
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={2}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        Giới tính <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Dropdown onSelect={(value) => handleChildChange(index, "gender", value)}>
                                                        <Dropdown.Toggle variant="outline-secondary" className="w-100">
                                                            {child.gender || "Nam"}
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item eventKey="Nam">Nam</Dropdown.Item>
                                                            <Dropdown.Item eventKey="Nữ">Nữ</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Form.Group>
                                            </Col>
                                            <Col md={4}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        Ngày sinh <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        value={child.dob}
                                                        onChange={(e) => handleChildChange(index, "dob", e.target.value)}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </>
                        )}
                    </Card>


                </Col>

                {/* Cột phải: Tóm Tắt Chuyến Đi và Thông Tin Chuyến Bay */}
                <Col md={6} sm={12}>
                    <Card className="p-4 mb-4 shadow">
                        <h4 className="text-primary fw-bold">Tóm Tắt Chuyến Đi</h4>
                        <Row className="align-items-center">
                            {/* Cột chứa hình ảnh */}
                            <Col md={4}>
                                <img src={tour.hinhAnh} alt={tour.tenTour} className="img-fluid rounded" style={{ maxHeight: "150px", objectFit: "cover", width: "100%" }}
                                />
                            </Col>

                            {/* Cột chứa nội dung */}
                            <Col md={8}>

                                <p>
                                    <strong>{tour.tenTour}</strong>
                                </p>
                                {/* <p>Mã tour: {tour.maTour}</p> */}
                                <p>Khởi hành: TP. Hồ Chí Minh</p>
                                <p>Thời gian: {tour.thoiGian}</p>
                                <p>Phương tiện: {tour.phuongTien}</p>
                            </Col>
                        </Row>
                    </Card>
                    {/* Khách hàng + phụ thu */}

                    <Card className="p-4 mb-4 shadow">
                        <h4 className="text-primary fw-bold">Khách Hàng + Phụ Thu</h4>
                        <Row className="fw-bold text-center">
                            <Col xs={3}>Loại vé</Col>
                            <Col xs={3}>Giá mặc định</Col>
                            <Col xs={3}>Số lượng</Col>
                            <Col xs={3}>Giá tiền</Col>
                        </Row>
                        <hr />
                        <Row className="text-center">
                            <Col xs={3}>Người lớn</Col>
                            <Col xs={3}>{parseInt(tour.gia.replace(/\./g, "").replace("đ", ""), 10).toLocaleString("vi-VN")}đ</Col>
                            <Col xs={3}>{adultCount}</Col>
                            <Col xs={3}>
                                <strong>
                                    {(parseInt(tour.gia.replace(/\./g, "").replace("đ", ""), 10) * adultCount).toLocaleString("vi-VN")}đ
                                </strong>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col xs={3}>Trẻ em</Col>
                            <Col xs={3}>{(parseInt(tour.gia.replace(/\./g, "").replace("đ", ""), 10) * 0.5).toLocaleString("vi-VN")}đ</Col>
                            <Col xs={3}>{childCount}</Col>
                            <Col xs={3}>
                                <strong>
                                    {(parseInt(tour.gia.replace(/\./g, "").replace("đ", ""), 10) * childCount * 0.5).toLocaleString("vi-VN")}đ
                                </strong>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="fw-bold text-center">
                            <Col xs={6} className="text-start">Tổng tiền:</Col>
                            <Col xs={6} className="text-end">
                                <strong style={{ color: "red" }}>
                                    {(parseInt(tour.gia.replace(/\./g, "").replace("đ", ""), 10) * adultCount +
                                        parseInt(tour.gia.replace(/\./g, "").replace("đ", ""), 10) * childCount * 0.5).toLocaleString("vi-VN")}đ
                                </strong>
                            </Col>
                        </Row>
                        {/* <Button variant="primary" className="w-100 mt-3 fw-bold">
                           Đặt tour
                        </Button> */}
                        <Button className="mt-3" variant="primary" onClick={handleBooking}>
                            Đặt Tour
                        </Button>
                    </Card>



                </Col>
            </Row>
        </Container>
    );
}


export default Payment;
