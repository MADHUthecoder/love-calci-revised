function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names");
        return; // Exit the function if names are not provided
    }

    const lovePercentage = Math.floor(Math.random() * 101);

    const result = document.getElementById("result");

    result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}`;

    if (lovePercentage < 30) {
        result.innerHTML += "<br> Not a great match.. Keep looking...";
    } else if (lovePercentage >= 30 && lovePercentage <= 75) {
        result.innerHTML += "<br> There is hope... Give it a try!";
    } else {
        result.innerHTML += "<br> Made for Each Other";
    }
    let id= Math.random()
    
    let obj={
        name1,
        name2
    }

    let obj_serialised = JSON.stringify(obj)

    localStorage.setItem(id, obj_serialised)

}


function reset() {
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    const result = document.getElementById("result");
    result.innerHTML = "";
}