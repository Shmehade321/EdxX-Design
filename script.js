let workCategoryContainer = document.querySelector(".work-category-container");
let categoryHeader = document.querySelector(".work-category-header");
let categoryDescription = document.querySelector(".work-category-description");

let description = [
  `Integer sodales mi eget dolor egestas venenatis. Nullam fermentum elementum enim et blandit. Fusce eu volutpat enim. Duis magna leo, fringilla sit amet felis et, rutrum molestie velit. Nulla dapibus pulvinar justo ac pulvinar. Duis nec nunc sit amet est porttitor commodo. Praesent eget auctor tellus, ac maximus nulla. Aliquam efficitur finibus ornare. In sodales iaculis elit, aliquet vehicula felis luctus et. Nulla nec feugiat lectus, non consequat arcu.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
    tincidunt arcu ac massa fermentum congue. Vivamus in velit ac
    purus varius rhoncus egestas vel dui. Pellentesque cursus, ex quis
    tristique ultricies, ex lacus aliquam justo, id finibus nunc lorem
    non ipsum. Proin eu fermentum sem. Mauris ultrices pulvinar elit,
    nec fermentum mi convallis ac. Sed interdum blandit tortor vel
    eleifend. Fusce vestibulum nisl enim, nec pulvinar tortor
    tristique sed. Morbi aliquam elementum risus, a ultricies sem
    efficitur at. Duis semper augue sed tempor pharetra. Donec
    sagittis tellus et odio bibendum placerat. Etiam pretium nisl non
    commodo tincidunt.`,
  `Ut ultricies tempus ante ut accumsan. Proin arcu odio, posuere sed odio sed, vulputate tristique diam. Cras eget porttitor diam, nec hendrerit sapien. Vestibulum feugiat, nisl non consectetur ultrices, ipsum enim aliquam ante, nec pellentesque est turpis a velit. Nunc blandit magna nec arcu pharetra lobortis. Mauris ultricies turpis ante, id maximus nunc laoreet id. Pellentesque at metus turpis. Nullam convallis iaculis mauris at pretium. Nulla justo lorem, aliquet in diam cursus, finibus cursus orci. Praesent eu mauris consequat, vulputate dui at, ullamcorper libero. Aenean vel augue ex.`,
  `Pellentesque lectus risus, fermentum facilisis urna ut, posuere vehicula purus. Vivamus in magna dui. Integer pulvinar sem felis. Aenean auctor sapien at ultrices facilisis. In interdum lacinia tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum lobortis purus a leo mattis, sit amet blandit nunc sodales. Suspendisse potenti. Quisque auctor eu libero ac cursus.`,
];

const changeContent = (element) => {
  let categoryList = workCategoryContainer.children;
  let randomDesc = Math.floor(Math.random() * 4);
  for (let i = 0; i < categoryList.length; i++) {
    categoryList[i].classList.remove("work-category-container__link-active");
  }
  element.classList.add("work-category-container__link-active");
  categoryHeader.innerHTML = element.innerHTML;
  categoryDescription.innerHTML = description[randomDesc];
};

window.onload = () => {
  categoryHeader.innerHTML = "Framework Building";
  categoryDescription.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
    tincidunt arcu ac massa fermentum congue. Vivamus in velit ac
    purus varius rhoncus egestas vel dui. Pellentesque cursus, ex quis
    tristique ultricies, ex lacus aliquam justo, id finibus nunc lorem
    non ipsum. Proin eu fermentum sem. Mauris ultrices pulvinar elit,
    nec fermentum mi convallis ac. Sed interdum blandit tortor vel
    eleifend. Fusce vestibulum nisl enim, nec pulvinar tortor
    tristique sed. Morbi aliquam elementum risus, a ultricies sem
    efficitur at. Duis semper augue sed tempor pharetra. Donec
    sagittis tellus et odio bibendum placerat. Etiam pretium nisl non
    commodo tincidunt.`;
};
