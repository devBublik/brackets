module.exports = function check(str, bracketsConfig) {
    // your solution

    let arrClose = [],
        arrOpen = [],
        full = [],
        res;

    for (let i = 0; i < bracketsConfig.length; i++) {
        arrOpen.push(bracketsConfig[i][0]);
        arrClose.push(bracketsConfig[i][1]);
    };

    for (let i = 0; i < str.length; i++) {
        if (arrOpen.includes(str[i]) && arrClose.indexOf(str[i]) === -1 || arrOpen.includes(str[i]) && arrClose.includes(str[i]) && full[full.length - 1] !== str[i]) {
            full.push(str[i]);
        } else if (arrOpen.indexOf(full[full.length - 1]) === arrClose.indexOf(str[i])) {
            full.pop();
        } else {
            res = false;
            full.push(str[i]);
            break;
        }
    }
    if (full.length === 0) {
        res = true;
    } else {
        res = false;
    }
    return res;

}