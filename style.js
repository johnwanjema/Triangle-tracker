

function triangle(length1, length2, length3){
    var lengths=[length1, length2, length3]
    length1 = prompt("enter length1")
    length2 = prompt("enter length2")
    length3 = prompt("enter length3")
    

    var sum  =length1 + length2;

    

    if (length1===length2 & length2===length3 & length1>0 & length2>0 & length3>0){
        alert("equilateral triangle")
    }
    
    else if (length1===length2 & length2!==length3 || length1!==length2 & length2==length3 & 
             length1>0 & length2>0 & length3>0){
        alert("isoselice triangle")
        
    } else if ( sum > length3){
        alert("scalene triangle")
    }
        

}

