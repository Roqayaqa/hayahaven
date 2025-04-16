'use server';
/**
 * @fileOverview Generates personalized hijab style recommendations based on user preferences.
 *
 * - generateHijabStyleRecommendations - A function that generates hijab style recommendations.
 * - GenerateHijabStyleRecommendationsInput - The input type for the generateHijabStyleRecommendations function.
 * - GenerateHijabStyleRecommendationsOutput - The return type for the generateHijabStyleRecommendations function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateHijabStyleRecommendationsInputSchema = z.object({
  userPreferences: z
    .string()
    .describe('A description of the user preferences for hijab styles.'),
  currentSelections: z
    .string()
    .describe('A description of the user current hijab selections.'),
  browsingHistory: z
    .string()
    .describe('A description of the user browsing history on hijabs.'),
});
export type GenerateHijabStyleRecommendationsInput = z.infer<
  typeof GenerateHijabStyleRecommendationsInputSchema
>;

const GenerateHijabStyleRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('A list of recommended hijab styles based on the input.'),
});
export type GenerateHijabStyleRecommendationsOutput = z.infer<
  typeof GenerateHijabStyleRecommendationsOutputSchema
>;

export async function generateHijabStyleRecommendations(
  input: GenerateHijabStyleRecommendationsInput
): Promise<GenerateHijabStyleRecommendationsOutput> {
  return generateHijabStyleRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHijabStyleRecommendationsPrompt',
  input: {
    schema: z.object({
      userPreferences: z
        .string()
        .describe('A description of the user preferences for hijab styles.'),
      currentSelections: z
        .string()
        .describe('A description of the user current hijab selections.'),
      browsingHistory: z
        .string()
        .describe('A description of the user browsing history on hijabs.'),
    }),
  },
  output: {
    schema: z.object({
      recommendations: z
        .string()
        .describe('A list of recommended hijab styles based on the input.'),
    }),
  },
  prompt: `You are a personal hijab stylist. Based on the user's preferences, current selections, and browsing history, recommend hijab styles that they might like.

User Preferences: {{{userPreferences}}}
Current Selections: {{{currentSelections}}}
Browsing History: {{{browsingHistory}}}

Recommendations:`,
});

const generateHijabStyleRecommendationsFlow = ai.defineFlow<
  typeof GenerateHijabStyleRecommendationsInputSchema,
  typeof GenerateHijabStyleRecommendationsOutputSchema
>(
  {
    name: 'generateHijabStyleRecommendationsFlow',
    inputSchema: GenerateHijabStyleRecommendationsInputSchema,
    outputSchema: GenerateHijabStyleRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
