// FIX: Replaced placeholder content with actual mock data for the file system.
import { FileSystemNode } from '../types';

export const fileSystemData: FileSystemNode[] = [
  {
    type: 'folder',
    name: 'src',
    children: [
      {
        type: 'folder',
        name: 'components',
        children: [
          { type: 'file', name: 'AuthorProfile.tsx', content: 'export default function AuthorProfile() { return <div>Author Profile Component</div>; }' },
          { type: 'file', name: 'ContentViewer.tsx', content: 'export default function ContentViewer() { return <div>Content Viewer Component</div>; }' },
          { type: 'file', name: 'FileTree.tsx', content: 'export default function FileTree() { return <div>File Tree Component</div>; }' },
          { type: 'file', name: 'icons.tsx', content: 'export function FileIcon() { return <svg>...</svg>; }' },
          { type: 'file', name: 'MarkdownRenderer.tsx', content: 'export default function MarkdownRenderer() { return <div>Markdown Renderer Component</div>; }' },
        ],
      },
      {
        type: 'folder',
        name: 'data',
        children: [
          { type: 'file', name: 'mockData.ts', content: '// This file contains the mock data structure for the file system.' },
        ],
      },
      { type: 'file', name: 'App.tsx', content: 'import React from "react";\n\nfunction App() {\n  return <h1>Hello, World!</h1>;\n}\n\nexport default App;' },
      { type: 'file', name: 'index.tsx', content: 'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\nroot.render(<App />);' },
      { type: 'file', name: 'types.ts', content: 'export interface File { name: string; type: "file"; content: string; }\n// ... more types' },
    ],
  },
  {
    type: 'file',
    name: 'README.md',
    content: `# Gemini File Explorer\n\nThis is a sample application to demonstrate a file explorer UI built with React and TypeScript.\n\n- Select files from the tree on the left.\n- View content on the right.\n- Markdown files are rendered as HTML.\n`,
  },
  {
    type: 'file',
    name: 'package.json',
    content: '{\n  "name": "gemini-file-explorer",\n  "version": "1.0.0"\n}'
  }
];
