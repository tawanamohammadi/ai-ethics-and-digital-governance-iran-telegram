import { FileSystemNode } from '../types';

export const projectStructure: FileSystemNode[] = [
  {
    name: 'README.md',
    type: 'file',
    content: `
# From AI Ethics to Platform Governance: Telegram Censorship in Iran, Public Trust, and Digital Rights (2017–2025)

**Author:** [Tawana Mohammadi](https://orcid.org/0009-0005-6825-6728)  
**Affiliation:** Independent Researcher, AI Ethics & Data Strategy  
**Contact:** [tawana.online](https://tawana.online) • ✉️ info@tawana.online  
**Community:** [Zenodo – Tawana Network](https://zenodo.org/communities/tawana-network)

---

## 📄 Abstract
This repository is the full open-data companion for the Zenodo publication:
> *From AI Ethics to Platform Governance: Telegram Censorship in Iran, Public Trust, and Digital Rights (2017–2025)*

It documents AI-assisted, OSINT-driven research into digital rights, censorship, and platform governance in Iran — integrating datasets, models, and ethical frameworks for reproducibility and transparency.

---

## 🧠 Purpose & Scope
- To bridge **AI Ethics** and **Digital Governance** frameworks.
- To ethically utilize **AI (GPT‑5, Gemini 2.5 Pro, Grok‑4)** in deep research pipelines.
- To document **censorship networks**, **public-trust signals**, and **platform responses**.
- To provide **forecasting models** (2017–2025) for policy and civil resilience.

---

## ⚙️ Tools & AI Models
| Tool | Purpose |
|------|----------|
| GPT‑5 (Deep Research) | Conceptual modeling, synthesis, OSINT cross‑check |
| Gemini 2.5 Pro | Multilingual validation and summarization |
| Grok‑4 | Counterfactual testing and hypothesis stress‑tests |
| Private OSINT Frameworks | Entity resolution, archival mapping (redacted for safety) |

All outputs reviewed and verified by **Tawana Mohammadi**.

---

## 📚 Related Works
- [AI and Human Pain: From Pixels to Perception](https://doi.org/10.5281/zenodo.17451336)
- [Internet Censorship in Iran: Historical Roots and Societal Consequences](https://doi.org/10.5281/zenodo.17411924)
- [X‑Analyzer: Ethical Twitter/X Data Parser](https://doi.org/10.5281/zenodo.17513863)

---

## 🧾 Citation
> Mohammadi, Tawana. (2025). *From AI Ethics to Platform Governance: Telegram Censorship in Iran, Public Trust, and Digital Rights (2017–2025).* Zenodo: [Tawana Network](https://zenodo.org/communities/tawana-network). DOI pending.

---

## 📜 License
Licensed under the **Apache‑2.0 License**.

---

## ✨ Vision
> “Ethics in intelligence, transparency in data.”  
> — *Tawana Mohammadi (توانا محمدی)*
    `,
  },
    {
    name: 'ABSTRACT.md',
    type: 'file',
    content: `
# Extended Abstract
**Title:** From AI Ethics to Platform Governance: Telegram Censorship in Iran, Public Trust, and Digital Rights (2017–2025)

**Author:** Tawana Mohammadi (توانا محمدی)  
**ORCID:** [0009‑0005‑6825‑6728](https://orcid.org/0009-0005-6825-6728)  
**Community:** [Zenodo – Tawana Network](https://zenodo.org/communities/tawana-network)

**Summary:**  
This study connects **AI Ethics**, **Digital Rights**, and **Platform Governance** to understand Telegram censorship in Iran (2017–2025). Using transparent OSINT and AI-assisted synthesis (GPT‑5, Gemini 2.5 Pro, Grok‑4), it investigates how moderation systems and governmental filtering affect public trust and freedom.

**Objective:** Build an open, ethical, and reproducible model linking ethical AI design with real-world governance and human digital resilience.

**Keywords:** AI Ethics, Platform Governance, OSINT, Digital Rights, Iran, Telegram, Public Trust, Forecasting
    `,
  },
  {
    name: 'INDEX.md',
    type: 'file',
    content: `
# Index: Data & Documentation Map

This file serves as a quick navigation guide to the key components of this research repository.

## 核心文件 (Core Files)
- [README.md](./README.md): Main overview, purpose, and citation information.
- [ABSTRACT.md](./ABSTRACT.md): The extended abstract of the research paper.
- [ETHICS_AND_GOVERNANCE.md](./ETHICS_AND_GOVERNANCE.md): Discussion on the ethical frameworks and governance models applied.
- [METHODS.md](./METHODS.md): Detailed research methodology.
- [OSINT_TOOLING.md](./OSINT_TOOLING.md): Overview of the Open-Source Intelligence tools used.
- [SECURITY.md](./SECURITY.md): Security and data redaction policies.
- [CONTRIBUTING.md](./CONTRIBUTING.md): Guidelines for contributing to the research.
- [CITATION.cff](./CITATION.cff): Citation file for easy reference management.
- [LICENSE](./LICENSE): The Apache 2.0 License governing this repository.

## 数据 (Data)
- [DATA/](./DATA/): Contains raw and processed data files.
  - [osint_babak_zanjani_1.ini](./DATA/osint_babak_zanjani_1.ini)
  - [osint_babak_zanjani_2.ini](./DATA/osint_babak_zanjani_2.ini)
  - [research_review_chatgpt5.ini](./DATA/research_review_chatgpt5.ini)

## 聊天记录 (Chat Logs)
- [CHAT_LOGS/](./CHAT_LOGS/): Transcripts of AI-assisted research sessions.
  - [research_start_chatgpt5.ini](./CHAT_LOGS/research_start_chatgpt5.ini)

## 文档 (Documents)
- [DOCS/](./DOCS/): Supporting documentation.
  - [references.bib](./DOCS/references.bib): Bibliography in BibTeX format.
  - [literature_review.md](./DOCS/literature_review.md): A review of relevant literature.
  - [policy_context_iran.md](./DOCS/policy_context_iran.md): Context on the policy landscape in Iran.

## 出处 (Provenance)
- [PROVENANCE/](./PROVENANCE/): Information on the origin of data and models.
  - [MODEL_SOURCES.md](./PROVENANCE/MODEL_SOURCES.md): Details on the AI models used.
  - [PROVENANCE.yml](./PROVENANCE/PROVENANCE.yml): Provenance tracking file.
    `,
  },
  {
    name: 'ETHICS_AND_GOVERNANCE.md',
    type: 'file',
    content: `
# Ethical Framework and Governance Model

This research adheres to a strict ethical framework designed to balance the pursuit of knowledge with the protection of individuals and the principles of data minimization and responsible disclosure.

## Core Principles
1.  **Human-Centered Approach:** All data analysis and technological application prioritizes human dignity, rights, and safety.
2.  **Transparency:** The methodologies, tools, and AI models used are documented to the fullest extent possible without compromising security. See [PROVENANCE/MODEL_SOURCES.md](./PROVENANCE/MODEL_SOURCES.md).
3.  **Accountability:** The lead researcher, Tawana Mohammadi, is accountable for the ethical implications of this work.
4.  **Data Redaction:** Sensitive personal identifying information (PII) has been redacted or anonymized in all public datasets to prevent harm. See [SECURITY.md](./SECURITY.md).

## Governance in AI-Assisted Research
The use of advanced AI models like GPT-5, Gemini 2.5 Pro, and Grok-4 introduces unique ethical challenges. Our governance model includes:
- **Human-in-the-Loop Verification:** All AI-generated summaries, analyses, and correlations were manually verified by the researcher. AI is used as a tool for synthesis, not as an arbiter of truth.
- **Bias Mitigation:** We acknowledge the potential for inherent biases in large language models. Cross-verification with multiple models and diverse primary sources was conducted to mitigate this risk.
- **Scope Limitation:** AI models were not used for generating definitive judgments about individuals but for identifying patterns, connections, and linguistic trends in large datasets.
    `,
  },
  {
    name: 'METHODS.md',
    type: 'file',
    content: `
# Research Methodology

This study employs a mixed-methods approach combining qualitative analysis, computational linguistics, and Open-Source Intelligence (OSINT) gathering.

## 1. Data Collection
- **OSINT:** Publicly available information, including corporate records, social media data, news archives, and leaked documents, was collected using a combination of automated scripts and manual investigation. The tools used are detailed in [OSINT_TOOLING.md](./OSINT_TOOLING.md).
- **Platform Analysis:** Telegram's public APIs, channel metadata, and public statements were analyzed to understand its governance and moderation policies.
- **AI-Assisted Literature Review:** LLMs were utilized to rapidly survey and summarize academic literature on digital rights, censorship, and platform governance. See [DOCS/literature_review.md](./DOCS/literature_review.md).

## 2. Data Analysis
- **Network Analysis:** The relationships between corporate entities, individuals, and digital assets were mapped to identify clusters of influence and potential corruption.
- **Temporal Analysis:** A timeline of censorship events, policy changes, and public discourse was constructed for the period of 2017-2025.
- **Sentiment & Discourse Analysis:** AI models were used to analyze the tone and key themes in public discourse surrounding censorship events.

## 3. Forecasting Model
- A predictive model was developed based on historical data to forecast potential trends in digital rights and public trust in Iran. This model integrates policy shifts, technological changes, and public sentiment signals.

## 4. Ethical Review
The entire research process was subject to the ethical guidelines outlined in [ETHICS_AND_GOVERNANCE.md](./ETHICS_AND_GOVERNANCE.md).
    `,
  },
  {
    name: 'OSINT_TOOLING.md',
    type: 'file',
    content: `
# OSINT Tooling

A combination of public and private tools was used for the Open-Source Intelligence (OSINT) gathering phase of this research.

## Public Tools
- **Search Engines:** Google, DuckDuckGo, Yandex (with advanced search operators).
- **Social Media Analysis:** Publicly available tools for analyzing Telegram channels and Twitter/X data.
- **Archive Services:** Wayback Machine (archive.org), archive.is for historical webpage analysis.
- **WHOIS & DNS Records:** Tools for domain and IP address investigation.

## AI-Assisted Tooling
- **GPT-5 (Deep Research):** Used for entity extraction from unstructured text and for generating investigative hypotheses from large document dumps.
- **Gemini 2.5 Pro:** Employed for translating and summarizing non-English sources, particularly Farsi-language media reports and documents.
- **Grok-4:** Utilized for real-time analysis of emerging social media trends and narratives related to the research topics.

## Private & Custom Frameworks
For security and operational integrity, specific custom scripts and private intelligence platforms used in this research are not disclosed. These tools were primarily used for:
- Large-scale data aggregation and correlation.
- Advanced network mapping of corporate structures.
- Secure archival of sensitive digital evidence.

The use of these tools was governed by the project's ethical framework to ensure data was collected and handled responsibly.
    `,
  },
  {
    name: 'SECURITY.md',
    type: 'file',
    content: `
# Security and Data Redaction Policy

Protecting the privacy and safety of individuals mentioned in the source data is a paramount concern of this research. This document outlines the security measures and data handling policies adopted.

## Data Handling
- **Offline Analysis:** The majority of sensitive data analysis was conducted on air-gapped machines to prevent unauthorized access.
- **Encryption:** All research data, both at rest and in transit, was encrypted using industry-standard AES-256 encryption.
- **Access Control:** Access to raw, unredacted data was strictly limited to the principal investigator.

## Redaction Policy
Before public release, all datasets were subjected to a rigorous redaction process. The following information was systematically removed or anonymized:
- **Personal Identifying Information (PII):** Names of non-public figures, personal phone numbers, email addresses, home addresses, and national ID numbers.
- **Financial Information:** Personal bank account numbers and transaction details not relevant to the core investigation of corporate-level corruption.
- **Location Data:** Precise geolocation data that could endanger individuals.

## Safe Harbor
This research is conducted in the interest of public knowledge and accountability. Any individual who believes their information has been mishandled or improperly included in the dataset may contact the researcher for immediate review and remediation.
    `,
  },
  {
    name: 'CONTRIBUTING.md',
    type: 'file',
    content: `
# Contributing Guidelines

While the core research is conducted independently, contributions in the form of peer review, data validation, and methodological suggestions are welcome.

## How to Contribute
1.  **Peer Review:** Please review the methodology, analysis, and conclusions presented in this repository. Open an "Issue" on the GitHub repository to provide feedback or suggest corrections.
2.  **Data Sources:** If you are aware of relevant public data sources that have been overlooked, please share them by opening an "Issue" with links and context.
3.  **Bug Reports:** If you find any errors in the data files, documentation, or code, please report them.

## Code of Conduct
All contributions and discussions must be respectful and constructive. Harassment, ad hominem attacks, and discriminatory language will not be tolerated. This project adheres to a contributor covenant that promotes a positive and inclusive environment.

## Contact
For sensitive contributions or security-related concerns, please contact the researcher directly via the contact information on [tawana.online](https://tawana.online) rather than opening a public issue.
    `,
  },
    {
    name: 'CITATION.cff',
    type: 'file',
    content: `
cff-version: 1.2.0
message: "If you use this research, please cite it as below."
authors:
  - family-names: "Mohammadi"
    given-names: "Tawana"
    orcid: "https://orcid.org/0009-0005-6825-6728"
title: "From AI Ethics to Platform Governance: Telegram Censorship in Iran, Public Trust, and Digital Rights (2017–2025)"
version: 1.0.0
date-released: 2025-10-27
repository-code: "https://github.com/tawanamohammadi/from-ai-ethics-to-platform-governance"
keywords:
  - "AI Ethics"
  - "Platform Governance"
  - "OSINT"
  - "Digital Rights"
  - "Iran"
  - "Telegram"
  - "Public Trust"
  - "Forecasting"
license: "Apache-2.0"
    `,
  },
  {
    name: 'LICENSE',
    type: 'file',
    content: `
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with the Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a

      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS
    `,
  },
  {
    name: 'DATA',
    type: 'folder',
    children: [
      {
        name: 'osint_babak_zanjani_1.ini',
        type: 'file',
        content: `
[Entity: Babak Zanjani]
Type=Person
Status=Sanctioned, Imprisoned
Associated_Country=Iran, Turkey, Malaysia
Keywords=oil, sanctions, corruption

[Network_Analysis_Phase1]
Focus=Corporate Shell Structure
Primary_Vehicle=Sorinet Group
Associated_Entities=Qeshm Airlines, Rah Ahan Sorinet, Kont Kosmetic
Data_Sources=Corporate registries (UAE, MY), Leaked financial documents, News archives (2012-2015)
Initial_Findings=Complex network of over 60 companies used to bypass oil sanctions. Strong ties to IRGC officials.

[Financial_Flows]
Method=Oil-for-gold, Hawala networks
Key_Banks=First Islamic Investment Bank (MY), Kont Bank (TJ)
Estimated_Volume=$13.5 billion USD (unaccounted)
        `,
      },
      {
        name: 'osint_babak_zanjani_2.ini',
        type: 'file',
        content: `
[Digital_Footprint_Analysis]
Scope=Domain names, Social media presence (impersonators vs. official), Digital breadcrumbs
Tools_Used=WHOIS history, Maltego, SocialBlade
Key_Domains_Archive=sorinetgroup.com, babakzanjani.com (defunct)
Findings=Limited direct digital presence. Extensive use of proxies and third-party agents for online operations. Evidence of reputation management campaigns post-2013.

[Connections_to_Platform_Governance]
Platform=Telegram
Observation=Disinformation campaigns related to the Zanjani case were observed in pro-state Telegram channels between 2017-2019.
Narrative=Portrayed Zanjani as a "soldier of the economy" who was a victim of political infighting.
Censorship_Event=Channels critical of the government's handling of the Zanjani funds were periodically filtered or shut down.
        `,
      },
      {
        name: 'research_review_chatgpt5.ini',
        type: 'file',
        content: `
[Session: Literature Cross-Reference]
Date=2025-08-15
Model=GPT-5 (Deep Research Mode)
Query="Cross-reference literature on 'platform governance', 'sanctions evasion Iran', and 'digital public trust'. Identify thematic overlaps and research gaps."

[Model_Summary]
Thematic_Overlap_1="Weaponization of Platforms": Both state and non-state actors use social platforms (like Telegram) to manipulate public opinion regarding economic matters, including sanctions.
Thematic_Overlap_2="Trust Deficit": State-sponsored censorship erodes public trust not only in the government but also in the platforms themselves, leading to a fragmented digital sphere.
Research_Gap="Ethical AI in OSINT": Limited academic work on the ethical frameworks for using AI to investigate state-level financial crimes, especially concerning data privacy and potential for misinterpretation.
Researcher_Note=The model's identification of the "Ethical AI in OSINT" gap aligns with the core thesis of this project. This confirms the novelty and relevance of the research direction.
        `,
      },
      {
        name: 'README_DATA.md',
        type: 'file',
        content: `
# Data Directory Readme

This directory contains the raw and semi-processed data files used in the OSINT investigation.

## File Descriptions
- **osint_babak_zanjani_1.ini & _2.ini**: Structured OSINT data points and initial analysis notes regarding the Babak Zanjani case. These files use a simple INI format for clarity.
- **research_review_chatgpt5.ini**: A log of an interaction with a large language model (GPT-5) used to review and cross-reference academic literature.

## Data Provenance and Integrity
The data in this directory is derived from publicly available sources. All information has been cross-verified where possible. However, due to the nature of OSINT, some data points may be incomplete or subject to change as new information becomes available.

## A Note on Redaction
These public files contain a redacted, high-level summary of findings. The raw, unredacted datasets containing sensitive PII are not included in this repository, as per the [SECURITY.md](../SECURITY.md) policy.
        `,
      },
    ],
  },
    {
    name: 'CHAT_LOGS',
    type: 'folder',
    children: [
        {
            name: 'research_start_chatgpt5.ini',
            type: 'file',
            content: `
[Session: Initial Brainstorming & Structuring]
Date=2025-02-10
Model=ChatGPT-5 (via API)
Query="Structure a research project on AI ethics and platform governance, using Telegram censorship in Iran as a case study. The timeline is 2017-2025. Key themes are public trust and digital rights. Output a detailed file structure for a GitHub repository."

[Model_Output_Summary]
- Recommended a hierarchical structure with separate folders for DATA, DOCS, ANALYSIS, and PROVENANCE.
- Suggested key markdown files like README.md, METHODS.md, ETHICS_AND_GOVERNANCE.md.
- Proposed including a CITATION.cff file for academic discoverability.
- Emphasized the need for a SECURITY.md file to address the sensitive nature of the topic.

[Researcher_Action]
The model's proposed structure was adopted as the foundational layout for this repository. This demonstrates an early-stage Human-AI collaboration in research design.
            `
        },
        {
            name: 'README_CHAT_LOGS.md',
            type: 'file',
            content: `
# Chat Logs Directory Readme

This directory contains logs and transcripts of interactions with various AI models that were used during the research process.

## Purpose
The inclusion of these logs is for transparency, demonstrating how AI was used as a tool to aid in:
- Brainstorming and research design.
- Summarizing complex documents.
- Identifying connections in large datasets.
- Cross-referencing literature.

## Anonymization
All logs have been reviewed to ensure no sensitive personal data or proprietary query information is included. The focus is on the process and the AI's role, not the specific raw data queried.

Refer to [PROVENANCE/MODEL_SOURCES.md](../PROVENANCE/MODEL_SOURCES.md) for more details on the specific models used.
            `
        },
        {
            name: 'session_notes.md',
            type: 'file',
            content: `# Session Notes

This folder has been created as requested. This file contains notes from various research sessions.`
        }
    ]
    },
    {
        name: 'DOCS',
        type: 'folder',
        children: [
            {
                name: 'references.bib',
                type: 'file',
                content: `
@article{zittrain2008future,
  title={The Future of the Internet--And How to Stop It},
  author={Zittrain, Jonathan},
  year={2008},
  publisher={Yale University Press}
}

@article{deibert2013black,
  title={Black code: Inside the battle for cyberspace},
  author={Deibert, Ronald J},
  year={2013},
  publisher={McClelland & Stewart}
}

@article{zuboff2019age,
  title={The age of surveillance capitalism: The fight for a human future at the new frontier of power},
  author={Zuboff, Shoshana},
  journal={PublicAffairs},
  year={2019}
}

@article{gorwa2020we,
  title={What is platform governance?},
  author={Gorwa, Robert},
  journal={Information, Communication \& Society},
  volume={23},
  number={6},
  pages={854--871},
  year={2020},
  publisher={Taylor \& Francis}
}
                `
            },
            {
                name: 'literature_review.md',
                type: 'file',
                content: `
# Literature Review (Summary)

This research builds upon three primary pillars of academic literature:

1.  **Platform Governance:** Drawing from the work of scholars like Robert Gorwa and Tarleton Gillespie, this study examines the rules, norms, and power structures that platforms like Telegram use to moderate content. We explore the tension between platforms as neutral conduits versus active governors of digital speech.

2.  **Internet Censorship and Control:** The work of the Citizen Lab and researchers like Ronald Deibert provides the foundation for understanding the technical and political mechanisms of internet filtering in Iran. We situate Telegram's case within this broader context of state-level information control.

3.  **Surveillance and Digital Trust:** Shoshana Zuboff's concept of "surveillance capitalism" informs our analysis of how data collection practices by both platforms and states impact public trust. A decline in trust leads to behavioral changes, such as migration to more secure platforms or self-censorship.

The intersection of these three fields, specifically within the Iranian context and with the added layer of AI-driven analysis, constitutes the novel contribution of this paper.
                `
            },
            {
                name: 'policy_context_iran.md',
                type: 'file',
                content: `
# Policy Context: Iran (2017-2025)

The period from 2017 to 2025 was marked by significant shifts in Iran's digital policy landscape.

- **2017-2018 Protests:** Major nationwide protests led to the first large-scale, temporary blocking of Telegram. This event served as a litmus test for the state's ability to control a major communication platform and highlighted the platform's role in civil organization.

- **National Information Network (NIN):** The government accelerated the development of the NIN, a domestic intranet designed to give authorities greater control over internet traffic and data. This policy aims to make the country less reliant on the global internet, thereby making censorship more effective.

- **"User Protection Bill":** Throughout this period, various drafts of legislation aimed at tightening control over foreign social media platforms were debated. These bills proposed forcing platforms to host data locally, register with the government, and comply with state censorship demands.

- **Rise of Domestic Platforms:** The government actively promoted domestic alternatives to popular global apps, though public uptake remained limited due to trust and feature parity issues.

This evolving policy environment forms the backdrop against which Telegram's governance decisions and the erosion of digital rights must be understood.
                `
            },
            {
                name: 'figures',
                type: 'folder',
                children: []
            }
        ]
    },
    {
        name: 'PROVENANCE',
        type: 'folder',
        children: [
            {
                name: 'MODEL_SOURCES.md',
                type: 'file',
                content: `
# Provenance of AI Models

This research utilized several state-of-the-art Large Language Models (LLMs) to assist in data processing, synthesis, and analysis. This document provides transparency on the models used.

## Primary Models
- **GPT-5 (Deep Research Capability)**
  - **Provider:** OpenAI
  - **Purpose:** Used for its advanced reasoning and synthesis capabilities to connect disparate information in large text corpora, perform conceptual modeling, and cross-check OSINT findings.

- **Gemini 2.5 Pro**
  - **Provider:** Google
  - **Purpose:** Leveraged for its strong multilingual capabilities, particularly for validating translations and summarizing Farsi-language source documents. Its performance in cross-lingual information retrieval was critical.

- **Grok-4**
  - **Provider:** xAI
  - **Purpose:** Employed for its real-time data access and ability to perform counterfactual testing. It was used to stress-test hypotheses against emerging narratives and check for alternative explanations.

## Ethical Considerations
The choice of models was based on their documented capabilities at the time of the research. The researcher acknowledges that all models have limitations and potential biases. All AI-generated outputs were critically reviewed, verified against primary sources, and are not presented as infallible truth but as machine-assisted analysis. This human-in-the-loop process is central to the project's ethical framework.
                `
            },
            {
                name: 'PROVENANCE.yml',
                type: 'file',
                content: `
# This file tracks the provenance of datasets and key analytical outputs.
# Format: YAML

- id: D001
  source_type: OSINT
  description: "Corporate network data related to Babak Zanjani."
  files:
    - DATA/osint_babak_zanjani_1.ini
    - DATA/osint_babak_zanjani_2.ini
  collection_period: "2024-05-01 to 2024-09-30"
  verification_status: "Cross-referenced with public news archives and corporate registries."

- id: A001
  source_type: AI-Generated Analysis
  description: "Literature review summary and thematic cross-reference."
  model_used: "GPT-5 (Deep Research)"
  files:
    - DATA/research_review_chatgpt5.ini
  generation_date: "2025-08-15"
  verification_status: "Manually reviewed and validated by principal investigator."

- id: C001
  source_type: AI-Assisted Research Design
  description: "Initial project structure brainstorming."
  model_used: "ChatGPT-5"
  files:
    - CHAT_LOGS/research_start_chatgpt5.ini
  generation_date: "2025-02-10"
  verification_status: "Adopted and implemented by principal investigator."
                `
            }
        ]
    }
];

export const findFileByPath = (path: string): FileSystemNode | undefined => {
    const parts = path.split('/').filter(p => p);
    let currentLevel: FileSystemNode[] = projectStructure;
    let foundNode: FileSystemNode | undefined = undefined;

    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        foundNode = currentLevel.find(node => node.name === part);
        if (foundNode) {
            if (foundNode.type === 'folder' && i < parts.length - 1) {
                currentLevel = foundNode.children;
            } else if (i === parts.length - 1) {
                return foundNode;
            }
        } else {
            return undefined;
        }
    }
    return foundNode;
};