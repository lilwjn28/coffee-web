import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";
import useAxios from '../../../../Context/API/UseAxios';
import { UseCart } from '../../../../Context/Data/Cart';
import usePageTitle from '../../../../Features/TitlePage';
import Title from '../../../Title/Title';
import axios from 'axios';

const AddCoffeeProduct = () => {
    usePageTitle(`Thêm sản phẩm - Cà phê bột`);

    const [validated, setValidated] = useState(false);
    const { linkCate, linkProduct } = UseCart();
    const cate = useAxios(linkCate);

    const [dataProduct, setDataProduct] = useState({
        title: "",
        price: "",
        salePrice: "",
        image: "",
        description: "",
        category: "",
    });

    const fetchData = async () => {
        try {
            await axios.post(linkProduct, dataProduct);
            alert("Thêm sản phẩm thành công!");
        } catch (error) {
            console.error("Lỗi khi thêm sản phẩm", error);
        }
    };

    const handlePostProduct = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            await fetchData();
        }
        setValidated(true);
    };

    return (
        <div className="form-add-product">
            <Container>
                <Row>
                    <Title title="Thêm sản phẩm cà phê bột mới" />
                </Row>
                <Form noValidate validated={validated} onSubmit={handlePostProduct}>
                    <Form.Group className="mb-3" controlId="formProductName">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control
                            required
                            size="lg"
                            type="text"
                            placeholder="Nhập tên sản phẩm"
                            onChange={(e) =>
                                setDataProduct({ ...dataProduct, title: e.target.value })
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            Vui lòng nhập tên sản phẩm.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formProductPrice">
                                <Form.Label>Giá bán thường</Form.Label>
                                <Form.Control
                                    required
                                    size="lg"
                                    type="number"
                                    placeholder="Nhập giá bán"
                                    onChange={(e) =>
                                        setDataProduct({ ...dataProduct, price: e.target.value })
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    Vui lòng nhập giá bán sản phẩm.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formSalePrice">
                                <Form.Label>Giá khuyến mãi</Form.Label>
                                <Form.Control
                                    size="lg"
                                    type="number"
                                    placeholder="Nhập giá khuyến mãi"
                                    onChange={(e) =>
                                        setDataProduct({ ...dataProduct, salePrice: e.target.value })
                                    }
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formProductImage">
                        <Form.Label>Ảnh sản phẩm</Form.Label>
                        <Form.Control
                            size="lg"
                            type="text"
                            placeholder="Nhập đường dẫn ảnh"
                            onChange={(e) =>
                                setDataProduct({ ...dataProduct, image: e.target.value })
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCategory">
                        <Form.Label>Danh mục sản phẩm</Form.Label>
                        <Form.Select
                            required
                            onChange={(e) =>
                                setDataProduct({ ...dataProduct, category: e.target.value })
                            }
                        >
                            <option value="">Chọn danh mục</option>
                            {cate.map((item) => (
                                <option value={item.title} key={item.id}>
                                    {item.title}
                                </option>
                            ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Vui lòng chọn danh mục sản phẩm.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Mô tả sản phẩm</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Nhập mô tả sản phẩm"
                            onChange={(e) =>
                                setDataProduct({ ...dataProduct, description: e.target.value })
                            }
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Thêm sản phẩm
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddCoffeeProduct;
