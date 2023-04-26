var adminEmail = "210010017@iitdh.ac.in";

var deployedBackendUrl = "https://script.google.com/macros/s/AKfycbz8vY1FSSaQPilDGawcBB_7L6w4b2jel-mLNasBT9Et7xtzGPe7FOdwTyTDa5vIsjEjQg/exec"; // Replace with webapp url obtained by deploying Backend appscript.

var deployedUpdatesUrl = "https://script.google.com/macros/s/AKfycbzgtflkYwcSvAoNJT5YL_tA9ZXx-7wcnPsRSKzTTZp3T_taLWT4W7a3t9y1hnIsXDohsQ/exec"; // Replace with webapp url obtained by deploying Updates appscript.


/* ==================== DO NOT EDIT BELOW THIS LINE ==================== */

var userEmail = Session.getActiveUser().getEmail();

function doGet(e){
  
  if(userEmail === adminEmail){
    return HtmlService.createTemplateFromFile("masterpage").evaluate().setTitle("MASTER PAGE");
  }
  else{
    if(getData() == ""){
      return HtmlService.createTemplateFromFile("nonuserpage").evaluate().setTitle("NO DATA");
    }
    else{
      return HtmlService.createTemplateFromFile("userpage").evaluate().setTitle("USER PAGE");
    }
  }
  
}


function getData(){

  var response = UrlFetchApp.fetch(deployedBackendUrl+"?uac="+userEmail);
  var data = JSON.parse(response.getContentText()).reqData;
  return data;

}


function throwback(val,fb){
  UrlFetchApp.fetch(deployedUpdatesUrl+"?uac="+userEmail+"&val="+val+"&fbval="+fb);
}

