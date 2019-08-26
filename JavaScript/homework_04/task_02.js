function checkSpam(str) {
    return (str.indexOf('Sex') >= 0 || str.indexOf('SPAM') >= 0) ? true : false;
}

console.log(checkSpam('get new Sex videos'));
console.log(checkSpam('[SPAM] How to earn fast money?'));
console.log(checkSpam('New PSD template')); 