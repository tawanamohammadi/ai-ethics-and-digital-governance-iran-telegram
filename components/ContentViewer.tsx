import React from 'react';
import { File } from '../types';
import { MarkdownRenderer } from './MarkdownRenderer';

interface ContentViewerProps {
  file: File | null;
}

export const ContentViewer: React.FC<ContentViewerProps> = ({ file }) => {
  if (!file) {
    return (
        <div className="flex items-center justify-center h-full text-slate-500">
            <p>Select a file from the navigation panel to view its content.</p>
        </div>
    );
  }

  const isMarkdown = file.name.endsWith('.md');

  return (
    <div className="h-full">
        {isMarkdown ? (
             <div className="prose prose-invert prose-lg max-w-4xl mx-auto">
                <MarkdownRenderer content={file.content} />
             </div>
        ) : (
            <div className="bg-slate-800 rounded-lg p-4 h-full overflow-auto">
                 <h2 className="text-lg font-bold text-slate-300 border-b border-slate-600 pb-2 mb-4">{file.name}</h2>
                 <pre className="text-sm text-slate-300 whitespace-pre-wrap break-all font-mono">
                    <code>{file.content}</code>
                </pre>
            </div>
        )}
    </div>
  );
};
