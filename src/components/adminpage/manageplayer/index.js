import { Button, Dropdown, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DeleteOutlined, EllipsisOutlined } from "@ant-design/icons"


const ManagePlayer = () => {
    const [users, setUsers] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/users");
                setUsers(response.data);
            } catch (error) {
                console.log(error);
                message.error(error.response.data.message);
            }
        };

        fetchData();
    }, [users]);
    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/users/${id}`);
            message.success("Người chơi đã được xóa thành công!");
            // Refresh the list of users
            const response = await axios.get("http://localhost:3001/users");
            setUsers(response.data);
        } catch (error) {
            console.log(error);
            message.error("Có lỗi xảy ra khi xóa người chơi");
        }
    };
    return (
        <div className="col-9" >
            <div className="choose-title">
                <h4 >
                    Người chơi
                </h4>
            </div>
            {users.length > 0 ? (
                <div className="row questions-list">
                    {users.map((user) => (
                        <div key={user._id} className="question-item col-3">
                            <img src={String.fromCharCode.apply(null, user.avatar.data)} />
                            <p className="question-item-content">Họ và tên: {user.fullName}</p>
                            <p className="question-item-answer">Số điện thoại: {user.phone}</p>
                            <Dropdown
                                menu={{
                                    items: [
                                        {
                                            key: '1',
                                            label: (
                                                <DeleteOutlined className="dropdown-item" onClick={() => deleteUser(user._id)} />
                                            ),
                                        },
                                    ],
                                }}
                            >
                                <Button className="dropdown-editing"><EllipsisOutlined /></Button>
                            </Dropdown>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading Subjects ... </p>
            )}
        </div >
    )
}

export default ManagePlayer;