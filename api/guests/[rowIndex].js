const SHEETBEST_URL = 'https://api.sheetbest.com/sheets/998c38ce-4afe-444f-86c6-11c5b14196fc';

export default async function handler(req, res) {
  if (req.method !== 'PATCH') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { rowIndex } = req.query;

  try {
    const response = await fetch(`${SHEETBEST_URL}/${rowIndex}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(502).json({ error: error.message });
  }
}
