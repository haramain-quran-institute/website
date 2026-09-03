export type HaramainAIModel = "gpt-4.1-nano" | "gpt-4.1-mini";

// USD per 1M text tokens. Update from the official OpenAI model pricing pages.
export const AI_MODEL_PRICING: Record<HaramainAIModel, { input: number; cachedInput: number; output: number }> = {
  "gpt-4.1-nano": { input: 0.1, cachedInput: 0.025, output: 0.4 },
  "gpt-4.1-mini": { input: 0.4, cachedInput: 0.1, output: 1.6 },
};

export interface OpenAIUsage { input_tokens?: number; output_tokens?: number; total_tokens?: number; input_tokens_details?: { cached_tokens?: number } }

export function calculateApproximateCost(model: HaramainAIModel, usage: OpenAIUsage) {
  const input = usage.input_tokens ?? 0; const cached = Math.min(input, usage.input_tokens_details?.cached_tokens ?? 0); const output = usage.output_tokens ?? 0; const pricing = AI_MODEL_PRICING[model];
  return ((input - cached) * pricing.input + cached * pricing.cachedInput + output * pricing.output) / 1_000_000;
}

export function logAIUsage(model: HaramainAIModel, usage?: OpenAIUsage) {
  if (process.env.NODE_ENV === "production" || !usage) return;
  console.info("[Haramain AI usage]", { model, inputTokens: usage.input_tokens ?? 0, cachedInputTokens: usage.input_tokens_details?.cached_tokens ?? 0, outputTokens: usage.output_tokens ?? 0, totalTokens: usage.total_tokens ?? 0, approximateCostUsd: Number(calculateApproximateCost(model, usage).toFixed(8)) });
}
