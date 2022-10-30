userName = prompt("Adınız nedir?");
document.querySelector("#myName").innerHTML = userName;

getToday = (day) => {
    let dayList = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];  
    return dayList[day];
}

getTime = () => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let day = getToday(time.getDay());
    document.querySelector("#myClock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + day;
}

getTime();
setInterval(getTime, 1000);