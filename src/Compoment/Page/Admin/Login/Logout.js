import React from 'react';
import { Button } from 'react-bootstrap';

const Logout = () => {
    // Hàm xử lý đăng xuất
    const handleLogout = () => {
        // Xóa thông tin đăng nhập từ localStorage
        localStorage.removeItem("email");

        // Điều hướng người dùng đến trang đăng nhập bằng window.location
        window.location.href = "/login";
    };

    return (
        <div className="log-out">
            {/* Nút Logout */}
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default Logout;
