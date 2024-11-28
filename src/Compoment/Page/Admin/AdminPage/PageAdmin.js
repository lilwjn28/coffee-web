import React, { useEffect, useState } from "react";
import HeadingPage from "../../../Title/HeadingPage";
import useAxios from "../../../../Context/API/UseAxios";
import { Container, Row, Tab, Tabs } from "react-bootstrap";
import AddProduct from "../../../Page/Admin/Controller/AddProduct";
import ListProduct from "../../../Page/Admin/Controller/ListProduct";
import ListOrder from "../Controller/ListOrder";
// import TableList from "../../../Global/Thumb/TableList";
import UserManager from "../../Admin/Controller/UserManager";
import ListAdmin from "../Nav/ListAdmin";
import ListCus from "../Nav/ListCus";
import Logout from "../Login/Logout";
const PageAdmin = () => {
  const [emailUser] = useState(localStorage.getItem("email"));
  const [checkAdmin,setcheckAdmin] = useState("");


  const dataAdmin = useAxios(
    "https://673c32f596b8dcd5f3f8dda8.mockapi.io/admin"
  );
  const check = dataAdmin.find((item) => item.email === emailUser);
  useEffect(() => {
    if (check && check.role === "admin") {
      setcheckAdmin("list-product" );
      
    } else {
      setcheckAdmin("profile");
    }
    <Logout></Logout>
  }, [check]);

  return (
    <div className="page-admin space-compoment">
      <HeadingPage title={`Xin chào, ${check && check.role}`}></HeadingPage>
      <Container>
        <Row>
        {/* <ListCus></ListCus> */}
        {/* <ListAdmin></ListAdmin> */}
          {check && check.role === "admin" ? <ListAdmin></ListAdmin> : <ListCus></ListCus>}
          
        </Row>
      </Container>
    </div>
  );
};

export default PageAdmin;
