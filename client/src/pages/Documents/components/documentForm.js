import React, {useState} from 'react';
import axios from "axios";

const DocumentForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        axios.post('/api/document/add', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <input type="file" onChange={handleUpload}/>
        </div>
    );
};

export default DocumentForm;