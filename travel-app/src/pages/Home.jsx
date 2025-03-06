
import { Container, Row, Col, Card, Button, Carousel, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const dsTour = [
    {
      maTour: 1,
      tenTour: "Hồ Gươm - Quảng Trường Ba Đình - Hà Nội",
      thoiGian: "3 ngày 2 đêm",
      phuongTien: "Tàu Lửa",
      ngayKhoiHanh: "28/3/2024",
      gia: "4.499.000đ",
      giaTruocKhiGiam: "6.499.000đ",
      tongquan:
        "Hành trình khám phá Quảng trường Ba Đình, Hà Nội, là một cơ hội tuyệt vời để khám phá vẻ đẹp lịch sử và văn hóa của thủ đô nước Việt Nam...",
      hinhAnh: "/src/image/TourMienBac/HaNoi/HaNoi1.jpg",
      hinhAnh2: "/src/image/TourMienBac/HaNoi/HaNoi2.jpg",
      hot: "1",
      vungmien: "bac",
    },
    {
      maTour: 2,
      tenTour: "Sa Pa - Ruộng Bậc Thang - Lào Cai",
      thoiGian: "3 ngày 2 đêm",
      phuongTien: "Máy bay",
      ngayKhoiHanh: "15/4/2024",
      gia: "2.999.000đ",
      giaTruocKhiGiam: "3.999.000đ",
      tongquan:
        "Hành trình khám phá Sa Pa và Ruộng Bậc Thang, Lào Cai, là một trải nghiệm tuyệt vời để bạn khám phá vẻ đẹp hoang sơ và sự hấp dẫn của vùng núi phía Bắc Việt Nam...",
      hinhAnh: "/src/image/TourMienBac/LaoCai/SaPa1.jpg",
      hinhAnh2: "/src/image/TourMienBac/LaoCai/SaPa2.jpg",
      hot: "1",
      vungmien: "bac",
    },
    {
      maTour: 3,
      tenTour: "Chợ nổi Cái Răng - Vườn Trái Cây - Cần Thơ",
      thoiGian: "2 ngày 1 đêm",
      phuongTien: "Xe ghế ngồi",
      ngayKhoiHanh: "28/3/2024",
      gia: "1.899.000đ",
      giaTruocKhiGiam: "2.599.000đ",
      tongquan:
        "Du lịch Cần Thơ trong vòng 2 ngày một đêm sẽ đưa du khách khám phá vẻ đẹp và sự đa dạng văn hóa của thành phố sông nước Cần Thơ...",
      hinhAnh: "/src/image/TourMienNam/CanTho/CanTho1.jpg",
      hinhAnh2: "/src/image/TourMienNam/CanTho/CanTho2.jpg",
      hot: "1",
      vungmien: "nam",
    },
    {
      maTour: 4,
      tenTour: "Tháp Trấn An - Vườn Hoa Kiểng - Đồng Tháp",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe ghế ngồi",
      ngayKhoiHanh: "1/6/2024",
      gia: "2.699.000đ",
      giaTruocKhiGiam: "3.899.000đ",
      tongquan:
        "Khám phá vùng đất Đồng Tháp - một điểm đến tuyệt vời cho những ai yêu thích văn hóa và thiên nhiên miền Tây...",
      hinhAnh: "/src/image/TourMienNam/DongThap/DongThap1.jpg",
      hinhAnh2: "/src/image/TourMienNam/DongThap/DongThap2.jpg",
      hot: "1",
      vungmien: "nam",
    },
    {
      maTour: 5,
      tenTour: "Cầu Bàn Tay - Cầu Con Rồng - Đà Nẵng",
      thoiGian: "5 ngày 4 đêm",
      phuongTien: "Máy bay",
      ngayKhoiHanh: "25/4/2024",
      gia: "4.999.000đ",
      giaTruocKhiGiam: "5.599.000đ",
      tongquan:
        "Hành trình khám phá Cầu Bàn Tay, Cầu Con Rồng và thành phố Đà Nẵng mang đến một trải nghiệm tuyệt vời về văn hóa, kiến trúc và vẻ đẹp tự nhiên của miền Trung Việt Nam...",
      hinhAnh: "/src/image/TourMienTrung/DaNang/DaNang1.jpg",
      hinhAnh2: "/src/image/TourMienTrung/DaNang/DaNang2.jpg",
      hot: "1",
      vungmien: "trung",
    },
    
    {   maTour:6, 
        tenTour:"Cố Đô Huế - Cầu Trường Tiền - Thừa Thiên Huế", 
        thoiGian: "3 ngày 2 đêm", 
        phuongTien: "Xe lửa", 
        ngayKhoiHanh: "4/5/2024", 
        gia: "3.199.000đ", 
        giaTruocKhiGiam: "3.799.000đ" ,
        tongquan:"Hành trình khám phá Cố Đô Huế, Cầu Trường Tiền và Thừa Thiên Huế là một hành trình mang lại trải nghiệm sâu sắc về lịch sử, văn hóa và kiến trúc của miền Trung Việt Nam. Với những di sản văn hóa và kiến trúc đặc biệt, Huế là điểm đến không thể bỏ qua cho những ai yêu thích sự hòa mình vào không gian lịch sử và tâm linh.",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 08:00 - 09:00: Đón khách tại điểm hẹn và bắt đầu hành trình khám phá Cố Đô Huế.
        - 09:30 - 11:30: Thăm quan các điểm du lịch nổi tiếng của Cố Đô Huế như Hoàng thành Huế, Thiên Mụ Pagoda và Lăng Tự Đức.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng truyền thống với các món ăn Huế đặc trưng.
        - 13:30 - 15:30: Tiếp tục khám phá các di tích lịch sử và kiến trúc khác của Cố Đô Huế như Lăng Khải Định và Lăng Minh Mạng.
        - 16:00 - 18:00: Tham quan Cầu Trường Tiền, biểu tượng gắn liền với bức tranh văn hóa Huế và ngắm cảnh hoàng hôn từ trên cầu.
        - 18:30 - 20:00: Dùng tối tại một nhà hàng địa phương và thưởng thức ẩm thực Huế đặc sản.
        </p> 
        </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 06:30 - 07:30: Ăn sáng tại khách sạn và chuẩn bị cho ngày tiếp theo.
        - 08:00 - 11:30: Tiếp tục khám phá các điểm du lịch nổi tiếng khác của Thừa Thiên Huế như Chùa Thiên An và Lăng Văn Hiến.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng địa phương.
        - 13:30 - 15:30: Thăm quan khu vực trung tâm thành phố Huế và mua sắm các sản phẩm lưu niệm tại các cửa hàng địa phương.
        - 16:00: Trả khách về điểm hẹn hoặc sân bay để kết thúc chuyến đi.        
        </p> </div> `,
        hinhAnh:"/src/image/TourMienTrung/Hue/Hue1.jpg",
        hinhAnh2:"/src/image/TourMienTrung/Hue/Hue2.jpg",
        hot:"1" ,
        vungmien:"trung"
    },
    
    // tour miền trung 
    {   maTour:7, 
        tenTour:"Vinpearl Land - Nha Trang", 
        thoiGian: "4 ngày 2 đêm", 
        phuongTien: "Máy bay", 
        ngayKhoiHanh: "25/4/2024", 
        gia: "4.999.000đ", 
        giaTruocKhiGiam: "5.599.000đ" ,
        tongquan:"Hành trình khám phá Vinpearl Land - Nha Trang là một chuyến đi giải trí đầy thú vị tại một trong những điểm đến nổi tiếng của miền Trung Việt Nam. Vinpearl Land không chỉ là một công viên giải trí hàng đầu mà còn là khu nghỉ dưỡng sang trọng, đem lại cho du khách trải nghiệm đa dạng và thú vị.",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 08:00 - 09:00: Đón khách tại điểm hẹn và bắt đầu hành trình đến Vinpearl Land - Nha Trang.
        - 09:30 - 11:30: Khám phá các trò chơi và công trình giải trí tại Vinpearl Land như Công viên nước, Công viên hóa thạch, và Rạp xiếc.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng hoặc quầy thức ăn nhanh trong khuôn viên Vinpearl Land.
        - 13:30 - 15:30: Tiếp tục tham quan các khu vực giải trí khác như Vườn thú, Khu vui chơi trẻ em, và Khu vui chơi cảm giác mạnh.
        - 16:00 - 18:00: Thư giãn và tận hưởng không gian nghỉ dưỡng tại bãi biển riêng của Vinpearl Land hoặc tham gia các hoạt động giải trí trên biển.
        - 18:30 - 20:00: Dùng tối tại một nhà hàng trong khuôn viên Vinpearl Land và thưởng thức các món ăn đặc sản vùng biển.

        </p> 
        </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 06:30 - 07:30: Ăn sáng tại khách sạn hoặc khuôn viên Vinpearl Land.
        - 08:00 - 11:30: Tiếp tục khám phá Vinpearl Land với các hoạt động giải trí khác như tham gia các trò chơi ngoài trời, tham quan khu vườn hoa, hoặc tham gia các lớp học và trải nghiệm văn hóa.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng hoặc quầy thức ăn nhanh trong khuôn viên Vinpearl Land.
        - 13:30 - 15:30: Thư giãn và mua sắm tại khu trung tâm thương mại và cửa hàng lưu niệm của Vinpearl Land.
        - 16:00: Trả khách về điểm hẹn hoặc sân bay để kết thúc chuyến đi.            
        </p> </div> `,
        hinhAnh:"/src/image/TourMienTrung/NhaTrang/NhaTrang1.jpg",
        hinhAnh2:"/src/image/TourMienTrung/NhaTrang/NhaTrang2.jpg",
        hot:"0" ,
        vungmien:"trung"
    },

    {   maTour:9, 
        tenTour:"Làng Chài Mũi Né - Tháp Po Sah Inư - Phan Thiết", 
        thoiGian: "4 ngày 2 đêm", 
        phuongTien: "Máy bay", 
        ngayKhoiHanh: "25/4/2024", 
        gia: "4.999.000đ", 
        giaTruocKhiGiam: "5.599.000đ" ,
        tongquan:"Hành trình khám phá Làng Chài Mũi Né, Tháp Po Sah Inư và Phan Thiết mang đến cho du khách một trải nghiệm độc đáo về văn hóa, lịch sử và vẻ đẹp tự nhiên của vùng đất ven biển miền Nam Việt Nam. Tại đây, du khách có cơ hội tìm hiểu về cuộc sống của người dân làng chài, khám phá di sản lịch sử và thưởng ngoạn cảnh đẹp của biển Phan Thiết.",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 08:00 - 09:00: Đón khách tại điểm hẹn và khởi hành đến Làng Chài Mũi Né.
        - 09:30 - 11:30: Thăm quan Làng Chài Mũi Né, nơi bạn có cơ hội tìm hiểu về cuộc sống và nghề cá truyền thống của người dân bản địa.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng ven biển và thưởng thức hải sản tươi ngon.
        - 13:30 - 15:30: Tiếp tục hành trình đến Tháp Po Sah Inư, một di tích chứng tỏ văn hóa Chăm Pa cổ đại tại khu vực.
        - 16:00 - 18:00: Check-in khách sạn và thư giãn tại Phan Thiết.
        - 18:30 - 20:00: Dùng tối tại một nhà hàng địa phương và thưởng thức các món ăn đặc sản của Phan Thiết.
        </p> 
        </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 06:30 - 07:30: Ăn sáng tại khách sạn và chuẩn bị cho ngày tiếp theo.
        - 08:00 - 11:30: Tham quan các điểm du lịch nổi tiếng của Phan Thiết như Bãi biển Mũi Né, Đồi cát Phan Thiết và KDL Suối Tiên.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng địa phương.
        - 13:30 - 15:30: Thăm quan khu trung tâm thành phố Phan Thiết và mua sắm tại các cửa hàng lưu niệm.
        - 16:00: Trả khách về điểm hẹn hoặc sân bay để kết thúc chuyến đi.   
        </p> </div> `,
        hinhAnh:"/src/image/TourMienTrung/PhanThiet/PhanThiet1.jpg",
        hinhAnh2:"/src/image/TourMienTrung/PhanThiet/PhanThiet2.jpg",
        hot:"0" ,
        vungmien:"trung"
    },

    {   maTour:19, 
        tenTour:"Bãi biển Mũi Điện - Tháp Nghinh Phong - Phú Yên", 
        thoiGian: "4 ngày 3 đêm", 
        phuongTien: "Xe lửa", 
        ngayKhoiHanh: "1/7/2024", 
        gia: "7.599.000đ", 
        giaTruocKhiGiam: "7.999.000đ" ,
        tongquan:"Hành trình này sẽ dẫn du khách khám phá vẻ đẹp hoang sơ và tinh tế của Phú Yên thông qua việc thăm quan Bãi biển Mũi Điện và Tháp Nghinh Phong. Đây là cơ hội tuyệt vời để tận hưởng bãi biển trải dài và khám phá di sản văn hóa của vùng đất này.",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 08:00 - 09:00: Đón khách tại điểm hẹn và khởi hành đến Phú Yên.
        - 10:00 - 11:30: Đến Bãi biển Mũi Điện và thăm quan, tận hưởng không khí trong lành và ngắm nhìn cảnh đẹp của biển cả.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng ven biển và thưởng thức hải sản tươi ngon.
        - 13:30 - 15:30: Tiếp tục hành trình đến Tháp Nghinh Phong, một điểm du lịch nổi tiếng với kiến trúc độc đáo và tầm nhìn tuyệt vời.
        - 16:00 - 18:00: Check-in khách sạn và thư giãn tại Phú Yên.
        - 18:30 - 20:00: Dùng tối tại một nhà hàng địa phương và thưởng thức ẩm thực đặc sản của vùng.
        </p> 
        </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 06:30 - 07:30: Ăn sáng tại khách sạn và chuẩn bị cho ngày tiếp theo.
        - 08:00 - 11:30: Khám phá các điểm du lịch khác của Phú Yên như Đèo Cả, Bãi Xép và Mũi Đôi.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng địa phương.
        - 13:30 - 15:30: Thăm quan khu trung tâm thành phố Phú Yên và mua sắm tại các cửa hàng lưu niệm.
        - 16:00: Trả khách về điểm hẹn hoặc sân bay để kết thúc chuyến đi.
        </p> </div> `,
        hinhAnh:"/src/image/TourMienTrung/PhuYen/PhuYen1.jpg",
        hinhAnh2:"/src/image/TourMienTrung/PhuYen/PhuYen2.jpg",
        hot:"0" ,
        vungmien:"trung"
    },

    {   maTour:10, 
        tenTour:"Quảng trường và tượng đài Hồ Chí Minh - Thành Phố Vinh", 
        thoiGian: "2 ngày 1 đêm", 
        phuongTien: "Xe ghế ngồi", 
        ngayKhoiHanh: "26/4/2024", 
        gia: "2.999.000đ", 
        giaTruocKhiGiam: "3.199.000đ" ,
        tongquan:"Hành trình này mang đến cơ hội để khám phá vẻ đẹp lịch sử và văn hóa của Thành phố Vinh thông qua việc thăm quan Quảng trường và Tượng đài Hồ Chí Minh. Đây là một trải nghiệm ý nghĩa để hiểu sâu hơn về di sản văn hóa và tinh thần của người dân Việt Nam.",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 08:00 - 09:00: Đón khách tại điểm hẹn và bắt đầu hành trình đến Thành phố Vinh.
        - 10:00 - 11:30: Thăm quan Quảng trường và Tượng đài Hồ Chí Minh, điểm đến đầu tiên của chúng ta. Tại đây, du khách có cơ hội chiêm ngưỡng tượng đài lớn của Chủ tịch Hồ Chí Minh và khám phá về ý nghĩa lịch sử của nơi này.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng địa phương và thưởng thức các món ăn ngon miền Trung.
        - 13:30 - 15:30: Tiếp tục thăm quan các điểm du lịch khác của Thành phố Vinh như Bảo tàng Hồ Chí Minh, Nhà thờ Đức Bà, và Chợ Vinh để tìm hiểu về văn hóa và đời sống địa phương.
        - 16:00 - 18:00: Thư giãn và mua sắm tại các cửa hàng lưu niệm và trung tâm thương mại.
        - 18:30 - 20:00: Dùng tối tại một nhà hàng địa phương và thưởng thức ẩm thực đặc sản của vùng.        
        </p> 
        </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 06:30 - 07:30: Ăn sáng tại khách sạn và chuẩn bị cho ngày tiếp theo.
        - 08:00 - 11:30: Tiếp tục khám phá các điểm du lịch nổi tiếng khác của Thành phố Vinh như Khu du lịch sinh thái Pu Mat, Khu di tích Quốc gia Đồng Lễ và Khu du lịch Bãi Ân Hòa.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng địa phương.
        - 13:30 - 15:30: Tham quan các điểm du lịch cuối cùng và tận hưởng không gian tự nhiên tại Vinh trước khi chuẩn bị trở về.
        - 16:00: Trả khách về điểm hẹn hoặc sân bay để kết thúc chuyến đi.
        </p> </div> `,
        hinhAnh:"/src/image/TourMienTrung/TpVinh/TpVinh1.jpg",
        hinhAnh2:"/src/image/TourMienTrung/TpVinh/TpVinh2.jpg",
        hot:"0" ,
        vungmien:"trung"
    },

    // tour miền nam

    {   maTour:11, 
        tenTour:"Hòn Bảy - Mũi Cá Mập - Côn Đảo", 
        thoiGian: "2 ngày 1 đêm", 
        phuongTien: "Xe ghế ngồi", 
        ngayKhoiHanh: "12/5/2024", 
        gia: "1.999.000đ", 
        giaTruocKhiGiam: "2.399.000đ" ,
        tongquan:"Hành trình này sẽ đưa du khách khám phá vẻ đẹp hoang sơ và huyền bí của quần đảo Côn Đảo thông qua việc thăm quan Hòn Bảy và Mũi Cá Mập. Đây là cơ hội tuyệt vời để trải nghiệm thiên nhiên tại một trong những điểm đến tuyệt vời nhất của Việt Nam.",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 08:00 - 09:00: Đón khách tại điểm hẹn và khởi hành đến Côn Đảo.
        - 10:00 - 11:30: Đến Hòn Bảy và thăm quan các bãi biển hoang sơ, ngắm nhìn khung cảnh núi non và biển cả hùng vĩ.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng ven biển và thưởng thức hải sản tươi ngon.
        - 13:30 - 15:30: Tiếp tục hành trình đến Mũi Cá Mập, nơi du khách có thể tham gia các hoạt động như lặn ngắm san hô, lướt sóng hoặc thư giãn trên bãi biển.
        - 16:00 - 18:00: Check-in khách sạn và thư giãn tại Côn Đảo.
        - 18:30 - 20:00: Dùng tối tại một nhà hàng địa phương và thưởng thức ẩm thực đặc sản của vùng.     
        </p> 
        </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 06:30 - 07:30: Ăn sáng tại khách sạn và chuẩn bị cho ngày tiếp theo.
        - 08:00 - 11:30: Khám phá các điểm du lịch nổi tiếng khác của Côn Đảo như Hòn Đất Cấp III, Bãi Đầm Trầu và Bãi Nắng.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng địa phương.
        - 13:30 - 15:30: Thăm quan khu trung tâm thành phố Côn Đảo và mua sắm tại các cửa hàng lưu niệm.
        - 16:00: Trả khách về điểm hẹn hoặc sân bay để kết thúc chuyến đi.
        </p> </div> `,
        hinhAnh:"/src/image/TourMienNam/ConDao/ConDao1.jpg",
        hinhAnh2:"/src/image/TourMienNam/ConDao/ConDao2.jpg",
        hot:"0" ,
        vungmien:"nam"
    },

    {   maTour:12, 
        tenTour:"Thác Đứng - Công viên The Destina - Bình Phước", 
        thoiGian: "3 ngày 2 đêm", 
        phuongTien: "Xe ghế ngồi", 
        ngayKhoiHanh: "25/4/2024", 
        gia: "3.199.000đ", 
        giaTruocKhiGiam: "3.799.000đ" ,
        tongquan:"Hành trình này sẽ đưa du khách khám phá vẻ đẹp tự nhiên tuyệt vời của Bình Phước thông qua việc thăm quan Thác Đứng và tận hưởng không gian giải trí tại Công viên The Destina. Đây là cơ hội tuyệt vời để trải nghiệm sự hòa mình vào thiên nhiên và tận hưởng những khoảnh khắc thư giãn bên gia đình và bạn bè.",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 08:00 - 09:00: Đón khách tại điểm hẹn và khởi hành đến Bình Phước.
        - 10:00 - 11:30: Đến Thác Đứng và thăm quan, chiêm ngưỡng vẻ đẹp hoang sơ và mạnh mẽ của thác nước.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng địa phương và thưởng thức các món ăn ngon miền Nam.
        - 13:30 - 15:30: Tiếp tục hành trình đến Công viên The Destina, một điểm đến giải trí phổ biến với các trò chơi và hoạt động dành cho gia đình và trẻ em.
        - 16:00 - 18:00: Check-in khách sạn và thư giãn tại Bình Phước.
        - 18:30 - 20:00: Dùng tối tại một nhà hàng địa phương và thưởng thức ẩm thực đặc sản của vùng.
        </p> 
        </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 06:30 - 07:30: Ăn sáng tại khách sạn và chuẩn bị cho ngày tiếp theo.
        - 08:00 - 11:30: Khám phá các điểm du lịch khác của Bình Phước như Động Đất Mẹt, Suối Lớn và Khu di tích Làng Sen.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng địa phương.
        - 13:30 - 15:30: Thăm quan khu trung tâm thành phố Bình Phước và mua sắm tại các cửa hàng lưu niệm.
        - 16:00: Trả khách về điểm hẹn hoặc sân bay để kết thúc chuyến đi.
        </p> </div> `,
        hinhAnh:"/src/image/TourMienNam/BinhPhuoc/BinhPhuoc1.jpg",
        hinhAnh2:"/src/image/TourMienNam/BinhPhuoc/BinhPhuoc2.jpg",
        hot:"0" ,
        vungmien:"nam"
    },

    {   maTour:13, 
        tenTour:"Núi Bà Den - Tây Ninh", 
        thoiGian: "5 ngày 4 đêm", 
        phuongTien: "Xe lửa", 
        ngayKhoiHanh: "25/6/2024", 
        gia: "4.999.000đ", 
        giaTruocKhiGiam: "5.899.000đ" ,
        tongquan: "Hành trình khám phá Núi Bà Đen, Tây Ninh là một trải nghiệm tâm linh và văn hóa không thể bỏ qua khi bạn đặt chân đến miền Nam Việt Nam. Núi Bà Đen không chỉ là một ngọn núi cao và imposant, mà còn là một điểm linh thiêng quan trọng, thu hút nhiều du khách và phật tử đến thăm viếng và tìm hiểu về lịch sử và văn hóa tâm linh của địa phương.",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 08:00 - 09:00: Đón khách tại điểm hẹn và di chuyển đến Núi Bà Đen.
        - 09:30 - 11:30: Thăm quan các điểm linh thiêng trên đỉnh núi, bao gồm Chùa Bà Đen và các di tích lịch sử khác.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng gần Núi Bà Đen.
        - 13:30 - 15:30: Khám phá các hang động và khu rừng nhiệt đới xung quanh Núi Bà Đen.
        - 16:00 - 18:00: Thăm quan khuôn viên Chùa Tây Ninh, một trong những ngôi chùa lớn nhất và linh thiêng nhất của Việt Nam.
        - 18:30 - 20:00: Dùng tối tại một nhà hàng địa phương và thưởng thức ẩm thực đặc sản của vùng.</p> </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 06:30 - 07:30: Ăn sáng tại khách sạn.
        - 08:00 - 10:00: Tiếp tục thám hiểm Núi Bà Đen và các điểm tham quan lân cận.
        - 10:30 - 12:00: Trải nghiệm hoạt động văn hóa và tham quan các cửa hàng lưu niệm.
        - 12:30 - 13:30: Dùng cơm trưa và rời khỏi khu vực Núi Bà Đen.
        - 14:00: Trả khách về điểm hẹn hoặc sân bay. </p> </div> `,
        hinhAnh:"/src/image/TourMienNam/TayNinh/TayNinh1.jpg",
        hinhAnh2:"/src/image/TourMienNam/TayNinh/TayNinh2.jpg",
        hot:"0" ,
        vungmien:"nam"
    },

    {   maTour:14, 
        tenTour:"Tượng Chúa Kito - Bãi Sau - Vũng Tàu", 
        thoiGian: "3 ngày 2 đêm", 
        phuongTien: "Xe ghế ngồi", 
        ngayKhoiHanh: "21/5/2024", 
        gia: "4.499.000đ", 
        giaTruocKhiGiam: "4.899.000đ" ,
        tongquan:"- Cách trung tâm thành phố Hồ Chí Minh chỉ khoảng 3 tiếng lái xe, với đường bờ biển trải dài 20km. Vũng Tàu là một trong những điểm đến yêu thích của du khách phía Nam. Nằm nhô hẳn ra khỏi đất liền như một dải đất. Từ nơi đây, người ta có thể nhìn biển Đông cả khi trời mọc lẫn lúc hoàng hôn. Bên cạnh những giá trị cảnh quan thiên nhiên, Vũng Tàu còn là miền đất có truyền thống văn hóa lịch sử lâu đời.\n - Du lịch Vũng Tàu bạn sẽ có cảm giác bình yên, dễ chịu với những con đường rộng rãi, thoáng đãng. Dưới là biển xanh, trên là những ngọn núi to, núi nhỏ, cùng những ngôi chùa thanh tịnh… Tất cả tạo nên một Vũng Tàu đầy ma lực, một thành phố Vũng Tàu không chỉ hiền hòa bình dị mà còn vô vàn những danh lam thắng cảnh nổi tiếng.\n",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 07:00 - 08:00: Xuất phát từ Hồ Chí Minh đến Vũng Tàu.
        - 08:00 - 10:00: Check-in khách sạn và nghỉ ngơi.
        - 10:00 - 12:00: Thăm Bảo tàng Vũng Tàu.
        - 12:00 - 13:00: Ăn trưa tại nhà hàng địa phương.
        - 13:00 - 16:00: Tham quan Bãi Sau và tham gia các hoạt động biển.
        - 16:00 - 18:00: Mua sắm và thư giãn tại trung tâm thương mại.
        - 18:00 - 20:00: Dùng tối với hải sản tươi ngon.
        - 20:00 - 22:00: Tự do khám phá Vũng Tàu hoặc nghỉ ngơi.</p> </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 07:00 - 08:00: Ăn sáng tại khách sạn.
        - 08:00 - 10:00: Thăm tượng Chúa Ki-tô và thưởng cảnh từ núi Nhỏ
        - 10:00 - 12:00: Tham quan Công viên Cây Dừa và thưởng trà sữa hoặc cà phê ven biển.
        - 12:00 - 13:00: Ăn trưa tại nhà hàng địa phương.
        - 13:00 - 15:00: Tham quan và mua sắm quà lưu niệm.
        - 15:00 - 16:00: Trở về Hồ Chí Minh. </p> </div> `,
        hinhAnh:"/src/image/TourMienNam/VungTau/VungTau1.jpg",
        hinhAnh2:"/src/image/TourMienNam/VungTau/VungTau2.jpg",
        hot:"0" ,
        vungmien:"nam"
    },

    // tour miền bắc

    {   maTour:15, 
        tenTour:"Đèo Mã Pí Lèng - Thung Lũng Sủng Là - Hà Giang", 
        thoiGian: "6 ngày 5 đêm", 
        phuongTien: "Máy bay", 
        ngayKhoiHanh: "2/7/2024", 
        gia: "7.499.000đ", 
        giaTruocKhiGiam: "7.899.000đ" ,
        tongquan:"Hành trình này sẽ dẫn du khách qua những cung đường ngoạn mục của Đèo Mã Pí Lèng và khám phá vẻ đẹp hoang sơ và hùng vĩ của Thung Lũng Sủng Là ở Hà Giang. Đây là cơ hội tuyệt vời để tận hưởng không gian thiên nhiên tuyệt đẹp và khám phá văn hóa dân tộc độc đáo của vùng núi cao phía Bắc Việt Nam.",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 06:00 - 07:00: Đón khách tại điểm hẹn và khởi hành đến Hà Giang.
        - 10:00 - 12:00: Đến Đèo Mã Pí Lèng và thăm quan, ngắm nhìn khung cảnh hùng vĩ của dãy núi đá vôi và sông Nho Quế.
        - 12:30 - 13:30: Dùng cơm trưa tại một nhà hàng địa phương với các món ăn truyền thống.
        - 14:00 - 16:00: Tiếp tục hành trình đến Thung Lũng Sủng Là và khám phá, tận hưởng vẻ đẹp hoang sơ và thanh bình của thung lũng.
        - 16:30 - 18:00: Check-in khách sạn và thư giãn tại Hà Giang.
        - 18:30 - 20:00: Dùng tối tại một nhà hàng địa phương và thưởng thức ẩm thực đặc sản của vùng.
        </p> 
        </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 06:30 - 07:30: Ăn sáng tại khách sạn và chuẩn bị cho ngày tiếp theo.
        - 08:00 - 11:30: Khám phá các điểm du lịch khác của Hà Giang như Làng Lũng Cú, Chợ Phiên và Công Viên Quang Bình.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng địa phương.
        - 13:30 - 15:30: Thăm quan khu trung tâm thành phố Hà Giang và mua sắm tại các cửa hàng lưu niệm.
        - 16:00: Trả khách về điểm hẹn hoặc sân bay để kết thúc chuyến đi.
        </p> </div> `,
        hinhAnh:"/src/image/TourMienBac/HaGiang/HaGiang1.jpg",
        hinhAnh2:"/src/image/TourMienBac/HaGiang/HaGiang2.jpg",
        hot:"0" ,
        vungmien:"bac"
    },

    {   maTour:16, 
        tenTour:"Đảo Cát Bà - Bãi biển Đồ Sơn - Hải Phòng", 
        thoiGian: "4 ngày 3 đêm", 
        phuongTien: "Máy bay", 
        ngayKhoiHanh: "13/5/2024", 
        gia: "4.299.000đ", 
        giaTruocKhiGiam: "5.199.000đ" ,
        tongquan:"Hành trình này sẽ đưa du khách khám phá sự hòa mình vào thiên nhiên tươi đẹp của Đảo Cát Bà, thưởng ngoạn bãi biển tuyệt vời tại Đồ Sơn và khám phá nét đặc trưng của thành phố biển Hải Phòng. Đây là cơ hội tuyệt vời để tận hưởng những khoảnh khắc thư giãn và khám phá vẻ đẹp đa dạng của Việt Nam.",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 07:00 - 08:00: Đón khách tại điểm hẹn và khởi hành đến Hải Phòng.
        - 09:30 - 10:30: Đến Bãi biển Đồ Sơn và thư giãn, tận hưởng bãi cát trắng và nước biển trong lành.
        - 11:00 - 12:00: Dùng cơm trưa tại một nhà hàng ven biển và thưởng thức các món hải sản tươi ngon.
        - 12:30 - 15:30: Chuyển đến Đảo Cát Bà bằng phà và thăm quan, khám phá các bãi biển, hang động và khu rừng của đảo.
        - 16:00 - 18:00: Check-in khách sạn và thư giãn tại Cát Bà.
        - 18:30 - 20:00: Dùng tối tại một nhà hàng địa phương và thưởng thức ẩm thực đặc sản của đảo.
        </p> 
        </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 06:30 - 07:30: Ăn sáng tại khách sạn và chuẩn bị cho ngày tiếp theo.
        - 08:00 - 11:30: Tham quan các điểm du lịch nổi tiếng của Đảo Cát Bà như Vịnh Lan Hạ, Thung Lung Vàng và Hang Sạt Thủy.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng địa phương.
        - 13:30 - 15:30: Quay lại Hải Phòng và thăm quan các điểm du lịch khác của thành phố như Cầu Đình, Lăng Bác và Chợ Cát Bà.
        - 16:00: Trả khách về điểm hẹn hoặc sân bay để kết thúc chuyến đi.
        </p> </div> `,
        hinhAnh:"/src/image/TourMienBac/HaiPhong/HaiPhong1.jpg",
        hinhAnh2:"/src/image/TourMienBac/HaiPhong/HaiPhong2.jpg",
        hot:"0" ,
        vungmien:"bac"
    },

    {   maTour:17, 
        tenTour:"Thung Nắng - Làng gốm Phù Lãng - Ninh Bình", 
        thoiGian: "6 ngày 5 đêm", 
        phuongTien: "Máy bay", 
        ngayKhoiHanh: "19/5/2024", 
        gia: "8.299.000đ", 
        giaTruocKhiGiam: "9.199.000đ" ,
        tongquan:"Hành trình này sẽ đưa du khách khám phá vẻ đẹp thiên nhiên tại Thung Nắng, tìm hiểu về nghề gốm truyền thống tại Làng gốm Phù Lãng và khám phá vẻ đẹp lịch sử và văn hóa tại Ninh Bình. Đây là cơ hội tuyệt vời để trải nghiệm sự đa dạng của đất nước Việt Nam.",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 08:00 - 09:00: Đón khách tại điểm hẹn và khởi hành đến Ninh Bình.
        - 10:00 - 11:30: Đến Thung Nắng và tham quan, khám phá vẻ đẹp của thung lũng và những cánh đồng lúa xanh mướt.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng địa phương.
        - 13:30 - 15:30: Tiếp tục hành trình đến Làng gốm Phù Lãng và thăm các xưởng gốm truyền thống, tìm hiểu về nghề làm gốm từ đời sống hàng ngày của người dân địa phương.
        - 16:00 - 18:00: Check-in khách sạn và thư giãn tại Ninh Bình.
        - 18:30 - 20:00: Dùng tối tại một nhà hàng địa phương và thưởng thức ẩm thực đặc sản của vùng.
        </p> 
        </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 07:00 - 08:00: Ăn sáng tại khách sạn và chuẩn bị cho ngày tiếp theo.
        - 08:30 - 11:30: Tham quan các điểm du lịch nổi tiếng của Ninh Bình như Hang Múa, Tam Cốc - Bích Động và Vân Long.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng địa phương.
        - 13:30 - 15:30: Thăm quan khu trung tâm thành phố Ninh Bình và mua sắm tại các cửa hàng lưu niệm.
        - 16:00: Trả khách về điểm hẹn hoặc sân bay để kết thúc chuyến đi.
        </p> </div> `,
        hinhAnh:"/src/image/TourMienBac/NinhBinh/NinhBinh1.jpg",
        hinhAnh2:"/src/image/TourMienBac/NinhBinh/NinhBinh2.jpg",
        hot:"0" ,
        vungmien:"bac"
    },

    {   maTour:18, 
        tenTour:"Vịnh Hạ Long - Hải Phòng", 
        thoiGian: "4 ngày 3 đêm", 
        phuongTien: "Xe lửa", 
        ngayKhoiHanh: "22/5/2024", 
        gia: "6.299.000đ", 
        giaTruocKhiGiam: "6.699.000đ" ,
        tongquan:"Hành trình này sẽ đưa du khách khám phá một trong những kỳ quan tự nhiên tuyệt vời nhất của thế giới - Vịnh Hạ Long và khám phá vẻ đẹp độc đáo của thành phố biển Hải Phòng. Đây là cơ hội tuyệt vời để trải nghiệm sự hòa mình vào thiên nhiên tuyệt đẹp và khám phá văn hóa đa dạng của miền Bắc Việt Nam.",
        lichTrinh:  `<div class="box"> <div class="schedule">Ngày 1 </div><p>
        - 08:00 - 09:00: Đón khách tại điểm hẹn và khởi hành đến Vịnh Hạ Long.
        - 10:00 - 12:00: Khám phá Vịnh Hạ Long trên tàu du lịch, ngắm nhìn những ngọn đồi đá vôi kỳ vĩ và những hòn đảo nổi tiếng như Đảo Ti Top, Đảo Hòn Gai và Đảo Tuần Châu.
        - 12:30 - 13:30: Dùng cơm trưa trên tàu và thưởng thức hải sản tươi ngon.
        - 14:00 - 15:30: Tiếp tục khám phá các hang động nổi tiếng như Hang Sửng Sốt, Hang Đầu Gỗ và Hang Trống.
        - 16:00 - 18:00: Chuyển đến Hải Phòng và check-in khách sạn.
        - 18:30 - 20:00: Dùng tối tại một nhà hàng địa phương và thưởng thức ẩm thực đặc sản của vùng.
        </p> 
        </div>  <div class="box"> <div class="schedule">Ngày 2 </div> <p>
        - 07:00 - 08:00: Ăn sáng tại khách sạn và chuẩn bị cho ngày tiếp theo.
        - 08:30 - 11:30: Thăm quan các điểm du lịch nổi tiếng của Hải Phòng như Cầu Đình, Bãi Cháy và Công viên Lưu Hữu Phước.
        - 12:00 - 13:00: Dùng cơm trưa tại một nhà hàng địa phương.
        - 13:30 - 15:30: Thăm quan khu trung tâm thành phố Hải Phòng và mua sắm tại các cửa hàng lưu niệm.
        - 16:00: Trả khách về điểm hẹn hoặc sân bay để kết thúc chuyến đi.
        </p> </div> `,
        hinhAnh:"/src/image/TourMienBac/QuangNinh/QuangNinh1.jpg",
        hinhAnh2:"/src/image/TourMienBac/QuangNinh/QuangNinh2.jpg",
        hot:"0" ,
        vungmien:"bac"
    },
  ];

  

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

      {/* TOUR DU LỊCH */}
       {/* {regularTours.map((tour) => (
              <Col md={4} key={tour.maTour} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={tour.hinhAnh} alt={tour.tenTour} />
                  <Card.Body>
                    <Card.Title>{tour.tenTour}</Card.Title>
                    <Card.Text>
                      <strong>Thời gian:</strong> {tour.thoiGian} <br />
                      <strong>Phương tiện:</strong> {tour.phuongTien} <br />
                      <strong>Ngày khởi hành:</strong> {tour.ngayKhoiHanh} <br />
                      <strong>Giá:</strong>{" "}
                      <span className="text-danger">{tour.gia}</span>{" "}
                      <small className="text-muted text-decoration-line-through">{tour.giaTruocKhiGiam}</small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))} */}
      {/* <div className="content mt-4 py-4 bg-light">
        <div className="content-item">
          <h3 className="fw-bold text-primary">Tour Du Lịch</h3>
          <hr className="mb-4" />
          <Row id="table2">
           

            {hotTours.map((tour) => (

            <Col md={4} key={tour.maTour} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={tour.hinhAnh} alt={tour.tenTour} />
                  <Card.Body>
                    <Card.Title>{tour.tenTour}</Card.Title>
                    <Card.Text>
                      <strong>Thời gian:</strong> {tour.thoiGian} <br />
                      <strong>Phương tiện:</strong> {tour.phuongTien} <br />
                      <strong>Ngày khởi hành:</strong> {tour.ngayKhoiHanh} <br />
                      <strong>Giá:</strong>{" "}
                      <span className="text-danger">{tour.gia}</span>{" "}
                      <small className="text-muted text-decoration-line-through">
                        {tour.giaTruocKhiGiam}
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              ))}
          </Row>
          <Button as={Link} to="/xem-them" variant="primary" className="d-block mx-auto mt-3 fw-bold">
            Xem thêm
          </Button>
        </div>
       </div> */}
    </Container>
  );
}

export default Home;
// import { Container, Row, Col, Card } from "react-bootstrap";

// function Home() {
//   return (
//     <Container className="my-5">
//       <Row className="text-center mb-4">
//         <Col>
//           <h1>Welcome to Travel App</h1>
//           <p className="lead">Explore the world with us!</p>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Plan Your Trip</Card.Title>
//               <Card.Text>
//                 Create your perfect itinerary with our planning tools
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Book Flights</Card.Title>
//               <Card.Text>
//                 Find the best deals on flights worldwide
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Discover Destinations</Card.Title>
//               <Card.Text>
//                 Explore new places and cultures
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Home;
// function Home() {
//     return (
//         <div>
//             <h1>Home</h1>
//         </div>
//     );
// }

// export default Home;

