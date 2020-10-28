# Getting Started

1. Set the environment variable `MAPBOX_ACCESS_TOKEN`
2. Run `yarn install`
3. Run `yarn bootstrap`
4. Run `yarn start`
5. Open [http://localhost:3001](http://localhost:3001).

Included apps:

- container (ReactJS - acts as the app shell): [http://localhost:3001](http://localhost:3001)
- App #2 (ReactJS - plus is an aggregation with other remotes):
  [http://localhost:3002](http://localhost:3002)
- App #3 (ReactJS): [http://localhost:3003](http://localhost:3003)
- docs-svelte (SvelteJS): [http://localhost:3004](http://localhost:3004)
- App #5 (LitElement): [http://localhost:3005](http://localhost:3005)
- map-react (ReactJS): [http://localhost:3006](http://localhost:3006)
  <img src="https://ssl.google-analytics.com/collect?v=1&t=event&ec=email&ea=open&t=event&tid=UA-120967034-1&z=1589682154&cid=ae045149-9d17-0367-bbb0-11c41d92b411&dt=ModuleFederationExamples&dp=/email/ComprehensiveDemo">

# Live Links

# Container Responsibilities

- Authentication
- Dev environment stuff (prettier, eslint, etc)

# Developing Locally

# Styling

# Shared Assets

# Git/PRs

# Passing Data Between Apps

There are a few options:

- Events
- In the route
- Separate pub-sub mechanism
- Xstate/rxjs orchestrator in container
- React context (ties us to react MFEs)

We will likely need some combination of these, but we should strive to divide MFEs so that we
minimize the need for inter-app communication.

See `docs-svelte` for a rough example using events.
