<div align="center">

# AI Ethics Monitoring Dashboard

### A monitoring screen for bias and fairness in healthcare AI models.

![Status](https://img.shields.io/badge/Status-Prototype-E67E22?style=flat-square)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-2E7D32?style=flat-square)

[**Live demo →**](https://eaglepython.github.io/ai-ethics-monitoring-dashboard)

<br/>

<img src="https://github.com/user-attachments/assets/98cedaf4-0fbf-4112-a8a4-5024f3f6859f" alt="Dashboard" width="90%"/>

</div>

---

> [!NOTE]
> **Status: prototype with simulated data.** The numbers on screen are generated in the browser and refresh on a timer to imitate a live feed. The app is not connected to any real model or dataset, and the model names shown are fictional examples.

## What it shows

- **Overview** — a risk score, alerts, and a bias heatmap by demographic group
- **Fairness** — demographic parity and equalized odds, alongside standard accuracy measures
- **Compliance** — a view organized around HIPAA, GDPR, CCPA, and the EU AI Act
- **Oversight** — example action items and a report export

The purpose is to show which measures an oversight team would want on one screen and how alerts could be prioritized. It does not compute these measures from real predictions.

## Run it locally

```bash
git clone https://github.com/eaglepython/ai-ethics-monitoring-dashboard.git
cd ai-ethics-monitoring-dashboard
npm install
npm run dev
```

## Roadmap

- Compute the fairness measures from a real, documented dataset
- Replace the random feed with a live data connection

## Built with

React · Vite · Tailwind CSS · lucide-react

## Author

**Joseph Bidias** — [github.com/eaglepython](https://github.com/eaglepython)

<sub>Released under the MIT License.</sub>
