import React from "react";
import { UseCart } from "../../../Context/Data/Cart";
import "./Card.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
const Card = () => {
  const { cart, handleQuantity, handleDelete } = UseCart();
  const handleVoucher = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
    }
  };
  return (
      <Container className="page-cart">
        <Row>
          <Col lg={12}><h2 className="heading">Trang Giỏ Hàng</h2></Col>
        </Row>
        <Row>
          <Col lg={8}>
            <table
              className="table-cart"
              style={{ width: "100%", borderCollapse: "collapse" }}
            >
              <tr>
                <th style={{ width: "20%" }}>Hình ảnh</th>
                <th style={{ width: "30%" }}>Sản Phẩm</th>
                <th style={{ width: "20%" }}>Số Lượng</th>
                <th style={{ width: "10%" }}>Giá</th>
                <th style={{ width: "10%" }}>Tạm Tính</th>
                <th style={{ width: "10%" }}>Xoá</th>
              </tr>
              {cart.map((item, index) => (
                <tr>
                  <td>
                    <img src={item.image} alt="" />
                  </td>
                  <td>
                    <h3 className="title">{item.title}</h3>
                  </td>
                  <td>
                    <span
                      type="minus"
                      onClick={() => handleQuantity("minus", index)}
                    >
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </span>
                    <input
                      id="input-quantity"
                      type="number"
                      name="quantity"
                      value={item.quantity}
                      disabled="disabled"
                    />
                    <span
                      type="plus"
                      onClick={() => handleQuantity("plus", index)}
                    >
                      <i className="fa fa-plus"></i>
                    </span>
                  </td>
                  <td>
                    <p>{item.price.toFixed(2)} $</p>
                  </td>
                  <td>
                    <p>{(item.price * item.quantity).toFixed(2)} $</p>
                  </td>
                  <td>
                    <a href="javascript:;" onClick={() => handleDelete(index)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </table>
          </Col>
          <Col lg={4}>
            <div className="s_total">
              <div className="info">
                <div>Tổng Đơn Hàng: </div>
                <div className="total">
                  <span>
                    {cart
                      .reduce((prev, current) => {
                        return prev + current.quantity * current.price;
                      }, 0)
                      .toFixed(2)}{" "}
                    $
                  </span>
                </div>
              </div>
              <div className="voucher">
                <h5>Nhập mã giảm giá (nếu có): </h5>
                <input
                  onKeyDown={(e) => handleVoucher(e)}
                  id="input-quantity"
                  type="text"
                  name="quantity"
                  placeholder="Nhập mã giảm giá"
                />
              </div>
              <Link to="/order" className="s_button">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i> MUA
                NGAY
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default Card;
