$(document).ready(function(){
	console.log("jQuery is working");
	$.ajax({
        method: "POST",
        crossDomain: true,
        headers: {"Content-Type": "application/json"},
        url: "/users/post",
        dataType: 'text',
        data: JSON.stringify({
            para: 1
        }),
        success: function (res) {
            console.log(JSON.parse(res).cars[1].name);
        }, error: function (jqXHR, textStatus, errorThrown) {
            console.log("jqXHR: " + jqXHR.responseText);
            console.log("textStatus: " + textStatus);
            console.log("errorThrown: " + errorThrown);
        },
    });
        $.ajax({
            method: "GET",
            crossDomain: true,
            headers: {"Content-Type": "application/json"},
            url: "/users",
            dataType: 'text',
            data: {
                para: 1
            },
            success: function (res) {
                console.log(JSON.parse(res).cars[0].name);
            }, error: function (jqXHR, textStatus, errorThrown) {
                console.log("jqXHR: " + jqXHR.responseText);
                console.log("textStatus: " + textStatus);
                console.log("errorThrown: " + errorThrown);
            },
        });
    console.log("if the car is shown ajax is working");

    console.log($("#tab").val());
    $("#sidemenu_" + $("#tab").val()).css("display", "block");
    $("#sidemenu_" + $("#tab").val() + "_" + $("#selection").val()).addClass("active");
});

