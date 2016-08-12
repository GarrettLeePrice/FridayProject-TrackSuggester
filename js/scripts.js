$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var companyInput = $("input#companyType").val();
    var projectInput = $("input#projectType").val();
    var experienceInput = $("input#experience").val();
    var locationInput = $("input#location").val();
    var seasonInput = $("input#season").val();

    $(".companyType").text(person1Input);
    $(".projectType").text(person2Input);
    $(".experience").text(animalInput);
    $(".location").text(exclamationInput);
    $(".season").text(verbInput);


    $("#results").show();

    event.preventDefault();

  });
});
