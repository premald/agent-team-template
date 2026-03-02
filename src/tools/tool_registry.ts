import { ToolSpec } from "../types";
import { readTools } from "./read_tools";
import { writeTools } from "./write_tools";

export const toolRegistry: ToolSpec[] = [...readTools, ...writeTools];

export function getToolSpec(name: string): ToolSpec | undefined {
  return toolRegistry.find((tool) => tool.name === name);
}
