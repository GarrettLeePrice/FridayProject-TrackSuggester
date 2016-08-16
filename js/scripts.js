$(document).ready(function() {
  $("#selections").submit(function(event) {
  var companyInput = $("input:radio[name=companyType]:checked").val();
  var projectInput = $("input:radio[name=projectType]:checked").val();
  var experienceInput =
  $("input:radio[name=experienceType]:checked").val();
  var locationInput =
  $("input:radio[name=location]:checked").val();
  var seasonInput =
  $("input:radio[name=season]:checked").val();



if (companyInput === "startup") {
  $("#css-design").show();
}

if (companyInput != "startup" && projectInput === "software") {
   $("#csharp-dotnet").show();
 }

if (companyInput != "startup" && projectInput === "android") {
    $("#java-android").show();
}

//
// if (projectInput === "android" && companyInput === "enterprise" || "startup")
//     $("#java-android").show();
//
// }
// if (experienceInput === "codingcsharp" && companyInput === "startup") {
//   $("#ruby-rails").show();
// }


 event.preventDefault();


  });
});


















//   $("form#selections").submit(function(event) {
//     var companyInput = $("input#companyType").val();
//     var projectInput = $("input#projectType").val();
//     var experienceInput = $("input#experience").val();
//     var locationInput = $("input#location").val();
//     var seasonInput = $("input#season").val();
//
//     $(".companyType").text(companyInput);
//     $(".projectType").text(projectInput);
//     $(".experience").text(experienceInput);
//     $(".location").text(locationInput);
//     $(".season").text(seasonInput);
//
//
//     $("#yourResults").show();
//
//     event.preventDefault();
//
//   });
// });
