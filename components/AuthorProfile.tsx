// FIX: Replaced placeholder content with a full AuthorProfile component implementation.
import React from 'react';

const AuthorProfile: React.FC = () => {
  return (
    <div className="flex items-center">
      <img
        src="https://www.gstatic.com/devrel-devsite/prod/v95b283151591f16f5a34e8774780de9f622c719be5eca280b54376c024522f7a/gemini/images/gemini-logo.svg"
        alt="Gemini"
        className="w-8 h-8 rounded-full mr-3"
      />
      <div>
        <p className="text-sm font-semibold text-white">Gemini</p>
        <p className="text-xs text-gray-400">AI Assistant</p>
      </div>
    </div>
  );
};

export default AuthorProfile;
