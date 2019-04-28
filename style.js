

function triangle(length1, length2, length3){
    var lengths=[length1, length2, length3]
    length1 = parseInt(prompt("enter length1"))   
    length2 = parseInt(prompt("enter length2")) 
    length3 = parseInt(prompt("enter length3")) 
    var totalLength = length1 + length2;

    alert(totalLength)


    if(totalLength==5){
        alert("ertyuiorhjkertyuidfghjrghjk")
    }


    if (  length1==0 || length2==0 || length3==0 ){
        alert(" input  numbers greater than 0")
    }else if (length1===length2 && length2===length3 ){
        alert("equilateral triangle")
    } else if (length1===length2 & length2!==length3 || length1!==length2 & length2==length3){
        alert("isoselice triangle")
    } else if (length1!==length2 & length2!==length3 &length1!==length3){
        alert("scalene triangle")
    } else if( totalLength==0 ){
        alert("wabebebe mimi")

    }

}

