import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Avatar, List } from 'antd';
import Link from "antd/es/typography/Link";

const Ranking = () => {
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
                    Xếp Hạng
                </h4>
            </div>
            <div className="d-flex flex-column my-2">
                <div className="d-flex justify-content-between ant-list-item">
                    <span>Tên Người Chơi</span>
                    <span>Tổng điểm</span>
                </div>
                <List
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={String.fromCharCode.apply(null, item.avatar.data)} />}
                                title={<Link className="item-info">
                                    <p>{item.fullName}</p><p>{item.totalpoint}</p>
                                </Link>}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default Ranking;