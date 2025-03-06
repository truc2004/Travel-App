import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Login({ show, handleClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleLogin = () => {
    let newErrors = { username: "", password: "" };

    if (!username.trim()) newErrors.username = "Vui lòng nhập tên đăng nhập!";
    if (!password.trim()) newErrors.password = "Vui lòng nhập mật khẩu!";

    setErrors(newErrors);

    // Nếu không có lỗi thì đóng modal
    if (!newErrors.username && !newErrors.password) {
      handleClose();
    }
  };

  // Hàm đóng modal khi bấm vào đăng nhập bằng Facebook, Google, Gmail
  const handleSocialLogin = () => {
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="fw-bold fs-3 text-primary">Đăng nhập</Modal.Title>
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
        {errors.username && <p className="text-danger mb-2">{errors.username}</p>}

        {/* Input mật khẩu */}
        <input
          type="password"
          className={`form-control mb-3 p-2 ${errors.password ? "border-danger" : ""}`}
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-danger mb-2">{errors.password}</p>}

        {/* Quên mật khẩu */}
        <p className="text-end text-primary mb-3" style={{ cursor: "pointer" }}>
          Quên mật khẩu?
        </p>

        {/* Hoặc đăng nhập bằng */}
        <div className="text-center">
          <p className="mb-4" style={{ fontWeight: 500 }}>Hoặc đăng nhập bằng:</p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="outline-primary" className="px-3" onClick={handleSocialLogin}>
              <img src="/src/image/facebook.png" alt="Facebook" width="25" height="25" />
            </Button>
            <Button variant="outline-danger" className="px-3" onClick={handleSocialLogin}>
              <img src="/src/image/google.png" alt="Google" width="25" height="25" />
            </Button>
            <Button variant="outline-dark" className="px-3" onClick={handleSocialLogin}>
              <img src="/src/image/gmail.png" alt="Gmail" width="25" height="25" />
            </Button>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="border-0">
        <Button variant="primary" className="w-100" onClick={handleLogin}>
          Đăng nhập
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Login;
