import React, {useState} from 'react';
import {Button, Checkbox, Form, Input, Modal, Select} from "antd";
import axios from "axios";
import {resourcesActions} from "../../../redux/actions/resourcesActions";
import {useDispatch} from "react-redux";
const { Option } = Select;

const AddResourceModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = async values => {
        console.log('Success:', values);
        try {
            await axios.post("/api/resources/add", values, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                dispatch(resourcesActions.addResourceRequest(response.data));
            });
            form.resetFields();
        } catch (error) {
            console.log(error);
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onLocationChange = object => {
        console.log('object:', object);
    };
    const onTechnologyChange = object => {
        console.log('object:', object);
    };
    const onProjectsChange = object => {
        console.log('object:', object);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add resource
            </Button>
            <Modal
                title="AddResource"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={false}
            >
                <Form
                    name="AddResource"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="age"
                        name="age"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="address"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="location"
                        name="location"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select location"
                            onChange={onLocationChange}
                            allowClear
                        >
                            <Option value="Uzhorod">Uzhorod</Option>
                            <Option value="Lviv">Lviv</Option>
                            <Option value="Odesa">Odesa</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="technologies"
                        name="technologies"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                         <Select
                            placeholder="Select technology"
                            onChange={onTechnologyChange}
                            allowClear
                        >
                            <Option value="React">React</Option>
                            <Option value="Vue">Vue</Option>
                            <Option value="Node">Node</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="projects"
                        name="projects"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select project"
                            onChange={onProjectsChange}
                            allowClear
                        >
                            <Option value="Project_1">Project 1</Option>
                            <Option value="Project_2">Project 2</Option>
                            <Option value="Project_3">Project 3</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="techLevel"
                        name="techLevel"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="engLevel"
                        name="engLevel"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="facebookLink"
                        name="facebookLink"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="remote"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remote</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AddResourceModal;