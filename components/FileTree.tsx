import React, { useState } from 'react';
import { FileSystemNode } from '../types';
import { FolderIcon, FileIcon, ChevronRightIcon, ChevronDownIcon } from './icons';

interface FileTreeProps {
  data: FileSystemNode[];
  onSelectNode: (node: FileSystemNode) => void;
}

const TreeNode: React.FC<{ node: FileSystemNode; onSelectNode: (node: FileSystemNode) => void; level?: number }> = ({ node, onSelectNode, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(node.type === 'folder');

  const isFolder = node.type === 'folder';

  const handleToggle = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    }
  };

  const handleClick = () => {
    onSelectNode(node);
    if(isFolder) {
      handleToggle();
    }
  };
  
  return (
    <div>
      <div
        style={{ paddingLeft: `${level * 20}px` }}
        className="flex items-center cursor-pointer py-1 px-2 rounded-md hover:bg-slate-700/50 transition-colors duration-150"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      >
        <div className="flex items-center justify-center w-8">
            {isFolder ? (
                isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />
            ) : <div className="w-4"></div>}
        </div>
        <div className="flex items-center w-8">
             {isFolder ? <FolderIcon /> : <FileIcon />}
        </div>
        <span className="text-sm truncate">{node.name}</span>
      </div>
      {isFolder && isOpen && (
        <div>
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} onSelectNode={onSelectNode} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};


export const FileTree: React.FC<FileTreeProps> = ({ data, onSelectNode }) => {
  return (
    <div className="space-y-1">
      {data.map((node) => (
        <TreeNode key={node.name} node={node} onSelectNode={onSelectNode} />
      ))}
    </div>
  );
};
