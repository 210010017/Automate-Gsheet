function doGet(e){ 

  var sheetName = "resultingSheet"; // Replace "resultingSheet" with the name of the sheet that contains all user data
  var adminEmail = "210010017@iitdh.ac.in"; // Replace with the eamil of owner of the above sheet
  var spreadSheeetID = "13zSkWEwU76c1EbppGtkkc_l4AxsccuKgrET1F2g97QU"; // Replace with ID of above spreadsheet which you can obtain in the URL of the spreadsheet 

 /* ========== DO NOT EDIT BELOW THIS LINE ========== */

  var doc = SpreadsheetApp.openById(spreadSheeetID); 
  var sheet = doc.getSheetByName(sheetName); 
  var lastrow = sheet.getLastRow(); 
  
  var range = sheet.getRange(2, 2, lastrow-1,3); 
  var values = range.getValues();

  var userEmail = e?.parameter?.uac;
    
  if(userEmail === adminEmail){
    requestedData = values;
  } 
  else{
    requestedData = values.filter(function(r){

      if(r[0] === userEmail){
        return true;
      }
      else{
        return false;
      }

    });
  }

  return ContentService.createTextOutput(JSON.stringify({"reqData": requestedData})).setMimeType(ContentService.MimeType.JSON); 
  
}


