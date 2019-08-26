var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obj){
    for (var num in obj) {
        if (typeof obj[num] === 'number') {
            obj[num] = obj[num] * 2;
        } else {
            obj[num] = obj[num];
        }
    }

    return obj;
}

console.log(multiplyNumeric(image));