let form = document.getElementById("form");
let input = document.getElementById("inputtext");
let add = document.getElementById("add");
let submit = document.getElementById("submit");
let addelemntsdiv = document.getElementById("addelemntsdiv");
let create = document.getElementById('create');
let showdata = document.getElementById("showdata");

let data = {
    id :[]
}


add.addEventListener("click",function(){
    let createDiv = document.createElement("div");
    let createfeild = document.createElement("input");
    let createcheckbox = document.createElement("input")
    createcheckbox.type = "checkbox";
    createfeild.type = "text";
    let createdelbtn = document.createElement("button");
    let createdelbtntext = document.createTextNode("delete");
    createdelbtn.type = "button";
    createdelbtn.appendChild(createdelbtntext);
    createdelbtn.addEventListener("click",function(){
        if(createcheckbox.checked==true)
        {
            console.log("checked");
            this.parentElement.style.display = "none";
        }
    })
    let createCreatebtn = document.createElement("button");
    createCreatebtn.type = "button";
    let createCreatebtntext = document.createTextNode("add");
    createCreatebtn.appendChild(createCreatebtntext);

    addelemntsdiv.appendChild(createDiv);
    createDiv.appendChild(createfeild);
    createDiv.appendChild(createcheckbox);
    createDiv.appendChild(createdelbtn);
    createDiv.appendChild(createCreatebtn);
    let createfeildValue = createfeild.value;
    createCreatebtn.addEventListener("click",function(){
        // console.log(this.parentNode.firstElementChild.value);
        if(data.id.includes(this.parentNode.firstElementChild.value))
        {
            alert("input already exits")
        }
        else{
        data.id.push(this.parentNode.firstElementChild.value)
        }
    })

})

create.addEventListener("click",function(){
    // console.log(input.value)
    if(data.id.includes(this.parentNode.firstElementChild.value))
        {
            alert("input already exits")
        }
        else{
        data.id.push(this.parentNode.firstElementChild.value)
        }
})
submit.addEventListener("click",function(){ 
    console.log(data);
    let datas = data.id.map((e)=>{
        return e;
    })
    showdata.innerHTML=datas;

})
