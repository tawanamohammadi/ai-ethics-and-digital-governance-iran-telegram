import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

// Helper to render a single non-table line
const renderSimpleLine = (line: string, index: number) => {
  if (line.startsWith('# ')) {
    return <h1 key={index} className="text-4xl font-bold font-serif border-b border-slate-600 pb-2 mb-4">{line.substring(2)}</h1>;
  }
  if (line.startsWith('## ')) {
    return <h2 key={index} className="text-3xl font-bold font-serif border-b border-slate-700 pb-2 mb-4 mt-6">{line.substring(3)}</h2>;
  }
  if (line.startsWith('### ')) {
    return <h3 key={index} className="text-2xl font-bold font-serif mb-3 mt-5">{line.substring(4)}</h3>;
  }
  if (line.startsWith('> ')) {
    return <blockquote key={index} className="border-l-4 border-slate-500 pl-4 italic text-slate-400 my-4">{line.substring(2)}</blockquote>;
  }
  if (line.trim() === '---') {
    return <hr key={index} className="my-6 border-slate-700" />;
  }
  if (line.trim() === '') {
    return null; // Don't render empty lines as paragraphs
  }
  return <p key={index} className="my-4 leading-relaxed">{line}</p>;
};

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const lines = content.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const nextLine = lines[i + 1];
    
    const isTableLine = line.includes('|');
    const isTableSeparator = nextLine?.includes('---') && nextLine?.includes('|');

    // Detect start of a table
    if (isTableLine && isTableSeparator) {
      const headerCells = line.split('|').map(c => c.trim()).filter(Boolean);
      const header = (
        <tr key={`header-${i}`}>
          {headerCells.map((cell, cellIndex) => (
            <th key={cellIndex} className="border border-slate-600 px-4 py-2 text-left font-bold">{cell}</th>
          ))}
        </tr>
      );

      const bodyRows = [];
      let j = i + 2; // Start from after the separator line
      while (j < lines.length && lines[j].includes('|')) {
        const bodyCells = lines[j].split('|').map(c => c.trim()).filter(Boolean);
        if (bodyCells.length > 0) {
            bodyRows.push(
              <tr key={`row-${j}`}>
                {bodyCells.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-slate-600 px-4 py-2">{cell}</td>
                ))}
              </tr>
            );
        }
        j++;
      }
      
      elements.push(
        <table key={`table-${i}`} className="table-auto w-full border-collapse border border-slate-700 my-6">
          <thead>{header}</thead>
          <tbody>{bodyRows}</tbody>
        </table>
      );

      i = j; // Move the main loop cursor past the processed table
    } else {
      const element = renderSimpleLine(line, i);
      if (element) {
        elements.push(element);
      }
      i++;
    }
  }

  return (
    <div className="markdown-content">
      {elements}
    </div>
  );
};
