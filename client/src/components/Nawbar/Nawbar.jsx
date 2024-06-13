import React, {useContext} from 'react';
import {Col, Layout, Row} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {AuthContext} from "../../context/authContext";
import {useSelector} from "react-redux";

const Nawbar = () => {
    const { logout, isLogin, userId } = useContext(AuthContext);
    const { users } = useSelector(state => state.usersReducer);
    const user = users.find(elem => elem._id === userId);
    return (
        <>
            <Layout>
                <Header>
                    <Row>
                        <Col style={{marginRight: '30px'}}>
                            <a>Home</a>
                            <a>Contacts</a>
                            <a>Page 1</a>
                            <a>Page 2</a>
                            <a>Page 3</a>
                        </Col>
                        <div style={{display: 'flex', gap: '10px'}}>
                            {isLogin ? (
                                    <a href="/" onClick={logout}>Logout</a>
                                ) : (
                                    <>
                                        <a href="/login">Log in</a>
                                        <a href="/registration">Registration</a>
                                    </>
                                )}
                            <div style={{display:'flex',color:'green'}}>
                                {user && user.email}
                            </div>
                        </div>
                    </Row>
                </Header>
            </Layout>
        </>
    );
};

export default Nawbar;