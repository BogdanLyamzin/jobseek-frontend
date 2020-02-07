import React from 'react';
import {useDropzone} from 'react-dropzone';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import './dropzone.css';


function MyDropzone(props) {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <section className="logo">
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <div className="point-icon">
                <AddCircleOutlineIcon fontSize="large"/>
                </div>
            </div>
            <aside>

                <ul>{files}</ul>
            </aside>
        </section>
    );
}
export default MyDropzone;

