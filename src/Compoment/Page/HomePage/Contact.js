import React, { useState } from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Tinh from "../Order/APIForm";
import usePageTitle from "../../../Features/TitlePage";
// }
const Contact = () => {


  return (
    <div className="contact space-compoment">
      <Container>
        <Row>
          <Col lg={6}>
            <div class="contact-form">
              <h2>Để lại thông tin tại đây</h2>
              <form>
                <div class="form-group">
                  <input type="text" placeholder="Họ của quý khách" required />
                  <input type="text" placeholder="Tên của quý khách" required />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    placeholder="Gmail của quý khách"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    placeholder="Số điện thoại của quý khách"
                    required
                  />
                </div>
                <Tinh></Tinh>
                <div class="form-group">
                  <textarea placeholder="Nội dung thêm..."></textarea>
                </div>
                <button type="submit">Gửi ngay</button>
              </form>
            </div>
          </Col>
          <Col lg={6}>
            <div className="contact-info flex flex-column">
              <h2>THÔNG TIN LIÊN HỆ</h2>
              <ul>
                <li>
                  <strong>Địa chỉ:</strong>  Đường số 23, Phường 11, Quận 6,
                  Thành phố Hồ Chí Minh, Việt Nam
                </li>
                <li>
                  <strong>Gọi ngay :</strong> 0387039792
                </li>
                <li>
                  <strong>Gửi mail :</strong> thangvuong843@gmail.com
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
