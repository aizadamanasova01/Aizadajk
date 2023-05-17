// getDeveLopers()

// console.log(
//     getDeveLopers()
//     .then((mass)=>{
//         console.log(mass);
//     })
//     .catch((err)=>{
//         console.error(err);
//     })
//     .finally(()=>{
//         console.log('Buttu');
//     })
// );


let dev=[
    {name: 'Yunus', age: 20, level: 'Middle', salary: 40000},
    {name: 'Beknasar', age: 18, level: 'junior', salary: 30000},
    {name: 'Daniel', age: 18, level: 'junior', salary: 30000},
    {name: 'Nurbolot', age: 17, level: 'junior', salary: 28000},
]



//DOM

const spinner=document.querySelector('#spinner')
const btn=document.querySelector('#btn')
const ol=document.querySelector('#ol')


function getDeveLopers(isData){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(isData){
                resolve(devs)
            } else{
                reject('Kata')
            }
        },2000)
    })
}


function renderDevs(newdevs){
   console.log(devs, 'devs'); 
   ol.innerHTML=''

   for(const dev of devs){
    ol.innerHTML+=`
    <li>${dev.new}
    <span><b> ${dev.level}</b> </span>
     </li>`
   }

}
btn.onclick=()=>{
    spinner.style.display='block'
    getDeveLopers(true)
    .then((mass)=>{
        console.log(mass);
        renderDevs(mass)
    })
    .catch((err)=> {
        console.error('Kata ketti');
    })
    .finally(()=>{
        console.log('Finally ishtedi');
        spinner.style.display='none'
    })
}
// console.log(devs.map((dev)=>{
//     if(dev.age<=185){
//         console.log(dev.salary+5000);
//         console.log(dev);
//     }
// }));