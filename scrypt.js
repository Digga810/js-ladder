do {
    var num = prompt('Введите число')
    var simv = prompt('Введите первый символ')
    var power = prompt('Введите второй символ')
} while (isNaN(num) || num == 0); {
    let answer = 1
    for (let i = 0; i < num; i++) {
        answer = simv.repeat(i) + power
        console.log(answer);
    }
}





