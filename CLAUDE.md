# CLAUDE.md - AI Assistant Guide

> **Repository Status**: This repository is currently in its initial state. This document will be updated as the codebase evolves.
> **Last Updated**: 2026-01-23

## Overview

This document serves as a comprehensive guide for AI assistants (like Claude) working on this SaaS application. It outlines the codebase structure, development workflows, conventions, and best practices to follow.

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

**Project Name**: [To be defined]
**Type**: SaaS Application
**Purpose**: [To be defined]

### Key Features
- [Feature 1]
- [Feature 2]
- [Feature 3]

### Architecture Overview
[To be defined - e.g., monorepo, microservices, monolithic, etc.]

---

## Repository Structure

```
/home/user/saas/
├── [To be populated as project develops]
```

### Key Directories

**[To be updated as project structure emerges]**

- `/src` - Main application source code
- `/tests` or `/test` - Test files
- `/docs` - Additional documentation
- `/config` - Configuration files
- `/scripts` - Build and utility scripts
- `/public` or `/static` - Static assets

---

## Technology Stack

### Frontend
- **Framework**: [e.g., React, Vue, Angular, Next.js]
- **Language**: [e.g., TypeScript, JavaScript]
- **Styling**: [e.g., CSS Modules, Tailwind, Styled Components]
- **State Management**: [e.g., Redux, Zustand, Context API]

### Backend
- **Framework**: [e.g., Node.js/Express, Django, Rails, FastAPI]
- **Language**: [e.g., TypeScript, Python, Ruby, Go]
- **Database**: [e.g., PostgreSQL, MongoDB, MySQL]
- **ORM/Query Builder**: [e.g., Prisma, TypeORM, Sequelize]

### Infrastructure
- **Hosting**: [e.g., AWS, GCP, Vercel, Netlify]
- **Containerization**: [e.g., Docker, Kubernetes]
- **CI/CD**: [e.g., GitHub Actions, GitLab CI, CircleCI]

### Development Tools
- **Package Manager**: [e.g., npm, yarn, pnpm]
- **Build Tool**: [e.g., Webpack, Vite, Turbopack]
- **Linting**: [e.g., ESLint, Prettier]
- **Testing**: [e.g., Jest, Vitest, Pytest, Cypress]

---

## Development Workflows

### Getting Started

```bash
# Clone the repository
git clone [repository-url]
cd saas

# Install dependencies
[package-manager install command]

# Set up environment variables
cp .env.example .env
# Edit .env with your local configuration

# Start development server
[start command]
```

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

```bash
# Run all tests
[test command]

# Run specific test file
[test command for specific file]

# Run with coverage
[test coverage command]

# Run in watch mode
[test watch command]
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

```bash
# [To be defined based on deployment strategy]
```

### Environment Variables

Required environment variables:
- `DATABASE_URL`: Database connection string
- `API_KEY`: API authentication key
- `JWT_SECRET`: Secret for JWT token signing
- [Add more as needed]

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
- [Project Documentation]: [URL]
- [API Documentation]: [URL]
- [Design System]: [URL]

### External Resources
- [Framework Documentation]: [URL]
- [Database Documentation]: [URL]
- [Cloud Platform Docs]: [URL]

### Team Contacts
- **Project Lead**: [Name/Contact]
- **Technical Lead**: [Name/Contact]
- **DevOps**: [Name/Contact]

---

## Changelog

### 2026-01-23
- Initial CLAUDE.md created
- Repository initialized
- Template structure established

---

## Notes for Future Updates

This document should be updated when:
- Project structure changes significantly
- New conventions are adopted
- Technology stack changes
- New tools or workflows are introduced
- Common issues are discovered and resolved

**Update Instructions**: Keep this document concise but comprehensive. Remove this notes section once the project is established and the template has been filled with actual project information.
