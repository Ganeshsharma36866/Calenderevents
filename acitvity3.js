
  
var gindex =0;
id = 0;
//localStorage.clear()
let Actvityname = document.getElementById("ActivityName").value
let birthday = document.getElementById("birthday").value
let Priority = document.getElementById("Priority").value

let da = new Date();
var date = da.getFullYear() + '-' + (da.getMonth() + 1) + '-' + da.getDate();
const changeDate = () => {
    let myDate = new Date().toISOString().slice(0, 10).replace(/-/g, "-")
    return myDate
}
//console.log(changeDate())
function show() {
   
    let show = "";
    let table = document.getElementById("tab");
    let getdata = JSON.parse(localStorage.getItem("Activity"))
    
    for (let i = 0; i < getdata.length; i++) {
        
        show += `<tr>
               <td>${getdata[i].name}</td>
               <td>${(getdata[i].date)}</td>
               <td>${getdata[i].description}</td>
               <td><input type="button" value="Edit" class="btn btn-warning" onclick=(editData(${i})) /></td>
               <td><input type="button" value="Delete" class="btn btn-Danger" onclick="delet(${i})" /></td>
               </tr>`
    }
    table.innerHTML = show;
}
show()
function editData(index) {
    gindex = index;
    let getdata = JSON.parse(localStorage.getItem("Activity"))
     document.getElementById("ActivityName").value = getdata[gindex].name;
    document.getElementById("birthday").value = getdata[gindex].date;
     document.getElementById("Priority").value = getdata[gindex].Priority;
     document.getElementById("Description").value = getdata[gindex].description;
}
function update1() {
    //console.log("vivek")
    let getdata = JSON.parse(localStorage.getItem("Activity"))
    let Actvityname1 = document.getElementById("ActivityName").value
    let birthday1 = document.getElementById("birthday").value
    let Priority1 = document.getElementById("Priority").value
    let description1 = document.getElementById("Description").value
    //console.log(gindex);
    getdata[gindex].name = Actvityname1
    getdata[gindex].date = birthday1;
    getdata[gindex].Priority = Priority1;
    getdata[gindex].description = description1
    localStorage.setItem("Activity", JSON.stringify(getdata))
    show();

}
function delet(t) {
    let getdata = JSON.parse(localStorage.getItem("Activity"))
  
    getdata.splice(t, 1);
    localStorage.setItem("Activity", JSON.stringify(getdata))
    show();
}