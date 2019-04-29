

function triangle(length1, length2, length3){
    var lengths=[length1, length2, length3]
    length1 = document.getElementById("length1").value
    length2 = document.getElementById("length2").value
    length3 = document.getElementById("length3").value



    if (  length1 + length2 < length3 || length1 + length3 < length2|| length2 + length3 < length1){
        alert(" The values you entered cant form a triangle")
    }else if (length1===length2 && length2===length3 ){
        alert("equilateral triangle")
    } else if (length1===length2 & length2!==length3 || length1!==length2 & length2==length3){
        alert(" isosceles  triangle")
    } else if (length1!==length2 & length2!==length3 &length1!==length3 ){
        alert("scalene triangle")
    }

}
