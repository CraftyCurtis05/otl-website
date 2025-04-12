# OTL On The Line Communications Website
This is the official website for **OTL On The Line Communications**, a modern, responsive site built with [Vue.js 3](https://vuejs.org/), [Bootstrap 5](https://getbootstrap.com/), and integrated with [EmailJS](https://www.emailjs.com/) for contact form functionality.
It’s optimized for desktop, tablet, and mobile users with full SEO meta tag support.

---

## Table of Contents

- [Project Setup](#project-setup)
- [Development Server](#development-server)
- [Production Build](#production-build)
- [Lint & Fix Code](#lint--fix-code)
- [Deployment Notes](#deployment-notes)
- [Routing Structure](#routing-structure)
- [SEO & Meta Tags](#seo--meta-tags)
- [Tech Stack](#tech-stack)
- [EmailJS Setup](#emailjs-setup)
- [License & Credits](#license--credits)

---

## Project Setup
To get started with the project, follow these steps:

### 1. Install Dependencies
Make sure you have **Node.js** (v10.9.0 or higher) installed on your machine. Then, run the following command to install the required dependencies:

```bash
npm install

### 2. Required Packages Installed

```bash
npm install vue@^3.5.13
npm install bootstrap@^5.3.5
npm install vue-meta@^3.0.0-alpha.7
npm install @emailjs/browser@latest

---

## Development Server
To run the development server locally, execute the following command:

```bash
npm run serve

The application will be available at [http://localhost:8080/](http://localhost:8080/).

---

## Production Build
To build the project for production (static files ready for deployment), use the following command:

```bash
npm run build

This will generate a production-ready build in the ==/dist== folder.

---

## Lint & Fix Code
To lint the project files and automatically fix any issues, run:

```bash
npm run lint

---

## Deployment Notes
If you are hosting this website on your own server, please follow these instructions:

1. **Upload the contents of the** ==/dist== **folder** to the root of your web server (e.g., via FTP, SSH, or any file transfer method).

2. Make sure your server is configured to always serve ==index.html== for any route to support Vue Router's history mode (this is important for handling deep links and page refreshes correctly).

    - If you're using **NGINX** or **Apache**, you might need to configure the server to handle ==404== errors by redirecting to ==index.html== so that the Vue Router can take over and show the correct content.

---

## Routing Structure
The project uses Vue Router to manage routing. Here are the routes and their corresponding views:

| Route | View |
| ----------- | ----------- |
| / | → HomeView |
| /services | → ServicesView |
| /support | → SupportView |
| /pricing | → PricingView |
| /contact | → ContactView |
| /privacy | → PrivacyPolicyView |
| /terms | → TermsConditionsView |
| /* | → NotFoundView (404) |

---

## SEO & Meta Tags
Each route in the app dynamically injects meta tags using vue-meta. This ensures that the site is optimized for SEO and social media sharing.

- **Meta Tags**: Each page has specific meta tags, including the title, description, and Open Graph tags.

- **SEO**: By dynamically generating these meta tags for each route, the site ensures it is properly indexed by search engines.

---

## Tech Stack

- **Vue.js**: ==3.5.13==

- **Bootstrap**: ==5.3.5==

- **Vue Router**: ==4.5.0==

- **Vue Meta**: ==3.0.0-alpha.7==

- **EmailJS**: ==4.4.1==

- **ESLint**: ==^7.32.0==

---

## EmailJS Setup
If the contact form is not functioning properly, follow these steps:

1. Reconnect your Outlook account in the [EmailJS Dashboard](https://dashboard.emailjs.com/sign-in).

2. Ensure that the following environment variables are set correctly in your ==.env== file:

```env
VUE_APP_EMAILJS_SERVICE_ID=your_service_id
VUE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VUE_APP_EMAILJS_USER_ID=your_user_id

3. After updating ==.env==, rebuild the project to apply the changes:

```bash
npm run build

---

## License & Credits
This project was developed by **Jennifer Curtis** for **OTL On The Line Communications**.
All content, design and branding are © Five Nine Technologies, LLC 2025.