const express = require('express');
const app = express();
const port = 8000;


const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) return { error: 'Cannot divide by zero' };
  return a / b;
};


app.get('/api/sum', (req, res) => {
  const { term_one, term_two } = req.query;
  const result = sum(Number(term_one), Number(term_two));
  res.json({ result });
});

app.get('/api/sub', (req, res) => {
  const { term_one, term_two } = req.query;
  const result = subtract(Number(term_one), Number(term_two));
  res.json({ result });
});

app.get('/api/mul', (req, res) => {
  const { term_one, term_two } = req.query;
  const result = multiply(Number(term_one), Number(term_two));
  res.json({ result });
});

app.get('/api/div', (req, res) => {
  const { term_one, term_two } = req.query;
  const result = divide(Number(term_one), Number(term_two));
  res.json({ result });
});


app.get('/health', (req, res) => {
  res.status(200).send('Application is healthy');
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
