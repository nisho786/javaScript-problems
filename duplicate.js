var name = [3, 6,  9,  2, 4, 2, 9, 4, 5, 7, 8, 9];
var uniqueName = [];
for(var i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);

