// FIX: Replaced placeholder content with a full App component implementation.
// This resolves the error in index.tsx by providing a default export.
import React, { useState, useEffect } from 'react';
import { File, FileSystemNode } from './types';
import { fileSystemData } from './data/mockData';
import FileTree from './components/FileTree';
import ContentViewer from './components/ContentViewer';
import AuthorProfile from './components/AuthorProfile';

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    // Find and select README.md by default
    const findReadme = (nodes: FileSystemNode[]): File | null => {
      for (const node of nodes) {
        if (node.type === 'file' && node.name === 'README.md') {
          return node;
        }
        if (node.type === 'folder') {
          const found = findReadme(node.children);
          if (found) return found;
        }
      }
      return null;
    };
    const readme = findReadme(fileSystemData);
    if (readme) {
      setSelectedFile(readme);
    }
  }, []);

  const handleFileSelect = (node: FileSystemNode) => {
    if (node.type === 'file') {
      setSelectedFile(node);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      <header className="p-4 border-b border-[#30363d] flex items-center justify-between shrink-0">
        <h1 className="text-xl font-bold text-white">Gemini File Explorer</h1>
        <AuthorProfile />
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-72 bg-[#161b22] border-r border-[#30363d] p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4 text-white">Explorer</h2>
          <FileTree data={fileSystemData} onFileSelect={handleFileSelect} selectedFile={selectedFile} />
        </aside>
        <main className="flex-1 p-6 overflow-y-auto">
          {selectedFile ? (
            <ContentViewer file={selectedFile} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select a file to see its content.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
