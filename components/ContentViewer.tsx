
import React from 'react';
import { File } from '../types';
import { MarkdownRenderer } from './MarkdownRenderer';

interface ContentViewerProps {
  file: File | null;
}

export const ContentViewer: React.FC<ContentViewerProps> = ({ file }) => {
  if (!file) {
    return (
      <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 h-full flex items-center justify-center">
        <p className="text-slate-400">Select a file to view its content.</p>
      </div>
    );
  }

  const isMarkdown = file.name.endsWith('.md');
  const isImage = /\.(jpg|jpeg|png|gif|svg)$/i.test(file.name);

  return (
    <div className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden" style={{minHeight: 'calc(100vh - 10rem)'}}>
      <div className="bg-slate-800 p-3 border-b border-slate-700">
        <h3 className="font-mono text-sm text-slate-200">{file.name}</h3>
      </div>
      <div className="p-4 sm:p-6 lg:p-8 overflow-auto">
        {isMarkdown ? (
          <MarkdownRenderer content={file.content} />
        ) : isImage ? (
           <img src={file.content} alt={file.name} className="max-w-full rounded" />
        ) : (
          <pre className="whitespace-pre-wrap break-words font-mono text-sm text-slate-300">
            <code>{file.content}</code>
          </pre>
        )}
      </div>
    </div>
  );
};