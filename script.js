let car = {
    manufacturer: 'bmw',
    model: 'x7',
    year: 2019,
    speed: 82,

}

function info() {
    console.log(car);
}

function count() {
    let a = prompt('Введите расстояние');
    let km = a / car['speed'];
    let h = km / 4 * 1;
    if ((h + km) < 1) {
        let num = h + km * 100;
        alert(Math.floor(num) + 'м');
    } else(
        alert(Math.round(h + km) + 'ч'));
}

count();