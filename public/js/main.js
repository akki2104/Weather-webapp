

const sbbtn = document.getElementById("sbbtn");
const cityname = document.getElementById('cityvalue');
const showcity = document.getElementById('showcity');
const citystatus = document.getElementById('citystatus');
const temperature = document.getElementById('temperature');
const windspeed = document.getElementById('windspeed');
const humidity = document.getElementById('humidity');
const imgst = document.getElementById('imgst');
const desc = document.getElementById('desc');
const time = document.getElementById('time');
const d = new Date();
if (d.getHours() > 12) {
    time.innerHTML = (d.getHours()) + ":" + d.getMinutes() + " PM";
    if (d.getMinutes() < 10) {
        time.innerHTML = (d.getHours()) + ":" + "0" +d.getMinutes() + " PM";
    }
}
else if (d.getHours() == 0) {
    time.innerHTML = "0" + (d.getHours()) + ":" + d.getMinutes() + " AM";
    if (d.getMinutes() < 10) {
        time.innerHTML = "0" + (d.getHours()) + ":" + "0" +d.getMinutes() + " AM";
    }
}
else {
    time.innerHTML = d.getHours() + ":" + d.getMinutes() + " AM";
    if (d.getMinutes() < 10) {
        time.innerHTML = "0" + (d.getHours()) + ":" + "0" +d.getMinutes() + " AM";
    }
}

const getOutput = async () => {

    const cityvalue = cityname.value;

    // if city is empty

    if (cityvalue === "") {

    }
    // if not empty
    else {
        // trying if we can get response from api for given city
        try {
            // getting url from api
            // console.log(cityvalue);
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=69a976debf6c4f19d5c9290b2af81a38`;
            // waiting for api's reponse
            const response = await fetch(url);
            const data = await response.json();
            const arr = [data];
            showcity.innerHTML = cityvalue;
            citystatus.innerHTML = arr[0].weather[0].main;
            tempvalue = (arr[0].main.temp - 273);
            temperature.innerHTML = tempvalue.toFixed(2) + "o".sup() + "C";
            windspeed.innerHTML = arr[0].wind.speed + " Km/h";
            humidity.innerHTML = arr[0].main.humidity + "%";
            desc.innerHTML = arr[0].weather[0].description;
            // console.log(arr[0].weather[0].main)
            if (arr[0].weather[0].main == "Clouds") {
                imgst.src = "/images/cloud.png";
            }
            else if (arr[0].weather[0].main == "Smoke") {
                imgst.src = "/images/smoke.png";
            }
            else if (arr[0].weather[0].main == "Rain") {
                imgst.src = "/images/rainny.png";
            }
            else if (arr[0].weather[0].main == "Rain") {
                imgst.src = "/images/rainny.png";
            }
            else if (arr[0].weather[0].main == "Clear") {
                imgst.src = "/images/sunny.png";
            }
        }
        // if we didnot get a response
        catch {
            showcity.innerHTML = "aesi koi city hee nhi hai";
            citystatus.innerHTML = "Enter a proper city name";
        }
    }
}



sbbtn.addEventListener("click", getOutput);
document.addEventListener("keypress",async(e)=>{
    if(e.key==="Enter")
    {
        getOutput();
    }
})