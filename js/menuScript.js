function load() {
  fetch('assets/menu.json')
    .then(result => {
      return result.json();
    })
    .then(data => {
      renderMenu(data);
    });
}

function renderMenu(menuData) {
  console.table(menuData);
  let dishList = document.querySelector(".dish-list");

  for (let i = 0; i < menuData.length; i++) {
    dishList.innerHTML +=
      `<li>
      <div class="dishes">
        <img src="${menuData[i].image}" alt="">
        <div>
          <h4>${menuData[i].name}</h4>
          <span class="discription">${menuData[i].discription}</span>
          <br>
          <span class="price">${menuData[i].price}</span>
        </div>
      </div>
    </li>`;
  }



}


document.addEventListener("DOMContentLoaded", load);