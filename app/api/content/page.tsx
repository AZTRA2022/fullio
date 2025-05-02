// pages/api/form-submit.js
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // 1. Process the data from the request body
      const formData = req.body; // Assuming the form data is sent as JSON
      console.log('Received form data:', formData);

      // 2.  Do something with the data (e.g., save to a database)
      //  Example:
      //  await saveToDatabase(formData);

      // 3. Send a success response
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error processing form:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // Handle other methods (e.g., GET, PUT, DELETE) if needed
    res.status(405).json({ message: 'Method Not Allowed' }); // Or: res.setHeader('Allow', ['POST']); res.status(405).end('Method Not Allowed');
  }
}