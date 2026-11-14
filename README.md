# AI Ethics Monitoring Dashboard

![status](https://img.shields.io/badge/status-prototype-orange) ![license](https://img.shields.io/badge/license-MIT-green) ![built_with](https://img.shields.io/badge/built_with-React-61DAFB) ![bundler](https://img.shields.io/badge/bundler-Vite-646CFF) ![styling](https://img.shields.io/badge/styling-Tailwind_CSS-38B2AC)

![Dashboard screenshot](https://github.com/user-attachments/assets/98cedaf4-0fbf-4112-a8a4-5024f3f6859f)

*Screenshot of the demo. All figures shown are simulated.*

A front-end prototype of a monitoring screen for bias and fairness in healthcare AI models.

**Status: prototype with simulated data.** The numbers on screen are randomly generated in the browser and refresh on a timer to imitate a live feed. The app is not connected to any real model or dataset, and the model names shown are fictional examples.

Live demo: https://eaglepython.github.io/ai-ethics-monitoring-dashboard

## What it shows

- An overview with a risk score, alerts, and a bias heatmap by demographic group
- Fairness measures such as demographic parity and equalized odds, alongside standard accuracy measures
- A compliance view organized around HIPAA, GDPR, CCPA, and the EU AI Act
- An oversight view with example action items and a report export

The purpose is to show which measures an oversight team would want on one screen and how alerts could be prioritized. It does not compute these measures from real predictions.

## What I would build next

- Compute the fairness measures from a real, documented dataset
- Replace the random feed with a data connection
- Remove the committed `node_modules` folder from the repository

## Run it locally

```bash
git clone https://github.com/eaglepython/ai-ethics-monitoring-dashboard.git
cd ai-ethics-monitoring-dashboard
npm install
npm run dev
```

Built with React, Vite, and Tailwind CSS.

## Author

Joseph Bidias

## License

MIT
