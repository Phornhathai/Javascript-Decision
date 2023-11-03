// let animals = ["cat" , "dog" , "snake" , "tiger"]

// console.log(animals.length);

// console.log(animals[0]);

// animals[3] = "fish"

// console.log(animals[3]);

// animals.push("bird");

// console.log(animals);

// animals.pop();

// console.log(animals);

const planets = 
['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];

// ลบ element ตัวแรกออก หรือเอา "The Moon" ออกจาก planets array เพราะ ดวงจันทร์ไม่ใช่ดาวเคราะห์
planets.shift();
console.log("1 " + planets);
// เพิ่ม "Saturn" เข้าไปในส่วนท้ายของ planets array
planets.push("Saturn");
console.log("2 " + planets);

// เพิ่ม "Mercury" เข้าไปเป็น element ตัวแรกของ planets array
planets.unshift("Mercury");
console.log("3 " + planets);

// สุดท้ายแล้วฉันต้องการให้ planets array มีค่าเป็น: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"] ลอง console.log ดูสิ!