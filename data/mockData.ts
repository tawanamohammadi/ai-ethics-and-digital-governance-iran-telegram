import { FileSystemNode } from '../types';

const readmeContent = `
# From AI Ethics to Platform Governance: Telegram Censorship in Iran, Public Trust, and Digital Rights (2017–2025)

**Author:** [Tawana Mohammadi](https://orcid.org/0009-0005-6825-6728)  
**Affiliation:** Independent Researcher, AI Ethics & Data Strategy  
**Community:** [Zenodo – Tawana Network](https://zenodo.org/communities/tawana-network)

---

## 1. Abstract & Core Research Questions

This repository is the full open-data companion for the Zenodo publication: _"From AI Ethics to Platform Governance: Telegram Censorship in Iran, Public Trust, and Digital Rights (2017–2025)"_. It documents an AI-assisted, OSINT-driven investigation into digital rights, censorship, and platform governance in Iran. By providing all datasets, models, and ethical frameworks, this project ensures full reproducibility and transparency.

**Core Questions:**
- How can AI Ethics frameworks be practically applied to the analysis of platform governance and state-level censorship?
- What is the measurable impact of Telegram's content moderation policies and Iran's filtering mechanisms on public trust and digital rights from 2017 to 2025?
- How can transparent, AI-assisted methodologies (using models like GPT-5, Gemini 2.5 Pro) enhance the ethical integrity and depth of OSINT investigations?

---

## 2. Research Scope & Methodology

This study bridges the gap between theoretical AI Ethics and real-world Digital Governance. It employs a mixed-methods approach, combining qualitative analysis of policy documents with quantitative OSINT data.

- **Ethical Framework:** All AI-driven analysis was conducted under a strict "human-in-the-loop" protocol, where AI outputs served as supplementary data points, not final conclusions. See [PROVENANCE/MODEL_SOURCES.md](./PROVENANCE/MODEL_SOURCES.md) for details.
- **Data Sources:** The investigation utilizes publicly available data, OSINT from archived social media, and documented censorship events. See the [DATA](./DATA) directory for raw files.
- **AI-Assisted Analysis:** Large-language models were used for thematic analysis of chat logs, cross-referencing sources, and summarizing policy documents. All AI session transcripts are available in the [CHAT_LOGS](./CHAT_LOGS) directory for full transparency.

---

## 3. Repository Navigation

| Path                                        | Description                                                                                             |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [**ABSTRACT.md**](./ABSTRACT.md)            | The extended abstract of the research paper.                                                            |
| [**INDEX.md**](./INDEX.md)                  | A complete index linking to all files and directories in the repository.                                |
| [**DATA/**](./DATA)                         | Contains raw OSINT datasets, including logs related to the Babak Zanjani case study and AI reviews.       |
| [**CHAT_LOGS/**](./CHAT_LOGS)               | Full, unedited transcripts of AI research sessions, ensuring transparency in our methodology.             |
| [**DOCS/**](./DOCS)                         | Includes the literature review, policy context analysis, and bibliography.                              |
| [**PROVENANCE/**](./PROVENANCE)             | Contains metadata on AI models used and the data validation process, ensuring reproducibility.          |
| [**CITATION.cff**](./CITATION.cff)          | Standardized citation file for easy integration with Zotero, Zenodo, and other reference managers.        |
| [**LICENSE**](./LICENSE)                    | The project is licensed under the Apache-2.0 License.                                                   |

---

## 4. AI Models & Tooling

This research transparently discloses the use of advanced AI models to augment, not replace, human analytical capabilities.

| Tool                    | Purpose in Research Pipeline                                   |
| ----------------------- | -------------------------------------------------------------- |
| **GPT-5 (Deep Research)** | Conceptual modeling, thematic synthesis, OSINT cross-checking. |
| **Gemini 2.5 Pro**      | Multilingual data validation and summarization of sources.     |
| **Grok-4**              | Counterfactual analysis and stress-testing hypotheses.         |

All outputs were critically reviewed, verified, and contextualized by **Tawana Mohammadi**.

---

## 5. Citation & Licensing

If you use this repository, its data, or its findings in your work, please cite the primary publication:

> Mohammadi, Tawana. (2025). _From AI Ethics to Platform Governance: Telegram Censorship in Iran, Public Trust, and Digital Rights (2017–2025)._ Zenodo: [Tawana Network](https://zenodo.org/communities/tawana-network). DOI pending.

This work is licensed under the **Apache-2.0 License**. You are free to use, modify, and distribute it with proper attribution.
`;

export const mockData: FileSystemNode[] = [
  { type: 'file', name: 'README.md', content: readmeContent },
  { type: 'file', name: 'ABSTRACT.md', content: '# Abstract\n\nExtended abstract of the research paper "From AI Ethics to Platform Governance: Telegram Censorship in Iran, Public Trust, and Digital Rights (2017–2025)".' },
  { type: 'file', name: 'INDEX.md', content: '# Repository Index\n\nThis file provides an index of all data, chat logs, and documentation within this research project.' },
  { type: 'file', name: 'LICENSE', content: 'Apache License\nVersion 2.0, January 2004\nhttp://www.apache.org/licenses/\n\nTERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\n...' },
  { type: 'file', name: 'CITATION.cff', content: 'cff-version: 1.2.0\nmessage: "If you use this software, please cite it as below."\nauthors:\n  - family-names: "Mohammadi"\n    given-names: "Tawana"\n    orcid: "https://orcid.org/0009-0005-6825-6728"\ntitle: "From AI Ethics to Platform Governance: Telegram Censorship in Iran, Public Trust, and Digital Rights (2017–2025)"\nversion: 1.0.0\ndate-released: 2025-10-26' },
  {
    type: 'folder',
    name: 'DATA',
    children: [
      { type: 'file', name: 'README_DATA.md', content: '# Data Directory\n\nThis directory contains a guide for datasets and OSINT logs used in the research.' },
      { type: 'file', name: 'osint_babak_zanjani_1.ini', content: '[OSINT Log 1]\nSubject: Babak Zanjani Corporate Network\nTimestamp: 2024-10-25\nSource: Public corporate records archive\nNotes: Initial mapping of shell companies...' },
      { type: 'file', name: 'osint_babak_zanjani_2.ini', content: '[OSINT Log 2]\nSubject: Babak Zanjani Digital Footprint\nTimestamp: 2024-10-26\nSource: Social media archives (redacted)\nNotes: Tracing connections between accounts and known associates...' },
      { type: 'file', name: 'research_review_chatgpt5.ini', content: '[AI-Assisted Review]\nModel: GPT-5\nSession: Literature Cross-Reference\nDate: 2024-10-22\nPrompt: "Summarize key papers on platform governance and digital authoritarianism since 2017."\nResult: "Key themes include...' },
    ],
  },
  {
    type: 'folder',
    name: 'CHAT_LOGS',
    children: [
      { type: 'file', name: 'README_CHAT_LOGS.md', content: '# AI Research Session Logs\n\nThis folder contains AI research session logs, demonstrating transparent use of models like GPT-5, Gemini 2.5 Pro, and Grok-4.' },
      { type: 'file', name: 'session_notes.md', content: '# Session Notes\n\nThis file contains notes from AI-assisted sessions and is considered part of the research dataset.' },
      { type: 'file', name: 'research_start_chatgpt5.ini', content: '[Initial Research Log]\nModel: GPT-5\nSession: Project Scoping\nDate: 2024-09-15\nPrompt: "Structure a research repository for a project on AI ethics and Telegram censorship in Iran."\nResult: "Recommended structure: DATA, DOCS, PROVENANCE, CHAT_LOGS..."' },
    ],
  },
  {
    type: 'folder',
    name: 'DOCS',
    children: [
      { type: 'file', name: 'references.bib', content: '@article{zittrain2008future,\n  title={The future of the internet--and how to stop it},\n  author={Zittrain, Jonathan L},\n  journal={Yale University Press},\n  year={2008}\n}' },
      { type: 'file', name: 'literature_review.md', content: '# Literature Review\n\nThis document provides a summary of academic sources on AI ethics, platform governance, and internet censorship relevant to this study.' },
      { type: 'file', name: 'policy_context_iran.md', content: '# Policy Context in Iran (2017–2025)\n\nThis document outlines the policy and censorship context in Iran during the research period, providing background for the case study on Telegram.' },
      {
        type: 'folder',
        name: 'figures',
        children: [
          { type: 'file', name: 'README.md', content: '# Figures and Visualizations\n\nThis directory contains figures, charts, and visualizations used in the research paper.' }
        ],
      },
    ],
  },
  {
    type: 'folder',
    name: 'PROVENANCE',
    children: [
      { type: 'file', name: 'MODEL_SOURCES.md', content: '# AI Model Sources\n\nThis document details the AI models used in this research.\n- **Models used**: GPT-5, Gemini 2.5 Pro, Grok-4.\n- **Ethical Note**: All outputs were critically reviewed by a human researcher to ensure accuracy and context.' },
      { type: 'file', name: 'PROVENANCE.yml', content: '# Provenance Manifest\n# This file links datasets, AI outputs, and validation steps for reproducibility.\n\n- id: D001\n  description: "OSINT data on Babak Zanjani"\n  files:\n    - DATA/osint_babak_zanjani_1.ini\n    - DATA/osint_babak_zanjani_2.ini\n  status: "Validated"\n\n- id: A001\n  description: "AI-assisted literature review"\n  files:\n    - DATA/research_review_chatgpt5.ini\n  status: "Human-reviewed"' },
    ],
  },
];
