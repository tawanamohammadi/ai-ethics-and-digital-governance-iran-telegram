
import React, { useState } from 'react';
import { FileSystemNode, File } from '../types';
import { FolderIcon, FileIcon, ChevronRightIcon, ChevronDownIcon } from './icons';

interface FileTreeProps {
  nodes: FileSystemNode[];
  onFileSelect: (file: File) => void;
  selectedFileName: string;
  level?: number;
}

const TreeNode: React.FC<{
  node: FileSystemNode;
  onFileSelect: (file: File) => void;
  selectedFileName: string;
  level: number;
}> = ({ node, onFileSelect, selectedFileName, level }) => {
  const [isOpen, setIsOpen] = useState(level === 0);

  const isSelected = node.type === 'file' && node.name === selectedFileName;

  const handleToggle = () => {
    if (node.type === 'folder') {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = () => {
    if (node.type === 'file') {
      onFileSelect(node);
    } else {
      handleToggle();
    }
  };

  const indentStyle = { paddingLeft: `${level * 1.25}rem` };

  return (
    <div>
      <div
        onClick={handleSelect}
        className={`flex items-center p-2 rounded-md cursor-pointer transition-colors duration-150 ${
          isSelected
            ? 'bg-cyan-500/20 text-cyan-400'
            : 'hover:bg-slate-700/50 text-slate-300'
        }`}
        style={indentStyle}
      >
        {node.type === 'folder' ? (
          <div className="flex items-center w-full">
            <span onClick={(e) => { e.stopPropagation(); handleToggle(); }} className="mr-1">
              {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
            </span>
            <FolderIcon />
            <span className="ml-2 font-medium">{node.name}</span>
          </div>
        ) : (
          <div className="flex items-center w-full">
            <FileIcon />
            <span className="ml-2">{node.name}</span>
          </div>
        )}
      </div>
      {node.type === 'folder' && isOpen && (
        <div>
          {node.children.map((child, index) => (
            <TreeNode
              key={index}
              node={child}
              onFileSelect={onFileSelect}
              selectedFileName={selectedFileName}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const FileTree: React.FC<FileTreeProps> = ({ nodes, onFileSelect, selectedFileName, level = 0 }) => {
  return (
    <div>
      {nodes.map((node, index) => (
        <TreeNode
          key={index}
          node={node}
          onFileSelect={onFileSelect}
          selectedFileName={selectedFileName}
          level={level}
        />
      ))}
    </div>
  );
};