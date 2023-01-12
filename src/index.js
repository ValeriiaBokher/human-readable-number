module.exports = function toReadable(number) {
    let letter = number.toString();
    let length = letter.length;
    letter0 = parseInt(letter[0]);
    letter1 = parseInt(letter[1]);
    letter2 = parseInt(letter[2]);
    let num = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let num2 = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let num2name = num2[Math.floor(number / 10) - 2];

    if (number < 20) {
        return num[number];
    } else if (length == 2) {
        if (letter1 == 0) {
            return num2name;
        } else {
            return num2name + " " + num[letter1];
        }
    } else if (length == 3) {
        if (letter1 == 0 && letter2 == 0) {
            return num[letter0] + " hundred";
        } else if (letter1 == 0) {
            return num[letter0] + " hundred " + num[letter2];
        } else if (letter1 == 1) {
            return num[letter0] + " hundred " + num[letter2 + 10];
        } else if (letter2 == 0) {
            return num[letter0] + " hundred " + num2[letter1 - 2];
        } else {
            return (
                num[letter0] +
                " hundred " +
                num2[letter1 - 2] +
                " " +
                num[letter2]
            );
        }
    }
};
