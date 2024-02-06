import getDataAPI from "../utils/callData.js";

const showItem = () => {
  getDataAPI()
    .then(function (res) {
      let data = res.data;
      let categories = data.navPills;
      let itemArr = data.tabPanes;
      categories.forEach((listItem) => {
        let type = listItem.type;
        let itemListContent = "";
        itemArr.forEach((item) => {
          if (listItem.type == item.type) {
            itemListContent += `
                <div class="card col-3">
                    <div style="padding:10px; background-color:white;border-radius:10px">
                        <img class="card-img-top" src="${item.imgSrc_jpg}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${item.desc}</p>
                            <a onclick="tryIt('${item.id}')" class="btn btn-primary">Try it!</a>
                        </div>
                    </div>
                </div>
            `;
          }
        });
        document.getElementById(listItem.type + "-inner").innerHTML =
          itemListContent;
      });
    })
    .catch(function (err) {
      console.log(err);
    });
};
showItem();
// cái onclick bên này nè
