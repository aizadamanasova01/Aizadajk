let url = "https://6374a3a148dfab73a4e45c4a.mockapi.io/userData"
// ! CRUD = Create ead Update Delete

let app = document.querySelector("#app");
let nameInp = document.querySelector("#nameInp");
let urlInp = document.querySelector("#urlInp");
let btn = document.querySelector("#btn");

btn.onclick = () => {
    const newUser = {
        name: nameInp.value,
        avatar : urlInp.value,
    };
    creatUser(newUser)
};

async function getUsers(){
    // !get === Read
    const response = await fetch(url);
    const userMaSS = await fetch(url);
    console.log(userMass);
    console.log(usaerMass[0]);
    renderUser(userMaSS); //86
}
 getUsers();

 function renderUser(users){
    app.innerHTML = "";
    for (const user of users) {
        app.innerHTML += `
        <h3 oncklick= "deleteUser(${user.id})">${user.name}</h3> 
        <img onclick="update(${user.id})" width = "250px"  src=${user.avatar} alt=""/>`;
    }
 }



async function deleteUser(userId){
    // ! delete === DELETE 
    await fetch(url + `/${userId}`,{
        method: "DELETE",
    });
    getUsers();
}

async function updateUser(userId){
    // ! Update === PUT || PATCH
    let urlAva = prompt("avatar url");
    let name = prompt("name")
    await fetch(url +`/${userId}`,{
        method: "PUT",
        body: JSON.stringify({
            avatar: "not url",
            name: "TEST NAME",
        }),
        headers: {
            "Content-type": "application/json",
        },
    });
    getUsers();
}