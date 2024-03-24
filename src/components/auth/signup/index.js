import React from "react";
import "./style.css"
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
} from 'antd';
import FormItem from "antd/es/form/FormItem";
const { RangePicker } = DatePicker;

const SignUp = () => {
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 6,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 14,
            },
        },
    };

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <div className="main-component">
            <div className="signup-component">

                <div className="signup-sec row">
                    <div className="col-3 m-auto">
                        <div className="d-flex flex-column">
                        <button>Sign Up</button>
                        <button>Sign In</button>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="signup-header">SignUp</div>
                        <Form
                            {...formItemLayout}
                            variant="filled"
                            style={{
                                maxWidth: 600,
                                marginTop: "40px"
                            }}
                        >
                            <Form.Item
                                label="Fullname"
                                name="Fullname"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input!',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <FormItem
                                label="Gender"
                                name="Gender"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input!',
                                    },
                                ]}>
                                <Select
                                    placeholder="Select Gender"
                                    optionFilterProp="children"
                                    filterOption={filterOption}
                                    className="text-start"
                                    options={[
                                        {
                                            value: 'male',
                                            label: 'male',
                                        },
                                        {
                                            value: 'female',
                                            label: 'female',
                                        }
                                    ]}
                                />
                            </FormItem>

                            <Form.Item
                                label="DatePicker"
                                name="DatePicker"
                                className="text-start"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input!',
                                    },
                                ]}
                            >
                                <DatePicker className="w-100" />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    offset: 6,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;