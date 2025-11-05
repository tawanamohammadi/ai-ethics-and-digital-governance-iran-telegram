import React, { useState, useCallback } from 'react';
import { FileTree } from './components/FileTree';
import { ContentViewer } from './components/ContentViewer';
import { FileSystemNode, File } from './types';
import { projectStructure, findFileByPath } from './data/mockData';

const Header = () => (
  <header className="bg-slate-900/70 backdrop-blur-sm p-4 border-b border-slate-700 sticky top-0 z-10">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold text-cyan-400 font-serif">
        From AI Ethics to Platform Governance
      </h1>
      <p className="text-sm text-slate-400 mt-1">
        Telegram Censorship in Iran, Public Trust, and Digital Rights (2017–2025)
      </p>
      <div className="mt-2 text-xs text-slate-400">
        By <a href="https://orcid.org/0009-0005-6825-6728" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">Tawana Mohammadi</a>
      </div>
    </div>
  </header>
);

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(() => {
    const newFile = findFileByPath('CHAT_LOGS/session_notes.md');
    if (newFile && newFile.type === 'file') {
      return newFile;
    }
    const readme = findFileByPath('README.md');
    return readme && readme.type === 'file' ? readme : null;
  });

  const handleFileSelect = useCallback((file: File) => {
    setSelectedFile(file);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Header />
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-4">
        <aside className="w-full md:w-1/4 lg:w-1/5 bg-slate-800/50 rounded-lg p-3 border border-slate-700 h-fit md:sticky md:top-24">
          <h2 className="text-sm font-bold text-slate-300 mb-2 px-2">Project Files</h2>
          <div className="overflow-y-auto" style={{maxHeight: 'calc(100vh - 10rem)'}}>
            <FileTree
              nodes={projectStructure}
              onFileSelect={handleFileSelect}
              selectedFileName={selectedFile?.name || ''}
            />
          </div>
        </aside>
        <div className="flex-1 min-w-0">
          <ContentViewer file={selectedFile} />
        </div>
      </main>
    </div>
  );
};

export default App;