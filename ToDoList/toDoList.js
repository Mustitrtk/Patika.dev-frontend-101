let inDOM = document.querySelector(".in");
let addDOM = document.querySelector("button.add");
let itemsDOM = document.querySelector(".items");
let delDOM = document.querySelector("button.del");

addDOM.addEventListener("click",addFunction);
delDOM.addEventListener("click",delFunction);

toastr.options = {
    "closeButton": true, //Kapama butonu durumu
    "debug": false,
    "progressBar": false,
    "preventDuplicates": true,
    "positionClass": "toast-top-right", //Ekran görüntü seçenekleri: top-left(Yukarı Sol), top(yukari orta), bottom-left(aşağı sol), bottom(aşağı orta), bottom-right(aşağı sağ)
    "showDuration": "200",
    "hideDuration": "2000",
    "timeOut": "2000", //Gözükme süresi.
    "extendedTimeOut": "2000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

function addFunction(){
    if(inDOM.value){
        let liDOM = document.createElement("li");
        liDOM.innerHTML=inDOM.value;
        itemsDOM.appendChild(liDOM);
    }
    else{
        toastr["warning"]("Bos deger girilemez!!");
    }
}

function delFunction(){
    itemsDOM.removeChild(document.querySelector(".items").childNodes[0]);
}