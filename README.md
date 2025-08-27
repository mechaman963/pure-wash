# Pure Wash - Premium Car Wash Services

A modern, responsive car wash booking application built with Next.js 15, Material-UI, and TypeScript.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **PWA Support**: Progressive Web App with offline capabilities
- **Modern UI**: Built with Material-UI components
- **TypeScript**: Full type safety and better development experience
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Performance**: Optimized images and caching strategies
- **Testing**: Comprehensive test coverage with Jest and React Testing Library

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **UI Library**: Material-UI (MUI)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest + React Testing Library
- **Package Manager**: pnpm

## 📋 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd car-wash
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
```

### 3. Run the development server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Build for production

```bash
pnpm build
# or
npm run build
```

### 5. Start production server

```bash
pnpm start
# or
npm start
```

## 🧪 Testing

### Run tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run tests in CI mode
pnpm test:ci
```

### Test coverage

The project includes comprehensive test coverage with Jest and React Testing Library. Tests are located in `src/app/components/__tests__/` directories.

## 📁 Project Structure

```
car-wash/
├── public/                 # Static assets
│   ├── manifest.json      # PWA manifest
│   ├── sitemap.xml       # SEO sitemap
│   └── robots.txt        # SEO robots file
├── src/
│   └── app/
│       ├── components/    # React components
│       ├── theme/         # MUI theme configuration
│       ├── globals.css    # Global styles
│       ├── layout.tsx     # Root layout
│       └── page.tsx       # Home page
├── jest.config.js         # Jest configuration
├── jest.setup.js          # Jest setup
├── next.config.ts         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## 🔧 Configuration

### Next.js Configuration

The `next.config.ts` includes:

- PWA support with service worker
- Security headers
- Image optimization
- Performance optimizations

### PWA Features

- Service worker with caching strategies
- Web app manifest
- Offline support
- Install prompt

### Security Headers

- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- X-XSS-Protection
- Strict-Transport-Security
- Permissions-Policy

## 📱 PWA Features

The application is configured as a Progressive Web App with:

- Offline functionality
- Install prompt
- App-like experience
- Background sync capabilities

## ♿ Accessibility

- Keyboard navigation support
- ARIA labels and roles
- Screen reader compatibility
- High contrast support
- Focus management

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 📊 Performance

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Service worker caching
- Optimized bundle size

## 🔍 SEO

- Meta tags and Open Graph
- Structured data markup
- Sitemap generation
- Robots.txt configuration
- Semantic HTML structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the GitHub repository.

## 📈 Roadmap

- [ ] User authentication
- [ ] Booking system
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Mobile app
- [ ] Analytics integration
- [ ] Multi-language support

## 🔄 Recent Updates

- Added comprehensive testing setup
- Implemented PWA features
- Enhanced accessibility
- Added security headers
- Optimized SEO configuration
- Improved error handling with ErrorBoundary
