import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Get the directory name using ESM-friendly approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set up static file serving for the 'public' directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.get('/cancel', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'cancel.html'));
});

app.get('/success', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'success.html'));
});

// Other routes and middleware can be added as needed

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
