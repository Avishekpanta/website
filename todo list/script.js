
const inputBox = document.getElementById('inputbox');
const listContainer = document.getElementById('listcontainer');

function random(){
  if(inputBox.value === ''){
    alert("write something")
  }
  else {
    let ok = document.createElement('li');
    ok.innerHTML = inputBox.value;
    listContainer.appendChild(ok);
    let span = document.createElement('span');
    span.innerHTML = "x";
    ok.appendChild(span);
  }
 inputBox.value = "";
 saveData();
}

listContainer.addEventListener('click', function(e){
 if (e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveData();
 }
 else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
 }

},false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask (){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();