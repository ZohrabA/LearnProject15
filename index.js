// setaAttribute("1", "2")  // 1 hansi atribut, 2 teyin etdiyimiz adi
// getAttribute("1")  // yuxarida teyin olunmus 1 atributunda 2 deyerini goturur
// .nextElementSibling  // ozunden sonraki elementi goturur
// .nextElementSibling.nextElementSibling  // ozunden sonra 2 ci  elementi goturur
// .previousElementSibling // ozunden evvelki elementi goturur
// .parentElement // parentini goturur 
// .children // child ini goturur . HTMLCollection qaytarir
// .closest("#res")  // en yaxin id si res  olan element. icine tag adlarida yazila biler. mes: div;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// let lists =[...document.querySelectorAll("#demo li")].map((a)=>{
    
    // a.addEventListener("click", ()=>{
        //     a.nextElementSibling.style.color="red"
        // } )    
        // })
        
        
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        
        // let lists =[...document.querySelectorAll("#demo li")];
        // lists.map((a, key/*key her defe yeni sira nomresi verir. 0 dan baslayir bir bir artir*/)=>{
        //     a.addEventListener("click", ()=>{

        //         // if(a.previousElementSibling){
        //         //     a.previousElementSibling.style.color="red"
        //         // }else{
        //         //     lists[lists.length -1].style.color="red" 
        //         // } 
        //         //a.remove() 
        //         //a.nextElementSibling.remove() 
        //         //lists[key].remove() 
        //         lists[key + 1 ].remove() // 1 ci indexdeki elemeti silir // bir defe // yeni dinamikdir
        //         console.log(key)  // click etdikde a elementini silir  // basqa yerde yadda saxlaninilmasa geri qaytarmaq mumkun deyil
        //     })              // cunki temiz silinir()
        //     })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const sayHello = (a)=>{
// a.style.color="red"
// }


// const sayHelloTwo = (e)=>{
// e.target.style.color="blue"
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// const btn = document.getElementById("btn");
// const inpone = document.getElementById("inpOne");
// const inptwo = document.getElementById("inpTwo");
// const inpthree = document.getElementById("inpThree");
// const tbody = document.getElementById("tBody");
// let inpnum ;
// let num = 0


// inpthree.addEventListener("keydown", (event)=>{
    //     console.log(event)
    //     let regex = new RegExp("[0-9]");
    //         if (!regex.test(event.key)) {
        //             //inpthree.setAttribute("disabled", "disabled")
        //             //inpthree.setAttribute("pattern", "[0-9]")
        
        //             if(event.keyCode == 8 ){
            //                 inpnum = ""
            //             }else{
                //                 inpnum = Number(event.key)
                //             }
                // console.log(inpnum)
                // }
                // })
                
                // btn.addEventListener("click", ()=>{
                    //     if(inpone.value !== "" && inptwo.value !== ""  && inpthree.value !== "" ){
                        
                        //         num++
                        //         tbody.innerHTML += `
                        //         <tr>
//         <td>${num}</td>
//         <td>${inpone.value}</td>
//         <td>${inptwo.value}</td>
//         <td>${Number(inpthree.value)}</td>
//         <td><button>Sil</button></td>
//         </tr>
//         `
//         inpone.value = ""
//         inptwo.value = ""
//         inpthree.value = ""
//     }
//     })


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let btn = document.getElementById("btn");
let tbody = document.getElementById("tBody");
let tabl = document.getElementById("tabl");
let allow = true;












btn.addEventListener("click", ()=>{
    if(allow){
   
    let tr =document.createElement("tr");
    let tdnum =document.createElement("td");
    let tdad =document.createElement("td");
    let tdsoyad =document.createElement("td");
    let tdyas =document.createElement("td");
    let tdyyat =document.createElement("td");
    
    
    
    
    let inp =document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("placeholder", "Ad yazın...");
    tdad.append(inp)
    
    
    let inpo =document.createElement("input");
    inpo.setAttribute("type", "text");
    inpo.setAttribute("placeholder", "Soyad yazın...");
    tdsoyad.append(inpo)
    
    
    
    let inpt =document.createElement("input");
    inpt.setAttribute("type", "text");
    inpt.setAttribute("placeholder", "Yaş yazın...")
    tdyas.append(inpt)
    
    
    let btno =document.createElement("button");
    let btnt =document.createElement("button");
    btnt.innerText = "Yadda saxla"
    btnt.setAttribute("id", "btnt")
    btno.innerText="Imtina et"
    btnt.setAttribute("id", "btno")
    tdyyat.append(btno, btnt)
    tdyyat.classList.add("remad")
    btno.classList.add("mostt")
    btnt.classList.add("most")
    tr.append(tdnum, tdad,tdsoyad, tdyas, tdyyat)
    tbody.append(tr)
    allow = false
    
    btnt.addEventListener("click", saverow);
    
    btno.addEventListener("click", deleterow) /// burada deleterow da () qoyulsa yalniz bir defe calisacaq
    
}else{
    alert("Öncəkini tamala")
}
makeorder()    
})

const deleterow =(e)=>{
  //  e.target.parentElement.parentElement.remove()
  let check = confirm("Silinsin?")
  if(check){

      e.target.closest("tr").remove()
      allow = true;
    }
    makeorder()
}

const saverow= (e)=>{
allow= true;
let lists = [...tabl.querySelectorAll("input")]
lists.map(inp=>{
inp.parentElement.innerText = inp.value})
e.target.innerText ="Düzeliş et";
e.target.previousElementSibling.innerText="Sil"
e.target.classList.add("col");
e.target.removeEventListener("click", saverow);
e.target.addEventListener("click", editdata);
 }


 const editdata = (e) =>{
     let trler = e.target.closest("tr")
    // let tdler = [...trler.querySelectorAll("td:not(:first-child, :last-child)")]   //  bu versiyada mumkundur
     let tdler = [...trler.querySelectorAll("td")]
     tdler.pop();
     tdler.shift();
    tdler.map(a=>{
        let text = a.innerText;
        let input =  document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("value",text);
        a.innerText = ""
        a.append(input)
    })
    e.target.innerText ="Yadda saxla"
    e.target.classList.remove("col")
    e.target.removeEventListener("click", editdata);
    e.target.addEventListener("click", saverow);
    allow = false
}
const makeorder =()=>{
const rows = [...document.querySelectorAll("tbody tr")];
rows.map((a, b)=>{
    a.querySelector("td").innerText = b + 1   /// querySelector hemise a nin yalnizca birinci td ni qaytarir .  (queryselectorAll basqadi)
})

}