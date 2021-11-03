import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorComponent = () => {
  const [contentState, setContentState] = useState({});

  const onContentStateChange = () => {
    setContentState({
      contentState,
    });
    console.log(contentState);
  };

  return (
    <Editor
      initialEditorState={contentState}
      onContentStateChange={onContentStateChange}
      wrapperClassName='wrapper-class'
      editorClassName='editor-class'
      toolbarClassName='toolbar-class'
      //   wrapperStyle={<wrapperStyleObject />}
      //   editorStyle={<editorStyleObject />}
      //   toolbarStyle={<toolbarStyleObject />}
      // wrapperClassName="demo-wrapper"
      // editorClassName="demo-editor"
      // mention={{
      //   separator: ' ',
      //   trigger: '@',
      //   suggestions: [
      //     { text: 'APPLE', value: 'apple', url: 'apple' },
      //     { text: 'BANANA', value: 'banana', url: 'banana' },
      //     { text: 'CHERRY', value: 'cherry', url: 'cherry' },
      //     { text: 'DURIAN', value: 'durian', url: 'durian' },
      //     { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
      //     { text: 'FIG', value: 'fig', url: 'fig' },
      //     { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
      //     { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
      //   ],
      // }}
    />
  );
};
export default EditorComponent;
