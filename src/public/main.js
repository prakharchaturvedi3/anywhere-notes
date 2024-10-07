
const ele = document.getElementsByClassName('lin')[0];
ele.onclick = () => {
    if (ele.innerHTML == "Login") {
        ele.innerHTML = "Sing Up";
    } else {
        ele.innerHTML = "Login"
    }
    for (elem of document.getElementsByClassName('login')) {
        elem.classList.toggle('hide');
    }
    for (elem of document.getElementsByClassName('signup')) {
        elem.classList.toggle('hide');
    }
}

setInterval(()=> {
    
})
