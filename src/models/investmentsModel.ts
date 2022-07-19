import { ResultSetHeader } from 'mysql2';
import Connection from './connection';
import { ITradeAsset } from '../interfaces/investment';

export default {
  buyAsset: async (asset: ITradeAsset): Promise<void> => {
    const { customerId, ativoId, quantity } = asset;
    const query = 'INSERT INTO Customer_Investments (customer_id, asset_id, amount_asset_take) VALUES (?, ?, ?);';
    await Connection
      .execute<ResultSetHeader>(query, [customerId, ativoId, quantity]);
  },

  updateAmountAssetOnBrokerageFirm: async (newQuantity: number, ativoId: number): Promise<void> => {
    const query = 'UPDATE Brokerage_Firms SET amount_asset = ? WHERE asset_id = ?;';
    await Connection.execute(query, [newQuantity, ativoId]);
  },

  sellAsset: async (asset: ITradeAsset): Promise<void> => {
    const { customerId, ativoId, quantity } = asset;
    const query = 'INSERT INTO Customer_Investments (customer_id, asset_id, amount_asset_sell) VALUES (?, ?, ?);';
    await Connection
      .execute<ResultSetHeader>(query, [customerId, ativoId, quantity]);
  },
};
