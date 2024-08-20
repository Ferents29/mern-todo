import React, {useState} from 'react';
import {Button, Form, message, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import axios from "axios";

const DocumentForm = () => {
    const [response, setResponse] = useState({});

    const fileUploadHandler = event => {
        const files = [...event.target.files];
        files.forEach(file => onFinish(file))
    }


    const onFinish = async (values, dirId) => {
        try {
            const formData = new FormData();
            formData.append('file', values);

            if (dirId) {
                formData.append('parent', dirId);
            }

            const res = await axios.post('/api/document/upload', formData);
            setResponse(res.data);
            message.success('Document saved successfully');
        } catch (error) {
            console.error(error);
            message.error('An error occurred while saving the document');
        }
    }

    return (
        <div>
            <input
                multiple
                type="file"
                onChange={e => fileUploadHandler(e)}
            />
        </div>
        /*<Form
            name="documentForm"
            onFinish={onFinish}
        >
            <Form.Item
                label="Content"
                name="file"
                valuePropName="file"
            >
                <Upload
                    multiple
                    /!*onChange={event => fileUploadHandler(event)}*!/
                    beforeUpload={() => false}
                >
                    <Button icon={<UploadOutlined />}>Select Word file</Button>
                </Upload>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>*/
    );
};

export default DocumentForm;