import { RowDataPacket } from 'mysql2';
import Connection from './connection';
import { IAsset, IAssetByAssetId, IAssetByCustomerId, IAssetToCustody } from '../interfaces/assets';

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
    const query = `SELECT CI.customer_id AS customerId, CI.asset_id AS assetId, CO.sector,
      SUM(CI.amount_asset_take) AS take,
      SUM(CI.amount_asset_sell) AS sold
      FROM Customer_Investments AS CI
      INNER JOIN Companies AS CO
      ON CI.asset_id = CO.asset_id
      WHERE CI.customer_id = ?
      GROUP BY CI.customer_id, CI.asset_id, CO.sector;`;
    const [result] = await Connection.execute<RowDataPacket[]>(query, [customerId]);
    return result;
  },

  setAssetsToCustody: async (custody: IAssetToCustody) => {
    const { customerId, assetId, amount, sector } = custody;
    const query = 'INSERT INTO Customer_Custody (customer_id, asset_id, amount_asset, sector) VALUES (?, ?, ?, ?);';
    await Connection.execute(query, [customerId, assetId, amount, sector]);
  },

  getAssetByCustomerId: async (id: number): Promise<IAssetByCustomerId[]> => {
    const query = `SELECT CC.customer_id AS customerId, CC.asset_id AS assetId, MA.asset,
      CC.amount_asset AS amountAsset, MA.Price AS unitValue, CC.amount_asset * MA.price AS totalInvestments, CC.sector
      FROM Customer_Custody AS CC
      INNER JOIN Market_Assets AS MA
      ON CC.asset_id = MA.id
      WHERE CC.customer_id = ?;`;
    const [result] = await Connection.execute(query, [id]);
    return result as IAssetByCustomerId[];
  },
};
