# CLAUDE.md - AI Assistant Guide

> **Repository Status**: Active Next.js website project for The Running Horse LLC
> **Last Updated**: 2026-01-23

## Overview

This document serves as a comprehensive guide for AI assistants (like Claude) working on The Running Horse LLC corporate website. This is a professional business website built with Next.js, TypeScript, and Tailwind CSS for a UAE-registered general trading company.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Repository Structure](#repository-structure)
3. [Technology Stack](#technology-stack)
4. [Development Workflows](#development-workflows)
5. [Code Conventions](#code-conventions)
6. [Testing Guidelines](#testing-guidelines)
7. [Deployment & CI/CD](#deployment--cicd)
8. [Common Tasks](#common-tasks)
9. [Troubleshooting](#troubleshooting)
10. [AI Assistant Guidelines](#ai-assistant-guidelines)

---

## Project Overview

**Project Name**: The Running Horse LLC Corporate Website
**Type**: Business/Corporate Website
**Purpose**: Official online presence for bank verification, compliance documentation, and B2B partner engagement

### Key Features
- Professional multi-page corporate website
- Fully responsive mobile design
- SEO-optimized pages with metadata
- Contact form for business inquiries
- Comprehensive company and service information
- Compliance and certification documentation

### Architecture Overview
Next.js 14 App Router application with server-side rendering, TypeScript for type safety, and Tailwind CSS for styling. Static generation for optimal performance.

---

## Repository Structure

```
/home/user/saas/
├── app/                      # Next.js App Router pages
│   ├── about/               # About Us page
│   ├── clients/             # Clients & Partners page
│   ├── compliance/          # Compliance & Certifications page
│   ├── contact/             # Contact Us page (with form)
│   ├── how-we-work/         # How We Work page
│   ├── privacy/             # Privacy Policy page
│   ├── products/            # Products page
│   ├── services/            # Services page
│   ├── terms/               # Terms of Service page
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx           # Root layout with Header/Footer
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── Footer.tsx           # Site footer
│   └── Header.tsx           # Navigation header
├── public/                  # Static assets
├── CLAUDE.md               # This file
├── README.md               # Project documentation
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

### Key Directories

- `/app` - All pages and routes using Next.js 14 App Router
- `/components` - Reusable React components (Header, Footer)
- `/public` - Static assets (images, icons, etc.)
- Root config files for Next.js, TypeScript, Tailwind CSS

---

## Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.4+
- **Styling**: Tailwind CSS 3.4
- **State Management**: React useState hooks (no global state needed)

### Backend
- **Framework**: Next.js (server components and API routes)
- **Language**: TypeScript
- **Database**: None (static website, form handling to be added)
- **ORM/Query Builder**: N/A

### Infrastructure
- **Hosting**: Ready for Vercel, Netlify, or any Node.js hosting
- **Containerization**: Not required for this project
- **CI/CD**: Can be configured with GitHub Actions or platform-specific CI/CD

### Development Tools
- **Package Manager**: npm
- **Build Tool**: Next.js built-in (Turbopack/Webpack)
- **Linting**: Built-in Next.js linting
- **Testing**: Not currently configured (can add Jest/Vitest if needed)

---

## Development Workflows

### Getting Started

```bash
# Clone the repository (if not already cloned)
cd /home/user/saas

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser

# Build for production
npm run build

# Start production server
npm start
```

No environment variables required for basic functionality. The website is fully functional without a backend.

### Branch Strategy

**Main Branches**:
- `main` or `master` - Production-ready code
- `develop` - Integration branch for features

**Feature Branches**:
- Format: `feature/description` or `feat/description`
- Example: `feature/user-authentication`

**Bug Fix Branches**:
- Format: `fix/description` or `bugfix/description`
- Example: `fix/login-validation`

**AI Assistant Branches**:
- Format: `claude/claude-md-[session-id]`
- These branches are auto-generated for AI assistant work
- Always develop on the assigned branch
- Push to the same branch when complete

### Commit Conventions

Follow conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples**:
```
feat(auth): add OAuth2 authentication flow
fix(api): resolve race condition in user creation
docs: update API documentation for v2 endpoints
```

### Pull Request Process

1. Create a feature branch from `develop` (or main)
2. Make your changes with clear, atomic commits
3. Write or update tests as needed
4. Ensure all tests pass locally
5. Push your branch to remote
6. Create a pull request with:
   - Clear title and description
   - Link to related issues
   - Screenshots/videos for UI changes
   - Test plan or checklist
7. Address review feedback
8. Merge after approval

---

## Code Conventions

### General Principles

1. **KISS (Keep It Simple, Stupid)**: Prefer simple, clear solutions over clever ones
2. **DRY (Don't Repeat Yourself)**: Extract common logic, but avoid premature abstraction
3. **YAGNI (You Aren't Gonna Need It)**: Don't add functionality until it's needed
4. **Single Responsibility**: Each function/class should do one thing well

### Naming Conventions

**Variables & Functions**:
- Use camelCase: `getUserData`, `isAuthenticated`
- Be descriptive: `fetchUserProfile` not `fetchData`
- Boolean variables should be prefixed: `isLoading`, `hasAccess`, `canEdit`

**Constants**:
- Use UPPER_SNAKE_CASE: `API_BASE_URL`, `MAX_RETRY_ATTEMPTS`

**Classes & Components**:
- Use PascalCase: `UserProfile`, `AuthService`, `DataTable`

**Files**:
- Match the export: `UserProfile.tsx`, `authService.ts`
- Test files: `UserProfile.test.tsx`, `authService.spec.ts`

### Code Organization

**File Structure**:
```
ComponentName/
├── index.ts              # Public API
├── ComponentName.tsx     # Main component
├── ComponentName.test.tsx
├── ComponentName.styles.ts
├── types.ts              # Local types
└── utils.ts              # Component-specific utilities
```

**Import Order**:
1. External dependencies
2. Internal modules (absolute imports)
3. Relative imports (parent directories)
4. Relative imports (same directory)
5. Type imports
6. CSS/styles

```typescript
// External
import React from 'react';
import { useRouter } from 'next/router';

// Internal
import { api } from '@/lib/api';
import { Button } from '@/components/ui';

// Relative
import { UserAvatar } from '../UserAvatar';
import { formatDate } from './utils';

// Types
import type { User } from '@/types';

// Styles
import styles from './Component.module.css';
```

### Error Handling

**Backend**:
- Use try-catch blocks for async operations
- Return appropriate HTTP status codes
- Log errors with context
- Don't expose sensitive error details to clients

**Frontend**:
- Use error boundaries for React components
- Show user-friendly error messages
- Log errors to monitoring service
- Provide fallback UI for failed operations

### Security Best Practices

1. **Input Validation**: Validate and sanitize all user inputs
2. **Authentication**: Use secure session management
3. **Authorization**: Implement proper access controls
4. **SQL Injection**: Use parameterized queries/ORMs
5. **XSS Prevention**: Sanitize user-generated content
6. **CSRF Protection**: Implement CSRF tokens
7. **Secrets Management**: Never commit secrets, use environment variables
8. **Dependencies**: Keep dependencies updated, audit regularly

---

## Testing Guidelines

### Test Structure

```
describe('ComponentName', () => {
  describe('when condition', () => {
    it('should do expected behavior', () => {
      // Arrange
      const input = setupTestData();

      // Act
      const result = performAction(input);

      // Assert
      expect(result).toEqual(expectedOutput);
    });
  });
});
```

### Testing Principles

1. **Unit Tests**: Test individual functions/components in isolation
2. **Integration Tests**: Test interactions between modules
3. **E2E Tests**: Test complete user flows
4. **Test Coverage**: Aim for >80% coverage for critical paths
5. **Test Naming**: Use descriptive names that explain the scenario and expectation

### What to Test

**Always Test**:
- Business logic
- Data transformations
- Edge cases and error conditions
- Security-critical code
- API endpoints
- User authentication/authorization

**Consider Testing**:
- UI component rendering
- User interactions
- Form validations
- API integrations

**Don't Over-Test**:
- Third-party library internals
- Trivial getters/setters
- Auto-generated code

### Running Tests

Tests are not currently configured for this project. If testing is needed in the future:

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom

# Add test scripts to package.json
# Run tests with: npm test
```

---

## Deployment & CI/CD

### Environments

1. **Development**: Local development environment
2. **Staging**: Pre-production environment for testing
3. **Production**: Live environment serving real users

### CI/CD Pipeline

**[To be defined based on chosen CI/CD platform]**

Typical pipeline stages:
1. **Lint**: Check code style and quality
2. **Test**: Run automated tests
3. **Build**: Compile/bundle application
4. **Deploy**: Push to target environment

### Deployment Process

**Vercel (Recommended)**:
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
netlify deploy --prod
```

**Manual Build**:
```bash
npm run build
# Deploy the .next folder and package.json to your hosting
```

### Environment Variables

No environment variables required for the current version. Optional additions for future enhancements:
- `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`: Backend API for form submission
- `NEXT_PUBLIC_ANALYTICS_ID`: Google Analytics or similar
- `NEXT_PUBLIC_SITE_URL`: Production URL for SEO

---

## Common Tasks

### Adding a New Feature

1. Create a feature branch
2. Implement the feature following code conventions
3. Write tests for the new functionality
4. Update documentation if needed
5. Create a pull request

### Fixing a Bug

1. Create a fix branch
2. Write a failing test that reproduces the bug
3. Implement the fix
4. Verify the test passes
5. Check for similar issues elsewhere
6. Create a pull request

### Refactoring Code

1. Ensure existing tests pass
2. Make incremental changes
3. Keep tests passing after each change
4. Don't change behavior, only structure
5. Create a pull request

### Adding Dependencies

1. Evaluate necessity and alternatives
2. Check for security vulnerabilities
3. Consider bundle size impact
4. Install with appropriate package manager
5. Update documentation
6. Commit lock file changes

---

## Troubleshooting

### Common Issues

**Issue**: [Common problem]
**Solution**: [How to resolve]

**Issue**: [Another common problem]
**Solution**: [How to resolve]

### Debug Mode

```bash
# [Commands to enable debug mode]
```

### Logs

- **Application Logs**: [Location/command]
- **Error Logs**: [Location/command]
- **Access Logs**: [Location/command]

---

## AI Assistant Guidelines

### When Working on This Codebase

1. **Always Read Before Modifying**: Never propose changes to code you haven't read
2. **Follow Existing Patterns**: Maintain consistency with existing code style
3. **Avoid Over-Engineering**: Only make changes that are directly requested or clearly necessary
4. **Security First**: Be careful not to introduce vulnerabilities (SQL injection, XSS, etc.)
5. **Test Your Changes**: Run tests before committing
6. **Use TodoWrite Tool**: Track multi-step tasks with the TodoWrite tool

### Git Workflow for AI Assistants

1. **Branch Management**:
   - Always work on the assigned `claude/` branch
   - Create the branch if it doesn't exist: `git checkout -b claude/[session-id]`
   - Never push to main/master without explicit permission

2. **Committing Changes**:
   - Use descriptive commit messages following conventional commits
   - Stage specific files rather than using `git add .`
   - Include session URL in commit messages
   - Never skip hooks unless explicitly requested

3. **Pushing Changes**:
   - Use `git push -u origin <branch-name>`
   - Branch must start with 'claude/' and end with matching session ID
   - Retry on network errors with exponential backoff (2s, 4s, 8s, 16s)

4. **Creating Pull Requests**:
   - Analyze ALL commits that will be included (not just the latest)
   - Use `git diff [base-branch]...HEAD` to see full changes
   - Draft clear PR summary with bullet points
   - Include test plan
   - Use `gh pr create` with HEREDOC for proper formatting

### Code Review Checklist

Before submitting changes, verify:
- [ ] Code follows existing conventions and style
- [ ] No security vulnerabilities introduced
- [ ] Tests added/updated and passing
- [ ] No sensitive data or secrets committed
- [ ] Error handling implemented appropriately
- [ ] Code is simple and maintainable
- [ ] Documentation updated if needed
- [ ] No unnecessary abstractions or over-engineering

### Tools Preference

1. **File Operations**: Use Read, Edit, Write tools (not cat/sed/echo)
2. **Code Search**: Use Glob/Grep for specific queries, Task tool for exploration
3. **Parallel Operations**: Run independent commands in parallel
4. **Task Management**: Use TodoWrite for multi-step tasks

### Communication Style

- Be concise and clear
- Output explanations as text, not in bash commands
- Don't use emojis unless requested
- Focus on technical accuracy
- No time estimates
- Don't use unnecessary superlatives

---

## Additional Resources

### Documentation Links
- Project Documentation: README.md in this repository
- API Documentation: N/A (static website)
- Design System: Tailwind CSS utilities documented in globals.css

### External Resources
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

### Company Information
- **Company**: The Running Horse LLC
- **Business**: General Trading (Leather Goods, Clothing, Cosmetics, Fashion Accessories)
- **Location**: United Arab Emirates
- **Email**: info@therunninghorse.ae

---

## Changelog

### 2026-01-23
- Initial CLAUDE.md created
- Repository initialized with Next.js 14, TypeScript, Tailwind CSS
- Complete corporate website built with 10 pages
- All main pages created: Home, About, Services, Products, How We Work, Clients, Compliance, Contact, Privacy, Terms
- Professional responsive design implemented
- SEO optimization added to all pages
- README.md documentation created

---

## Project-Specific Notes

### Website Pages
1. **Home (/)** - Company intro, services overview, product categories, CTA sections
2. **About (/about)** - Company background, mission, vision, values, ethical practices
3. **Services (/services)** - Six main trading services with detailed descriptions
4. **Products (/products)** - Four product categories: leather, clothing, cosmetics, accessories
5. **How We Work (/how-we-work)** - 7-step business process from inquiry to delivery
6. **Clients & Partners (/clients)** - Target audience, geographic reach, partnership benefits
7. **Compliance (/compliance)** - UAE licensing, regulations, quality standards, certifications
8. **Contact (/contact)** - Contact form, business information, multiple contact methods
9. **Privacy (/privacy)** - Privacy policy and data protection information
10. **Terms (/terms)** - Terms of service and legal information

### Design System
- **Primary Color**: Blue (primary-600 #0284c7)
- **Accent**: Gold for highlights
- **Typography**: Inter font family
- **Responsive**: Mobile-first with md, lg breakpoints
- **Components**: Card, button, input styles in globals.css

### Custom Tailwind Classes
- `.container-custom` - Max-width container with padding
- `.section-padding` - Standard vertical spacing (py-16 md:py-24)
- `.btn-primary`, `.btn-secondary`, `.btn-outline` - Button variants
- `.heading-xl`, `.heading-lg`, `.heading-md`, `.heading-sm` - Typography scale
- `.card` - Card component with hover effects
- `.input-field`, `.textarea-field` - Form inputs

### Future Enhancements
- Backend API for contact form submission (currently client-side only)
- Multi-language support (Arabic/English toggle)
- CMS integration for content management
- Client portal with authentication
- Blog or news section
- Analytics integration (Google Analytics, etc.)
