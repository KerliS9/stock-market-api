import { RowDataPacket } from 'mysql2';
import Connection from './connection';
import { IAsset, IAssetByAssetId, IAssetByCustomerId } from '../interfaces/assets';

export default {
  getAll: async (): Promise<IAsset[]> => {
    const query = `SELECT MA.id, MA.asset, MA.price, CO.sector, CO.company
      FROM Market_Assets AS MA
      INNER JOIN Companies AS CO
      ON MA.id = CO.asset_id;`;
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

  deleteAssetsOnCustody: async (customerId: number) => {
    const query = 'DELETE FROM Customer_Custody WHERE customer_id = ?;';
    await Connection.execute(query, [customerId]);
  },

  getAllInvestmentsByCustomerId: async (customerId: number) => {
    const query = `SELECT customer_id AS customerId, asset_id AS assetId,
      SUM(amount_asset_take) AS take,
      SUM(amount_asset_sell) AS sold
      FROM Customer_Investments
      WHERE customer_id = ?
      GROUP BY customer_id, asset_id;`;
    const [result] = await Connection.execute<RowDataPacket[]>(query, [customerId]);
    return result;
  },

  setAssetsToCustody: async (customerId: number, assetId: number, amount: number) => {
    const query = 'INSERT INTO Customer_Custody (customer_id, asset_id, amount_asset) VALUES (?, ?, ?);';
    await Connection.execute(query, [customerId, assetId, amount]);
  },

  getAssetByCustomerId: async (id: number): Promise<IAssetByCustomerId[]> => {
    const query = `SELECT CC.customer_id AS customerId, CC.asset_id AS assetId, MA.asset,
      CC.amount_asset AS amountAsset, CC.amount_asset * MA.price AS totalInvestments
      FROM Customer_Custody AS CC
      INNER JOIN Market_Assets AS MA
      ON CC.asset_id = MA.id
      WHERE CC.customer_id = ?;`;
    const [result] = await Connection.execute(query, [id]);
    return result as IAssetByCustomerId[];
  },
};
