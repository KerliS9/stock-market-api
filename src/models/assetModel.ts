import Connection from './connection';
import { IAsset, IAssetByAssetId, IAssetByCustomerId } from '../interfaces/assets';

export default {
  getAll: async (): Promise<IAsset[]> => {
    const query = 'SELECT * FROM Market_Assets;';
    const [result] = await Connection.execute(query);
    return result as IAsset[];
  },

  getAssetById: async (id: number): Promise<IAssetByAssetId[]> => {
    const query = `SELECT MA.id AS assetId, MA.asset, MA.price, BK.broker, BK.amount_asset AS amountAsset
      FROM Market_Assets AS MA
      INNER JOIN Brokerage_Firms AS BK
      ON MA.id = BK.asset_id
      WHERE asset_id = ?;`;
    const [result] = await Connection.execute(query, [id]);
    return result as IAssetByAssetId[];
  },

  getAllInvestmentsByCustomerId: async (customerId: number) => {
    console.log('customerId', customerId);
    const query = `SELECT customer_id, asset_id,
      SUM(amount_asset_take) AS take,
      SUM(amount_asset_sell) AS sold
      FROM Customer_Investments
      WHERE customer_id = ?
      GROUP BY customer_id, asset_id;`;
    const [result] = await Connection.execute(query, [customerId]);
    return result;
  },

  getAssetByCustomerId: async (id: number): Promise<IAssetByCustomerId[]> => {
    const query = `SELECT CI.customer_id AS customerId, CI.asset_id AS assetId, CI.amount_asset_take AS amountAsset, MA.price AS unitPrice,
      CI.amount_asset_take * MA.price AS totalInvestments
      FROM Customer_Investments AS CI
      INNER JOIN Market_Assets AS MA
      ON CI.asset_id = MA.id
      WHERE customer_id = ?;`;
    const [result] = await Connection.execute(query, [id]);
    return result as IAssetByCustomerId[];
  },
};
