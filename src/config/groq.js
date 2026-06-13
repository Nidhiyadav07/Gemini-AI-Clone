import Groq from "groq-sdk";


const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, // Required for Vite frontend
});

async function run(prompt) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile", // or llama3-8b-8192
      temperature: 1,
      max_tokens: 8192,
    });

    const response =
      chatCompletion.choices[0]?.message?.content || "";

    console.log(response);
    return response;
  } catch (error) {
    console.error("Groq API Error:", error);
    return "Something went wrong.";
  }
}

export default run;