import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import ListProduct from "../Controller/ListProduct";
import UserManager from "../Controller/UserManager";
import UpdateProduct from "../Controller/UpdateProduct";

const ListAdmin = () => {
  return (
    <Tabs
      defaultActiveKey="list-product"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="list-product" title="Danh sách sản phẩm">
        <ListProduct
          link={
            "https://6716463e33bc2bfe40bd35cb.mockapi.io/demoapi-xuanphuc/productMarketing"
          }
        ></ListProduct>
      </Tab>

      <Tab eventKey="update-product" title="Thêm sản phẩm">
        <UpdateProduct></UpdateProduct>
      </Tab>

      <Tab eventKey="user-mangager" title="Danh Sách Thành Viên">
        <UserManager></UserManager>
      </Tab>
    </Tabs>
  );
};

export default ListAdmin;
