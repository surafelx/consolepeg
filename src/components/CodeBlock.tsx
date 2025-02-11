import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface CodeBlockProps {
  children: string; // the code content
  language?: string; // optional language (e.g. 'javascript')
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  language = "javascript",
}) => {
  return <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>;
};

export default CodeBlock;
