// เขียน program ด้วย javascript โดยมีเงื่อนไขว่า :
// ถ้าตัวแปรที่ได้รับมา มีค่าเป็นคำว่า stopให้ print คำว่า "red"
// ถ้าตัวแปรที่ได้รับมา มีค่าเป็นคำว่า slow ให้ print คำว่า "yellow"
// ถ้าตัวแปรที่ได้รับมา มีค่าเป็นคำว่า go ให้ print คำว่า "green"


let input = prompt("please input your status");

if(input === "red"){
    console.log('red');
}else if(input === "slow"){
    console.log('yellow');
}else if(input === "go"){
    console.log('green');
}else{
    console.log('nothing');
}