import { useBooking } from "../components/BookingContext";

function OrderHistory() {
    const { bookedTours } = useBooking();

    return (
        <div className="container-fluid mt-4 px-5">
            <h2 className="mb-4 text-center fw-bold" style={{ marginTop: "7rem", color: "#3C669E" }}>Lịch Sử Đặt Tour</h2>

            {bookedTours.length === 0 ? (
                <div className="alert alert-info text-center">
                    <p>Chưa có tour nào được đặt. Hãy đặt một tour ngay!</p>
                </div>
            ) : (
                <div className="row justify-content-center ">
                    {bookedTours.map((tour, index) => (
                        <div key={index} className="col-12 col-lg-10">
                            <div className="  mb-4 p-3 custom-box " style={{ border: "1px solid gray", boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)" }}>
                                <div className="row g-0">
                                    {/* Hình ảnh bên trái */}
                                    <div className="col-md-5">
                                        <img 
                                            src={tour.image || "/src/image/default-tour.jpg"} 
                                            alt={tour.name} 
                                            className="img-fluid rounded-start tour-image"
                                        />
                                    </div>

                                    {/* Thông tin bên phải */}
                                    <div className="col-md-7 d-flex align-items-center ps-4">
                                        <div className="card-body">
                                            <h4 className="card-title text-primary">{tour.name}</h4>
                                            <p className="card-text">
                                                <strong>📅 Ngày khởi hành:</strong> {tour.departureDate}
                                            </p>
                                            <p className="card-text">
                                                <strong>👥 Số lượng người:</strong> {tour.passengers}
                                            </p>
                                            <p className="card-text">
                                                <strong>💰 Tổng giá:</strong> {tour.price.toLocaleString()} VND
                                            </p>

                                            {/* Nút Chỉnh Sửa và Hủy Chuyến */}
                                            <div className="mt-3 d-flex justify-content-end">
                                                <button 
                                                    className="btn btn-outline-primary me-2"
                                                >
                                                    Chỉnh sửa
                                                </button>
                                                <button 
                                                    className="btn btn-danger"
                                                >
                                                    Hủy chuyến
                                                </button>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default OrderHistory;
