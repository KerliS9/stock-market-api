import Connection from './connection';

export default {
  getAll: async () => {
    const query = 'SELECT * FROM Customer;';
    const [result] = await Connection.execute(query);
    return result;
  },
};
