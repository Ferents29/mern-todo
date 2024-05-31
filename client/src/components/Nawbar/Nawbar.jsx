import React from 'react';
import {Col, Layout, Row} from "antd";
import {Content, Header} from "antd/es/layout/layout";

const Nawbar = () => {
    return (
    <Layout>
        <Header>
            <Row>
                <Col>
                    <a>Home</a>
                    <a>Contacts</a>
                    <a>Page 1</a>
                    <a>Page 2</a>
                    <a>Page 3</a>
                </Col>
                <Col>
                    <h3><a>Log in</a></h3>
                </Col>
            </Row>
        </Header>
        <Content
            style={{
                padding: '0 48px',
            }}
        >
            Content
        </Content>
    </Layout>);
};

export default Nawbar;