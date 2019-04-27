

function triangle(length1, length2, length3){
    var lengths=[length1, length2, length3]
    length1 = prompt("enter length1")
    length2 = prompt("enter length2")
    length3 = prompt("enter length3")

    if (length1===length2 & length2===length3){
        alert("equilateral triangle")
    } else if (length1===length2 & length2!==length3 || length1!==length2 & length2==length3){
        alert("isoselice triangle")
    } else if (length1!==length2 & length2!==length3){
        alert("scalene triangle")
    }
        

}

