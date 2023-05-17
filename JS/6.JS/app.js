// let btnR = document.querySelector("button");
// let img = document.querySelector("img");

// const baseUrl = "https://aws.random.cat";

// function getRandomCat() {
//  fetch(baseUrl + "/meow").then(response => {
//     return response.json();
//   //console.log(response.json(), "otvet");
//  })
//  .then(catData =>{
//     // console.log(catData, "cat");
//     img.src = catData.file;
//  });
// }

// getRandomCat();

let url  = "https://randomuser.me/api/";

function getRandomuser(){
    fetch(url)
    .then(res => res.json())
    .then(userData => {
        console.log(userData.results[0], "user info");
        renderUser(userData.results[0]);
});
}
getRandomuser();

/*results[0].email
name {3}
location{city,country,street}
phone
age 

picture {large}*/
// let pRegistered = document.createElement("p")
// let p = document.createElement("p")
// let pName = document.createElement("p");
// let pLocation = document.createElement("p");
// let img = document.createElement("img");
// let pPhone = document.createElement("p")
// let body = document.querySelector("body");


let pRegistered = document.createElement("p")
let p  = document.createElement("p")
let pName = document.createElement("p")
let pLocation = document.createElement("p")
let img = document.createElement("img")
let pPhone = document.createElement("p")
let body = document.querySelector("body")



function renderUser(user){
    const { email, phone, picture, location, registered  } = user;
    const { title, first, last } = user.name;
    p.innerText = email;
    pName.innerText = `${title} ${first} ${last}`;
    pPhone.innerText = `${phone}`
    pLocation.innerText = `${location.city} ${location.country} ${location.street.name} ${location.street.number}`;
    pRegistered.innerText = `${registered.age} `;

    img.src = picture.large;
    body.append(p);
    body.append(pName);
    body.append(pRegistered);
    body.append(pPhone);
    body.append(pLocation)
    body.append(img);
    img.onclick = () => {
        getRandomuser();
    };
    img.style.cursor = "pointer";
}

//жашы кочосу мамлекет
 