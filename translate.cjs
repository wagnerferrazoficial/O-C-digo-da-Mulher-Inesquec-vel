const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

// Ensure GEMINI_API_KEY is available
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("Error: GEMINI_API_KEY environment variable is not defined.");
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

const filesToTranslate = [
  "BlockEleven.tsx"
];

const promptTemplate = (fileName, fileContent) => `
You are a highly professional translation expert and React developer. Your task is to translate the React TypeScript component file "${fileName}" from its Spanish translation (which was incorrectly adapted for men with "Guías del Instinto Primitivo") back into its original Portuguese (Brazilian) version for "O Código da Mulher Inesquecível" by Mariana Vabo (which is adapted for women).

IMPORTANT DIRECTIVES & GLOSSARY:
1. TARGET AUDIENCE: Women. The product is "O Código da Mulher Inesquecível" by Mariana Vabo.
2. PRODUCT NAMES:
   - "Guía del Instinto Primitivo" or similar -> "O Código da Mulher Inesquecível" or "Método Código da Mulher Inesquecível"
   - "Deseo", "Atracción", "Obseción" -> "Desejo", "Atração", "Obsessão"
   - "Seducción" -> "Magnetismo", "Sedução"
   - "Hombre" or similar in context -> "Homem"
3. CURRENCY & COST:
   - If pricing is mentioned, use "R$ 47,00" (or similar Brazilian Real structure).
4. TESTIMONIALS & REVIEWS:
   - testimonails/screenshots/chats from Spanish (which highlight men getting girls) must be beautifully translated into Portuguese where women highlights getting men obsessed, fully committed, showering them with attention, or returning in shock.
   - Example chat text translation:
     - Spanish: "Carlos: Ella me ignoraba por días... apliqué el secreto y ahora me busca loco de amor..."
     - Portuguese: "Juliana: Ele me ignorava por dias... apliquei o Código e agora me busca louco de amor..."
   - Change male Spanish names to Brazilian female names (e.g. "Diego" -> "Amanda", "Carlos" -> "Juliana", "Juan" -> "Letícia", etc.) and adapt gender agreement (e.g., "loco" -> "louco", "loca" -> "louca").
5. ALL CODE STRUCTURE must be preserved EXACTLY:
   - Do NOT omit any imports, interfaces (props), icons, state, handlers, dynamic styles, tailwind classnames, motion animation tags (e.g. <motion.div ...>), images, ids or other JS/TS logic.
   - Do NOT add comments like "// ... resto del código" or truncate the output. Every single line of the component must be returned fully compiled and valid.
6. RESPONSE FORMAT:
   - Output ONLY the raw content of the translated file. Do NOT put markdown blocks like \`\`\`tsx or \`\`\`typescript. Just output the raw executable code so I can save it directly.

Here is the file content of ${fileName}:
---
${fileContent}
---
`;

async function translateFile(fileName) {
  const filePath = path.join(__dirname, 'src', 'components', fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  console.log(`Translating ${fileName}...`);
  const content = fs.readFileSync(filePath, 'utf-8');

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptTemplate(fileName, content),
    });

    let translatedCode = response.text || '';
    
    // Clean up code formatting in case the model ignored format instructions and included backticks
    if (translatedCode.trim().startsWith("```")) {
      translatedCode = translatedCode.trim().replace(/^```[a-zA-Z]*\n/, '').replace(/\n```$/, '');
    }

    if (translatedCode && translatedCode.length > 100) {
      fs.writeFileSync(filePath, translatedCode, 'utf-8');
      console.log(`Successfully translated and saved: ${fileName}`);
    } else {
      console.error(`Error: Translation response for ${fileName} was empty or too short.`);
    }
  } catch (err) {
    console.error(`Error translating ${fileName}:`, err);
  }
}

async function run() {
  for (const fileName of filesToTranslate) {
    await translateFile(fileName);
    // Add a small delay between requests to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  console.log("All translations completed successfully!");
}

run();
