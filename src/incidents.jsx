export const mockIncidents = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description:
      "Algorithm consistently favored certain demographics in content recommendations, leading to reinforcement of existing biases and reduced content diversity for affected user groups. Initial investigation suggests training data imbalance as the primary cause.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description:
      "Large Language Model provided incorrect safety procedure information when queried about emergency protocols in a medical setting. This led to potentially dangerous misinformation that was fortunately caught during system review before deployment.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description:
      "Chatbot inadvertently exposed non-sensitive user metadata in conversation history that was accessible to other users of the platform. The leak was limited to usernames and general usage statistics, with no personally identifiable information compromised.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  }
   
];
