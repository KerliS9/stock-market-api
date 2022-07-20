import Connection from './connection';
import { IAsset, IAssetByAssetId } from '../interfaces/assets';

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

  hello: async () => 'Hello World!',
};
