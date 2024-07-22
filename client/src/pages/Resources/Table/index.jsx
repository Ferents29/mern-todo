import React, {useState} from 'react';
import {Button, Table, Tag} from "antd";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import axios from "axios";
import {resourcesActions} from "../../../redux/actions/resourcesActions";
import {useDispatch} from "react-redux";

const getName = (object, row) => {
    return (
        <Tag>
          <a href={`/resource/${row._id}`}>
            {object}
          </a>
        </Tag>
    );
}

const getColumns = (dispatch, setIsModalOpen, setInitialState, setEditFlag) => {

    const handleDeleteResource = async row => {
        try {
            dispatch(resourcesActions.getDeleteResourcesRequest());
            await axios.delete(`/api/resources/delete/${row._id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
            }).then((response) => {
                dispatch(resourcesActions.getDeleteResourcesSuccess(row._id));
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateResource = async row => {
        setInitialState(row);
        setEditFlag(true);
    }

    const getEditOutlined = (object, row) => {
        return (
            <EditOutlined
                onClick={() => {
                    setIsModalOpen(true);
                    handleUpdateResource(row);
                }}
            />
        );
    }

    const getDeleteOutlined = (object, row) => {
        return (
            <DeleteOutlined
                onClick={() => handleDeleteResource(row)}
            />
        );
    }

    return [
        {
            title: 'Name',
            dataIndex: 'name',
            render: getName,
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'location',
            dataIndex: 'location',
        },
        {
            title: 'remote',
            dataIndex: 'remote',
        },
        {
            title: 'technologies',
            dataIndex: 'technologies',
        },
        {
            title: 'projects',
            dataIndex: 'projects',
        },
        {
            title: 'techLevel',
            dataIndex: 'techLevel',
        },
        {
            title: 'engLevel',
            dataIndex: 'engLevel',
        },
        {
            title: 'facebookLink',
            dataIndex: 'facebookLink',
        },
        {
            title: 'Edit',
            render: getEditOutlined
        },
        {
            title: 'Delete',
            render: getDeleteOutlined
        },

    ];
}

const TableComponent = props => {
    const { resources, setIsModalOpen, setInitialState, setEditFlag } = props;
    const dispatch = useDispatch();

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
        <div style={{margin: 10,}}>
            <div
                style={{
                  display: 'flex',
                  marginBottom: 16,
                }}
            >
                <Button
                    type="primary"
                    onClick={start}
                    disabled={!hasSelected}
                    loading={loading}
                >
                    Reload
                </Button>
                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table
                rowSelection={rowSelection}
                columns={getColumns(
                    dispatch,
                    setIsModalOpen,
                    setInitialState,
                    setEditFlag
                )}
                dataSource={resources}
            />
        </div>
    );
};

export default TableComponent;