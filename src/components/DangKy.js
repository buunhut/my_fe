import axios from 'axios';
import React, { useState } from 'react'
import { callApi } from '../services/callApi';
import { NavLink } from 'react-router-dom';

const DangKy = () => {
    const [nguoiDung, setNguoiDung] = useState({
        taiKhoan: '',
        matKhau: '',
        fullName: '',
        email: '',
        phone: '',
        address: '',
        company: '',
        mst: '',

    })
    const onChangeInput = (event) => {
        const { id, value } = event.target;
        // Sử dụng hàm setState với callback để cập nhật state
        setNguoiDung(prevState => ({
            ...prevState,
            [id]: value
        }));
    }
    const handleDangKy = async () => {
        //gọi axios ở đây
        const result = await callApi.nguoiDung('post', 'dang-ky', nguoiDung)
        console.log(result)

    }
    return (
        <div className="container">
            <h1 className="textCenter mt10">
                Trang đăng ký
            </h1>
            <div className="width400 center">
                <div className='mt30 myForm'>
                    <form action="">
                        <div className="inputDiv mt10">
                            <input id="taiKhoan" type="text" placeholder="username" className="inputItem"
                                onChange={onChangeInput} value={nguoiDung.taiKhoan} />
                        </div>
                        <div className="inputDiv mt10">
                            <input id="matKhau" type="password" placeholder="password" className="inputItem"
                                onChange={onChangeInput} value={nguoiDung.matKhau} />
                        </div>
                        <div className="inputDiv mt10">
                            <input id="fullName" type="text" placeholder="full name" className="inputItem"
                                onChange={onChangeInput} value={nguoiDung.fullName} />
                        </div>
                        <div className="inputDiv mt10">
                            <input id="email" type="text" placeholder="email" className="inputItem"
                                onChange={onChangeInput} value={nguoiDung.email} />
                        </div>
                        <div className="inputDiv mt10">
                            <input id="phone" type="text" placeholder="phone" className="inputItem"
                                onChange={onChangeInput} value={nguoiDung.phone} />
                        </div>
                        <div className="inputDiv mt10">
                            <input id="address" type="text" placeholder="address" className="inputItem"
                                onChange={onChangeInput} value={nguoiDung.address} />
                        </div>
                        <div className="inputDiv mt10">
                            <input id="company" type="text" placeholder="company" className="inputItem"
                                onChange={onChangeInput} value={nguoiDung.company} />
                        </div>
                        <div className="inputDiv mt10">
                            <input id="mst" type="text" placeholder="tax code" className="inputItem"
                                onChange={onChangeInput} value={nguoiDung.mst} />
                        </div>
                        {/* <div className="inputDiv mt10">
                        <input id="avatar" type="file" className="inputItem"
                            onChange={onChangeInput} value={nguoiDung.avatar} />
                    </div> */}
                        <div className="inputDiv">
                            <button type="button" className="myBtn mt10" onClick={handleDangKy}>Đăng ký</button>
                        </div>
                    </form>
                </div>
                <div className="mt30">
                    <NavLink to='/' className="link" >Quay về trang đăng nhập</NavLink>
                </div>

            </div>
        </div>
    )
}

export default DangKy