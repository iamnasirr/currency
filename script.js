const URL= "https://cat-fact.herokuapp.com/facts"
const factPara = document.querySelector("#facts");
const btn= document.querySelector("#btn");

const url ="https://dummyjson.com/products"



const getFact = async () => {
    console.log("before.....")
    let response = await fetch(url);
     let data =await response.json();
    console.log(data)

    console.log("after")
};

getFact()





// function getFact(){
//     fetch(URL).then ((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data)
//     });
// }
// btn.addEventListener("click",abc);