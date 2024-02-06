import getDataAPI from "../utils/callData.js";

const tryIt = (id) => {
  console.log(id);
  let targesID = id;
  getDataAPI()
    .then(function (res) {
      let data = res.data;
      let itemList = data.tabPanes;
      itemList.forEach((item) => {
        if (item.id == targesID) {
          let content = `<img src="${item.imgSrc_png}" alt="" />`;
          document.getElementById(`show-${item.type}`).innerHTML = content;
        }
      });
    })
    .catch(function (err) {
      console.log(err);
    });
};

window.tryIt = tryIt;
