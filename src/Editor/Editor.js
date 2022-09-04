import React from 'react';
import "./Editor.css";

const Editor = (props) => {
    return (
        <textarea className="editor" value={props.value} onChange={props.onChange} />
    );
};

export default Editor;