import Connection from './connection';

export default {
  getAll: async () => {
    const query = 'SELECT * FROM Market_Assets;';
    const [result] = await Connection.execute(query);
    return result;
  },

  getAssetById: async (id: number) => {
    const query = `SELECT MA.id AS assetId, MA.asset, MA.price, BK.broker, BK.amount_asset AS amountAsset
      FROM Market_Assets AS MA
      INNER JOIN Brokerage_Firms AS BK
      ON MA.id = BK.asset_id
      WHERE asset_id = ?;`;
    const [result] = await Connection.execute(query, [id]);
    return result;
  },
};
