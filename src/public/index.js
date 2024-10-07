const leftP = document.getElementsByClassName("aa");
const oc = document.getElementsByClassName("tgBtn");
const foo = document.getElementsByClassName("abaa");
const create = document.getElementsByClassName("newFile");
oc[0].onclick = () => {
  leftP[0].classList.toggle("hide");
  foo[0].classList.toggle("hide");
};
oc[1].onclick = () => {
  leftP[0].classList.toggle("hide");
  foo[0].classList.toggle("hide");
};
create[0].onclick = () => {
    prompt("enter file name here");
}


create[1].onclick = () => {
    prompt("enter file name here");
}
