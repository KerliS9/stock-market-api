import mysql, { ResultSetHeader } from 'mysql2';

const Connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

export default {
  buyAsset: async (asset: { customerId: any; assetId: any; quantity: any; }) => {
    const { customerId, assetId, quantity } = asset;
    const query = 'INSERT INTO Customer_Investments (customer_id, asset_id, amount_asset_take) VALUES (?, ?, ?);';
    const result = await Connection
    .execute<ResultSetHeader>(query, [customerId, assetId, quantity]);
    return result;
  },
} 
