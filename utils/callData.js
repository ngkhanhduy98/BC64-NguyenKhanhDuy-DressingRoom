const getDataAPI = () => {
  return axios({
    url: "../data/data.json",
    method: "GET",
  });
};
export default getDataAPI;
