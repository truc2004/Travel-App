import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form, Modal } from "react-bootstrap";
import { useEffect } from "react";
import dsTour from "../data/dsTour";

function TourDetail() {
  const { id } = useParams();
  const tour = dsTour.find((t) => t.maTour === parseInt(id));
  useEffect(() => {
    console.log("Scrolled to top");
    window.scrollTo(0, 0);
  }, []);

  if (!tour) {
    return <h2 className="text-center mt-5">Tour không tồn tại</h2>;
  }

  

  return (
    <Container className="my-5" style={{ marginTop: "100px", marginBottom: "20px" }}>
      <Row>
        <h3 className="fw-bold text-blue my-4 mt-5"> {tour.tenTour}</h3>
      </Row>
      <Row>
        {/* Cột trái: Hình ảnh, Tổng quan, Lịch trình, Mô tả */}
        <Col md={8} sm={12}>
          <img src={tour.hinhAnh} className="img-fluid  mb-4 shadow w-100 " alt={tour.tenTour} />

          <div className="my-4">
            <h4 className="text-blue  fw-bold cap1">Tổng quan:</h4>
            <Card className="p-3 ">
              <p style={{ lineHeight: "30px", wordSpacing: "2px" }}>{tour.tongquan}</p>
            </Card>

            <h4 className="cap1 text-blue  fw-bold mt-3">Lịch trình</h4>
            <div
              style={{ lineHeight: "30px", wordSpacing: "2px" }}
              dangerouslySetInnerHTML={{ __html: tour.lichTrinh }}
            />
          </div>

          <img src={tour.hinhAnh2} className="img-fluid w-75 mx-auto d-block my-3 shadow" alt={tour.tenTour} />

          <div className="mt-4">
            <h4 className="text-blue fw-bold">Mô tả:</h4>
            <Card className="chitiettour p-3 mb-3">
              <h6 className="schedule fw-bold p-2">Giá tour bao gồm:</h6>
              <p><span className="text-blue fw-bold">- VẬN CHUYỂN:</span> Xe du lịch 16, 29, 45 chỗ đời mới máy lạnh, tivi, ghế bật.</p>
              <p><span className="text-blue fw-bold">- PHÒNG NGỦ:</span> 2 khách/phòng, có điều hòa, tivi, tủ lạnh, máy nước nóng, wifi.</p>
              <p><span className="text-blue fw-bold">- ĂN UỐNG:</span> 3 bữa chính, 1 bữa sáng, 1 bữa tối, 1 bữa trưa, 1 bữa ăn phụ.</p>
              <p><span className="text-blue fw-bold">- THAM QUAN:</span> Vé tham quan các điểm du lịch trong chương trình.</p>
              <p><span className="text-blue fw-bold">- HƯỚNG DẪN VIÊN:</span> Hướng dẫn viên nhiệt tình, thân thiện, chuyên nghiệp.</p>
              <p><span className="text-blue fw-bold">- BẢO HIỂM:</span> Khách được bảo hiểm du lịch trọn gói, mức bồi thường tối đa 100.000.000đ/trường hợp.</p>
              <p><span className="text-blue fw-bold">- QUÀ TẶNG:</span> Nón du lịch, khăn lạnh, nước tinh khiết.</p>
            </Card>
            <Card className="p-3 mb-3">
              <h6 className="schedule fw-bold p-2">Chính sách trẻ em:</h6>
              <p><span className="text-blue fw-bold text-uppercase">- Từ 05 - dưới 10 tuổi:</span> 50% giá tour người lớn, ngủ ghép với gia đình.</p>
              <p><span className="text-blue fw-bold text-uppercase">- Từ 10 tuổi trở lên:</span> Giá tour như người lớn.</p>
            </Card>
            <Card className="p-3">
              <h6 className="schedule fw-bold p-2">Lưu ý:</h6>
              <p><span className="text-blue fw-bold text-uppercase">- Nếu hủy tour:</span></p>
              <p>- Hủy tour sau khi đăng ký: 30% giá tour.</p>
              <p>- Trước ngày đi 20 ngày: 50% giá tour.</p>
              <p>- Trước ngày đi 10-19 ngày: 75% giá tour.</p>
              <p>- Trước ngày đi 0-10 ngày: 100% giá tour.</p>
              <p>- Việc hủy bỏ phải được thông báo trực tiếp với Công ty qua fax, email, tin nhắn và được xác nhận.</p>
              <p>- Công ty không chịu trách nhiệm phát sinh do lỗi của hãng hàng không, tàu hỏa, tàu thủy.</p>
            </Card>
          </div>
        </Col>

        {/* Cột phải: Lịch trình và Giá */}
        <Col md={4} sm={12}>
          <Card className="p-4 mb-4 shadow">
            <h3 className="text-blue fw-bold">Lịch trình và Giá</h3>
            <h6 className="my-4">Chọn ngày khởi hành và xem giá</h6>
            <Form.Group className="text-center mb-4">
              <Form.Control type="date" className="w-50 mx-auto" defaultValue={new Date().toISOString().split("T")[0]} />
            </Form.Group>

            <Row className="inputngay my-4 align-items-center">
              <Col>Người lớn</Col>
              <Col>{tour.gia}</Col>

            </Row>
            <Row className="inputngay my-4 align-items-center">
              <Col>Trẻ em</Col>
              <Col>{(parseInt(tour.gia.replace(/\./g, "").replace("đ", ""), 10) / 2).toLocaleString("vi-VN")}đ</Col>

            </Row>

            <Row className="my-4">
              <Col>
                <Button variant="outline-danger" className="w-100 fw-bold fs-5">Liên hệ tư vấn</Button>
              </Col>
              <Col>
              <Link
                  to={`/payment/${id}`} // Điều hướng đến trang thanh toán
                  className="btn btn-danger w-100 fw-bold fs-5" // Giữ kiểu dáng như Button
                >
                  Đặt Tour ngay
                </Link>
              </Col>
            </Row>
          </Card>

          {/* Thông tin bổ sung */}
          <Card className="p-4 shadow">
            <Row className="my-3">
              <Col md={6} xs={6}><i className="fa-solid fa-check text-success me-2" />Bảo hiểm</Col>
              <Col md={6} xs={6}><i className="fa-solid fa-check text-success me-2" />Bữa ăn</Col>
            </Row>
            <Row className="my-3">
              <Col md={6} xs={6}><i className="fa-solid fa-check text-success me-2" />Hướng dẫn viên</Col>
              <Col md={6} xs={6}><i className="fa-solid fa-check text-success me-2" />Vé tham quan</Col>
            </Row>
            <Row className="my-3">
              <Col md={6} xs={6}><i className="fa-solid fa-check text-success me-2" />Xe Limousine</Col>
              <Col md={6} xs={6}><i className="fa-solid fa-check text-success me-2" />Xe đưa đón</Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TourDetail;
