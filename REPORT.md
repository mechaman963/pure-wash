# Next.js + MUI Audit Report

## 📊 Executive Summary

**Overall Score:** 90/100 (A)

**Project Status:** 🟢 Excellent - Production Ready

**Audit Date:** ٢٧‏/٨‏/٢٠٢٥

**Total Files Scanned:** 16

**Total Issues Found:** 84

**Critical Issues:** 8

---

## 🎯 Category Breakdown

| Category | Score | Weight | Status |
|----------|-------|--------|--------|
| Next.js Architecture | 83/100 | 14 | 🟡 |
| MUI Usage | 100/100 | 14 | 🟢 |
| Accessibility | 80/100 | 8 | 🟡 |
| Responsive Design | 90/100 | 8 | 🟢 |
| Performance | 90/100 | 8 | 🟢 |
| Security | 90/100 | 8 | 🟢 |
| Code Quality | 70/100 | 10 | 🟠 |
| Testing | 0/100 | 6 | ⚫ |
| SEO | 0/100 | 8 | ⚫ |
| Image Optimization | 0/100 | 6 | ⚫ |
| Modern Practices | 0/100 | 4 | ⚫ |
| PWA Essentials | 88/100 | 6 | 🟡 |


---

## 🚨 Top Issues to Fix

| File | Line:Col | Category | Severity | Issue |
|------|----------|----------|----------|-------|
| [``]() | undefined:undefined | Pwa | 🔴 Error | Missing theme-color meta tag |
| [``]() | undefined:undefined | Pwa | 🔴 Error | next-pwa not configured in next.config.js |
| [``]() | undefined:undefined | Security | 🔴 Error | Security headers function not configured |
| [``]() | undefined:undefined | Responsive | 🔴 Error | Missing viewport meta tag |
| [``]() | undefined:undefined | Seo | 🔴 Error | Missing page title tag |
| [``]() | undefined:undefined | Pwa | 🔴 Error | PWA manifest.json reference missing |
| [``]() | undefined:undefined | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible |
| [``]() | undefined:undefined | Quality | 🟡 Warning | Function 'Home' should have explicit return type |
| [``]() | undefined:undefined | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |
| [``]() | undefined:undefined | Structure | 🟡 Warning | PWA manifest.json is missing |


---

## 📁 File-by-File Analysis

| File | Score | Issues | Critical |
|------|-------|--------|----------|
| [`next.config.ts`](next.config.ts) | 🔴 62/100 | 3 | 2 |
| [`next-env.d.ts`](next-env.d.ts) | 🟢 100/100 | 0 | 0 |
| [`src\app\page.tsx`](src\app\page.tsx) | ⚫ 52/100 | 6 | 0 |
| [`src\app\layout.tsx`](src\app\layout.tsx) | ⚫ 0/100 | 18 | 5 |
| [`src\app\theme\ThemeProvider.tsx`](src\app\theme\ThemeProvider.tsx) | ⚫ 52/100 | 6 | 0 |
| [`src\app\components\WhyPureWash.tsx`](src\app\components\WhyPureWash.tsx) | 🔴 60/100 | 5 | 0 |
| [`src\app\components\Subscriptions.tsx`](src\app\components\Subscriptions.tsx) | 🔴 68/100 | 4 | 0 |
| [`src\app\components\Services.tsx`](src\app\components\Services.tsx) | 🔴 68/100 | 4 | 0 |
| [`src\app\components\Plans.tsx`](src\app\components\Plans.tsx) | 🟠 76/100 | 3 | 0 |
| [`src\app\components\Offer.tsx`](src\app\components\Offer.tsx) | 🟠 76/100 | 3 | 0 |
| [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx) | ⚫ 26/100 | 9 | 1 |
| [`src\app\components\LinksMenu.tsx`](src\app\components\LinksMenu.tsx) | 🟠 76/100 | 3 | 0 |
| [`src\app\components\Links.tsx`](src\app\components\Links.tsx) | 🟠 76/100 | 3 | 0 |
| [`src\app\components\Landing.tsx`](src\app\components\Landing.tsx) | 🟠 76/100 | 3 | 0 |
| [`src\app\components\Heading.tsx`](src\app\components\Heading.tsx) | 🔴 68/100 | 4 | 0 |
| [`src\app\components\Footer.tsx`](src\app\components\Footer.tsx) | 🔴 68/100 | 4 | 0 |
| [`public/`](public/) | 🟠 77/100 | 6 | 0 |


---

## 🔍 Issue Details by Category

### Pwa

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`next.config.ts`](next.config.ts) | 1:1 | Pwa | 🔴 Error | next-pwa not configured in next.config.js | Install and configure next-pwa with withPWA() wrapper |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Pwa | 🔴 Error | PWA manifest.json reference missing | Add <link rel="manifest" href="/manifest.json"> to enable PW... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Pwa | 🔴 Error | Missing theme-color meta tag | Add <meta name="theme-color" content="#your-color"> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Pwa | 🔴 Error | Missing manifest link tag | Add <link rel="manifest" href="/manifest.json"> |
| [`next.config.ts`](next.config.ts) | 1:1 | Pwa | 🟡 Warning | No runtime caching strategy configured | Add runtimeCaching strategies for offline functionality |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Pwa | 🟡 Warning | Missing apple-touch-icon link | Add <link rel="apple-touch-icon" href="/icon-180x180.png"> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Pwa | 🟡 Warning | Missing color-scheme meta tag | Add <meta name="color-scheme" content="light dark"> |

---

### 📄 [`next.config.ts`](next.config.ts)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Pwa | 🔴 Error | next-pwa not configured in next.config.js | Install and configure next-pwa with withPWA() wrapper |
| 1:1 | Pwa | 🟡 Warning | No runtime caching strategy configured | Add runtimeCaching strategies for offline functionality |

### 📄 [`src\app\layout.tsx`](src\app\layout.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Pwa | 🔴 Error | PWA manifest.json reference missing | Add <link rel="manifest" href="/manifest.json"> to enable PWA functionality |
| 1:1 | Pwa | 🔴 Error | Missing theme-color meta tag | Add <meta name="theme-color" content="#your-color"> |
| 1:1 | Pwa | 🔴 Error | Missing manifest link tag | Add <link rel="manifest" href="/manifest.json"> |
| 1:1 | Pwa | 🟡 Warning | Missing apple-touch-icon link | Add <link rel="apple-touch-icon" href="/icon-180x180.png"> |
| 1:1 | Pwa | 🟡 Warning | Missing color-scheme meta tag | Add <meta name="color-scheme" content="light dark"> |

### Security

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`next.config.ts`](next.config.ts) | 1:1 | Security | 🔴 Error | Security headers function not configured | Add async headers() function with security headers |

---

### 📄 [`next.config.ts`](next.config.ts)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Security | 🔴 Error | Security headers function not configured | Add async headers() function with security headers |

### Nextjs

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`src\app\page.tsx`](src\app\page.tsx) | 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive detected | Remove "use client" if component doesn't need client-side fe... |
| [`src\app\page.tsx`](src\app\page.tsx) | 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive | Remove "use client" directive as component doesn't use clien... |
| [`src\app\theme\ThemeProvider.tsx`](src\app\theme\ThemeProvider.tsx) | 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive detected | Remove "use client" if component doesn't need client-side fe... |
| [`src\app\theme\ThemeProvider.tsx`](src\app\theme\ThemeProvider.tsx) | 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive | Remove "use client" directive as component doesn't use clien... |
| [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx) | 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive detected | Remove "use client" if component doesn't need client-side fe... |

---

### 📄 [`src\app\page.tsx`](src\app\page.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive detected | Remove "use client" if component doesn't need client-side features |
| 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive | Remove "use client" directive as component doesn't use client-side features |

### 📄 [`src\app\theme\ThemeProvider.tsx`](src\app\theme\ThemeProvider.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive detected | Remove "use client" if component doesn't need client-side features |
| 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive | Remove "use client" directive as component doesn't use client-side features |

### 📄 [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive detected | Remove "use client" if component doesn't need client-side features |

### Performance

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`src\app\page.tsx`](src\app\page.tsx) | 1:1 | Performance | 🟡 Warning | Too many client components may impact performance |  |
| [`src\app\theme\ThemeProvider.tsx`](src\app\theme\ThemeProvider.tsx) | 1:1 | Performance | 🟡 Warning | Too many client components may impact performance |  |
| [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx) | 1:1 | Performance | 🟡 Warning | Too many client components may impact performance |  |

---

### 📄 [`src\app\page.tsx`](src\app\page.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Performance | 🟡 Warning | Too many client components may impact performance |  |

### 📄 [`src\app\theme\ThemeProvider.tsx`](src\app\theme\ThemeProvider.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Performance | 🟡 Warning | Too many client components may impact performance |  |

### 📄 [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Performance | 🟡 Warning | Too many client components may impact performance |  |

### Image

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`src\app\page.tsx`](src\app\page.tsx) | 22:11 | Image | 🟡 Warning | PNG icon should be converted to SVG | Convert /vector.png to SVG format for better scalability and... |
| [`src\app\components\Heading.tsx`](src\app\components\Heading.tsx) | 22:7 | Image | 🟡 Warning | PNG icon should be converted to SVG | Convert /arrow.png to SVG format for better scalability and ... |
| [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx) | 27:7 | Image | 🟡 Warning | PNG icon should be converted to SVG | Convert /logo.png to SVG format for better scalability and s... |
| [`src\app\components\Footer.tsx`](src\app\components\Footer.tsx) | 27:21 | Image | 🟡 Warning | PNG icon should be converted to SVG | Convert /dial.png to SVG format for better scalability and s... |
| [`src\app\components\WhyPureWash.tsx`](src\app\components\WhyPureWash.tsx) | 53:13 | Image | 🟡 Warning | PNG icon should be converted to SVG | Convert /logo.png to SVG format for better scalability and s... |

---

### 📄 [`src\app\page.tsx`](src\app\page.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 22:11 | Image | 🟡 Warning | PNG icon should be converted to SVG | Convert /vector.png to SVG format for better scalability and smaller file size |

### 📄 [`src\app\components\WhyPureWash.tsx`](src\app\components\WhyPureWash.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 53:13 | Image | 🟡 Warning | PNG icon should be converted to SVG | Convert /logo.png to SVG format for better scalability and smaller file size |

### 📄 [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 27:7 | Image | 🟡 Warning | PNG icon should be converted to SVG | Convert /logo.png to SVG format for better scalability and smaller file size |

### 📄 [`src\app\components\Heading.tsx`](src\app\components\Heading.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 22:7 | Image | 🟡 Warning | PNG icon should be converted to SVG | Convert /arrow.png to SVG format for better scalability and smaller file size |

### 📄 [`src\app\components\Footer.tsx`](src\app\components\Footer.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 27:21 | Image | 🟡 Warning | PNG icon should be converted to SVG | Convert /dial.png to SVG format for better scalability and smaller file size |

### Quality

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Quality | 🟡 Warning | Missing error boundary implementation | Implement error boundaries to gracefully handle component er... |
| [`src\app\components\Offer.tsx`](src\app\components\Offer.tsx) | 4:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\components\Offer.tsx`](src\app\components\Offer.tsx) | 4:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\app\components\Offer.tsx`](src\app\components\Offer.tsx) | 4:1 | Quality | 🟡 Warning | Function 'Offer' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\components\LinksMenu.tsx`](src\app\components\LinksMenu.tsx) | 4:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\components\LinksMenu.tsx`](src\app\components\LinksMenu.tsx) | 4:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\app\components\LinksMenu.tsx`](src\app\components\LinksMenu.tsx) | 4:1 | Quality | 🟡 Warning | Function 'LinksMenu' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\components\Landing.tsx`](src\app\components\Landing.tsx) | 4:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\components\Landing.tsx`](src\app\components\Landing.tsx) | 4:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\app\components\Landing.tsx`](src\app\components\Landing.tsx) | 4:1 | Quality | 🟡 Warning | Function 'Landing' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\components\Footer.tsx`](src\app\components\Footer.tsx) | 4:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\components\Footer.tsx`](src\app\components\Footer.tsx) | 4:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\app\components\Footer.tsx`](src\app\components\Footer.tsx) | 4:1 | Quality | 🟡 Warning | Function 'Footer' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\components\Heading.tsx`](src\app\components\Heading.tsx) | 9:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\components\Heading.tsx`](src\app\components\Heading.tsx) | 9:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\app\components\Heading.tsx`](src\app\components\Heading.tsx) | 9:1 | Quality | 🟡 Warning | Function 'Heading' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx) | 10:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx) | 10:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx) | 10:1 | Quality | 🟡 Warning | Function 'Navbar' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\page.tsx`](src\app\page.tsx) | 14:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\page.tsx`](src\app\page.tsx) | 14:1 | Quality | 🟡 Warning | Function 'Home' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\theme\ThemeProvider.tsx`](src\app\theme\ThemeProvider.tsx) | 14:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\theme\ThemeProvider.tsx`](src\app\theme\ThemeProvider.tsx) | 14:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\app\theme\ThemeProvider.tsx`](src\app\theme\ThemeProvider.tsx) | 14:1 | Quality | 🟡 Warning | Function 'ThemesProvider' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\components\Plans.tsx`](src\app\components\Plans.tsx) | 14:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\components\Plans.tsx`](src\app\components\Plans.tsx) | 14:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\app\components\Plans.tsx`](src\app\components\Plans.tsx) | 14:1 | Quality | 🟡 Warning | Function 'Plans' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\components\Links.tsx`](src\app\components\Links.tsx) | 17:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\components\Links.tsx`](src\app\components\Links.tsx) | 17:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\app\components\Links.tsx`](src\app\components\Links.tsx) | 17:1 | Quality | 🟡 Warning | Function 'Links' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 18:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 18:1 | Quality | 🟡 Warning | Function 'RootLayout' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\components\WhyPureWash.tsx`](src\app\components\WhyPureWash.tsx) | 38:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\components\WhyPureWash.tsx`](src\app\components\WhyPureWash.tsx) | 38:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\app\components\WhyPureWash.tsx`](src\app\components\WhyPureWash.tsx) | 38:1 | Quality | 🟡 Warning | Function 'Services' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\components\Subscriptions.tsx`](src\app\components\Subscriptions.tsx) | 38:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\components\Subscriptions.tsx`](src\app\components\Subscriptions.tsx) | 38:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\app\components\Subscriptions.tsx`](src\app\components\Subscriptions.tsx) | 38:1 | Quality | 🟡 Warning | Function 'Services' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\components\Services.tsx`](src\app\components\Services.tsx) | 42:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\components\Services.tsx`](src\app\components\Services.tsx) | 42:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\app\components\Services.tsx`](src\app\components\Services.tsx) | 42:1 | Quality | 🟡 Warning | Function 'Services' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx) | 1:1 | Quality | 🔵 Info | Imports should be ordered: React -> External -> Internal | Organize imports: React imports first, then external package... |

---

### 📄 [`src\app\page.tsx`](src\app\page.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 14:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 14:1 | Quality | 🟡 Warning | Function 'Home' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\app\layout.tsx`](src\app\layout.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Quality | 🟡 Warning | Missing error boundary implementation | Implement error boundaries to gracefully handle component errors |
| 18:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 18:1 | Quality | 🟡 Warning | Function 'RootLayout' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\app\theme\ThemeProvider.tsx`](src\app\theme\ThemeProvider.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 14:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 14:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 14:1 | Quality | 🟡 Warning | Function 'ThemesProvider' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\app\components\WhyPureWash.tsx`](src\app\components\WhyPureWash.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 38:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 38:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 38:1 | Quality | 🟡 Warning | Function 'Services' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\app\components\Subscriptions.tsx`](src\app\components\Subscriptions.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 38:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 38:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 38:1 | Quality | 🟡 Warning | Function 'Services' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\app\components\Services.tsx`](src\app\components\Services.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 42:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 42:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 42:1 | Quality | 🟡 Warning | Function 'Services' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\app\components\Plans.tsx`](src\app\components\Plans.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 14:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 14:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 14:1 | Quality | 🟡 Warning | Function 'Plans' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\app\components\Offer.tsx`](src\app\components\Offer.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 4:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 4:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 4:1 | Quality | 🟡 Warning | Function 'Offer' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Quality | 🔵 Info | Imports should be ordered: React -> External -> Internal | Organize imports: React imports first, then external packages, then internal mod... |
| 10:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 10:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 10:1 | Quality | 🟡 Warning | Function 'Navbar' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\app\components\LinksMenu.tsx`](src\app\components\LinksMenu.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 4:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 4:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 4:1 | Quality | 🟡 Warning | Function 'LinksMenu' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\app\components\Links.tsx`](src\app\components\Links.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 17:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 17:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 17:1 | Quality | 🟡 Warning | Function 'Links' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\app\components\Landing.tsx`](src\app\components\Landing.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 4:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 4:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 4:1 | Quality | 🟡 Warning | Function 'Landing' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\app\components\Heading.tsx`](src\app\components\Heading.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 9:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 9:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 9:1 | Quality | 🟡 Warning | Function 'Heading' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\app\components\Footer.tsx`](src\app\components\Footer.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 4:1 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 4:1 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 4:1 | Quality | 🟡 Warning | Function 'Footer' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### Responsive

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Responsive | 🔴 Error | Missing viewport meta tag | Add <meta name="viewport" content="width=device-width, initi... |
| [`src\app\components\Subscriptions.tsx`](src\app\components\Subscriptions.tsx) | 63:15 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| [`src\app\components\Services.tsx`](src\app\components\Services.tsx) | 67:15 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| [`src\app\components\WhyPureWash.tsx`](src\app\components\WhyPureWash.tsx) | 68:15 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |

---

### 📄 [`src\app\layout.tsx`](src\app\layout.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Responsive | 🔴 Error | Missing viewport meta tag | Add <meta name="viewport" content="width=device-width, initial-scale=1"> |

### 📄 [`src\app\components\WhyPureWash.tsx`](src\app\components\WhyPureWash.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 68:15 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |

### 📄 [`src\app\components\Subscriptions.tsx`](src\app\components\Subscriptions.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 63:15 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |

### 📄 [`src\app\components\Services.tsx`](src\app\components\Services.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 67:15 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |

### Seo

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🔴 Error | Missing page title tag | Add <title>Your Page Title</title> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🟡 Warning | Missing meta tag: description | Add <meta name="description" content="Your description here"... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🟡 Warning | Missing meta tag: keywords | Add <meta name="keywords" content="Your keywords here"> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🟡 Warning | Missing meta tag: author | Add <meta name="author" content="Your author here"> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:title | Add <meta property="og:title" content="Your title here"> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:description | Add <meta property="og:description" content="Your descriptio... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:image | Add <meta property="og:image" content="Your image here"> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:type | Add <meta property="og:type" content="Your type here"> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🔵 Info | Missing structured data markup | Add JSON-LD structured data for better SEO and rich snippets |

---

### 📄 [`src\app\layout.tsx`](src\app\layout.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Seo | 🟡 Warning | Missing meta tag: description | Add <meta name="description" content="Your description here"> |
| 1:1 | Seo | 🟡 Warning | Missing meta tag: keywords | Add <meta name="keywords" content="Your keywords here"> |
| 1:1 | Seo | 🟡 Warning | Missing meta tag: author | Add <meta name="author" content="Your author here"> |
| 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:title | Add <meta property="og:title" content="Your title here"> |
| 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:description | Add <meta property="og:description" content="Your description here"> |
| 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:image | Add <meta property="og:image" content="Your image here"> |
| 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:type | Add <meta property="og:type" content="Your type here"> |
| 1:1 | Seo | 🔴 Error | Missing page title tag | Add <title>Your Page Title</title> |
| 1:1 | Seo | 🔵 Info | Missing structured data markup | Add JSON-LD structured data for better SEO and rich snippets |

### Accessibility

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx) | 34:9 | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible | Add keyboard event handlers or make element keyboard accessi... |
| [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx) | 34:9 | Accessibility | 🟡 Warning | Interactive element missing keyboard support | Add keyboard event handlers and tabIndex for accessibility |

---

### 📄 [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 34:9 | Accessibility | 🟡 Warning | Interactive element missing keyboard support | Add keyboard event handlers and tabIndex for accessibility |
| 34:9 | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible | Add keyboard event handlers or make element keyboard accessible |

### Structure

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [``]() | 1:1 | Structure | 🟡 Warning | PWA manifest.json is missing | Create manifest.json for PWA functionality |
| [``]() | 1:1 | Structure | 🔵 Info | Sitemap is missing | Create sitemap.xml for better SEO |
| [``]() | 1:1 | Structure | 🔵 Info | Consider organizing images into dedicated folders | Create icons/, images/, or assets/ folders for better organi... |
| [``]() | 1:1 | Structure | 🔵 Info | Consider adding 192x192 PWA icon | Add 192x192 icon for better PWA compatibility |
| [``]() | 1:1 | Structure | 🔵 Info | Consider adding 512x512 PWA icon | Add 512x512 icon for better PWA compatibility |
| [``]() | 1:1 | Structure | 🔵 Info | Large images should be organized in dedicated folders | Move large images to images/ or assets/ folder for better or... |

---

### 📄 [`public/`](public/)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Structure | 🟡 Warning | PWA manifest.json is missing | Create manifest.json for PWA functionality |
| 1:1 | Structure | 🔵 Info | Sitemap is missing | Create sitemap.xml for better SEO |
| 1:1 | Structure | 🔵 Info | Consider organizing images into dedicated folders | Create icons/, images/, or assets/ folders for better organization |
| 1:1 | Structure | 🔵 Info | Consider adding 192x192 PWA icon | Add 192x192 icon for better PWA compatibility |
| 1:1 | Structure | 🔵 Info | Consider adding 512x512 PWA icon | Add 512x512 icon for better PWA compatibility |
| 1:1 | Structure | 🔵 Info | Large images should be organized in dedicated folders | Move large images to images/ or assets/ folder for better organization |



---

## 📋 All Files with Issues Summary

| File | Score | Issues | Critical |
|------|-------|--------|----------|
| [`next.config.ts`](next.config.ts) | 🔴 62/100 | 3 | 2 |
| [`next-env.d.ts`](next-env.d.ts) | 🟢 100/100 | 0 | 0 |
| [`src\app\page.tsx`](src\app\page.tsx) | ⚫ 52/100 | 6 | 0 |
| [`src\app\layout.tsx`](src\app\layout.tsx) | ⚫ 0/100 | 18 | 5 |
| [`src\app\theme\ThemeProvider.tsx`](src\app\theme\ThemeProvider.tsx) | ⚫ 52/100 | 6 | 0 |
| [`src\app\components\WhyPureWash.tsx`](src\app\components\WhyPureWash.tsx) | 🔴 60/100 | 5 | 0 |
| [`src\app\components\Subscriptions.tsx`](src\app\components\Subscriptions.tsx) | 🔴 68/100 | 4 | 0 |
| [`src\app\components\Services.tsx`](src\app\components\Services.tsx) | 🔴 68/100 | 4 | 0 |
| [`src\app\components\Plans.tsx`](src\app\components\Plans.tsx) | 🟠 76/100 | 3 | 0 |
| [`src\app\components\Offer.tsx`](src\app\components\Offer.tsx) | 🟠 76/100 | 3 | 0 |
| [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx) | ⚫ 26/100 | 9 | 1 |
| [`src\app\components\LinksMenu.tsx`](src\app\components\LinksMenu.tsx) | 🟠 76/100 | 3 | 0 |
| [`src\app\components\Links.tsx`](src\app\components\Links.tsx) | 🟠 76/100 | 3 | 0 |
| [`src\app\components\Landing.tsx`](src\app\components\Landing.tsx) | 🟠 76/100 | 3 | 0 |
| [`src\app\components\Heading.tsx`](src\app\components\Heading.tsx) | 🔴 68/100 | 4 | 0 |
| [`src\app\components\Footer.tsx`](src\app\components\Footer.tsx) | 🔴 68/100 | 4 | 0 |
| [`public/`](public/) | 🟠 77/100 | 6 | 0 |


---

## 📋 ESLint Analysis

No ESLint issues found or ESLint analysis not available.

---

## 📈 Detailed Metrics & Statistics

#### 📊 File Statistics

- **Total Files Scanned:** 16
- **Files with Issues:** 16
- **Clean Files:** 1

#### 📈 Score Distribution

- **90-100:** 1 files
- **70-79:** 6 files
- **60-69:** 6 files
- **0-59:** 4 files

#### 🚨 Issue Severity Distribution

- **🔴 Error:** 8 issues
- **🟡 Warning:** 69 issues
- **🔵 Info:** 7 issues

#### 🎯 Category Impact Analysis

- **Pwa:** 7 issues, Avg Score: 7/100
- **Security:** 1 issues, Avg Score: 4/100
- **Nextjs:** 5 issues, Avg Score: 14/100
- **Performance:** 3 issues, Avg Score: 8/100
- **Image:** 5 issues, Avg Score: 16/100
- **Quality:** 42 issues, Avg Score: 147/100
- **Responsive:** 4 issues, Avg Score: 12/100
- **Seo:** 9 issues, Avg Score: 0/100
- **Accessibility:** 2 issues, Avg Score: 3/100
- **Structure:** 6 issues, Avg Score: 27/100


---

## 🎯 Priority Matrix

#### 🔴 High Priority (Errors)

| File | Line | Issue |
|------|------|-------|
| [`next.config.ts`](next.config.ts) | 1:1 | next-pwa not configured in next.config.js... |
| [`next.config.ts`](next.config.ts) | 1:1 | Security headers function not configured... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Missing viewport meta tag... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Missing page title tag... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | PWA manifest.json reference missing... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Missing theme-color meta tag... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Missing manifest link tag... |
| [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx) | 34:9 | Interactive elements must be keyboard accessible... |

#### 🟡 Medium Priority (Warnings)

| File | Line | Issue |
|------|------|-------|
| [`next.config.ts`](next.config.ts) | 1:1 | No runtime caching strategy configured... |
| [`src\app\page.tsx`](src\app\page.tsx) | 1:1 | Unnecessary "use client" directive detected... |
| [`src\app\page.tsx`](src\app\page.tsx) | 1:1 | Unnecessary "use client" directive... |
| [`src\app\page.tsx`](src\app\page.tsx) | 1:1 | Too many client components may impact performance... |
| [`src\app\page.tsx`](src\app\page.tsx) | 22:11 | PNG icon should be converted to SVG... |
| [`src\app\page.tsx`](src\app\page.tsx) | 14:16 | Function is too complex (high cyclomatic complexity)... |
| [`src\app\page.tsx`](src\app\page.tsx) | 14:1 | Function 'Home' should have explicit return type... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Missing meta tag: description... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Missing meta tag: keywords... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Missing meta tag: author... |

#### 🔵 Low Priority (Info)

| File | Line | Issue |
|------|------|-------|
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Missing structured data markup... |
| [`src\app\components\Navbar.tsx`](src\app\components\Navbar.tsx) | 1:1 | Imports should be ordered: React -> External -> Internal... |
| [``](public/) | 1:1 | Sitemap is missing... |
| [``](public/) | 1:1 | Consider organizing images into dedicated folders... |
| [``](public/) | 1:1 | Consider adding 192x192 PWA icon... |
| [``](public/) | 1:1 | Consider adding 512x512 PWA icon... |
| [``](public/) | 1:1 | Large images should be organized in dedicated folders... |



---

## 🛠️ How to Fix Issues

### 🚨 Critical Issues (Fix First)
- **Errors (🔴):** These must be fixed before production deployment
- **Security Issues:** Address immediately to prevent vulnerabilities
- **PWA Issues:** Required for PWA functionality

### ⚠️ Important Issues (Fix Soon)
- **Warnings (🟡):** These should be addressed in the next development cycle
- **Performance Issues:** Will impact user experience
- **Accessibility Issues:** Required for compliance

### 💡 Enhancement Issues (Fix When Possible)
- **Info (🔵):** These are suggestions for improvement
- **Code Quality:** Will improve maintainability
- **SEO Optimizations:** Will improve search rankings

### 🛠️ General Fix Strategy
1. **Start with Errors** - Fix all critical issues first
2. **Address Warnings** - Fix important issues next
3. **Review Info Items** - Implement improvements when time allows
4. **Re-run Audit** - Verify all issues are resolved
5. **Monitor Regularly** - Run audits during development

---

*Generated by Next.js + MUI Audit Toolkit v1.0.0 By @dev-mhany*
