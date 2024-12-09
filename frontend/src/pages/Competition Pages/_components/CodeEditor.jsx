import { Box } from "@chakra-ui/react";
import MonacoEditor, { monaco } from "react-monaco-editor";
import "monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution";
import Editor from "@monaco-editor/react";
import { debounce } from "lodash";
import React, { useEffect, useMemo, useRef, useState } from "react";

const CodeEditor = ({ language, onCodeChange, code, selectedProblem }) => {
  const editorRef = useRef();

  const containerRef = useRef();

  const handleEditorMount = (editor) => {
    if (!editorRef.current) {
      editorRef.current = editor;
      editor.layout();
    }
  };

  const handleEditorChange = debounce(() => {
    if (editorRef.current && onCodeChange) {
      const currentCode = editorRef.current.getValue();
      const newCode = { ...code, [selectedProblem]: currentCode };
      onCodeChange(newCode);
    }
  }, 100); 

  const memoizedValue = useMemo(
    () => code[selectedProblem],
    [code, selectedProblem]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (editorRef.current) {
        editorRef.current.layout();
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.layout();
    }
  }, [selectedProblem, code]);

  return (
    <div className="rounded-lg p-1" ref={containerRef}>
      <Editor
        height={250}
        language={language == "c++" ? "cpp" : language}
        defaultValue="console.log('Hello Monaco Editor');"
        theme="vs-dark"
        onMount={handleEditorMount}
        onChange={handleEditorChange}
        value={code[selectedProblem]}
        options={{
          autoIndent: true,
          lineNumbers: "on",
          minimap: { enabled: false },
          formatOnType: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
