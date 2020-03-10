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


//Onload Functions to be called
function onLoadFuncs(){
    getJson();
    createMap();
}

/** Creates a map and adds it to the page. */
function createMap() {
  const mit = [42.360091, -71.09416]
  const welles = [42.293573,-71.305928]
  var mapCoord;
  const maps = document.getElementsByClassName('map')
  for (var i = 0; i < maps.length; i++){
      if (maps[i].id == 'MIT') mapCoord = mit;
      else if (maps[i].id == 'Wellesley') mapCoord = welles;
      const map = new google.maps.Map(
            maps[i],
            {center: {lat: mapCoord[0], lng: mapCoord[1]}, zoom: 16},
            [
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                                    {
                                        "color": "#400080"
                                    }
                                ]
                },

                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                                    {
                                        "color": "#ecd7e9"
                                    }
                                ]
                },

                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                                    {
                                        "color": "#ddb8de"
                                    }
                                ]
                },

                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                                    {
                                        "color": "#ffaaff"
                                    }
                                ]
                },

                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                                    {
                                        "color": "#efcff3"
                                    }
                                ]
                },

                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                                    {
                                        "color": "#7a00f4"
                                    }
                                ]
                },

                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                                    {
                                        "color": "#ff88c4"
                                    }
                                ]
                },

                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [
                                    {
                                        "color": "#ff4da6"
                                    }
                                ]
                },

                {
                    "featureType": "transit",
                    "elementType": "geometry.fill",
                    "stylers": [
                                    {
                                        "color": "#ff00ff"
                                    }
                                ]
                },

                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                                    {
                                        "color": "#c4a0de"
                                    }
                                ]
                }
            ]);
      const trexMarker = new google.maps.Marker({
            position: {lat: mapCoord[0], lng: mapCoord[1]},
            map: map,
            title: 'Stan the T-Rex'
                                                });
        }
    }

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


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementsByClassName("captions");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  for (i = 0; i < captionText.length; i++) {
    captionText[i].innerHTML = dots[slideIndex-1].alt;
  }
}

