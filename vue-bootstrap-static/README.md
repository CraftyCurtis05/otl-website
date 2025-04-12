# OTL On The Line Communications Website
This is the official website for **OTL On The Line Communications**, a modern, responsive site built with [Vue.js 3](https://vuejs.org/), [Bootstrap 5](https://getbootstrap.com/), and integrated with [EmailJS](https://www.emailjs.com/) for contact form functionality.
It’s optimized for desktop, tablet, and mobile users with full SEO meta tag support.

---

## Table of Contents

- [Project Overview](#project-overview)
- [How to Use the Website](#how-to-use-the-website)
- [Managing Your Contact Form](#managing-your-contact-form)
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

## Project Overview

The **OTL On The Line Communications Website** is designed to offer your visitors a professional and user-friendly experience.  
Key features of the website include:

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **SEO-Friendly**: The site is built to be search engine friendly, ensuring that your content is properly indexed by search engines.
- **Contact Form**: Integrated with **EmailJS** to allow easy email communication from the contact form.
- **Vue.js and Bootstrap**: The site is built using **Vue.js** for interactivity and **Bootstrap** for layout and design.

---

## How to Use the Website

Your website has been designed to provide a seamless experience for your visitors. Here are the core features:

### Navigation
- Use the **navigation menu** at the top of the page to visit different sections such as Services, Support, Pricing, and Contact.
- The footer of the page also contains useful links like your Privacy Policy and Terms & Conditions.

### Contact Form
- Your website includes a **contact form** which users can use to get in touch with you directly. The form sends submissions to your designated email through **EmailJS**. We'll go over how to manage and configure the email functionality in the next section.

---

## Managing Your Contact Form

The contact form is integrated with **EmailJS**, a service that allows you to send form submissions to your email. To ensure the form works correctly, follow these steps:

### 1. **Set Up Your EmailJS Account**

- Create an account on the [EmailJS Dashboard](https://dashboard.emailjs.com/sign-in).
- Connect your email service (e.g., Gmail, Outlook) to the account.
- After connecting your email, you'll get your **Service ID**, **Template ID**, and **User ID**. These values will need to be added to the `.env` configuration file in your project.

### 2. **Updating Environment Variables**

In your project’s `.env` file, make sure the following values are configured:

```env
VUE_APP_EMAILJS_SERVICE_ID=your_service_id
VUE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VUE_APP_EMAILJS_USER_ID=your_user_id
```

If you need to change the email template or adjust the design of the contact form, you can do so in the EmailJS Dashboard.

### 3. **Test Your Form**

Once everything is set up, test the contact form by submitting a test message. If you receive the email, the form is working correctly.

---

## Project Setup
To get started with the project, follow these steps:

### 1. Install Dependencies
Make sure you have **Node.js** (v10.9.0 or higher) installed on your machine. Then, run the following command to install the required dependencies:

```bash
npm install
```

### 2. Required Packages Installed

```bash
npm install vue@^3.5.13
npm install bootstrap@^5.3.5
npm install vue-meta@^3.0.0-alpha.7
npm install @emailjs/browser@latest
```

---

## Development Server
To run the development server locally, execute the following command:

```bash
npm run serve
```

The application will be available at [http://localhost:8080/](http://localhost:8080/).

---

## Production Build
To build the project for production (static files ready for deployment), use the following command:

```bash
npm run build
```

This will generate a production-ready build in the */dist* folder.

---

## Lint & Fix Code
To lint the project files and automatically fix any issues, run:

```bash
npm run lint
```

---

## Deployment Notes
If you are hosting this website on your own server, please follow these instructions:

1. **Upload the contents of the** */dist* **folder** to the root of your web server (e.g., via FTP, SSH, or any file transfer method).

2. Make sure your server is configured to always serve *index.html* for any route to support Vue Router's history mode (this is important for handling deep links and page refreshes correctly).

    - If you're using **NGINX** or **Apache**, you might need to configure the server to handle *404* errors by redirecting to *index.html* so that the Vue Router can take over and show the correct content.

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

- **Vue.js**: *3.5.13*

- **Bootstrap**: *5.3.5*

- **Vue Router**: *4.5.0*

- **Vue Meta**: *3.0.0-alpha.7*

- **EmailJS**: *4.4.1*

- **ESLint**: *^7.32.0*

---

## EmailJS Setup
If the contact form is not functioning properly, follow these steps:

1. Reconnect your Outlook account in the [EmailJS Dashboard](https://dashboard.emailjs.com/sign-in).

2. Ensure that the following environment variables are set correctly in your *.env* file:

```env
VUE_APP_EMAILJS_SERVICE_ID=your_service_id
VUE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VUE_APP_EMAILJS_USER_ID=your_user_id
```

3. After updating *.env*, rebuild the project to apply the changes:

```bash
npm run build
```

---

## License & Credits
This project was developed by **Jennifer Curtis** for **OTL On The Line Communications**.
All content, design and branding are © Five Nine Technologies, LLC 2025.

---

## Additional Information for Clients:

If you need to make any changes to the website (such as adding new pages, updating content, or adjusting the design), please reach out to the developer. You may also want to familiarize yourself with the **EmailJS Dashboard** for managing contact form templates and viewing form submissions.

For ongoing maintenance, it’s important to keep the dependencies up to date. If you want to update any technology stack or library, we recommend doing so carefully and testing the website thoroughly after each update.