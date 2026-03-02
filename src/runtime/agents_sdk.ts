import { Agent, run } from "@openai/agents";
import { team } from "../team";
import { AgentSpec } from "../types";
import { loadDefaults } from "./orchestrator";

function buildInstructions(spec: AgentSpec) {
  return [
    `Role: ${spec.role}.`,
    spec.summary,
    "If you need a specialist, hand off to the appropriate agent.",
  ].join(" ");
}

export function createAgents() {
  const planner = new Agent({
    name: team.planner.name,
    instructions: buildInstructions(team.planner),
  });

  const builder = new Agent({
    name: team.builder.name,
    instructions: buildInstructions(team.builder),
  });

  const reviewer = new Agent({
    name: team.reviewer.name,
    instructions: buildInstructions(team.reviewer),
  });

  const researcher = new Agent({
    name: team.researcher.name,
    instructions: buildInstructions(team.researcher),
  });

  const coordinator = new Agent({
    name: team.coordinator.name,
    instructions: buildInstructions(team.coordinator),
    handoffs: [planner, builder, reviewer, researcher],
  });

  return { coordinator, planner, builder, reviewer, researcher };
}

export async function runTeamTask(input: string) {
  const { teamConfig } = loadDefaults();
  const { coordinator } = createAgents();

  const result = await run(coordinator, input, {
    model: teamConfig.defaultModel,
    temperature: teamConfig.temperature,
  });

  return result.finalOutput;
}
