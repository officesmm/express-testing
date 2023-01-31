$( document ).ready(function() {
    console.log($("#tab").val());
    $("#sidemenu_" + $("#tab").val()).css("display", "block");
    $("#sidemenu_" + $("#tab").val() + "_" + $("#selection").val()).addClass("active");
});


