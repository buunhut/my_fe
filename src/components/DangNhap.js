import React, { useState } from "react";
import axios from "axios"
import { callApi } from "../services/callApi";
import { NavLink } from "react-router-dom";

const DangNhap = () => {
    // Sử dụng object riêng cho việc cập nhật state
    const [nguoiDung, setNguoiDung] = useState({
        taiKhoan: '',
        matKhau: ''
    })

    // Hàm xử lý sự kiện thay đổi input
    const onChangeInput = (event) => {
        const { id, value } = event.target;
        // Sử dụng hàm setState với callback để cập nhật state
        setNguoiDung(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    // Hàm xử lý sự kiện đăng nhập
    const handleDangNhap = async () => {
        const result = await callApi.nguoiDung('post', 'dang-nhap', nguoiDung)
        console.log(result)
    }

    return (
        <div className="container">
            <h1 className="textCenter mt10">
                Trang đăng nhập
            </h1>
            <div className="width400 center">
                <div className="mt30 myForm">
                    <form action="">
                        <div className="inputDiv">
                            <input id="taiKhoan" type="text" placeholder="username" className="inputItem"
                                onChange={onChangeInput} value={nguoiDung.taiKhoan} />
                        </div>
                        <div className="inputDiv mt10">
                            <input id="matKhau" type="password" placeholder="password" className="inputItem"
                                onChange={onChangeInput} value={nguoiDung.matKhau} />
                        </div>
                        <div className="inputDiv mt10">
                            <button type="button" className="myBtn" onClick={handleDangNhap}>Đăng nhập</button>
                        </div>
                    </form>
                </div>
                <div className="mt30">
                    <NavLink to='/dangky' className="link" >Chưa có tài khoản</NavLink>
                </div>

            </div>
        </div>
    );
};

export default DangNhap;
