import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from "../../ckeditor/build/ckeditor";


const TextEditor = (props) => {

    return (
        <CKEditor
            editor={ Editor }
            data={props.data}
            onChange={ props.onChange }
            disabled={ props.disabled }
        />
    );

}


export default TextEditor;