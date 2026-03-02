import { ToolSpec, ToolResult } from "../types";

export const writeTools: ToolSpec[] = [
  {
    name: "write_file",
    description: "Write or update a file in the repository.",
    inputSchema: {
      type: "object",
      properties: {
        path: { type: "string", description: "Repo-relative path" },
        content: { type: "string", description: "Full file content" },
      },
      required: ["path", "content"],
      additionalProperties: false,
    },
    riskTier: "write",
  },
  {
    name: "run_command",
    description: "Execute a local command in the repo environment.",
    inputSchema: {
      type: "object",
      properties: {
        command: { type: "string", description: "Shell command" },
      },
      required: ["command"],
      additionalProperties: false,
    },
    riskTier: "side_effect",
  },
  {
    name: "deploy",
    description: "Trigger a deployment or release pipeline.",
    inputSchema: {
      type: "object",
      properties: {
        target: { type: "string", description: "Deployment target" },
        version: { type: "string", description: "Version or tag" },
      },
      required: ["target", "version"],
      additionalProperties: false,
    },
    riskTier: "deploy",
  },
];

export async function executeWriteTool(
  toolName: string,
  input: Record<string, unknown>
): Promise<ToolResult> {
  return {
    ok: false,
    error: `Tool execution not wired. Tried ${toolName} with ${JSON.stringify(input)}`,
  };
}
