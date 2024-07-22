import React, {useState} from 'react';
import {Modal} from "antd";
import DocumentForm from "./documentForm";

const AddDocumentModal = ({open, setOpen}) => {
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <Modal
            title="Title"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={false}
        >
            <DocumentForm />
        </Modal>
    );
};

export default AddDocumentModal;