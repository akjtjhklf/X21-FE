import { Button, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Avatar, List } from 'antd';
import Link from "antd/es/typography/Link";

const ChooseManagement = ({ setCurrentTab }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/users/rank");
                setUsers(response.data);
            } catch (error) {
                console.log(error);
                message.error(error.response.data.message);
            }
        };

        fetchData();
    }, []);
    const data = users;

    return (
        <div className="col-3">
            <div className="choose-title">
                <h4 >
                    Quản Lý
                </h4>
            </div>
            <div className="d-flex flex-column my-2 align-items-center">
                <Button className="btn-choosing" onClick={() => setCurrentTab('Quản lý câu hỏi')}>Quản lý câu hỏi</Button>
                <Button className="btn-choosing" onClick={() => setCurrentTab('Quản lý chủ đề')}>Quản lý chủ đề</Button>
                <Button className="btn-choosing" onClick={() => setCurrentTab('Quản lý người chơi')}>Quản lý người chơi</Button>
                <Button className="btn-choosing" onClick={() => setCurrentTab('Quản lý quản trị viên')}>Quản lý quản trị viên</Button>
            </div>
        </div>
    )
}

export default ChooseManagement;