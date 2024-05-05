import React, { useState, useEffect } from "react";
import { Button, message, Modal, Form, Input, Dropdown } from "antd";
import { PlusCircleOutlined, DeleteOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons"
import axios from "axios";

const ManageAdmin = () => {
    const [admins, setAdmins] = useState([]);
    const [selectedAdmin, setSelectedAdmin] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [form] = Form.useForm();

    const handleOk = async () => {
        const values = await form.validateFields();
        console.log(values)
        try {
            if (selectedAdmin) {
                await axios.put(`http://localhost:3001/admins/changeinfo/${selectedAdmin._id}`, values);
                message.success("Admin đã được cập nhật thành công!");
            } else {
                await axios.post("http://localhost:3001/admins/register", values);
                message.success("Admin mới đã được tạo thành công!");
            }
            // Refresh the list of admins
            const response = await axios.get("http://localhost:3001/admins");
            setAdmins(response.data);
        } catch (error) {
            console.log(error);
            message.error("Có lỗi xảy ra khi cập nhật admin");
        }
        setIsModalOpen(false);
        setSelectedAdmin(null);
        form.resetFields();
    };

    const showModal = (admin) => {
        if (admin._id) {
            setSelectedAdmin(admin);
            form.setFieldsValue({
                fullName: admin.fullName,
                email: admin.email,
                password: admin.password,
            });
            setIsModalOpen(true);
        }
        else {
            setIsModalOpen(true);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedAdmin(null);
        form.resetFields();
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/admins");
                console.log(response)
                setAdmins(response.data);
            } catch (error) {
                console.log(error);
                message.error(error.response.data.message);
            }
        };

        fetchData();
    }, []);
    const deleteAdmin = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/admins/${id}`);
            message.success("Admin đã được xóa thành công!");
            // Refresh the list of admins
            const response = await axios.get("http://localhost:3001/admins");
            setAdmins(response.data);
        } catch (error) {
            console.log(error);
            message.error("Có lỗi xảy ra khi xóa admin");
        }
    };

    return (
        <div className="col-9" >
            <div className="choose-title">
                <h4 >
                    Quản lý Admin
                </h4>
            </div>
            <Button className="btn-adding mt-3" onClick={showModal}><PlusCircleOutlined /></Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="admin_form"
                >
                    <Form.Item
                        name="fullName"
                        label="Tên đầy đủ"

                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"

                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Mật khẩu"

                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>
            {admins.length > 0 ? (
                <div className="row questions-list">
                    {admins.map((admin) => (
                        <div key={admin._id} className="question-item col-3" onClick={() => setSelectedAdmin(admin)}>
                            <p className="question-item-content">{admin.fullName}</p>
                            <p className="question-item-content">{admin.email}</p>
                            <Dropdown
                                menu={{
                                    items: [
                                        {
                                            key: '1',
                                            label: (
                                                <EditOutlined className="dropdown-item" onClick={() => showModal(admin)} />
                                            ),
                                        },
                                        {
                                            key: '2',
                                            label: (
                                                <DeleteOutlined className="dropdown-item" onClick={() => deleteAdmin(admin._id)} />
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
                <p>Không có admin nào.</p>
            )}
        </div>
    );
};

export default ManageAdmin;