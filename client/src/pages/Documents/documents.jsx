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

    const { loading, documents, file } = useSelector(state => state.documentsReducer);

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

    const handleDownloadDocument = async (e, elem) => {
        e.stopPropagation();
        dispatch(documentsActions.getDocumentIdRequest(elem._id));
        const response = await fetch(`/api/document/download/${elem._id}`, {
            headers: {},
        });
        if (response.status === 200) {
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = elem.name;
            document.body.appendChild(link);
            link.click();
            link.remove();
        }
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
                            {elem.title}
                        </div>
                        <div>
                            <button onClick={(e) => handleDownloadDocument(e, elem)}>
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