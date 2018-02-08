$(document).ready(function () {
    $("#button").click(function () {
        alert("Button");
        $("#disp").html("Button");
    });
$("#forReg").click(function () {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var usernameR = $("#usernameR").val();
        var passwordR = $("#passwordR").val();
        var email = $("#email").val();
        var first = $("#firstLang").val();
        var second = $("#secondLang").val();
        var third = $("#thirdLang").val();

    // var firstname = $("#firstname").val();
    // var lastname = $("#lastname").val();
    // var usernameR = $("#usernameR").val();
    // var passwordR = $("#passwordR").val();
    // var email = $("#email").val();

    $.ajax({
        url: "/order",
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
            firstLang: first,
            secondLang: second,
            thirdLang: third
        },
        success: function (ans) {
            alert(ans);
            $("#disp").html(ans);
        }
    });
});
});

