var curDate = new Date()
var countdownDate = new Date(curDate.getFullYear()+1, 0, 1)
console.log("countdownDate", countdownDate)

var headerText = document.getElementById("header-text")
console.log("headerText", headerText)
headerText.innerHTML = "Counting Down to " + formatDate(countdownDate)
getDateDifference(countdownDate)
setInterval(() => {
    getDateDifference(countdownDate)
}, 1000);


function getDateDifference(countdownDate) {
    try {
        var currentDate = new Date()
        var difference = countdownDate - currentDate
        var dayDiff = Math.floor(difference / 86400000).toFixed(0);
        difference -= parseInt(dayDiff) * 86400000
        var hourDiff = Math.floor(difference / (1000 * 60 * 60)).toFixed(0);
        difference -= hourDiff * (1000 * 60 * 60)
        var minuteDiff = Math.floor(difference / (1000 * 60)).toFixed(0);
        difference -= minuteDiff * (1000 * 60)
        var secondDiff = Math.floor(difference / (1000)).toFixed(0);

        // set value
        document.getElementById("number-day").innerHTML = addZeros(String(dayDiff))
        document.getElementById("number-hour").innerHTML = addZeros(String(hourDiff))
        document.getElementById("number-minute").innerHTML = addZeros(String(minuteDiff))
        document.getElementById("number-second").innerHTML = addZeros(String(secondDiff))
        if (dayDiff < 2) {
            document.getElementById("text-day").innerHTML = "day"
        } else {
            document.getElementById("text-day").innerHTML = "days"
        }
        if (hourDiff < 2) {
            document.getElementById("text-hour").innerHTML = "hour"
        } else {
            document.getElementById("text-hour").innerHTML = "hours"
        }
        if (minuteDiff < 2) {
            document.getElementById("text-minute").innerHTML = "minute"
        } else {
            document.getElementById("text-minute").innerHTML = "minutes"
        }
        if (secondDiff < 2) {
            document.getElementById("text-second").innerHTML = "second"
        } else {
            document.getElementById("text-second").innerHTML = "seconds"
        }
    } catch (error) {
        console.log("error in getDateDifference", error)
    }
}

function formatDate(date) {
    try {
        let d = new Date(date)
        return String(d.getFullYear()) + "-" + addZeros(String(d.getMonth() + 1)) + "-" + addZeros(String(d.getDate()))
    } catch (error) {
        console.log("error in formatDate", error)
    }
}

function addZeros(str) {
    try {
        if (str.length < 2) return "0" + str
        else return str
    } catch (error) {
        console.log("error in addZeros", error)
    }
}




