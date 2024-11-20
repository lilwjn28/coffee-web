import React, { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import SeoProduct from "../SeoProduct/SeoProduct";
import { UseCart } from "../../../Context/Data/Cart";

const Product = () => {
  const { searchQuery } = useParams();
  const [product, setProduct] = useState();
  const { handleAddToCart } = UseCart();
  const getProduct = async () => {
    try {
      const resProduct = await fetch(
        `https://fakestoreapi.com/products/${searchQuery}`
      );
      const dataProduct = await resProduct.json();
      setProduct(dataProduct);
    } catch (error) {
      alert(error);
    }
  };
  const [count, setCount] = useState(1);

  useEffect(() => {
    getProduct();
  }, []);
  const handleQuantity = (type) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count > 1) {
      setCount(count - 1);
      }
    }
  };
  return (
    <>
      <Container>
        <Row className="product-detail-container">
          {/* 50% Hình ảnh sản phẩm */}
          <Col lg={5} className="product-image-section">
            <div className="product-image-main">
              <img
                src={product && product.image}
                alt={product && product.title}
              />
            </div>
          </Col>

          <Col lg={7} className="product-info-section">
            <h1>{product && product.title}</h1>
            <p className="product-price">{product && product.price} $</p>
            <span type="minus" onClick={() => handleQuantity("minus")}>
              <i className="fa fa-minus" aria-hidden="true"></i>
            </span>
            <input
              id="input-quantity"
              type="number"
              name="quantity"
              value={count}
              disabled="disabled"
            />
            <span type="plus" onClick={() => handleQuantity("plus")}>
              <i className="fa fa-plus"></i>
            </span>

            <h4>Đặc điểm nổi bật</h4>
            <p className="product-features">{product && product.description}</p>
            {/* <ul className="product-features">
            {ApiProduct.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul> */}
            <div className="product-actions">
              <button className="order-now-button">Đặt Hàng</button>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Thêm Vào Giỏ Hàng
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={8}>
            <SeoProduct
              id={product && product.id}
              image={product && product.image}
              title={product && product.title}
              description={product && product.description}
            ></SeoProduct>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Product;
