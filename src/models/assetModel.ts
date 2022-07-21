import Connection from './connection';
import { IAsset, IAssetById } from '../interfaces/assets';

export default {
  getAllAssets: async (): Promise<IAsset[]> => {
    const query = `SELECT MA.id, MA.asset, MA.price, CO.sector, CO.company
      FROM Market_Assets AS MA
      INNER JOIN Companies AS CO
      ON MA.id = CO.asset_id;`;
    const [result] = await Connection.query(query);
    return result as IAsset[];
  },

  getAssetById: async (id: number): Promise<IAssetById[]> => {
    const query = `SELECT MA.id AS assetId, MA.asset, MA.price, BK.broker, BK.amount_asset AS amountAsset
      FROM Market_Assets AS MA
      INNER JOIN Brokerage_Firms AS BK
      ON MA.id = BK.asset_id
      WHERE asset_id = ?;`;
    const [result] = await Connection.query(query, [id]);
    return result as IAssetById[];
  },
};
