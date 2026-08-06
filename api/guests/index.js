const SHEETBEST_URL = 'https://api.sheetbest.com/sheets/fbcae772-75e9-4fd1-a706-43c097de8ab7';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch(`${SHEETBEST_URL}?_raw=1`);
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(502).json({ error: error.message });
  }
}
