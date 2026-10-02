const SHEETBEST_URL = 'https://api.sheetbest.com/sheets/391a2e81-2b99-4782-a0e9-10f58eff7eb2';

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
