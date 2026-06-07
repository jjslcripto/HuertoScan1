import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // Asegurar que solo se permitan peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { image, mimeType } = req.body;

  if (!image || !mimeType) {
    return res.status(400).json({ error: 'Faltan los datos de la imagen' });
  }

  // La API Key se lee de forma segura desde las variables de entorno del servidor
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const imagePart = {
      inlineData: {
        data: image,
        mimeType: mimeType
      }
    };

    const prompt = "Analiza detalladamente esta imagen escaneada desde la mini app. Identifica el objeto, planta o elemento central, proporciona una descripción estructurada y añade 3 recomendaciones o datos clave basados en lo que ves.";

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    
    return res.status(200).json({ resultado: response.text() });
  } catch (error) {
    console.error("Error en Gemini:", error);
    return res.status(500).json({ error: "Error interno al procesar el escaneo visual" });
  }
}
