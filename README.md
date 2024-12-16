# NextJS OAuth Demo

This project demonstrates authentication in a **Next.js** application using **NextAuth.js**. The app features a sidebar navigation, dynamic user sessions, and sign-in options via **GitHub** and **Google**.



## Getting Started

### Prerequisites

To run this project, ensure you have the following installed:

- **Node.js**: v16 or later
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kstubhieeee/NextJS-OAuth.git
   cd NextJS-OAuth
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and configure it based on the provided `.env.example` file:

   ```
   GITHUB_ID="your_GITHUB_ID"
   GITHUB_SECRET="your_GITHUB_SECRET"
   GOOGLE_CLIENT_ID="your_GOOGLE_CLIENT_ID"
   GOOGLE_CLIENT_SECRET="your_GOOGLE_CLIENT_SECRET"
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```



## Folder Structure

```
📦 NextJS-OAuth
├─ .env.example
├─ .gitignore
├─ README.md
├─ app
│  ├─ api
│  │  └─ auth
│  │     └─ [...nextauth]
│  │        └─ route.js
│  ├─ component
│  │  └─ SessionWrapper.js
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  └─ page.js
├─ components.json
├─ components
│  └─ ui
│     └─ sidebar.jsx
├─ jsconfig.json
├─ lib
│  └─ utils.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
└─ tailwind.config.mjs
```



## Environment Variables

### Example `.env.local`

```env
GITHUB_ID="your_GITHUB_ID"
GITHUB_SECRET="your_GITHUB_SECRET"
GOOGLE_CLIENT_ID="your_GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET="your_GOOGLE_CLIENT_SECRET"
```

Get your credentials from:

- **GitHub**: [GitHub Developer Settings](https://github.com/settings/developers)
- **Google**: [Google Cloud Console](https://console.cloud.google.com/)



## How to Use

1. **Sign In**:

   - Choose either **GitHub** or **Google** to sign in.
   - Once authenticated, the app displays user details, including name and email.

2. **Sign Out**:

   - Click the **Sign out** button to end the session.

3. **Customize Sidebar**:
   - Add or remove sidebar links by modifying the `links` array in `Component.js`.



## Technologies Used

- **Next.js**
- **NextAuth.js**
- **React**
- **Framer Motion**
- **Tabler Icons**



## License

This project is licensed under the [MIT License](LICENSE).



## Contributions

Feel free to fork the repository, submit issues, or create pull requests. Contributions are always welcome!
