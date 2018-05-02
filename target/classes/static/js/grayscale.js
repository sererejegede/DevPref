/* global post */
var VarHolder = {};

// User custom scripts for ajax form submit

$(document).ready(function () {
  $("#test").click(function () {
    alert("LIVE");
  });


  $("#hideToShow").click(function () {
    location.reload();
  });
  $("#modal-pop").click(function () {
    VarHolder.first = $("#first").val();
    VarHolder.second = $("#second").val();
    VarHolder.third = $("#third").val();
  });

  $("#forLogin").click(function (e) {
    e.preventDefault();
    var userName = $("#username").val();
    var passWord = $("#password").val();
    if (userName === "") {
      $("#disp").html("Input Username");
    } else {
      if (passWord === "") {
        $("#disp").html("Input Password");
      } else {
        var password = passWord;
      }
      var username = userName;
    }


    $.ajax({
      url: "/customLogin",
      type: "post",
      beforeSend: function () {
        $("#spin").html("<i class='fa fa-spinner fa-spin'></i>");
      },
      complete: function () {
        $("#spin").html("");
      },
      data: {
        username: username,
        password: password,
        first: VarHolder.first,
        second: VarHolder.second,
        third: VarHolder.third
      },
      success: function (result) {
        if (typeof result === "object") {
          if (result.length === 0) {
            $("#disp").html("Wrong Password!");
          }
          else {
            var countL = result.slice(0, result.length / 4);
            var counted = result.slice(result.length / 4, result.length / 2);
            var counted2 = result.slice(result.length / 2, (result.length * 3) / 4);
            var counted3 = result.slice((result.length * 3) / 4, result.length);

            var list = $("#list");
            var $create = $('<ul>').addClass("list-group").appendTo(list);


            $.each(countL, function (index, item) {
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
            $("#hideToShow").css("display", "block");
          }

        }
        else {
          $("#disp").html("Something went wrong");
        }

      }
    });

  });
  $("#username").focusin(function () {
    $("#disp").html("");
  });
  $("#password").focusin(function () {
    $("#disp").html("");
  });
  $("#home").click(function () {
    location.reload();
  });
  $("#forLoginClear").click(function () {
    $("#disp").html("");
    $("#dispR").html("");
  });


  //********************Registration Ajax Call*********************//

  $("#forReg").click(function () {
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
      success: function (print) {


        if (typeof print === "object") {
          if (print.length === 0) {
            $("#disp").html("Username is taken!");
          }
          var countL = print.slice(0, print.length / 4);
          var counted = print.slice(print.length / 4, print.length / 2);
          var counted2 = print.slice(print.length / 2, (print.length * 3) / 4);
          var counted3 = print.slice((print.length * 3) / 4, print.length);

          var list = $("#list");
          var $create = $('<ul>').addClass("list-group").appendTo(list);

          $.each(countL, function (index, item) {
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
          $("#hideToShow").css("display", "block");

        }
        else if (typeof print === "string") {
          $("#dispR").html(print);
        }

      }
    });
  });
  $("#fname").focusin(function () {
    $("#dispR").html("");
  });
  $("#lname").focusin(function () {
    $("#dispR").html("");
  });
  $("#usernameR").focusin(function () {
    $("#dispR").html("");
  });
  $("#passwordR").focusin(function () {
    $("#dispR").html("");
  });

  $("#forRegClear").click(function () {
    $("#dispR").html("");
  });
  var $login = $("#login");
  var $reg = $("#reg");

  $login.click(function () {
    $("#dispR").html("");
  });
  $reg.click(function () {
    $("#disp").html("");
  });
//////******Modal Toggle******////////
  $reg.click(function () {
    $("#reg").css({"background-color": "#138496", "box-shadow": "none", "border-color": "#117a8b"});
    $("#login").css({"background-color": "#17a2b8", "box-shadow": "none", "border-color": "#117a8b"});
    $("#regModal").show();
    $("#loginModal").hide();
  });
  $login.click(function () {
    $("#login").css({"background-color": "#138496", "box-shadow": "none", "border-color": "#117a8b"});
    $("#reg").css({"background-color": "#17a2b8", "box-shadow": "none", "border-color": "#117a8b"});
    $("#loginModal").show();
    $("#regModal").hide();
  });

  $("#addLanguage").click(function () {
    var progName = $("#progName").val();
    var userName = $("#usernameA").val();
    var passWord = $("#passwordA").val();
    // if(progName === ""){
    //     $("#erro").html("You have to specify the language");
    // } else {
    //     var progname = progName;
    // }
    // if(userName === ""){
    //     $("#erro").html("Input Username");
    // } else {
    //     if(passWord === ""){
    //         $("#erro").html("Input Password");
    //     } else {
    //         var password = passWord;
    //     }
    //     var username = userName;
    // }
    $.ajax({
      url: "/addLanguage",
      type: "post",
      data: {
        progName: progName,
        username: userName,
        password: passWord
      },
      success: function (success) {
        alert(success);
        if (success === "Success") {
          location.reload();
        }
      }
    });
  });

  $("#print_btn").click(function printNau(id, title) {
    id = 'list';
    title = 'Preference List';
    console.log(id, title);
    var contents = $("#" + id).html();
    var frame1 = $('<iframe />');
    frame1[0].name = "frame1";
    frame1.css({"position": "absolute", "top": "-1000000px", "pointer-events": "none"});
    $("body").append(frame1);
    var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
    frameDoc.document.open();
    frameDoc.document.write('<html><head><title>Print ' + title + '</title>');
    frameDoc.document.write('</head><body>');
//             frameDoc.document.write('<link href="{{ config('app.pathurl').'/css/bootstrap.min.css'}}" rel="stylesheet">');
//             frameDoc.document.write('<link href="{{ URL::asset('public/font-awesome/css/font-awesome.css') }}" rel="stylesheet">');
//             frameDoc.document.write('<link href="{{ config('app.pathurl').'/css/plugins/dataTables/datatables.min.css'}}" rel="stylesheet">');
//             frameDoc.document.write('<link href="{{ config('app.pathurl').'/css/animate.css'}}" rel="stylesheet">');
            frameDoc.document.write('<link href="/css/mdb.css" rel="stylesheet">');
            frameDoc.document.write('<link href="/css/bootstrap.css" rel="stylesheet">');
            frameDoc.document.write('<link href="/css/style.css" rel="stylesheet">');
// //            frameDoc.document.write('<style>.table-condensed{font-size: 9px;}</style>');
            frameDoc.document.write(contents);
            frameDoc.document.write('</body>');
//             frameDoc.document.write('<script src="{{ config('app.pathurl').'/js/jquery-2.1.1.js'}}" />');
//             frameDoc.document.write('<script src="{{ config('app.pathurl')}}/js/bootstrap.min.js"/>');
    frameDoc.document.write('</html>');
    frameDoc.document.close();
    setTimeout(function () {
      window.frames["frame1"].focus();
      window.frames["frame1"].print();
      frame1.remove();
    }, 500);
  });


});


