function checkСharacters(text) {
    return (text.length > 20) ? text = text.substring(0, 20) + '...' : text;
}
console.log(checkСharacters('Lorem ipsum dolor sit amet consectetur adipisicing elit'));