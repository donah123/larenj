# Larenj International Website

A modern, responsive website for Larenj International Consulting built with Next.js and deployed on Vercel.

## Features

- **Modern Design**: Dark theme with custom color palette and typography
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Built with Next.js for optimal performance
- **API Ready**: Serverless API routes for backend functionality
- **Vercel Optimized**: Configured for seamless deployment on Vercel

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4 with custom theme
- **Fonts**: Noto Serif and Manrope from Google Fonts
- **Icons**: Material Symbols
- **Deployment**: Vercel
- **Backend**: Next.js API Routes (serverless)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact form API
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── globals.css           # Global styles and Tailwind config
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
└── components/
    └── Header.tsx            # Navigation header
```

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 2: Git Integration

1. Push your code to GitHub/GitLab
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Environment Variables

For production, you may want to add environment variables for:
- Database connections (Vercel Postgres)
- Email service integration
- Analytics

## API Routes

### Contact Form
- **Endpoint**: `POST /api/contact`
- **Body**: `{ name, email, message, service }`
- **Response**: Success/error message

## Storage & Database

This project is configured to work with Vercel's storage solutions:

- **Vercel Blob**: For file storage (images, documents)
- **Vercel KV**: For key-value data
- **Vercel Postgres**: For relational data

To integrate a database:

1. Add Vercel Postgres to your project
2. Update the API routes to connect to the database
3. Use environment variables for connection strings

## Customization

### Colors
Colors are defined in `src/app/globals.css` using CSS custom properties and Tailwind's `@theme` directive.

### Fonts
Fonts are loaded via Next.js font optimization in `src/app/layout.tsx`.

### Content
Update the page components in `src/app/` to modify content.

## Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Performance

- Static generation for fast loading
- Image optimization with Next.js
- Serverless functions for API routes
- Optimized fonts and CSS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Larenj International.
