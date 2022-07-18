import { ResultSetHeader } from 'mysql2';
import Connection from './connection';
import { ITakeAsset } from '../interfaces/investment';

export default {
  takeStock: async (asset: ITakeAsset): Promise<ResultSetHeader> => {
    const { customerId, ativoId, quantity } = asset;
    const query = 'INSERT INTO Customer_Investments (customer_id, asset_id, amount_asset) VALUES (?, ?, ?);';
    const [result] = await Connection
      .execute<ResultSetHeader>(query, [customerId, ativoId, quantity]);
    return result;
  },
};
