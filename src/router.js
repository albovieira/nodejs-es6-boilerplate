import express from 'express';

const router = express.Router();

/**
 * Endpoint de healthcheck.
 */
router.get('/', (req, res) => {
  res.send('OK');
});

export default router;
