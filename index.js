document.onreadystatechange = updateClock()

function updateClock() {
    const date = new Date()
    document.getElementById("current-time-text").innerText = date.toLocaleTimeString([], { hour12: false })
    const hour = date.getHours()
    if (hour < 5 || hour >= 18) {
        document.getElementById("time-greeting").innerText = "Selamat Malam."
    }
    else if (hour < 12) {
        document.getElementById("time-greeting").innerText = "Selamat Pagi."
    }
    else {
        document.getElementById("time-greeting").innerText = "Selamat Siang."
    }
}

setInterval(updateClock, 1000) 
