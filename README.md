# Agent Team Template

A reusable, versioned multi-agent team you can drop into any project. This template is designed to be the first artifact in a new repo so you always start with the same team and tool policy.

## What This Provides

- A default agent team: Coordinator, Planner, Builder, Reviewer, Researcher
- A tool registry with JSON Schema tool contracts
- A selective approval policy for higher-risk tools
- A minimal orchestration entrypoint

## Folder Overview

- `src/team`: Agent role definitions and handoff logic
- `src/tools`: Tool contracts and registry
- `src/policies`: Approval policies for tool calls
- `src/runtime`: Orchestration entrypoint
- `config`: Default config for team + tool permissions

## How To Use This Template

1. Create a new repo from this template (or copy the folder into a new repo).
2. Implement project-specific tools in `src/tools`.
3. Update tool permissions in `config/tool.permissions.json`.
4. Update team defaults in `config/team.defaults.json` if needed.
5. Wire `src/runtime/orchestrator.ts` into your app entrypoint.

## Opinionated Defaults

- Selective human approvals:
  - Auto-approve read-only tools
  - Require approval for writes, external side effects, deployments
- Clear role boundaries and explicit handoffs

## Notes

This template is implementation-light on purpose. It defines the boundaries, contracts, and decision logic so you can wire it to the OpenAI Agents SDK in your stack.
