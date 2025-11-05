// FIX: Replaced placeholder content with a full FileTree component implementation.
import React, { useState } from 'react';
import { FileSystemNode, File, Folder } from '../types';
import { FileIcon, FolderIcon, ChevronDownIcon, ChevronRightIcon } from './icons';

interface FileTreeProps {
  data: FileSystemNode[];
  onFileSelect: (node: FileSystemNode) => void;
  selectedFile: File | null;
  level?: number;
}

const FileTree: React.FC<FileTreeProps> = ({ data, onFileSelect, selectedFile, level = 0 }) => {
  return (
    <ul className="space-y-1">
      {data.map((node) => (
        <li key={node.name}>
          {node.type === 'folder' ? (
            <FolderNode node={node} onFileSelect={onFileSelect} selectedFile={selectedFile} level={level} />
          ) : (
            <FileNode node={node} onFileSelect={onFileSelect} selectedFile={selectedFile} level={level} />
          )}
        </li>
      ))}
    </ul>
  );
};

interface NodeProps {
  onFileSelect: (node: FileSystemNode) => void;
  selectedFile: File | null;
  level: number;
}

interface FileNodeProps extends NodeProps {
  node: File;
}

const FileNode: React.FC<FileNodeProps> = ({ node, onFileSelect, selectedFile, level }) => {
  const isSelected = selectedFile?.name === node.name && selectedFile?.content === node.content;
  return (
    <div
      onClick={() => onFileSelect(node)}
      className={`flex items-center py-1 cursor-pointer rounded hover:bg-[#21262d] ${isSelected ? 'bg-[#21262d] text-white' : ''}`}
      style={{ paddingLeft: `${level * 20}px` }}
    >
      <FileIcon className="w-4 h-4 mr-2 flex-shrink-0" />
      <span>{node.name}</span>
    </div>
  );
};

interface FolderNodeProps extends NodeProps {
  node: Folder;
}

const FolderNode: React.FC<FolderNodeProps> = ({ node, onFileSelect, selectedFile, level }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center py-1 cursor-pointer rounded hover:bg-[#21262d]"
        style={{ paddingLeft: `${level * 20}px` }}
      >
        {isOpen ? <ChevronDownIcon className="w-4 h-4 mr-2 flex-shrink-0" /> : <ChevronRightIcon className="w-4 h-4 mr-2 flex-shrink-0" />}
        <FolderIcon className="w-4 h-4 mr-2 flex-shrink-0 text-sky-400" />
        <span className="font-medium">{node.name}</span>
      </div>
      {isOpen && <FileTree data={node.children} onFileSelect={onFileSelect} selectedFile={selectedFile} level={level + 1} />}
    </div>
  );
};

export default FileTree;
