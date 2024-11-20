import React, { useRef } from "react";
import "./Order.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Tinh from "./Tinh";


const Order = () => {
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_u2wexxs", "template_x2cndy8", form.current, {
        publicKey: "cXOgRNnywX48acMXh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
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
  );
};

export default Order;
