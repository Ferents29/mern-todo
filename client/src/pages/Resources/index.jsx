import React, {useCallback, useEffect, useState} from 'react';
import {Empty, Layout} from "antd";
import TableComponent from "./Table";
import AddResourceModal from "./AddResourceModal";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {resourcesActions} from "../../redux/actions/resourcesActions";

const {
    Header,
    Footer,
    Content
} = Layout;

const Resources = () => {
    const { resources, loading } = useSelector(state => state.resourcesReducer);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [initialState, setInitialState] = useState({});
    const [editFlag, setEditFlag] = useState(false);

    const dispatch = useDispatch();

    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        paddingInline: 48,
        lineHeight: '64px',
        backgroundColor: '#4096ff',
    };
    const contentStyle = {
        width: '100%',
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        backgroundColor: '#152e48',
    };
    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#94e79f',
    };
    const layoutStyle = {
        display: 'flex',
        borderRadius: 8,
        width: '100%',
    };

    const getResources = useCallback( async () => {
        dispatch(resourcesActions.getAllResourcesRequest());
        try {
            await axios.get("/api/resources/allResources", {
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(response =>
                dispatch(resourcesActions.getAllResourcesSuccess(response.data))
            );
        } catch (error) {
            console.log(error);
        }
    },[dispatch]);

    useEffect(() => {
        getResources();
    }, [getResources]);

    return (
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>
                    <AddResourceModal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        initialState={initialState}
                        editFlag={editFlag}
                        setInitialState={setInitialState}
                        setEditFlag={setEditFlag}
                    />
                </Header>
                <Content style={contentStyle}>
                    {loading ? (
                        <Empty />
                    ) : (
                        <TableComponent
                            resources={resources}
                            setIsModalOpen={setIsModalOpen}
                            setInitialState={setInitialState}
                            setEditFlag={setEditFlag}
                        />
                    )}
                </Content>
                <Footer style={footerStyle}>
                    Footer
                </Footer>
            </Layout>
    );
};

export default Resources;