var adminEmail = "210010017@iitdh.ac.in";

var deployedBackendUrl = "https://script.google.com/macros/s/AKfycbyfMlm3MNlxd0hFPUAyFL6A_EoOoBXXmcqBls8a3d4ymQqpzoCYeG1kB23Oe_pBBthCrA/exec"; // Replace with webapp url obtained by deploying Backend appscript.

var deployedUpdatesUrl = "https://script.google.com/macros/s/AKfycbzbCJyaQP8LgpCBRYZ1tqayfUBk99BAAUSKmQdPv8ASmR-KVq_blnBz84Lv2603wXEBWQ/exec"; // Replace with webapp url obtained by deploying Updates appscript.

var deployedgetSheetsUrl="https://script.google.com/macros/s/AKfycbwdoc7_hqFlKsAW_oDMCXlGFx5c-Im7VKj5bYBAPKdB4YHeRRlM_GEN09bHslagWBCK/exec";


/* ==================== DO NOT EDIT BELOW THIS LINE ==================== */

var userEmail = Session.getActiveUser().getEmail();

function doGet(e){
  
  if(userEmail === adminEmail){
    return HtmlService.createTemplateFromFile("masterpage").evaluate().setTitle("MASTER PAGE");
  }
  else{
    // if(getData(sheetName,emailColumn) == ""){
    //   return HtmlService.createTemplateFromFile("nonuserpage").evaluate().setTitle("NO DATA");
    // }
    // else{
      return HtmlService.createTemplateFromFile("userpage").evaluate().setTitle("USER PAGE");
    // }
  }
  
}


// function getData(sheet_no,nofcols){

//   // if(t == 1){
//     var response = UrlFetchApp.fetch(deployedBackendUrl+"?uac="+userEmail+"&fortable="+sheet_no.toString()+"&nc="+nofcols.toString());
//     var data = JSON.parse(response.getContentText()).reqData;
//     return data;
//   // }
//   // else if(t == 2){
    
//   // }

// }


function getData(sheetName,emailColumn){
  // var userEmail = "forexcepcy@gmail.com";
  // var sheetName = "resultingSheet";
  // var emailColumn = 1;

  var stringColumnNum = emailColumn.toString();
  var response = UrlFetchApp.fetch(deployedBackendUrl+"?uac="+userEmail+"&fortable="+sheetName+"&scn="+stringColumnNum);
  var data = JSON.parse(response.getContentText()).reqData;

  // var uac = JSON.parse(response.getContentText()).ruac;
  // var fortable = JSON.parse(response.getContentText()).rfortable;
  // var emi = JSON.parse(response.getContentText()).remi;

  // Logger.log(data);
  // Logger.log(uac);
  // Logger.log(fortable);
  // Logger.log(emi); 
  
  return data;
}

function getSheetNames(){

  var response = UrlFetchApp.fetch(deployedgetSheetsUrl);
  var allS = JSON.parse(response.getContentText()).allS;
  Logger.log(allS);
  return allS;


}


function throwback(val,fb){
  UrlFetchApp.fetch(deployedUpdatesUrl+"?uac="+userEmail+"&val="+val+"&fbval="+fb);
}

