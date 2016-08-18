$(document).ready(function() {
  $("#selections").submit(function(event) {
    var companyInput = $("input:radio[name=companyType]:checked").val();
    var projectInput = $("input:radio[name=projectType]:checked").val();
    var experienceInput = $("input:radio[name=experienceType]:checked").val();
    var locationInput = $("input:radio[name=location]:checked").val();
    var seasonInput = $("input:radio[name=season]:checked").val();



    if (companyInput === "startup" && projectInput === "webFront" ||
      experienceInput === "codingHTML") {
      $("#css-design").show();
    } else if (companyInput === "enterprise" && projectInput ===
      "software" || projectInput === "webBack" || experienceInput ===
      "webServer") {
      $("#csharp-dotnet").show();
    } else if (companyInput === "enterprise" && projectInput ===
      "android") {
      $("#java-android").show();
    } else {
      $("#ruby-rails").show();
    }
    event.preventDefault();
  });
});
