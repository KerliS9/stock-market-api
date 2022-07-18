import Connection from './connection';
import { IAsset, IAssetByAssetId } from '../interfaces/assets';

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

  getAssetByCustomerId: async (id: number) => {
    const query = `SELECT CI.customer_id AS customerId, CI.asset_id AS assetId, CI.amount_asset AS amountAsset, MA.price AS unitPrice,
      CI.amount_asset * MA.price AS totalInvestments
      FROM Customer_Investments AS CI
      INNER JOIN Market_Assets AS MA
      ON CI.asset_id = MA.id
      WHERE customer_id = ?;`;
    const [result] = await Connection.execute(query, [id]);
    return result;
  },
};
