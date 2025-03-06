<<<<<<< HEAD
function About() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
  
  export default About;
  
=======
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
// import "../styles/custom.css";

function About() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    hoTen: "",
    email: "",
    noiDung: "",
  });
  const [errors, setErrors] = useState({
    hoTen: "",
    email: "",
    noiDung: "",
  });

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); // Xóa lỗi khi người dùng nhập
  };

  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.hoTen.trim()) {
      newErrors.hoTen = "Vui lòng nhập họ tên";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!formData.noiDung.trim()) {
      newErrors.noiDung = "Vui lòng nhập nội dung";
    }

    setErrors(newErrors);

    // Nếu không có lỗi, hiển thị modal
    if (Object.keys(newErrors).length === 0) {
      setShowModal(true);
      setFormData({ hoTen: "", email: "", noiDung: "" });
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container fluid className="p-0 m-0">
      <Container className="p-3 mb-4">
        <div className="title">
          <h3 className="text-primary fw-bold">Thông Tin Liên Hệ</h3>
          <hr className="mb-4" />
        </div>

        <Row>
          <Col md={5} sm={12}>
            <Row>
              <Col md={12} className="p-4">
                <p className="text-footer">
                  <span className="icon-footer me-2">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  12 Nguyễn Văn Bảo, Phường 4, quận Gò Vấp, TPHCM
                </p>
                <p className="text-footer">
                  <span className="icon-footer me-2">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  Liên hệ: 19000001 - 0902123456
                </p>
                <p className="text-footer">
                  <span className="icon-footer me-2">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <a href="mailto:heaptravel59@gmail.com">cheaptravel59@gmail.com</a>
                </p>
                <p className="text-footer">
                  <span className="icon-footer me-2">
                    <i className="fa-brands fa-square-facebook"></i>
                  </span>
                  <a href="https://www.facebook.com/profile.php?id=61558445256297&is_tour_dismissed">
                    www.facebook.com/cheaptravel
                  </a>
                </p>
              </Col>
              <Col md={12} className="p-0">
                <Form className="p-4" onSubmit={handleSubmit}>
                  <div className="form-text">
                    <h4 className="fw-bold">Liên Hệ Với Chúng Tôi</h4>
                  </div>
                  <Form.Group className="mt-4">
                    <Form.Control
                      type="text"
                      id="hoTen"
                      placeholder="Nhập họ tên"
                      value={formData.hoTen}
                      onChange={handleChange}
                    />
                    <span className="text-danger">{errors.hoTen}</span>
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="Nhập email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <span className="text-danger">{errors.email}</span>
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Control
                      as="textarea"
                      id="noiDung"
                      rows={4}
                      placeholder="Nội dung"
                      value={formData.noiDung}
                      onChange={handleChange}
                    />
                    <span className="text-danger">{errors.noiDung}</span>
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Button type="submit" variant="primary" id="phanHoi">
                      Gửi Phản Hồi
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col md={7} sm={12} className="p-3" id="bando">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.858169091085!2d106.68427047583877!3d10.822164158346794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deb3ef536f31%3A0x8b7bb8b7c956157b!2zVHLGsOG7nW5nIMSQ4bqhaSho4buNYyBDw7RuZyBuZ2hp4buHcCBUUC5IQ00!5e0!3m2!1svi!2s!4v1713359211216!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Thông Báo</Modal.Title>
          </Modal.Header>
          <Modal.Body>Phản hồi đã được gửi thành công!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Container>
  );
}

export default About;
// import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
// import { useState } from "react"; 

// function About() {
//   const [showModal, setShowModal] = useState(false); // Quản lý trạng thái modal

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Ngăn form submit mặc định
//     setShowModal(true); // Hiển thị modal khi gửi phản hồi
//   };

//   const handleClose = () => setShowModal(false); // Đóng modal

//   return (
//     <Container fluid className="p-0 m-0">
//       <Container className="p-3 mb-4">
//         <div className="title">
//           <h3 className="text-primary fw-bold">Thông Tin Liên Hệ</h3>
//           <hr className="mb-4" />
//         </div>

//         <Row>
//           <Col md={5} sm={12}>
//             <Row>
//               <Col md={12} className="p-4">
//                 <p className="text-footer">
//                   <span className="icon-footer me-2">
//                     <i className="fa-solid fa-location-dot"></i>
//                   </span>
//                   12 Nguyễn Văn Bảo, Phường 4, quận Gò Vấp, TPHCM
//                 </p>
//                 <p className="text-footer">
//                   <span className="icon-footer me-2">
//                     <i className="fa-solid fa-phone"></i>
//                   </span>
//                   Liên hệ: 19000001 - 0902123456
//                 </p>
//                 <p className="text-footer">
//                   <span className="icon-footer me-2">
//                     <i className="fa-solid fa-envelope"></i>
//                   </span>
//                   <a href="mailto:heaptravel59@gmail.com">cheaptravel59@gmail.com</a>
//                 </p>
//                 <p className="text-footer">
//                   <span className="icon-footer me-2">
//                     <i className="fa-brands fa-square-facebook"></i>
//                   </span>
//                   <a href="https://www.facebook.com/profile.php?id=61558445256297&is_tour_dismissed">
//                     www.facebook.com/cheaptravel
//                   </a>
//                 </p>
//               </Col>
//               <Col md={12} className="p-0">
//                 <Form className="p-4" onSubmit={handleSubmit}>
//                   <div className="form-text">
//                     <h4 className="fw-bold">Liên Hệ Với Chúng Tôi</h4>
//                   </div>
//                   <Form.Group className="mt-4">
//                     <Form.Control
//                       type="text"
//                       id="hoTen"
//                       placeholder="Nhập họ tên"
//                       aria-describedby="hoTenHelp"
//                     />
//                     <span id="hotenerr" className="text-danger"></span>
//                   </Form.Group>
//                   <Form.Group className="mt-3">
//                     <Form.Control
//                       type="email"
//                       id="diachiemail"
//                       placeholder="Nhập email"
//                       aria-describedby="emailHelp"
//                     />
//                     <span id="emailerr" className="text-danger"></span>
//                   </Form.Group>
//                   <Form.Group className="mt-3">
//                     <Form.Control
//                       as="textarea"
//                       id="noiDung"
//                       rows={4}
//                       placeholder="Nội dung"
//                     />
//                     <span id="noidungerr" className="text-danger"></span>
//                   </Form.Group>
//                   <Form.Group className="mt-3">
//                     <Button type="submit" variant="primary" id="phanHoi">
//                       Gửi Phản Hồi
//                     </Button>
//                   </Form.Group>
//                 </Form>
//               </Col>
//             </Row>
//           </Col>
//           <Col md={7} sm={12} className="p-3" id="bando">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.858169091085!2d106.68427047583877!3d10.822164158346794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deb3ef536f31%3A0x8b7bb8b7c956157b!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBUUC5IQ00!5e0!3m2!1svi!2s!4v1713359211216!5m2!1svi!2s"
//               width="100%"
//               height="100%"
//               style={{ border: 0, minHeight: "400px" }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </Col>
//         </Row>

//         {/* Modal */}
//         <Modal show={showModal} onHide={handleClose} centered>
//           <Modal.Header closeButton>
//             <Modal.Title>Thông Báo</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Phản hồi đã được gửi thành công!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Đóng
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </Container>
//     </Container>
//   );
// }

// export default About;
>>>>>>> Quy
