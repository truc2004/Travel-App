import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Signup({ show, handleClose }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSignup = () => {
    let newErrors = {};

    if (!username.trim()) newErrors.username = "Vui lòng nhập tên đăng nhập!";
    if (!email.trim()) newErrors.email = "Vui lòng nhập email!";
    if (!phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại!";
    if (!password.trim()) newErrors.password = "Vui lòng nhập mật khẩu!";
    if (!confirmPassword.trim()) newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu!";
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp!";
    }

    setErrors(newErrors);

    // Nếu không có lỗi thì đóng modal
    if (Object.keys(newErrors).length === 0) {
      handleClose();
    }
  };

  // Đóng modal khi đăng ký bằng mạng xã hội
  const handleSocialSignup = () => {
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="fw-bold fs-3 text-primary">Đăng ký</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Input tài khoản */}
        <input
          type="text"
          className={`form-control mb-3 p-2 ${errors.username ? "border-danger" : ""}`}
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p className="text-danger">{errors.username}</p>}

        {/* Input email */}
        <input
          type="email"
          className={`form-control mb-3 p-2 ${errors.email ? "border-danger" : ""}`}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-danger">{errors.email}</p>}

        {/* Input số điện thoại */}
        <input
          type="tel"
          className={`form-control mb-3 p-2 ${errors.phone ? "border-danger" : ""}`}
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p className="text-danger">{errors.phone}</p>}

        {/* Input mật khẩu */}
        <input
          type="password"
          className={`form-control mb-3 p-2 ${errors.password ? "border-danger" : ""}`}
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-danger">{errors.password}</p>}

        {/* Xác nhận mật khẩu */}
        <input
          type="password"
          className={`form-control mb-3 p-2 ${errors.confirmPassword ? "border-danger" : ""}`}
          placeholder="Xác nhận mật khẩu"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}

        {/* Hoặc đăng ký bằng */}
        <div className="text-center">
          <p className="mb-4" style={{ fontWeight: 500 }}>Hoặc đăng ký bằng:</p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="outline-primary" className="px-3" onClick={handleSocialSignup}>
              <img src="/src/image/facebook.png" alt="Facebook" width="25" height="25" />
            </Button>
            <Button variant="outline-danger" className="px-3" onClick={handleSocialSignup}>
              <img src="/src/image/google.png" alt="Google" width="25" height="25" />
            </Button>
            <Button variant="outline-dark" className="px-3" onClick={handleSocialSignup}>
              <img src="/src/image/gmail.png" alt="Gmail" width="25" height="25" />
            </Button>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="border-0">
        <Button variant="primary" className="w-100" onClick={handleSignup}>
          Đăng ký
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Signup;
