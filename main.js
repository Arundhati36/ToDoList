function SaveDate(){
    actual_date = document.getElementById("date").value;
    console.log(actual_date);
    document.getElementById("date_of_tasks").innerHTML = actual_date;
    localStorage.setItem(actual_date, actual_date);
}

function Apply(){
    byju_input = document.getElementById("ByjuInput").value;
    document.getElementById("byju_task").innerHTML = " ( " + byju_input + " ) ";
    vhw_input = document.getElementById("VhwInput").value;
    document.getElementById("vhw_task").innerHTML = " ( " + vhw_input + " ) ";
    study_input = document.getElementById("StudyInput").value;
    document.getElementById("study_task").innerHTML = " ( "+ study_input + " ) ";
}

var all_tasks_done = [];

function UpdateT1(){
   task1_check_done =  document.getElementById("task1_done");
   task1_check_not_done =  document.getElementById("task1_not_done");
   if (task1_check_done.checked){
       document.getElementById("task1Stat").innerHTML = "Handwriting Task 1 Done";
       console.log("Handwriting Task 1 Done");
       all_tasks_done.push(" Handwriting ");
       document.getElementById("all_tasks_done").innerHTML = all_tasks_done;
       localStorage.setItem("Handwriting On "+actual_date, "Done");
    }
   else if(task1_check_not_done.checked){
        document.getElementById("task1Stat").innerHTML = "Handwriting Task 1 Not Done";
        console.log("Handwriting Task 1 Not Done"); 
        localStorage.setItem("Handwriting On "+actual_date, "Not Done");
   }  
}



function UpdateT2(){
    task2_check_done =  document.getElementById("task2_done");
    task2_check_not_done =  document.getElementById("task2_not_done");
    if (task2_check_done.checked){
        document.getElementById("task2Stat").innerHTML = "Byju's Task 2 Done";
        console.log("Byju's Task 2 Done");
        all_tasks_done.push(" Byju's ");
        document.getElementById("all_tasks_done").innerHTML = all_tasks_done;
        localStorage.setItem("Byju's ("+byju_input+") On " +actual_date, "Done");
    }
    else if(task2_check_not_done.checked){
        document.getElementById("task2Stat").innerHTML = "Byju's Task 2 Not Done";
        console.log("Byju's Task 2 Not Done");
        localStorage.setItem("Byju's ("+byju_input+") On " +actual_date, "Not Done"); 
    }  
}

function UpdateT3(){
    task3_check_done =  document.getElementById("task3_done");
    task3_check_not_done =  document.getElementById("task3_not_done");
    if (task3_check_done.checked){
        document.getElementById("task3Stat").innerHTML = "Vacation Homework Task 3 Done";
        console.log("Vacation Homework Task 3 Done");
        all_tasks_done.push(" Vacation Homework ");
        document.getElementById("all_tasks_done").innerHTML = all_tasks_done;
        localStorage.setItem("VHW ("+vhw_input+") On " +actual_date, "Not Done");
    }
    else if(task3_check_not_done.checked){
        document.getElementById("task3Stat").innerHTML = "Vacation Homework Task 3 Not Done";
        console.log("Vacation Homework Task 3 Not Done"); 
        localStorage.setItem("VHW ("+vhw_input+") On " +actual_date, "Not Done");
    }  
}
function UpdateT4(){
    task4_check_done =  document.getElementById("task4_done");
    task4_check_not_done =  document.getElementById("task4_not_done");
    if (task4_check_done.checked){
        document.getElementById("task4Stat").innerHTML = "Study Task 4 Done";
        console.log("Study Task 4 Done");
        all_tasks_done.push(" Study ");
        document.getElementById("all_tasks_done").innerHTML = all_tasks_done;
        localStorage.setItem("Study ("+study_input+") On " +actual_date, "Done");
    }
    else if(task4_check_not_done.checked){
        document.getElementById("task4Stat").innerHTML = "Study Task 4 Not Done";
        console.log("Study Task 4 Not Done"); 
        localStorage.setItem("Study ("+study_input+") On " +actual_date, "Not Done"); 
    }  
}

function UpdateT5(){
    task5_check_done =  document.getElementById("task5_done");
    task5_check_not_done =  document.getElementById("task5_not_done");
    if (task5_check_done.checked){
        document.getElementById("task5Stat").innerHTML = "Read Alice Task 5 Done";
        console.log("Read Alice Task 5 Done");
        all_tasks_done.push(" Read Alice ");
        document.getElementById("all_tasks_done").innerHTML = all_tasks_done;
        localStorage.setItem("Reading Alice On "+actual_date, "Done");
    }
    else if(task5_check_not_done.checked){
        document.getElementById("task5Stat").innerHTML = "Read Alice Task 5 Not Done";
        console.log("Read Alice Task 5 Not Done"); 
        localStorage.setItem("Reading Alice On "+actual_date, "Not Done"); 
    }  
}

function UpdateT6(){
    task6_check_done =  document.getElementById("task6_done");
    task6_check_not_done =  document.getElementById("task6_not_done");
    if (task6_check_done.checked){
        document.getElementById("task6Stat").innerHTML = "Korean Task 6 Done";
        console.log("Korean Task 6 Done");
        all_tasks_done.push(" Korean ");
        document.getElementById("all_tasks_done").innerHTML = all_tasks_done;
        localStorage.setItem("Korean On "+actual_date, "Done");
    }
    else if(task6_check_not_done.checked){
        document.getElementById("task6Stat").innerHTML = "Koeran Task 6 Not Done";
        console.log("Korean Task 6 Not Done"); 
        localStorage.setItem("Korean On "+actual_date, "Not Done");
    }  
}

function UpdateT7(){
    task7_check_done =  document.getElementById("task7_done");
    task7_check_not_done =  document.getElementById("task7_not_done");
    if (task7_check_done.checked){
        document.getElementById("task7Stat").innerHTML = "Spanish Task 7 Done";
        console.log("Spanish Task 7 Done");
        all_tasks_done.push(" Spanish ");
        document.getElementById("all_tasks_done").innerHTML = all_tasks_done;
        localStorage.setItem("Spanish On "+actual_date, "Done");
    }
    else if(task7_check_not_done.checked){
        document.getElementById("task7Stat").innerHTML = "Spanish Task 7 Not Done";
        console.log("Spanish Task 7 Not Done"); 
        localStorage.setItem("Spanish On "+actual_date, "Not Done");
    }  
}

function UpdateT8(){
    task8_check_done =  document.getElementById("task8_done");
    task8_check_not_done =  document.getElementById("task8_not_done");
    if (task8_check_done.checked){
        document.getElementById("task8Stat").innerHTML = "Manorama Task 8 Done";
        console.log("Manorama Task 8 Done");
        all_tasks_done.push(" Manorama ");
        document.getElementById("all_tasks_done").innerHTML = all_tasks_done;
        localStorage.setItem("Manorama On "+actual_date, "Done");
    }
    else if(task8_check_not_done.checked){
        document.getElementById("task8Stat").innerHTML = "Manorama Task 8 Not Done";
        console.log("Manorama Task 8 Not Done");
        localStorage.setItem("Manorama On "+actual_date, "Not Done"); 
    }  
}