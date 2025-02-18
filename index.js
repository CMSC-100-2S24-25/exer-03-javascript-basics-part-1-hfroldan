function validatePassword(pswd1, pswd2) {
    if (pswd1 !== pswd2) return false

    if (String(pswd1).length < 8 || String(pswd2).length < 8) return false

    var number_ctr = 0, upper_ctr = 0, lower_ctr = 0;

    for (let char of pswd1) {
        if ("1234567890".includes(char)) number_ctr++
        if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(char)) upper_ctr++
        if ("abcdefghijklmnopqrstuvwxyz".includes(char)) lower_ctr++

        if (number_ctr > 0 && upper_ctr > 0 && lower_ctr > 0) return true
    }

    return false
}

function reversePassword(pswd) {
    var reversed = "";

    for (let i = pswd.length - 1; i > -1; i--) {
        reversed = reversed.concat(pswd[i])
    }

    return reversed
}