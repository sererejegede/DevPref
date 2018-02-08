/* global post */
var VarHolder = {};
// (function($) {
//   "use strict"; // Start of use strict
//
//   // Smooth scrolling using jQuery easing
//   $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: (target.offset().top - 48)
//         }, 1000, "easeInOutExpo");
//         return false;
//       }
//     }
//   });
//
//   // Closes responsive menu when a scroll trigger link is clicked
//   $('.js-scroll-trigger').click(function() {
//     $('.navbar-collapse').collapse('hide');
//   });
//
//   // Activate scrollspy to add active class to navbar items on scroll
//   $('body').scrollspy({
//     target: '#mainNav',
//     offset: 54
//   });
//
//   // Collapse Navbar
//   var navbarCollapse = function() {
//     if ($("#mainNav").offset().top > 100) {
//       $("#mainNav").addClass("navbar-shrink");
//     } else {
//       $("#mainNav").removeClass("navbar-shrink");
//     }
//   };
//   // Collapse now if page is not at top
//   navbarCollapse();
//   // Collapse the navbar when page is scrolled
//   $(window).scroll(navbarCollapse);
//
// })(jQuery); // End of use strict

// User custom scripts for ajax form submit

$(document).ready(function () {
    $("#test").click(function () {
        alert("LIVE");
    });


$("#hideToShow").click(function (){
    location.reload();
});
$("#modal-pop").click(function(){
    VarHolder.first = $("#first").val();
    VarHolder.second = $("#second").val();
    VarHolder.third = $("#third").val();
});

   $("#forLogin").click(function(e) {
       e.preventDefault();
       var userName = $("#username").val();
       var passWord = $("#password").val();
       if(userName === ""){
           $("#disp").html("Input Username");
       } else {
           if(passWord === ""){
               $("#disp").html("Input Password");
           } else {
               var password = passWord;
           }
           var username = userName;
       }



   $.ajax({
        url : "/customLogin",
        type : "post",
        beforeSend: function () {
            $("#spin").html("<i class='fa fa-spinner fa-spin'></i>");
        },
        complete: function () {
            $("#spin").html("");
        },
        data : {username: username,
                password: password,
                first: VarHolder.first,
                second: VarHolder.second,
                third: VarHolder.third
            },
        success : function(result){
            if (typeof result === "object"){
                if (result.length === 0){$("#disp").html("Wrong Password!");}
                else {
                    var countL = result.slice(0 , result.length/4);
                    var counted = result.slice(result.length/4, result.length/2);
                    var counted2 = result.slice(result.length/2, (result.length*3)/4);
                    var counted3 = result.slice((result.length*3)/4, result.length);

                    var list = $("#list");
                    var $create = $('<ul>').addClass("list-group").appendTo(list);


                    $.each(countL, function(index, item){
                        var $jag = $("<li>").html(item).addClass("list-group-item lis").appendTo($create);

                        $("<span>").html(counted[index]).addClass("badge badge-success float-right").appendTo($jag);
                        $("<span>").html(counted2[index]).addClass("badge badge-warning float-right").prependTo($jag);
                        $("<span>").html(counted3[index]).addClass("badge badge-danger float-right").prependTo($jag);
                    });
                    $("#loginDiv").replaceWith(list);
                    $("#myModal").modal('hide');
                    $("#disp").html("");
                    $("#username").html("");
                    $("#password").html("");
                    $("#hideToShow").css("display","block");
                }

        }
        else {
            $("#disp").html("Something went wrong");
        }
             
        }
     });
     
   });
   $("#username").focusin(function(){
            $("#disp").html("");
    });
   $("#password").focusin(function(){
            $("#disp").html("");
   });
   $("#home").click(function(){
       location.reload();
   });
   $("#forLoginClear").click(function(){
      $("#disp").html(""); 
      $("#dispR").html(""); 
   });
   

   
   
   //********************Registration Ajax Call*********************//
   
   $("#forReg").click(function (){
       var firstname = $("#firstname").val();
       var lastname = $("#lastname").val();
       var usernameR = $("#usernameR").val();
       var passwordR = $("#passwordR").val();
       var email = $("#email").val();
       
       $.ajax({
           url: "/register",
           type: "post",
           beforeSend: function () {
            $("#spin").html("<i class='fa fa-spinner fa-spin'></i>");
           },
           complete: function () {
            $("#spin").html("");
           },
           data: {
               firstname: firstname,
               lastname: lastname,
               username: usernameR,
               password: passwordR,
               email: email,
               firstLang: VarHolder.first,
               secondLang: VarHolder.second,
               thirdLang: VarHolder.third
           },
           success: function(print){


            if (typeof print === "object"){
                if (print.length === 0){$("#disp").html("Username is taken!");}
                var countL = print.slice(0 , print.length/4);
                var counted = print.slice(print.length/4, print.length/2);
                var counted2 = print.slice(print.length/2, (print.length*3)/4);
                var counted3 = print.slice((print.length*3)/4, print.length);

                var list = $("#list");
                var $create = $('<ul>').addClass("list-group").appendTo(list);

                $.each(countL, function(index, item){
                  var $jag = $("<li>").html(item).addClass("list-group-item lis").appendTo($create);

                   $("<span>").html(counted[index]).addClass("badge badge-success float-right").appendTo($jag);
                   $("<span>").html(counted2[index]).addClass("badge badge-warning float-right").prependTo($jag);
                   $("<span>").html(counted3[index]).addClass("badge badge-danger float-right").prependTo($jag);
                });
                $("#loginDiv").replaceWith(list);
                $("#myModal").modal('hide');
                $("#disp").html("");
                $("#username").html("");
                $("#password").html("");
                $("#hideToShow").css("display","block");
            
        } 
        else if(typeof print === "string"){
            $("#dispR").html(print);
        }
                          
           }
       });
   });
       $("#fname").focusin(function(){
            $("#dispR").html("");
       });
       $("#lname").focusin(function(){
            $("#dispR").html("");
       });
       $("#usernameR").focusin(function(){
            $("#dispR").html("");
       });
       $("#passwordR").focusin(function(){
            $("#dispR").html("");
       });

$("#forRegClear").click(function(){
    $("#dispR").html("");
});
var $login = $("#login");
var $reg = $("#reg");

$login.click(function(){
    $("#dispR").html("");
});
$reg.click(function(){
    $("#disp").html("");
});
//////******Modal Toggle******////////
$reg.click(function(){
    $("#reg").css({"background-color": "#138496", "box-shadow": "none", "border-color": "#117a8b"});
    $("#login").css({"background-color": "#17a2b8", "box-shadow": "none", "border-color": "#117a8b"});
    $("#regModal").show();
    $("#loginModal").hide();
});
$login.click(function(){
    $("#login").css({"background-color": "#138496", "box-shadow": "none", "border-color": "#117a8b"});
    $("#reg").css({"background-color": "#17a2b8", "box-shadow": "none", "border-color": "#117a8b"});
    $("#loginModal").show();
    $("#regModal").hide();
});
});

// Google Maps Scripts
//var map = null;
//// When the window has finished loading create our google map below
//google.maps.event.addDomListener(window, 'load', init);
//google.maps.event.addDomListener(window, 'resize', function() {
//  map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
//});

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(40.6700, -73.9400), // New York

    // Disables the default Google Maps UI components
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 29
      }, {
        "weight": 0.2
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 18
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 16
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 21
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#000000"
      }, {
        "lightness": 16
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "saturation": 36
      }, {
        "color": "#000000"
      }, {
        "lightness": 40
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 19
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }, {
        "weight": 1.2
      }]
    }]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using out element and options defined above
  map = new google.maps.Map(mapElement, mapOptions);

  // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
  var image = 'img/map-marker.svg';
  var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
