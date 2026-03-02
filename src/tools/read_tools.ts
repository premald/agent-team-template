import { ToolSpec, ToolResult } from "../types";

export const readTools: ToolSpec[] = [
  {
    name: "search_docs",
    description: "Search internal documentation or knowledge base.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search query" },
      },
      required: ["query"],
      additionalProperties: false,
    },
    riskTier: "read",
  },
  {
    name: "read_file",
    description: "Read a file from the repository.",
    inputSchema: {
      type: "object",
      properties: {
        path: { type: "string", description: "Repo-relative path" },
      },
      required: ["path"],
      additionalProperties: false,
    },
    riskTier: "read",
  },
];

export async function executeReadTool(
  toolName: string,
  input: Record<string, unknown>
): Promise<ToolResult> {
  return {
    ok: false,
    error: `Tool execution not wired. Tried ${toolName} with ${JSON.stringify(input)}`,
  };
}
