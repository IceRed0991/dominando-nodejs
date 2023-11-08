module.exports = {
  dialect: "postgres",
  host: "192.168.5.57",
  username: "postgres",
  password: "secret",
  database: "teste-dominando-nodejs",
  define: {
    timestamp: true, // cria duas colunas: createdAt updateAt
    underscored: true, // nomeclatura _ (não camelcase) customersGroup => customer_group
    underscoredAll: true, // chaves, colunas
  },
};
