
export interface File {
  name: string;
  type: 'file';
  content: string;
}

export interface Folder {
  name: string;
  type: 'folder';
  children: FileSystemNode[];
}

export type FileSystemNode = File | Folder;