function fnResize() {
  const clientWidth = document.documentElement.clientWidth || window.innerWidth;
  const deviceWidth = clientWidth < 1280 ? 1280 : clientWidth;
  document.documentElement.style.fontSize = deviceWidth / 19.2 + "px";
}
fnResize();
window.onresize = function () {
  fnResize();
};
