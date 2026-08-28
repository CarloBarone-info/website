# Carlo Barone — Portfolio

This repository contains the source code for my personal portfolio.

I treat this portfolio as a product in its own right: a place to communicate how I work across **design, engineering, UX, and product thinking**, while continuously improving the experience, technical quality, and clarity of the work I present.

**Live portfolio:** https://carlobarone-info.github.io/website/

---

## Product goal

The goal of this portfolio is not only to collect projects.

I want it to answer a more useful question:

> **Why should someone hire me to help design, build, and improve digital products?**

My work sits at the intersection of **Design Engineering and Frontend Development**, supported by experience in UX, interaction design, accessibility, product thinking, creative technology, and sound.

The portfolio is therefore designed to show both **what I have built** and **how I think**: how I understand problems, make decisions, explore alternatives, prototype ideas, implement solutions, and evaluate outcomes.

---

## Positioning

My primary professional positioning is:

**Design Engineer & Frontend Developer**

I work across:

- Design engineering
- Frontend development
- UX and interaction design
- Product thinking
- Accessibility
- Prototyping
- Creative technology

Rather than presenting these as separate identities, I use them as complementary parts of the same process: understanding a problem, designing an interaction, making trade-offs, and building the result.

---

## Current product direction

I am developing the portfolio around a few principles.

### 1. Value before tools

The first thing a visitor should understand is not which framework I use, but what kind of problems I can help solve.

React, TypeScript, Node.js, and other technologies are supporting evidence — not the main message.

### 2. Evidence over claims

Instead of saying that I have worked with UX, product development, frontend engineering, or accessibility, I want the portfolio to show the decisions, iterations, constraints, and outcomes behind that work.

### 3. Selected work over project quantity

Not every project needs equal prominence.

The homepage will prioritize a small number of projects that best demonstrate my professional capabilities, while creative and experimental work will remain available as a separate part of my practice.

### 4. Decisions and trade-offs matter

A strong case study should explain not only what I made, but also:

- What problem I was solving
- Who I was solving it for
- What constraints existed
- Which alternatives I considered
- What I decided to prioritize
- What I chose not to build
- How the solution evolved
- What happened as a result

### 5. The portfolio itself should demonstrate engineering quality

This repository is also one of my frontend projects.

I want its structure, accessibility, testing, deployment, documentation, and code quality to reflect the same standards I would bring to a production product.

---

## Roadmap

I am improving the portfolio incrementally, prioritizing the changes that have the greatest impact on how clearly my experience is communicated.

### Phase 1 — Positioning and first impression

- [x] Replace the default Vite README with project-specific documentation
- [ ] Rework the homepage hero around a clear professional value proposition
- [ ] Position Design Engineering and Frontend Development as the primary professional anchors
- [ ] Remove temporary migration / work-in-progress messaging
- [ ] Add clear calls to action for selected work and résumé
- [ ] Complete the GitHub repository description, website, and topic metadata

### Phase 2 — Content quality

- [ ] Review and rewrite project copy for clarity, grammar, and precision
- [ ] Remove vague or unsupported claims
- [ ] Replace generic descriptions with concrete responsibilities and outcomes
- [ ] Make ownership explicit by distinguishing my contribution from team-level work
- [ ] Use measurable outcomes where available and precise qualitative outcomes where metrics cannot be shared

### Phase 3 — Portfolio information architecture

- [ ] Separate **Selected Work** from **Creative Work**
- [ ] Prioritize projects that demonstrate professional design and engineering capabilities
- [ ] Reduce the number of equally weighted project cards
- [ ] Introduce a homepage section for selected case studies
- [ ] Make the relationship between design, engineering, UX, and product thinking clearer across the site

### Phase 4 — Professional case studies

#### Neovici

- [ ] Turn my professional experience at Neovici into a flagship case study
- [ ] Explain the product context and user needs
- [ ] Clarify my responsibilities and areas of ownership
- [ ] Show the problems and constraints I worked with
- [ ] Document design and implementation decisions
- [ ] Describe relevant trade-offs and prioritization
- [ ] Show outcomes without exposing confidential information

#### Sonifying Hourglass

- [ ] Expand the project from a summary into a full Design Engineering / UX case study
- [ ] Show the research question and target users
- [ ] Document concepts and alternative approaches
- [ ] Include sketches, prototypes, technical experiments, and iterations
- [ ] Explain why sound and physical interaction were appropriate design choices
- [ ] Show testing and evaluation
- [ ] Connect the final outcome to the related publication and research contribution

### Phase 5 — Frontend engineering quality

- [ ] Treat the portfolio itself as a documented frontend case study
- [ ] Improve component structure and code organization where needed
- [ ] Scope styles more intentionally instead of relying on broad global selectors
- [ ] Fix existing CSS and UI polish issues
- [ ] Add consistent loading, empty, and error states where relevant
- [ ] Improve semantic HTML and keyboard accessibility
- [ ] Add automated accessibility checks
- [ ] Add unit/component tests for important UI behaviour
- [ ] Add end-to-end tests for key user flows
- [ ] Add a dedicated TypeScript type-check script
- [ ] Run linting, type-checking, tests, and production builds in CI
- [ ] Document relevant architectural and implementation decisions

### Phase 6 — Product thinking in case studies

- [ ] Add a **Decisions & trade-offs** section to relevant case studies
- [ ] Explain what alternatives were considered
- [ ] Show how user needs, technical constraints, and business requirements influenced decisions
- [ ] Make prioritization visible
- [ ] Explain what was deliberately left out of scope
- [ ] Describe how success was evaluated

### Phase 7 — Visual evidence

- [ ] Add screenshots and interface examples to case studies
- [ ] Add sketches, diagrams, user flows, and prototypes where relevant
- [ ] Show iterations rather than only final results
- [ ] Add before/after comparisons when they help explain a design decision
- [ ] Make case studies understandable through scanning, not only through long-form text

### Phase 8 — Backend feature

I plan to add a small Node.js backend that serves a real purpose in the portfolio rather than existing only as a technology demonstration.

The first backend feature will be a **contact / inquiry API**.

Planned flow:

```text
Portfolio contact form
        ↓
Node.js + Express API
        ↓
Input validation
        ↓
Rate limiting / spam protection
        ↓
Email service
        ↓
Contact notification
```

Planned API:

```text
POST /api/contact
GET  /api/health
```

The backend will demonstrate:

- Node.js
- Express
- TypeScript
- REST API design
- Request validation
- Error handling
- HTTP status codes
- Environment variables
- CORS configuration
- Rate limiting
- Basic security considerations
- Automated tests
- Independent frontend/backend deployment

Because the frontend is hosted on GitHub Pages, the API will be deployed separately and consumed by the React application.

The feature also gives me a concrete full-stack case study:

> I identified a real product need, designed the interaction, defined the API contract, separated client and server responsibilities, handled validation and failure states, deployed both applications independently, and integrated them into one user experience.

---

## Tech stack

The portfolio currently uses:

- React
- TypeScript
- Vite
- React Router
- CSS
- GitHub Actions
- GitHub Pages

Planned additions include:

- Node.js
- Express
- API validation
- Automated testing
- Accessibility testing
- CI quality checks

---

## Running locally

Clone the repository:

```bash
git clone https://github.com/CarloBarone-info/website.git
cd website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

---

## Deployment

The frontend is deployed to GitHub Pages through GitHub Actions.

As the project evolves, the deployment pipeline will also become responsible for validating code quality before publishing a new version.

The planned backend will be deployed separately and connected to the frontend through an HTTP API.

---

## Why document the roadmap here?

The README is part of the project.

I want it to communicate not only the current implementation but also the reasoning behind the direction of the portfolio.

Keeping the roadmap visible helps me:

- Define priorities
- Make scope explicit
- Track decisions
- Avoid adding features without a clear purpose
- Treat the portfolio as an evolving product rather than a static collection of pages

The roadmap will change as I learn from feedback and as the portfolio develops.

---

## Contact

For more about my work, background, and projects:

**Portfolio:** https://carlobarone-info.github.io/website/
