# Gsheet-Automation-appscript
Provides a link to webpage where it displays user specific data (present in a gsheet) and also can collect feedback from user and log it in another gsheet and an automated email will be sent to the user who submitted the feedback.

AUTOMATION PROJECT IN GOOGLE APPSCRIPTS
========================================

We have to create 3 appscripts, here refered as:
I.Updates appscript --> contains code for logging user feedback data in google sheet and code for sending conditional automated emails.
II.Backend appscript --> contains code for managing database i.e. collection and sending user specific data to automation appscript is done by this appscript.
III.Automation appscript --> contians code for end user interface (above appscripts are run by requests sent from this appscript). 

Of above 3, I & II appscripts will be linked to corresponding google spreadsheets(though not compulsary).  

To implement the project follow the below steps:

I.for creating your UPDATES APPSCRIPT:

1.Open a new spreadsheet and create two sheets named a) 'logdata' where you want to see all the user feedback and the corresponding log data.
							               b) 'emailTemplate' where first cell contains the template of automated emails. 

2.In spreadsheet,go to extentions->appscripts and there in code.gs file, paste the 'Updates appscript' code.

3.Replace the variable's values as mentioned in comments and save(ctrl+s).

4.Click 'deploy'->'New deployment' and 
  set the web app configuration as: Execute as => Me(admin email)
						  Who has access => Anyone

5.Click on 'deploy' button and copy the webapp url obtained and paste it somewhere, we need this later while creating AUTOMATION APPSCRIPT.

-----------------------------------------------------------------------------------------

II.for creating your BACKEND APPSCRIPT:

1.Open the spreadsheet which has all users data i.e main database of our project.

2.In this spreadsheet, go to extentions->appscripts and there in code.gs file, paste the 'Backend appscript' code.

3.Replace the variable's values as mentioned in comments and save(ctrl+s).

4.Click 'deploy'->'New deployment' and 
  set the web app configuration as: Execute as => Me(admin email)
						  Who has access => Anyone

5.Click on 'deploy' button and copy the webapp url obtained and paste it somewhere, we need this later while creating AUTOMATION APPSCRIPT. 

-----------------------------------------------------------------------------------------

III.for creating your AUTOMATION APPSCRIPT:

1.Create a new appscript independently(not integrated with spreadsheet).

2.In addition to code.gs files, create userpage.html, nonuserpage.html, masterpage.html by clicking '+' symbol in Files section.

3.Copy & paste the codes in corresponding files.

4.Replace the variable's values as mentioned in comments in code.gs file.

5.In html files change the text in corresponding tags to obtain desired user interface.

6. *very important* If new <th> element is added in table tag to add new column in html page then definitely update the 'nc' variable value in 'generateTable' function with latest number of columns, only in that corresponding html file.

--------------------------------------------------------------------------------------------
© Copyright 2023, Gandluri Vishal, IIT Dharwad. 
