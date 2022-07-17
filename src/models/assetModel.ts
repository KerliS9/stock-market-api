import Connection from './connection';

export default {
  getAll: async () => {
    const query = 'SELECT * FROM Market_Assets;';
    const result = await Connection.execute(query);
    return result;
  },
};
