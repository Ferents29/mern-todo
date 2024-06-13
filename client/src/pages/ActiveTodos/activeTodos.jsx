import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Button, Flex, Form, Input, Layout, Row, Typography} from "antd";
import {Content} from "antd/es/layout/layout";
import {Footer} from "antd/es/modal/shared";
import axios from "axios";
import {AuthContext} from "../../context/authContext";

const { Text } = Typography;

const ActiveTodos = () => {
    const contentStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#f3f4f5',
    };
    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#4096ff',
    };
    const layoutStyle = {
        borderRadius: 8,
        overflow: 'hidden',
    };

    const { userId } = useContext(AuthContext);
    const [todos,setTodos] = useState([]);

    const [form] = Form.useForm();

    const getTodo = useCallback( async () => {
        try {
            await axios.get("/api/todo/all_todos", {
                headers: {
                    "Content-Type": "application/json"
                },
                params: { userId }
            }).then(response =>
                setTodos([...todos, response.data])
            );
        } catch (error) {
            console.log(error)
        }
    },[userId, todos]);

    useEffect(() => {
        getTodo();
    }, [userId, getTodo]);

    const onFinish = async values => {
        const newValues = {
            ...values,
            userId,
            conpleted:false,
            important: false
        }
        try{
            await axios.post("/api/todo/add", newValues, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                setTodos([...todos, response.data]);
                getTodo();
            });
            form.resetFields();
        }catch (error) {
            console.log(error);
        }
    };

    const onDeleteTodo = useCallback(async id => {
        try{
            await axios.delete(`/api/todo/delete/${id}`,{ id },
                { headers: {"Content-Type": "application/json"}})
                .then(() => getTodo());
        }catch (error) {
            console.log(error);
        }
    },[getTodo]);

    const onDoneTodo = useCallback(async id => {
        try {
            await axios.put(`/api/todo/completed/${id}`,{ id },
                { headers: {"Content-Type": "application/json"}})
                .then((response) => {
                    setTodos(response.data);
                    getTodo();
                });
        }catch (error) {
            console.log(error);
        }
    },[getTodo]);

    const onWarningTodo = useCallback(async id => {
        try {
            await axios.put(`/api/todo/warning/${id}`,{ id },
                { headers: {"Content-Type": "application/json"}})
                .then((response) => {
                    setTodos(response.data);
                    getTodo();
                });
        }catch (error) {
            console.log(error);
        }
    },[getTodo]);

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Flex gap="middle" wrap>
            <Layout style={layoutStyle}>
                <Content style={contentStyle}>
                    <Form
                        form={form}
                        name="basic"
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
                            label="Text"
                            name="text"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Додати
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
                <h3>Активні задачі</h3>
                <Row style={{display:'flex',gap:'20px'}}>
                    {todos[0]?.map(elem => {
                        return (
                                <div key={elem._id}>
                                    <Text type="success">{elem.id}</Text>
                                    <Text type="success">{elem.text}</Text>
                                    <div style={{display:'flex',gap:'20px'}}>
                                        <Button
                                            style={elem.completed
                                                ? {backgroundColor:"green"}
                                                : {backgroundColor: "red"}}
                                            onClick={() => onDoneTodo(elem._id)}
                                        >
                                            Done
                                        </Button>
                                        <Button
                                            style={elem.important
                                                ? {backgroundColor:"aqua"}
                                                : {backgroundColor: "orange"}}
                                            onClick={() => onWarningTodo(elem._id)}
                                        >
                                            Warning
                                        </Button>
                                        <Button
                                            type="default"
                                            onClick={() => onDeleteTodo(elem._id)}
                                        >
                                            Delete
                                        </Button>
                                        <h1>{elem?.counter}</h1>
                                    </div>
                                </div>
                        )
                    })}
                </Row>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Flex>
    );
};

export default ActiveTodos;