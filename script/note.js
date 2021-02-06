const add = document.querySelector(".add");
// const txtarea = document.querySelector("textarea")
// const main = document.querySelector(".main")


// const nte = document.querySelector(".note")

const note= document.querySelector(".container")
const updateLsd=()=>{
    const textdata =document.querySelectorAll('textarea');
    const noty =[];
    console.log(textdata)
    textdata.forEach((nte)=>{
        return noty.push(nte.value)
    })
    console.log(noty)
    localStorage.setItem('noty',JSON.stringify(noty))
}
//     // console.log(textdata);
//     const data=[];
//     textdata.forEach((elem)=>data.push(elem.value))
//     console.log(data);
//     // const data = textdata.map((curr)=> curr.value)
//     localStorage.setItem('notes',JSON.stringify(data))
// }


const addnotes = (text = '') => {
    const nte = document.createElement('div')
    nte.classList.add("note")


    const htmldata = ` 
    <div class="logos  mb-2">
    <ul class="d-flex ">
        <li><i class="fas fa-edit editz" style="color: rgb(71, 236, 71); cursor: pointer;"></i></li>
        <li><i class="fas fa-trash del " style="color: red; cursor: pointer;"></i></li>
    </ul>
</div>
<textarea class =" ${text ? "" : "hidden"}"></textarea>
<div class ="main  ${text ? "hidden" : ""}" ></div>
`
nte.insertAdjacentHTML('afterbegin',htmldata);

note.appendChild(nte);
document.body.appendChild(note);
// note.innerHTML=nte.toString();

// console.log(note)
// console.log(nte)
const del = nte.querySelector(".del")
const edit = nte.querySelector(".editz")
const txtarea = nte.querySelector("textarea")
const main = nte.querySelector(".main")
del.addEventListener('click',()=>{
    nte.remove();
    updateLsd();
    
});
txtarea.value =text;
// main.innerHTML=text;
main.innerHTML=text;

edit.addEventListener('click',()=>{
    main.classList.toggle('hidden');
    txtarea.classList.toggle('hidden');
})
// console.log(txtarea.value)

    txtarea.addEventListener('change',(event)=>{
        const value =event.target.value;
        console.log(value);
        main.innerHTML=value;
        updateLsd();
        
    })
    // updateLsd() //using local storage to store data
    
// }
}



// const data = JSON.parse(localStorage.getItem('notes'));
// if(data){
//  data.forEach((elem)=> { updateLsd(elem)})
// }

const noty =JSON.parse(localStorage.getItem('noty'));
if(noty){
    noty.forEach((nte) => addnotes(nte))
}

add.addEventListener('click', ()=>{
    addnotes();
})