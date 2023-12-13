let number=document.querySelector(".count-el");
let btn=document.querySelector(".increment-btn");
let saveBtn=document.querySelector(".save-btn");
let saveEl=document.querySelector(".save-el");
let count=0;

function increment()// Already there is onclcik event in HTML so don;t get confused
{
    count+=1;
    number.innerHTML=count;
}

let entries;
function save()
{
    entries=count +" "+"-";
    saveEl.textContent=saveEl.textContent + " "+ entries;
    // console.log(entries);
    count=0;//after saving set the entries to zero
    number.innerHTML=count;
}
