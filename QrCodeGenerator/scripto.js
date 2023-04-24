const form = document.getElementById('generated-form');
const qr = document.getElementById('qrcode');

const btn = document.getElementById('btn');


//Btn event
btn.addEventListener("click",(e)=>{

    clear();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url === '') {
        alert('Please enter a URL');
    }else{
        //Show spinner for 1 sec
        showSpinner();

        setTimeout(()=>{
            hideSpinner();

            generateQRCode(url,size);

            // Generate the save button after the qr code image src is ready
            setTimeout(() => {
                // Get image url
                const imgUrl = qr.querySelector('img').src;
                // Create save button
                createDownloadBtn(imgUrl); 
              }, 50);
        },1000);
    }
});

//QRCode generator: https://davidshimjs.github.io/qrcodejs/
const generateQRCode = (url,size)=>{
    const qrcode = new QRCode('qrcode',{
        text: url,
        width:size,
        height: size
    });
}


const showSpinner=() =>{
    const spinner = document.getElementById('spinner');
    spinner.style.display='block';
}

const hideSpinner=()=>{
    const spinner = document.getElementById('spinner');
    spinner.style.display='none';
}

const clear=()=>{
    qr.innerHTML='';
    const btn = document.getElementById('download-button');
    if(btn){
        btn.remove();
    }
}

//Create Download Btn for qrcode
const createDownloadBtn=(imgUrl)=>{
    const link = document.createElement('a');
    link.id='download-button';
    link.classList='btn btn-secondary btn-lg mt-4 ml-auto mr-auto';
    link.href = imgUrl;
    link.download = 'qrcode';
    link.innerHTML='Download img';
    document.getElementById('generated').appendChild(link);
}