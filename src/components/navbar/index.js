import React from "react";
import "./style.css"
import { SettingOutlined } from "@ant-design/icons"

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="list-nav-item">
                <img src="/logo192.png" width={"50px"} alt=""></img>
                <button className="nav-item">L'amateur</button>
            </div>
            <ul className="list-nav-item">
                <button className="nav-item">
                    Trang Chủ
                </button>
                <button className="nav-item">
                    Đăng Nhập
                </button>
                <button className="nav-item">
                    <SettingOutlined />
                </button>
            </ul>
        </div>
    )
}

export default Navbar;