let newDay = document.getElementById('new-day');
let newTime = document.getElementById('new-time');
let newDate = new Date();

function getToday(){
    
    let today = newDate.getDay()

        switch (today){
            case 0:
                
                newDay.innerText = "Sunday"
                break;
            case 1:
                
                newDay.innerText = "Monday"
                break;
            case 2:
                
                newDay.innerText = "Tuesday"
                break;
            case 3:
            
                newDay.innerText = "Wednesday"
                break;
            case 4:
                
                newDay.innerText = "Thursday"
                break;
            case 5:
                
                newDay.innerText = "Friday"
                break;
            case 6:
                
                newDay.innerText = "Saturday"
                break;
            default :
                "What is today?";
        
            }
}
getToday()

function timer(){
    let now = new Date()
    let hours = now.getUTCHours()
    let minutes = now.getUTCMinutes()
    let seconds = now.getUTCSeconds()
    let miliseconds = now.getUTCMilliseconds()
    newTime.innerText = hours + ":" + minutes + ":" + seconds + ":" + miliseconds;
}

setInterval(timer, 1)



