// FIX: Replaced placeholder content with a simple MarkdownRenderer component implementation.
import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

// NOTE: This is a very basic markdown renderer. For a full implementation,
// a library like 'react-markdown' would be recommended.
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const elements: React.ReactNode[] = [];
  const lines = content.split('\n');

  let currentList: string[] | null = null;
  
  const flushList = () => {
    if (currentList) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc pl-8 my-4">
          {currentList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
      currentList = null;
    }
  };

  lines.forEach((line, index) => {
    if (line.startsWith('# ')) {
      flushList();
      elements.push(<h1 key={index} className="text-3xl font-bold mb-4 mt-6 border-b border-[#30363d] pb-2">{line.substring(2)}</h1>);
    } else if (line.startsWith('## ')) {
      flushList();
      elements.push(<h2 key={index} className="text-2xl font-bold mb-3 mt-5">{line.substring(3)}</h2>);
    } else if (line.startsWith('- ')) {
      if (!currentList) {
        currentList = [];
      }
      currentList.push(line.substring(2));
    } else if (line.trim() !== '') {
      flushList();
      elements.push(<p key={index} className="mb-4">{line}</p>);
    } else {
       flushList(); // End of list on empty line
    }
  });

  flushList(); // flush any remaining list items

  return (
    <div className="text-base">
      {elements}
    </div>
  );
};

export default MarkdownRenderer;
