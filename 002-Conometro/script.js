let sec = 00
let min = 00
let millisecond = 00
let h = 00
let interval

function twoDigits(digit){
    if(digit<10){
        return(`0${digit}`)
    }else{
        return(digit)
    }
}

function start(){
    interval = setInterval(watch,10)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    millisecond = 0
    sec = 0
    min = 0
    h = 0
    document.getElementById('clock').innerHTML = '00:00:00'
    document.getElementById('mili').innerHTML = '00'
}


function watch(){
    millisecond ++
    if(millisecond == 100){
        sec++
        millisecond = 00
        if(sec == 60){
            min++
            sec = 00
            if(min == 60){
                h++
                min = 0
            }
        }
    }
    
    
    document.getElementById('clock').innerHTML = `${twoDigits(h)}:${twoDigits(min)}:${twoDigits(sec)}`
    document.getElementById('mili').innerHTML = `${twoDigits(millisecond)}`
}