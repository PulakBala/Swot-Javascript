const names = ['abul', 'gabul', 'jambul', 'tibul', 'haibul', 'abul', 'gabul', 'jambul'];

function removeDublicate(names) {
    const unique = [];
    for(let i = 0; i < names.length; i++) {
        const name = names[i];
        if(unique.includes(name) === false) {
            unique.push(name)
        }
    }
    return unique;
}
const uniqueNames = removeDublicate(names);
console.log(uniqueNames);