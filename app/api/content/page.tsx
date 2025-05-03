import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const formData = req.body; // Assuming the form data is sent as JSON
      console.log('Received form data:', formData);

      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error processing form:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' }); // Or: res.setHeader('Allow', ['POST']); res.status(405).end('Method Not Allowed');
  }
}

