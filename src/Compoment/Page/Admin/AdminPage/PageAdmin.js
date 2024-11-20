import React, { useState } from "react";
import HeadingPage from "../../../Title/HeadingPage";
import useAxios from "../../../../Context/API/UseAxios";
import { Container, Row, Tab, Tabs } from "react-bootstrap";
import AddProduct from "../../../Page/Admin/Controller/AddProduct";
import ListProduct from "../../../Page/Admin/Controller/ListProduct";
import ListOrder from "../Controller/ListOrder";
import TableList from "../../../Global/Thumb/TableList";
const PageAdmin = () => {
  const [emailUser] = useState(localStorage.getItem("email"));

  const dataAdmin = useAxios(
    "https://673c32f596b8dcd5f3f8dda8.mockapi.io/admin"
  );
  const check = dataAdmin.find((item) => item.email === emailUser);
  return (
    <div className="page-admin space-compoment">
      <HeadingPage title={`Xin chào ${check && check.role}`}></HeadingPage>
      <Container>
        <Row>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Danh sách sản phẩm">
              <ListProduct
                link={
                  "https://6716463e33bc2bfe40bd35cb.mockapi.io/demoapi-xuanphuc/productMarketing"
                }
              ></ListProduct>
            </Tab>
            <Tab eventKey="profile" title="Thêm sản phẩm">
              <AddProduct></AddProduct>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default PageAdmin;
