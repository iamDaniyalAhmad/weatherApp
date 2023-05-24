let currentDate = document.getElementById("date");

let weathercon = document.getElementById("weathercon");

weathercon1 = "{%cloudstatus%}";

if(weathercon1 == "Sunny"){
    weathercon.innerHTML = '<i class="fas fa-sun" style="color: Yellow"></i>';
}else if(weathercon1 == "Clouds"){
    weathercon.innerHTML = '<i class="fas fa-cloud" style="color: #dfe4ea"></i>';
}
else if(weathercon1 == "Rainy"){
    weathercon.innerHTML = '<i class="fas fa-cloud-rain" style="color: #a4b0be"></i>';
}
else{
    weathercon.innerHTML = '<i class="fas fa-cloud" style="color: #44c3de"></i>';

}

const getCurrent=()=>{
    let d = new Date();
    const dayArray = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const monthArray =["Dec","Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov"];
    var date = d.getDate();
    var day = dayArray[d.getDay()-1];
    var month = monthArray[d.getMonth()+1];
    var hour = d.getHours();
    var min = d.getMinutes();
    var period = "AM";
    if(hour>11){
        if(hour>12){
            hour-=12;
        }
        period = "PM";
    }
    else{
        period = "AM";
    }

    if(min<10){
        min = "0"+min;
    }
    console.log(day,month,date,hour,min,period);
    return `${day} | ${month}${date} | ${hour}:${min}${period}`
}

currentDate.innerHTML = getCurrent();