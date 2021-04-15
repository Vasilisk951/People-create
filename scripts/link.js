const link = window.location.href;
const linkAll = document.querySelectorAll(".header-link");

for (let i = 0; i < linkAll.length; i++) {
  if (linkAll[i].href === link) {
    linkAll[i].style.color = "black";
  }
}
