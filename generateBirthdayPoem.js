
import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, age, message } = req.body;
    const prompt = `Generate a birthday poem for someone named \${name}, who is \${age} years old. Include a special message: \${message}.`;
    
    try {
      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: 'text-davinci-002',
        prompt: prompt,
        max_tokens: 150
      });
      res.status(200).json({ poem: response.data.choices[0].text });
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate poem' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
