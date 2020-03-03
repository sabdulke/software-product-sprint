// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.




//Funtion for page tabs
function openInfo(evt, info){
    //Get all elements with tabcontent
    var tabcontent = document.getElementsByClassName("tabcontent");

    //Hide the content
    for (var i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    //Get all elements with tablinks
    var tablinks = document.getElementsByClassName("tablinks");

    //And remove the class active (because inactive unless clicked)
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    //Display the current tab
    document.getElementById(info).style.display = "block";
    //Mark as active
    evt.currentTarget.classList.add("active");
}


function getJson(){
    fetch('/comment').then(response => response.json()).then((jsonObject) =>{
        const facts = document.getElementById("history");
        facts.innerHTML = "";
        for (str in jsonObject){
            const liElement = document.createElement('li')
            liElement.innerText = jsonObject[str];
            facts.append(liElement);
        }
    });
    
}

function openForm() {
  const form = document.getElementById("msgForm");
  const bton = document.getElementsByClassName("open-button")[0];
  if (form.style.display == "block") {
      form.style.display = "none";
      bton.innerHTML = "Open Comment Box";

      }
  else{
    form.style.display = "block";
    bton.innerHTML = "Close Comment Box";
  }
}

function closeForm() {
  document.getElementById("msgForm").style.display = "none";
}





