// let x = document.createElement("h1");
// x.innerText = "Dynamic creation of html element from JS";
// // x.id ="demo"
// x.setAttribute("id" , "demo");
// console.log(x);

// document.body.appendChild(x);

// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// console.log(image);

// document.body.appendChild(image);


// let form = document.querySelector("form");
// let name = document.getElementById("uName");
// let mail = document.getElementById("uEmail");
// let psw = document.getElementById("uPsw");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     // console.log(event);
//     // console.log("form submitted");
//     // console.log(name.value);

//     let username = name.value;
//     let email = mail.value;
//     let password = psw.value;
//     let userDetails={
//         username:username,
//         email:email,
//         password:password
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData" , JSON.stringify(userDetails))
// })

// // localStorage.clear()

// dyanamic elements

// let mainEle = document.createElement("div");
// mainEle.setAttribute("class","mainBlock");
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class","topBlock");
// // console.log(topEle);

// let image = document.createElement("img");
// image.src = "https://static.toiimg.com/photo/msid-111753282,width-96,height-65.cms";
// image.width="300"
// image.height="300"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class","bottomBlock");
// // console.log(bottomEle);

// let h1 = document.createElement("h1");
// h1.innerText="Heading";

// let btn = document.createElement("button");
// btn.innerText="View More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);


let form=document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let show = document.getElementById("show");


let gen = document.getElementsByName("gender");

// hiding and showing password content
check.addEventListener("click",event=>{
    console.log(event);
    console.log(event.target.checked);
    if(event.target.checked == true){
        password.setAttribute("type","text");
        Show.innerText = "hide password";
    }else{
        password.setAttribute("type","password");
        show.innerText = "show password";
    }
})


// console.log(gen);

form.addEventListener("submit",event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    // console.log(un , up);
    let gender = "";
   
   for(let i=0;i<=gen.length-1;i++){
    if(gen[i].checked == true){
        // console.log("true" , gen[i].value);
        gender += gen[i].value;
    }
   }
//    console.log(ele);
let userDetails={
    un,up,gender
};
console.log(userDetails);
})


