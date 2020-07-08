
//Good day everyone. THis  presentation is in continuation of Group 5's video presentation with Foram' and Ishara 
//in line with the project for IM115 subject for Laboratory 4
//this is the sample table that our group has created and a row will be added on the table once user entered all the information 
//and pressed Enter after inputting the SAlary
//The photo or logo is dependent on the Job title selected by the user. 
//---- show nexxt page
//so this is the html code of the table.html page.
//these are the options for the jobtitle that are available for the user.
//the tbody will be consumed by the script.html to populate the table once the user pressed enter after inputting the Salary.

// so, again, this javascript is being consumed or called by the table.html
//the script's main function is to create a new row in the table and can remove a single row as well.
//to begin with, let me start by explaining the following code or script:

var AllEmp = []; // this variable will be used to store the all the people/employees that will be inputted in the table
   
  
function onEnterUp(event) {
    //this function will be called once the user is done entering information 
    var people =[];  // this will be used as an array of information for the row or the single information entered.
    if (event.code !== 'Enter') return;

    // start populating the people array by getting the values through the ElementId
    people[0] = document.getElementById("FName").value;     //First Name
    people[1] = document.getElementById("LName").value;     //Last Name
    people[2] = document.getElementById("Job").value;       //Job Title
    people[3] = document.getElementById("Salary").value;    //Salary
   
    AllEmp.push(people);  //After populating the people array, all the values will be inserted of pushed to the Employee's array 
                        //to be consumed by the table.html

    refresh_table() // this line will call the method that will populate the table based on the records in All Emp array

    //After populating the table with the new data, clear the text 
    document.getElementById("Photo").value = ""
    document.getElementById("FName").value = ""
    document.getElementById("LName").value = ""
    document.getElementById("Job").value = "IT"
    document.getElementById("Salary").value = "" 
    document.getElementById("FName").focus();

  }

function refresh_table(){
    // In this method, the table will be populated based on the records of AllEmp array with the help of create_row method.
    var code_snippet = ""  // First, the variable code_ssnippet is desclared as this will be used as a temporary variable 

    for(var i=0; i < AllEmp.length; i++)  // this for loop will iterate on the AllEmp array and pass all the records to create_row method
      code_snippet += create_row(AllEmp[i],i)  // the code_snippet variable will be used to store all the html code that will be generated
                                                // from create_row function.
                                               // The create_row function will pass the AllEmp record or row based on the index iterated 
                                               //by the for loop to the method create_row
  
    var table = document.querySelector('#my_table')  // the querySelector will get the first element in the document with the 
                                                    //class name - mytable; once identified, it is ready to be consumed
    table.innerHTML = code_snippet   // since the table class has been identified, the innerHtml property is used to modify 
                                    //the content of the HTML element 
                                    //which is the my_table class which is the tbody of the table of table.html

                                 
}

function create_row(empRecord,index) {
    // this methos accepts the parameters empRecord which represents the row in the AllEmp Record and index as the index of 
    //the that particular row in AllEmp array
    var arrEmpRecord = [];  
    arrEmpRecord =  empRecord;  // this array variable will be used to store the row record received.

    var imagepath="";  //before proceeding to creating the html code, we first need to identify the logo or photo 
                        //that is based on the Job title that was selected in the drp down Job titles.
                        // the image path will be used in the photo column of the table.
    imagepath = getEmpPhoto(arrEmpRecord[2])  // call the getEmpPhoto to get the image or logo path path; 
                        //this will pass the paramter which represents the value of tje Job title selected. ( go to getempPhoto function)

    var row = ""  // the variable row serves as a string variable where the generated html code are concatenated and will be stored.
    row += "<tr id='" + index + "'>\n"
    row += "<td onclick='remove_person(" + index + ")'><img src='/images/delete.jpg' alt='Delete' style='width:35px;height:30px;'></td>\n"
    row += "<td><img src='" + imagepath + "' alt='Position' style='width:35px;height:30px;'>"  + "</td>\n"
    row += "<td>" + arrEmpRecord[0] + "</td>\n"  // this will put the FirsName
    row += "<td>" + arrEmpRecord[1] + "</td>\n" //LastName 
    row += "<td>" + arrEmpRecord[2] + "</td>\n" //Job Title that was selected
    row += "<td>" + arrEmpRecord[3] + "</td>\n" // and the Salary
    row += "</tr>"
    return row  // once done, it will now return the value or the htmlcode generated
}

function remove_person(index){
    AllEmp.splice(index, 1)  // the splice method adds/removes items to/from an array and returns the removed items;
                            // the index here represents the position in the array and 1 represents to remove 1 item.
    refresh_table()
}

function getEmpPhoto(EmpJob){
    // this method accepts the parameter with the Job title. It will go through the conditions and once it satifies the condition 
    //it will return the path for that particular job title.
    var path=""
    if(EmpJob=='Doctor'){
        return path='/images/Doc.png' 
    }
    else if(EmpJob=='IT') {
        //alert("IT")
        return path='/images/IT_job.jpg'
    }
    else if(EmpJob=='Lawyer') {
        //alert("IT")
        return path='/images/Lawyer.jpg'
    }
    else if(EmpJob=='Teacher') {
        //alert("IT")
        return path='/images/Teacher.jpg'
    }
    else if(EmpJob=='Chef') {
        //alert("IT")
        return path='/images/Chef.jpg'
    }
    else if(EmpJob=='Nurse') {
        //alert("IT")
        return path='/images/Nurse.jpg'
    }
    else if(EmpJob=='Engineer') {
        //alert("IT")
        return path='/images/Engineer.jpg'
    }
    else if(EmpJob=='Pilot') {
        //alert("IT")
        return path='/images/Pilot.jpg'
    }
    else if(EmpJob=='Police') {
        //alert("IT")
        return path='/images/Police.jpg'
    }
    else {
        return path='/images/smiley.png'
    }
  
}
