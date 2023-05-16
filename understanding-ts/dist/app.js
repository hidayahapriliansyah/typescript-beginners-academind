"use strict";
function movingAnimal(animal) {
    // kenapa ada Discrimenated Union?
    // karena gak bisa kayak gini
    // if ('flyingSpeed' in animal) {
    //   console.log('Moving with speed ' + animal.flyingSpeed);
    // }
    // if ('flyingSpeed' instanceof Bird) {
    //   console.log('Moving with speed ' + animal.flyingSpeed);
    // }
    // bukan karena bakal muncul banyak if if if nya ...
    //  tapi karena kalau kita cek pake in
    //  karena in itu buat objek, bukan interface,
    // sama kayak instance itu buat ngecek apakah objek instance dari class,
    // sedangkan kita bekerja dengan interface sekarang ...
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed : ' + speed);
}
movingAnimal({ type: 'bird', flyingSpeed: 50 });
