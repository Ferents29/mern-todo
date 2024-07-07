import React, {useState} from 'react';
import {Button, Table, Tag} from "antd";
import {Link} from "react-router-dom";

const getName = (object, row) => {
    return (
        <Tag>
          <a href={`/resource/${row._id}`}>
            {object}
          </a>
        </Tag>
    );
}

const columns = [
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

];
const data = [];
for (let i = 0; i < 6; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `Zakarpatska district, Lazy, 226`,
        location: 'Uzhgorod',
        remote: true,
        technologies: ['React', 'Vue js',],
        projects: ['Project 1', 'Project 1',],
        techLevel: 'L1',
        engLevel: 'E1',
        facebookLink: 'https://www.facebook.com',
    });
}

const TableComponent = props => {
    const { resources } = props;

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
                columns={columns}
                dataSource={resources}
            />
        </div>
    );
};

export default TableComponent;