# quddityai-testing
Performance, functional, API, analysis.

# QA Testing Project: QuiddityAI Landing Page

This repository contains a comprehensive testing suite for the QuiddityAI landing page. The project focuses on ensuring performance stability, functional correctness, and API reliability.

## 🛠 Tools & Technologies
* Performance Testing: [k6](https://k6.io/) (JavaScript)
* Functional Testing: Manual Checklists & Test Cases
* API Testing: Postman / k6 (In Progress)
* Documentation: PDF Test Plans & Reports

---

## 📂 Project Structure

* /scripts — Automation scripts for performance and load testing.
* /documentation — PDF files containing Test Plans, Bug Reports, and Checklists.
* load_test.js — k6 script for simulating concurrent user traffic.

---

## 🧪 Testing Types Implemented

### 1. Performance Testing (Load Testing)
Using k6, I simulated a load of 10 virtual users over a 30-second duration to monitor the response time and stability of the German localization (`/de`) of the landing page.
* Goal: Ensure the server handles expected traffic without latency.

### 2. Functional Testing
Comprehensive manual testing of the landing page UI/UX, including:
* Cross-browser compatibility.
* Form validations and button functionality.
* Mobile responsiveness.

### 3. API Testing (Upcoming)
Evaluating the backend endpoints to ensure correct data retrieval and status codes.

---

## 🚀 How to Run the Tests

To run the load test, ensure you have k6 installed and execute:
```bash
k6 run scripts/load_test.js
