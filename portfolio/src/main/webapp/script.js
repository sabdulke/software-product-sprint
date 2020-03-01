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
    //Declare vars
    var i, tabcontent, tablinks;

    //Get all elements with tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    //Hide the content
    for (i = 0; i< tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    //Get all elements with tablinks
    tablinks = document.getElementsByClassName("tablinks");
    //And remove the class active (because inactive unless clicked)
    for (i = 0; i<tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }

    //Display the current tab
    document.getElementById(info).style.display = "block";
    //Mark as active
    evt.currentTarget.className += " active";
}

// function getHello(){
//     fetch ('/data').then(response => response.text()).then((hello) => {
//         document.getElementById('hello').innerText = hello;
//     });
    
// }
function getJson(){
    fetch('/data').then(response => response.json()).then((jsonObject) =>{
        const facts = document.getElementById("facts");
        facts.innerHTML = "";
        for (comment in jsonObject){
            facts.append(jsonObject[comment]);
        }
    });
    
}





