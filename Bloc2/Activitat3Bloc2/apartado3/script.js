function biggest(){
    let first_num = prompt("Escribe un número:");
    let second_num = prompt("Escribe otro número:");
    let third_num = prompt("Escribe un último número:");

    let numbers = [first_num, second_num, third_num]
    numbers.sort()
    
    console.log(numbers[2])
    document.write(numbers[2] + " es mayor que " + numbers[1] + " que es mayor que " + numbers[0] + ".")
}
