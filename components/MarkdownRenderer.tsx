
import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const parseMarkdown = (text: string) => {
    // Basic replacements, order matters
    const lines = text.trim().split('\n');
    let inCodeBlock = false;
    let codeBlockContent = '';
    const htmlElements: string[] = [];

    lines.forEach(line => {
        if (line.startsWith('```')) {
            if (inCodeBlock) {
                htmlElements.push(`<pre class="bg-slate-900 p-4 rounded-md my-4 overflow-x-auto"><code class="font-mono text-sm text-cyan-300">${codeBlockContent.trim()}</code></pre>`);
                codeBlockContent = '';
            }
            inCodeBlock = !inCodeBlock;
            return;
        }

        if (inCodeBlock) {
            codeBlockContent += line + '\n';
            return;
        }

        // Headings
        if (line.startsWith('# ')) {
            htmlElements.push(`<h1 class="text-3xl font-bold mt-6 mb-3 pb-2 border-b border-slate-600 font-serif">${line.substring(2)}</h1>`);
        } else if (line.startsWith('## ')) {
            htmlElements.push(`<h2 class="text-2xl font-bold mt-5 mb-2 pb-2 border-b border-slate-700 font-serif">${line.substring(3)}</h2>`);
        } else if (line.startsWith('### ')) {
            htmlElements.push(`<h3 class="text-xl font-bold mt-4 mb-2 font-serif">${line.substring(4)}</h3>`);
        } 
        // Horizontal Rule
        else if (line.match(/^---$/)) {
             htmlElements.push(`<hr class="my-6 border-slate-700">`);
        }
        // Unordered list
        else if (line.startsWith('- ')) {
            htmlElements.push(`<li class="ml-6 list-disc">${line.substring(2)}</li>`);
        }
        // Blockquote
        else if (line.startsWith('> ')) {
            htmlElements.push(`<blockquote class="border-l-4 border-slate-600 pl-4 my-4 italic text-slate-400">${line.substring(2)}</blockquote>`);
        }
        // Table
        else if (line.startsWith('|')) {
            htmlElements.push(line); // Pass table lines through for later processing
        }
        // Paragraph
        else if (line.trim() !== '') {
            htmlElements.push(`<p class="my-4 leading-relaxed">${line}</p>`);
        } else {
             htmlElements.push('<br />');
        }
    });
    
    let html = htmlElements.join('\n');
    
    // Process tables
    html = html.replace(/((?:\|.*\|\n?)+)/g, (match) => {
        const rows = match.trim().split('\n');
        const header = rows[0];
        const alignmentRow = rows[1];
        const body = rows.slice(2);

        if (!alignmentRow || !alignmentRow.includes('-')) return match; // Not a valid table

        const headers = header.split('|').slice(1, -1).map(h => h.trim());
        const bodyRows = body.map(row => row.split('|').slice(1, -1).map(c => c.trim()));

        let tableHtml = '<table class="w-full my-4 border-collapse border border-slate-600">';
        tableHtml += '<thead><tr class="bg-slate-700">';
        headers.forEach(h => tableHtml += `<th class="p-2 border border-slate-600 text-left">${h}</th>`);
        tableHtml += '</tr></thead>';
        tableHtml += '<tbody>';
        bodyRows.forEach(row => {
            tableHtml += '<tr class="bg-slate-800 even:bg-slate-800/50">';
            row.forEach(cell => tableHtml += `<td class="p-2 border border-slate-600">${cell}</td>`);
            tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table>';

        return tableHtml;
    });

    // Inline elements
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-100">$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/`([^`]+)`/g, '<code class="bg-slate-700 text-cyan-400 font-mono text-sm px-1.5 py-0.5 rounded">$1</code>');
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:underline">$1</a>');

    return { __html: html };
};

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const processedHtml = parseMarkdown(content);
  return <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={processedHtml} />;
};