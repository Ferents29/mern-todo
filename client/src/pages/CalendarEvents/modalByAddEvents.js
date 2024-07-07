import React from 'react';
import {Button, Form, Input, Modal} from "antd";

const ModalByAddEvents = ({ isModalOpen, onAddEvent, handleCancel, form }) => {
    return (
        <Modal
            title="Add event"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={false}
        >
            <Form
                form={form}
                name="addEvent"
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
                onFinish={onAddEvent}
                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your title!',
                        },
                    ]}
                >
                    <Input />
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
    );
};

export default ModalByAddEvents;