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


if (companyInput === "startup" && projectInput === "webFront" || experienceInput === "codingHTML") {
  $("#css-design").show();
}

if (companyInput === "enterprise" && projectInput === "software" || projectInput === "webBack" || experienceInput === "webServer") {
   $("#csharp-dotnet" ).show();
 }

if (companyInput === "enterprise" && projectInput === "android") {
    $("#java-android" ).show();
}

if (companyInput === "startup" && projectInput === "interactive" || experienceInput === "codingCsharp") {
    $("#ruby-rails" ).show();
}
event.preventDefault();


  });
});

























  //
  // var javaCounter;
  // var designCounter;
  // var csharpCounter;
  //
  // if (companyInput === "startup") {
  //   designCounter+1;
  // } else if ( companyInput === "enterprise") {
  //   javaCounter+1;
  // } else {
  //   csharpCounter+1;
  // }
  //
  //
  //  if (javaCounter=0) {
  //   $("#java-android").show();
  //
  // } else if (designCounter=3) {
  //     $("#css-design").show();
  //
  // } else { ("#ruby-rails").show()
  //
  // }


    // event.preventDefault();


 //   });
 // });









//
//   if (designCounter=1) {
//     $("#css-design").show();
//   }
// if (companyInput === "startup") {
//   $("#css-design").show();
// }
//
// if (companyInput != "startup" && projectInput === "software") {
//    $("#csharp-dotnet").show();
//  }
//
// if (companyInput != "startup" && projectInput === "android") {
//     $("#java-android").show();
// }
//
//
// var javaCounter;
// var designCounter;
//
// if (companyInput === "startup") {
//   designCounter++;
// }






//
// if (projectInput === "android" && companyInput === "enterprise" || "startup")
//     $("#java-android").show();
//
// }
// if (experienceInput === "codingcsharp" && companyInput === "startup") {



















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
