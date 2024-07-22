import React, {useEffect, useState} from 'react';
import {DocumentWrapper} from "./index.styled";
import {UploadOutlined} from "@ant-design/icons";
import AddDocumentModal from "./components/addDocumentModal";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {documentsActions} from "../../redux/actions/documentsActions";

const Documents = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [docUrl, setDocUrl] = useState('');

    const { loading, documents } = useSelector(state => state.documentsReducer);

    useEffect( () => {
        dispatch(documentsActions.getDocumentsRequest());
        axios.get('/api/document/documents')
            .then(response => {
                dispatch(documentsActions.getDocumentsSuccess(response.data));
            })
            .catch(error => {
                dispatch(documentsActions.getDocumentsError(error));
            });
    }, [dispatch]);

    const showModal = () => {
        setOpen(true);
    };

    const handleDownload = async id => {
        const response = await axios.get(`/api/document/${id}`, {
            responseType: 'blob'
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'document.doc');
        document.body.appendChild(link);
        link.click();
    };

    return (
        <DocumentWrapper>
            <div className="header">
                <div className="search">Search</div>
                <div className="filters">Filters</div>
                <div className="actions">
                    <UploadOutlined
                        onClick={showModal}
                        style={{color:'red', fontSize: 20}}
                    />
                </div>
            </div>
            <div className="content">
                {documents.map(elem => (
                    <div key={elem._id} className="document-item">
                        <div className="document-item-item">

                        </div>
                        <div>
                            <button onClick={() => handleDownload(elem._id)}>
                                Download Document
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <AddDocumentModal
                open={open}
                setOpen={setOpen}
            />
        </DocumentWrapper>
    );
};

export default Documents;