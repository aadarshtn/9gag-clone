###  PROCEDURES TO RUN THIS PROJECT IN YOUR LOCAL MACHINE ###

1. CREATE A BASE (REACT) APP IN YOUR LOCAL MACHINE BY :
    STEPS : 
    1.1 OPEN CMD/Powershell/....etc...
    1.2 Run "create-react-app 9gag-clone" inside any local directory of your choice.
    1.3 Go To "" and download the project codebase from github.
    1.4 (Once Step 1.2 Is Finished) Copy all the files and folders from the downloaded project directory to the root folder created by "create-react-app" [NOTE: OVERWRITE ALL WHEN PROMPTED].
    1.5 Open this root folder in any code editor(Visual Studio Code Preferred!)
    1.6 In the terminal window(at project root directory) run all the following commands:
        "npm install react-redux"
        "npm install redux"
        "npm install redux-logger"
        "npm install redux-thunk"



2. SET UP THE SUPPORT SERVER :
        [NOTE ::: This Server is being set up inorder to tackle the 
        cors policy errors that may occur in browsers, because of 
        cross-server fetching of data , that is here we are fetching 
        data from 9gag.com]

    STEPS : 
    2.1 Open a new code editor window(Visual Studio Code Preferred!)
    2.2 Open the powershell/cmd terminal of the code editor and browse to an appropriate directory outide the root directory of react app.
    2.3 run "npm init" in the terminal(give all the asked properties the default values while initialisation).
    2.4 Go To "" and download the cors-server codebase from github.
    2.5 Copy all the files and folders from the downloaded project directory to the directory in which server is initialized.
    2.6 In the terminal window(at cors-server root directory) run all the following commands:
        "npm install express"
        "npm install request"
        "npm install -g corsproxy"
        "corsproxy"
        "npm install node-fetch"



3. RUN THE SERVERS 
    STEPS: 
    3.1 Run "npm start" in the terminal window of the code editor where cors-server is opened. [FIRST]
    3.2 Run "npm start" in the terminal window of the code editor where 9gag-clone is opened. [SECOND]

    [NOTE ::: Make sure to follw the order of firing the servers as mentioned above]


4. VISIT THE CLONED 9GAG PAGE
    goto - http://localhost:3000/ from any browser to view!

### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### 