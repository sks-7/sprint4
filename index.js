
document.querySelector("#masaiForm").addEventListener("submit",matches)

var matchesArr = JSON.parse(localStorage.getItem("schedule")) || [];

function matches(){
    event.preventDefault();

    var matchesObj={
        
        matchNumber : masaiForm.matchNum.value,
        TeamA : masaiForm.teamA.value,
        TeamB : masaiForm.teamB.value,
        Date :  masaiForm.date.value,
        Venue : masaiForm.venue.value
      };
  
    //   console.log(matchesObj);
  
      matchesArr.push(matchesObj);
  
      localStorage.setItem("schedule",JSON.stringify(matchesArr));
      window.location.href="matches.html";
      

}  
