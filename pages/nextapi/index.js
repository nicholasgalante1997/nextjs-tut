import { useState } from 'react';
import { button, col, form, formRow, twoCol } from "../../styles/styles";
import React from "react";
import axios from 'axios';

const NextApiPage = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [failureModal, setFailureModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const data = { 
            article: {
                title,
                author,
                content
            }
        }
        const res = await axios.post('/api/article', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
        if (res.status !== 201) {
            setFailureModal(true);
            return;
        }
        setSuccessModal(true);
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    const handleContentChange = (event) => {
        setContent(event.target.value);
    }

    const onClose = () => { setSuccessModal(false); setFailureModal(false); }

    const SuccessPopUp = () => (
        <div>
            <h4>Success!</h4>
            <button style={button} onClick={onClose}>Close</button>
        </div>
    );

    const FailurePopUp = () => (
        <div>
            <h4>Failed</h4>
            <button style={{...button, backgroundColor: 'red'}} onClick={onClose}>Close</button>
        </div>
    );

    return (
    <div style={twoCol}>
        <div style={col}>
            { !successModal && !failureModal ? 
            <form onSubmit={onSubmit} style={form}>
                <h2>new article</h2>
                <hr/>
                <div style={formRow}>
                    <label>title</label>
                    <input name="title" type="text" value={title} onChange={handleTitleChange} />
                </div>
                <div style={formRow}>
                    <p>author</p>
                    <input name="author" type="text" value={author} onChange={handleAuthorChange} />
                </div>
                <div style={formRow}>
                    <p>content</p>
                    <textarea name="content" type="text" value={content} onChange={handleContentChange} />
                </div>
                <button style={button} type="submit">Submit</button>
            </form> : null }
            { successModal && <SuccessPopUp /> }
            { failureModal && <FailurePopUp /> }
        </div>
    </div>
    )
};

export default NextApiPage;