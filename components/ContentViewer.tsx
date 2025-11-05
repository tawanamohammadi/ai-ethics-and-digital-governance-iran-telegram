// FIX: Replaced placeholder content with a full ContentViewer component implementation.
import React from 'react';
import { File } from '../types';
import MarkdownRenderer from './MarkdownRenderer';
import { FileIcon } from './icons';

interface ContentViewerProps {
  file: File;
}

const ContentViewer: React.FC<ContentViewerProps> = ({ file }) => {
  const isMarkdown = file.name.endsWith('.md');
  const isCode = /\.(tsx|ts|js|json|css)$/.test(file.name);

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg h-full flex flex-col">
       <header className="flex items-center p-3 border-b border-[#30363d] bg-[#0d1117] rounded-t-lg shrink-0">
         <FileIcon className="w-5 h-5 mr-3 text-gray-400" />
         <h2 className="text-lg font-medium text-white">{file.name}</h2>
       </header>
       <div className="p-6 overflow-y-auto flex-1">
        {isMarkdown ? (
          <MarkdownRenderer content={file.content} />
        ) : (
          <pre className={`text-sm whitespace-pre-wrap break-words ${isCode ? 'language-js' : ''}`}>
            <code>{file.content}</code>
          </pre>
        )}
       </div>
    </div>
  );
};

export default ContentViewer;
