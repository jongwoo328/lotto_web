const axios = require("axios");

const baseUrl = "https://lotto.jongwoo.me/api/v1/lottos/last";

exports.getLastLotto = async () => {
  return axios.get(baseUrl);
};
