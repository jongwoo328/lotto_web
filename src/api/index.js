const axios = require("axios");

const baseURL = "https://lotto.jongwoo.me/api/v1";

exports.getLastLotto = async () => {
  return axios.get(`${baseURL}/lottos/last`);
};

exports.getNewNumber = async (params) => {
  return axios.get(`${baseURL}/lottos/new`, { params });
};
