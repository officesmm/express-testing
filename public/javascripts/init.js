$(document).ready(function(){
	console.log("jQuery is working");
	$.ajax({
        method: "POST",
        crossDomain: true,
        headers: {"Content-Type": "application/json"},
        url: "https://express.soemyatmin.it/users/post",
        datatype: 'html',
        data: JSON.stringify({
            para: 1
        }),
        success: function (res) {
            console.log(
            	JSON.parse(res)[1].name);
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
        url: "https://express.soemyatmin.it/users",
        datatype: 'html',
        data: {
            para: 1
        },
        success: function (res) {
            console.log(
                JSON.parse(res)[0].name);
        }, error: function (jqXHR, textStatus, errorThrown) {
            console.log("jqXHR: " + jqXHR.responseText);
            console.log("textStatus: " + textStatus);
            console.log("errorThrown: " + errorThrown);
        },
    });
    console.log("if the car is shown ajax is working");
});

