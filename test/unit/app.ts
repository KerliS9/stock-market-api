import express from 'express'

export default function (database: any) {
  const app = express();

  app.use(express.json());
  app.post('/investments/buy', async (req, res) => {
    const result = await database.buyAsset(req.body)
    if (result.message) {
      return res.status(409).sendStatus(result);
    }
    res.status(201).json(result)
  })
  return app;
}
