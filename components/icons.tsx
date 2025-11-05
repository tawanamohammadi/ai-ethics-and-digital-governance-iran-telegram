import React from 'react';

const Icon: React.FC<React.SVGProps<SVGSVGElement>> = ({ children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-3"
    {...props}
  >
    {children}
  </svg>
);

export const FolderIcon = () => (
  <Icon>
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z" />
  </Icon>
);

export const FileIcon = () => (
  <Icon>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </Icon>
);

export const ChevronRightIcon = () => (
  <Icon className="mr-0">
    <polyline points="9 18 15 12 9 6" />
  </Icon>
);

export const ChevronDownIcon = () => (
  <Icon className="mr-0">
    <polyline points="6 9 12 15 18 9" />
  </Icon>
);

// Icons for Author Profile
export const OrcidIcon = () => (
    <Icon>
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zM7.17 17.83h-2V9.83h2zm-1-9.17A1.33 1.33 0 1 1 7.5 7.33a1.33 1.33 0 0 1-1.33-1.33zm8 9.17h-2V12.5c0-1.25-.42-2.17-1.5-2.17s-1.67.83-1.67 2.17V17.83h-2V9.83h2v1.25c.5-.92 1.5-1.5 2.67-1.5 2 0 3.5 1.25 3.5 4z" />
    </Icon>
);
export const LinkIcon = () => (
    <Icon>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
    </Icon>
);
export const GithubIcon = () => (
    <Icon>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </Icon>
);
export const ZenodoIcon = () => (
    <Icon>
        <path d="M12 2l-8 4 8 4 8-4-8-4z" />
        <path d="M4 10l8 4 8-4" />
        <path d="M4 18l8-4 8 4" />
        <path d="M4 14l8 4 8-4" />
    </Icon>
);
