function task1() {
    let name = prompt("Write your name")
    alert(`Hello,${name}`)
}
function task2() {
    const current_year = 2024
    let year = parseInt(prompt("Write on where year you born:"))
    alert(`Age:${current_year - year}`)
}
function task3() {
    let side = parseInt(prompt('Write side of square'))
    alert(`Perimetr of square ${side * 4}`)
}
function task4() {
    let radius = parseInt(prompt("Write radius of circle"))
    alert(`Circle area: ${radius * 2}π`)
}
function task5() {
    let distance = parseInt(prompt("Write distance beetwen city's"))
    let time = parseInt(prompt("Write how many hours do you want to get there?"))
    alert(`Your speed: ${distance / time}`)
}
function task6() {
    const value = 0.91
    let dollars = parseInt(prompt("How many dollars you want to convert"))
    alert(`Euro: ${dollars * value}`)
}
function task7() {
    let flashDriveSizeGB = parseFloat(prompt("Write how many space you have on falsh(GB):"));

    let fileSizeMB = 820;

    if (!isNaN(flashDriveSizeGB) && flashDriveSizeGB > 0) {
        let numberOfFiles = Math.floor(flashDriveSizeGB * 1024 / fileSizeMB);

        alert(`Volume on a flash drive ${flashDriveSizeGB} GB will fit ${numberOfFiles} file(s).`);
    } else {
        alert("Please enter the correct volume of the flash drive in gigabytes.");
    }

}
function task8() {
    let money = parseInt(prompt("How much money in your pocket"))
    let price = parseInt(prompt("Write price for 1 chocolate bar"))

    alert(`You can buy ${Math.floor(money / price)} your tips ${money % price}`)
}
function task9() {
    let userInput = prompt("Write 3 digits number:");

    if (userInput.length === 3 && !isNaN(userInput)) {

        let digit1 = parseInt(userInput.charAt(0));
        let digit2 = parseInt(userInput.charAt(1));
        let digit3 = parseInt(userInput.charAt(2));

        let palindrome = digit3 * 100 + digit2 * 10 + digit1;

        alert("Palindrome of you number: " + palindrome);
    } else {
        alert("Please enter a valid three-digit number.");
    }
}
function task10() {
    let userNumber = parseInt(prompt("Введіть ціле число:"));

    alert((userNumber % 2 === 0) ? "парне" : "непарне");
}