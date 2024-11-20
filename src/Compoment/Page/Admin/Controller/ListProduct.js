import React from 'react';
import Table from "react-bootstrap/Table";
import Title from '../../../Title/Title';
import { Container, Row } from 'react-bootstrap';
import { UseCart } from '../../../../Context/Data/Cart';
import ConvertPrice from '../../../Global/Thumb/ConvertPrice';
import useAxios from '../../../../Context/API/UseAxios';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./FunctionProduct.css";
import usePageTitle from '../../../../Features/TitlePage';

const ListProduct = (props) => {
    usePageTitle(`Danh sách sản phẩm - Ông Xuân`);

    const navigate = useNavigate();
    const tablelistProduct = [
        "id",
        "Tên sản phẩm",
        "Mã sản phẩm",
        "Kho",
        "Giá",
        "Danh mục",
        "Trạng thái",
    ];
    const dataProduct = useAxios(props.link);

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`${props.link}/${id}`);
            alert("Đã xóa sản phẩm thành công");
        }catch (error){
            console.log("Errors Deleting Data:", error);
        }
    };
    const handleUpdate = (index) => {
            navigate(`/update-product/${index}`);
    };
    return (
        <div className="admin-list-product">
            <Container>
                <Row>
                    <Title title="Danh sách sản phẩm" />
                </Row>
            </Container>
            <Table>
                <thead>
                    <tr>
                        {tablelistProduct &&
                        tablelistProduct.map((item) => <th>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {dataProduct &&
                        dataProduct.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.code}</td>
                            <td>{item.qty}</td>

                            <td>
                                <ConvertPrice price={item.price}></ConvertPrice>
                            </td>
                            <td>{item.category}</td>
                            <td className="icnon-function">
                                <a href="javascript:;" onClick={() => handleDelete(index)}>
                                    <i className="fa-solid fa-trash-can"></i>
                                </a>
                                <a href="javascript:;" onClick={() => handleUpdate(item.id)}>
                                    <i className="fa-solid fa-pen"></i>
                                </a>
                            </td>
                        </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListProduct;