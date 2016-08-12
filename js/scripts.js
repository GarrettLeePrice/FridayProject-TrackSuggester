$(document).ready(function() {
  $("form#selections").submit(function(event) {
    var companyInput = $("input#companyType").val();
    var projectInput = $("input#projectType").val();
    var experienceInput = $("input#experience").val();
    var locationInput = $("input#location").val();
    var seasonInput = $("input#season").val();

    $(".companyType").text(companyInput);
    $(".projectType").text(projectInput);
    $(".experience").text(experienceInput);
    $(".location").text(locationInput);
    $(".season").text(seasonInput);


    $("#yourResults").show();

    event.preventDefault();

  });
});
