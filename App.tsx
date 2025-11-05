import React, { useState, useEffect } from 'react';
import { FileTree } from './components/FileTree';
import { ContentViewer } from './components/ContentViewer';
import AuthorProfile from './components/AuthorProfile';
import { mockData } from './data/mockData';
import { FileSystemNode, File } from './types';

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileSystem] = useState<FileSystemNode[]>(mockData);

  useEffect(() => {
    // Select README.md by default on initial load
    const readme = findFile('README.md', fileSystem);
    if (readme) {
      setSelectedFile(readme);
    }
  }, [fileSystem]);

  const findFile = (name: string, nodes: FileSystemNode[]): File | null => {
    for (const node of nodes) {
      if (node.type === 'file' && node.name === name) {
        return node;
      }
      if (node.type === 'folder') {
        const found = findFile(name, node.children);
        if (found) return found;
      }
    }
    return null;
  };

  const handleSelectNode = (node: FileSystemNode) => {
    if (node.type === 'file') {
      setSelectedFile(node);
    }
  };

  return (
    <div className="flex flex-col h-screen font-sans bg-slate-900 text-slate-300">
      <header className="flex-shrink-0 border-b border-slate-700 px-6 py-3">
        <h1 className="text-xl font-semibold text-slate-100">
          AI Ethics & Digital Governance
        </h1>
        <p className="text-sm text-slate-400">A Research Project by Tawana Mohammadi</p>
      </header>
      <main className="flex flex-1 overflow-hidden">
        <aside className="w-80 flex-shrink-0 border-r border-slate-700 p-4 overflow-y-auto">
          <AuthorProfile />
          <div className="mt-6">
             <FileTree data={fileSystem} onSelectNode={handleSelectNode} />
          </div>
        </aside>
        <section className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
          <ContentViewer file={selectedFile} />
        </section>
      </main>
    </div>
  );
};

export default App;
