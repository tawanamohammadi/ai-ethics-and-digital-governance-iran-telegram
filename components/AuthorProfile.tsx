import React from 'react';
import { OrcidIcon, LinkIcon, GithubIcon, ZenodoIcon } from './icons';

const AuthorProfile: React.FC = () => {
  const profileLinks = [
    { name: 'ORCID', href: 'https://orcid.org/0009-0005-6825-6728', icon: <OrcidIcon /> },
    { name: 'Website', href: 'https://tawana.online', icon: <LinkIcon /> },
    { name: 'GitHub', href: 'https://github.com/tawanamohammadi', icon: <GithubIcon /> },
    { name: 'Zenodo', href: 'https://zenodo.org/communities/tawana-network', icon: <ZenodoIcon /> },
  ];

  return (
    <div className="bg-slate-800 rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <img
          src="https://avatars.githubusercontent.com/u/141659359?s=400&u=439b4196da319efaf8c7dbd77fb02738d133bc36&v=4"
          alt="Tawana Mohammadi"
          className="w-16 h-16 rounded-full border-2 border-slate-600"
        />
        <div>
          <h2 className="text-lg font-bold text-slate-100">Tawana Mohammadi</h2>
          <p className="text-sm text-slate-400">AI Ethics & Data Strategy Researcher</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {profileLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-slate-300 hover:text-sky-400 transition-colors duration-200"
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AuthorProfile;
