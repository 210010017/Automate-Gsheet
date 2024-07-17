AUTOMATION PROJECT IN GOOGLE APPSCRIPTS
========================================

We have to create 3 appscripts, here refered as:
I.FEEDBACK appscript --> contains code for logging user feedback data in google sheet and code for sending conditional automated emails.
II.BACKEND appscript --> contains code for managing database i.e. collection and sending user specific data to FRONTEND appscript is done by this appscript.
III.FRONTEND appscript --> contians code for end user interface (above appscripts are run by requests sent from this appscript). 

Of above 3, I & II appscripts will be linked to corresponding google sheets.  

To implement the project follow the below steps:

I.for creating your FEEDBACK APPSCRIPT:

1.Open a new gsheet and create two subsheets named a) 'logdata' where you want to see all the user feedback and the corresponding log data.
					           b) 'emailTemplate' where first cell contains the template of automated emails. 

2.In this gsheet, go to extentions->appscripts and there in code.gs file, paste the 'FEEDBACK appscript' code.

3.Replace the variable's values as mentioned in comments and save(ctrl+s).

4.Click 'deploy'->'New deployment' and 
  set the web app configuration as: Execute as => Me(admin email)
						  Who has access => Anyone

5.Click on 'deploy' button and copy the webapp url obtained and paste it somewhere, we need this later while creating FRONTEND APPSCRIPT.

-----------------------------------------------------------------------------------------

II.for creating your BACKEND APPSCRIPT:

1.Open the gsheet which has all users data i.e main database of our project.

2.In this gsheet, go to extentions->appscripts and there in code.gs file, paste the 'BACKEND appscript' code.

3.Replace the variable's values as mentioned in comments and save(ctrl+s).

4.Click 'deploy'->'New deployment' and 
  set the web app configuration as: Execute as => Me(admin email)
						  Who has access => Anyone

5.Click on 'deploy' button and copy the webapp url obtained and paste it somewhere, we need this later while creating FRONTEND APPSCRIPT. 

-----------------------------------------------------------------------------------------

III.for creating your FRONTEND APPSCRIPT:

1.Create a new project in appscripts IDE.

2.In addition to code.gs files, create userpage.html, nonuserpage.html, masterpage.html by clicking '+' symbol in Files section.

3.Copy & paste the codes in corresponding files.

4.Replace the variable's values as mentioned in comments in code.gs file.

*Important differences in script deployment settings with respect to earlier script settings*
6.Click 'deploy'->'New deployment' and 
  set the web app configuration as: Execute as => User accessing the web app
						  Who has access => Anyone with Google Account

--------------------------------------------------------------------------------------------
© Copyright 2023, Gandluri Vishal, IIT Dharwad. 
