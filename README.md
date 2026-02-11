# bisnes

Starter template for building billion dollar businesses.

## Getting started
1. Install devenv.sh and nix: https://devenv.sh/getting-started/
2. Install homebrew: https://brew.sh/

## Why devenv.nix?

Everything — languages, tools, services, git hooks, MCP servers, AI agent permissions — is declared in one file: `devenv.nix`.

**Hard for humans.** Nix syntax is alien. The learning curve is steep. Most developers would rather write a Dockerfile or use [mise](https://github.com/jdx/mise) and call it a day.

**Great for AI.** That's the point. AI agents can read, modify, and extend `devenv.nix` reliably because:

- **Declarative** — describes *what* the environment should be, not *how* to set it up. No imperative steps to get wrong.
- **Single source of truth** — one file to read, one file to change. No scattered configs across Dockerfiles, Makefiles, shell scripts, and CI yamls.
- **Reproducible** — every developer and every AI agent gets the exact same environment. "Works on my machine" is dead.
- **Composable** — need Elixir? `languages.elixir.enable = true;`. Need Postgres? `services.postgres.enable = true;`. AI can add capabilities without understanding the full dependency graph.
- **Self-contained context** — an AI agent can look at `devenv.nix` and immediately understand: what languages the project uses, what services it depends on, what tools are available, and what permissions it has.

The tradeoff is intentional. Humans set this up once (or let AI do it). Then everyone — human and AI — benefits from a perfectly reproducible environment forever.

## Getting started

```sh
# Install devenv: https://devenv.sh/getting-started/
devenv shell
```
