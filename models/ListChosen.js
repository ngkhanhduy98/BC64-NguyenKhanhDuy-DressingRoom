import getDataAPI from "../utils/callData.js";

const showTab = () => {
  getDataAPI()
    .then(function (res) {
      let data = res.data;
      let categories = data.navPills;
      let categoriesContent = "";
      let itemListContainer = "";
      categories.forEach((item) => {
        categoriesContent += `
            <li class="nav-item">
                <a class="nav-link" id="${item.type}-tab" data-toggle="tab" href="#${item.type}" role="tab" aria-controls="${item.type}" aria-selected="true">${item.showName}</a>
            </li>
          `;
        itemListContainer += `
            <div class="tab-pane fade show " id="${item.type}" role="tabpanel" aria-labelledby="${item.type}-tab">
                <div class="row" id="${item.type}-inner">
                    Day la tab ${item.showName}
                </div>
            </div>
        `;
      });
      document.getElementById("myTab").innerHTML = categoriesContent;
      document.getElementById("myTabContent").innerHTML = itemListContainer;
    })
    .catch(function (err) {
      console.log(err);
    });
};
showTab();
