# 3C Platform

The **3C Platform** (NCMLabOnlineTools) is open-source software for developing, administering, and interpreting behavioural and cognitive assessments, designed for both in-person and remote delivery. Built by Jason Steffener at the University of Ottawa, the platform combines standardised questionnaires and cognitive tasks in a unified, browser-based environment that requires no proprietary software and no specialist programming knowledge to operate.

## Goals

The platform was built around two guiding principles:

- **Democratise access** — make validated cognitive and behavioural assessments freely available to researchers, clinicians, and educators regardless of institutional resources or technical expertise.
- **Leverage computing** — use browser technology to deliver richer assessments than paper-and-pencil allows, including timed responses, spoken stimuli, drawing tasks, speech recognition, and automated scoring.

## Repositories

| Component | Repository |
|-----------|-----------|
| Front-end tasks | [NCMlab/NCMLabOnlineTools](https://github.com/NCMlab/NCMLabOnlineTools) |
| Back-end review interface (NeuroClinic) | [NCMlab/NeuroClinicPublic](https://github.com/NCMlab/NeuroClinicPublic) |

## Key Features

- Unified delivery of questionnaires and cognitive tasks in a single session
- Built-in scoring — no post-collection data extraction required
- Multi-language support: English, French, Japanese, and Korean via an on-screen dropdown
- AI-generated speech (Google TTS) for spoken stimuli
- Browser speech recognition (annyang) for verbal responses
- Touchscreen support for drawing and button-press tasks
- Three administration modes: remote server, local laptop (no internet), and offline LAN
- Back-end portal (NeuroClinic) for reviewing results, audio recordings, drawing animations, and downloading data

## Quick Links

- [Installation guide](getting-started/installation.md) — get the platform running in minutes
- [Your first experiment](getting-started/first-experiment.md) — build and run your first battery
- [Available tasks](tasks/available-tasks.md) — browse all 21 task components

---

!!! note "Citation"
    If you use the 3C Platform in your research, please cite the associated publication. Details are available in the repository README at [github.com/NCMlab/NCMLabOnlineTools](https://github.com/NCMlab/NCMLabOnlineTools).
