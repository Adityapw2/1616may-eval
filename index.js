// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
document.querySelector("form").addEventListener("submit", addRow);
function addRow(){
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var batch = document.querySelector("#batch").value;
    var dsa = document.querySelector("#dsa").value;
    var skill = document.querySelector("#cs").value;
    var cod = document.querySelector("#coding").value;
    var per = (dsa+skill+cod)*100/30;
    var status;
    if(per>50){
        status = "Regular";
    }
    else{
        status = "Async";
    }
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.innerText = name;
    var td2 = document.createElement("td")
    td2.innerText = batch;
    var td3 = document.createElement("td")
    td3.innerText = dsa;
    var td4 = document.createElement("td")
    td4.innerText = skill;
    var td5 = document.createElement("td")
    td5.innerText = cod;
    var td6 = document.createElement("td")
    td6.innerText = per;
    var td7 = document.createElement("td")
    if(per>50){
        td7.innerText = "Regular";
        td7.style.backgroundColor = "green";
    }
    else{
        td7.innerText = "Async";
        td7.style.backgroundColor = "red";
    }
    var td8 = document.createElement("td")
    td8.innerText = "Delete"
    td8.addEventListener("click", deleteRow);
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8)
    document.querySelector("tbody").append(tr);
    function deleteRow(){
        event.target.parentNode.remove()
    }
}