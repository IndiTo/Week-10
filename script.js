//Я учу Javascript!

/*function learnJS()
{
    console.log("Я учу Javascript!");
}
learnJS();

let jSlearn = function () {
    console.log("Я учу Javascript!");
}

jSlearn();


let ilearnJs = () => console.log("Я учу Javascript!");

ilearnJs();

*/


//Галерея

let prev = () => {
    let image = document.getElementById("image");
    image.src = "https://klike.net/uploads/posts/2019-07/1564314087_2.jpg";
    console.log(image);
}

let next = () => {
    let image = document.getElementById("image");
    image.src = "https://klike.net/uploads/posts/2019-07/1564314059_1.jpg";
    console.log(image);
}


//Календарь

const check = () => {
    const days = document.getElementById("days").value;
    if (days % 4 === 0) {
        if (days % 100 === 0) {
            if (days % 400 === 0) {
                console.log("Високосный - 366 дней")
            }
        } else {
            console.log("Високосный - 366 дней");
        }
    } else {
        console.log("Не високосный - 365 дней");
    }



}