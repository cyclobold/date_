(function(){
 let setAlarmForm = document.querySelector("#set-alarm-form");
 const submitForm = document.querySelector("#submit-form");

    let timeSet = setAlarmForm.time_set;
    let dateSet = setAlarmForm.date_set;


    submitForm.onclick = function(){
       //console.log(timeSet.value + ":00");

       if(timeSet.value.trim().length == 0 || dateSet.value.trim().length == 0){
           //
       }else{
        console.log(dateSet.value);

        dateSetValue = dateSet.value;
 
        let dateSetBox = dateSetValue.split("-");
 
        console.log(dateSetBox);
 
        let yearSet = dateSetBox[0];
         let monthSet = dateSetBox[1];
         let daySet = dateSetBox[1]; 
 
        let params = dateSet.value + " " + timeSet.value;
 
        let setDateTime = new Date(params);
 
        startTimer(setDateTime);
 
         //console.log(date.getHours());
         //date.setDate(daySet);
       }

      

    }

    function startTimer(setDateTime){

        let clockInterval = setInterval(function(){

         //console.log(setDateTime);

         //check the current time
         let currentDateObject = new Date();

         /**
          * Areas to remove
          */
            




         //End of Areas to remove

         //console.log("Current Date: ", currentDate);

        }, 1000)


     }


}());