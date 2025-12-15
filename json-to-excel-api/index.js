const express = require('express');
const ExcelJS = require('exceljs');
const multer = require('multer');
const path = require('path');

const app = express();

// =======================
// Middleware
// =======================
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

// Multer (for file upload)
const upload = multer({
  storage: multer.memoryStorage()
});

// =======================
// COMMON EXCEL GENERATOR
// =======================
async function generateExcel(jsonData, res) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Data');

  // Set columns dynamically from JSON keys
  sheet.columns = Object.keys(jsonData[0]).map(key => ({
    header: key,
    key: key,
    width: 20
  }));

  // Add rows
  sheet.addRows(jsonData);

  // Response headers
  res.setHeader(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  );
  res.setHeader(
    'Content-Disposition',
    'attachment; filename=export.xlsx'
  );

  // Send Excel
  await workbook.xlsx.write(res);
  res.end();
}

// =======================
// ROUTES
// =======================

// Root → Frontend UI
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 1️⃣ Paste JSON → Excel
app.post('/convert', async (req, res) => {
  const jsonData = req.body;

  if (!Array.isArray(jsonData) || jsonData.length === 0) {
    return res.status(400).send('JSON must be a non-empty array');
  }

  try {
    await generateExcel(jsonData, res);
  } catch (err) {
    console.error('Excel generation error:', err);
    res.status(500).send('Excel generation failed');
  }
});

// 2️⃣ Upload JSON file → Excel
app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  let jsonData;
  try {
    jsonData = JSON.parse(req.file.buffer.toString());
  } catch (err) {
    return res.status(400).send('Invalid JSON file');
  }

  if (!Array.isArray(jsonData) || jsonData.length === 0) {
    return res.status(400).send('JSON must be a non-empty array');
  }

  try {
    await generateExcel(jsonData, res);
  } catch (err) {
    console.error('Excel generation error:', err);
    res.status(500).send('Excel generation failed');
  }
});

// =======================
// START SERVER
// =======================
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});