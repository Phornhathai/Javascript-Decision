// Change the value of num, so that "YOU GOT ME!" prints out
let num = prompt("Put your num : ");

if(num <= 100){
    if(num >= 50){
        console.log('Hey!');
    }
}else{
    if(num < 103){
        if(num %2 === 0){
            console.log('You Got ME');
        }
    }
}