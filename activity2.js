let data = []
let id = 1;
//localStorage.clear()
let da = new Date();
var date = da.getFullYear() + '-' + (da.getMonth() + 1) + '-' + da.getDate();
let Actvityname = document.getElementById("ActivityName").value
let birthday = document.getElementById("birthday").value
let Priority = document.getElementById("Priority").value
let description = document.getElementById("Description").value
//console.log( new Date("09/2/2022"));
document.getElementById("date1").innerHTML = "Current Date: " + date

var date123 = new Date('Tue, 21 Apr 2020 09:20:30 GMT');

// Covert to local PST datetime, AGAIN this only works if the server/browser is in PST
date123.toString();
console.log(date123);
function submit1() {
    let detail = {}
    let Actvityname = document.getElementById("ActivityName").value
    let birthday = document.getElementById("birthday").value
    let Priority = document.getElementById("Priority").value
    let description = document.getElementById("Description").value
    let getdata = JSON.parse(localStorage.getItem("Activity"))
    if (Actvityname == " ") {
        alert("Activity Name cannt be blank")
    }
    else if (birthday == "") {
        alert("Birthday cannt be blank")
    }
    else if (Priority == "" || description == "") {
        alert(" fields cannt be empty")
    }
    else {
        const myDate = birthday
        if (Priority == "Low") {
            detail.color = "green"

        }
        else if (Priority == "High") {
            detail.color = "Red"
        }
        else {
            detail.color = "yellow"
        }
        detail.id = id
        detail.name = Actvityname;
        detail.date = myDate;
        detail.description = description
        detail.Priority = Priority;
        
        if(getdata){
            getdata.push(detail)
        localStorage.setItem("Activity", JSON.stringify(getdata))
        }else{
            data.push(detail)
        localStorage.setItem("Activity", JSON.stringify(data))
        }
        id++;
        console.log(data, myDate)
        show()
    }
}
function show() {
    let show = "";
    let table = document.getElementById("tab");
    let getdata = JSON.parse(localStorage.getItem("Activity"))
    let fil = getdata.map((i, index) => (i.date))
    let da = new Date();
    var date = da.getFullYear() + '-' + (da.getMonth() + 1) + '-' + da.getDate();
    var dat = da.getDate()
    if(da.getMonth()<10){
        date="0"+da.getMonth()
    }else{

    }
    console.log(date,da);
    for (let i = 0; i < getdata.length; i++) {
        let fi = new Date(fil[i]).getDate();
        //console.log(date);
        if (dat == fi) {
            show += `<tr>
               <td>${getdata[i].name}</td>
               <td>${getdata[i].date}</td>
               <td>${getdata[i].description}</td>
               </tr>`
        }
        else if(!dat==fi[i]) {
                console.log("it is the else condtion");
        }
    }

    table.innerHTML = show;
}
show()

function update() {
    let getdata = JSON.parse(localStorage.getItem("Activity"))
    let Actvityname = document.getElementById("ActivityName").value
    let birthday = document.getElementById("birthday").value
    let Priority = document.getElementById("Priority").value
    let description = document.getElementById("Description").value
    getdata[gindex].name = Actvityname
    getdata[gindex].date = birthday;
    getdata[gindex].Priority = Priority;
    getdata[gindex].description = description
    localStorage.setItem("Activity", JSON.stringify(getdata))
    show();

}
