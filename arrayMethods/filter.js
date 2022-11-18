// This method creates a new array with only elements that passes the condition inside the provided function.
// array.filter(function(currentValue, index, arr), thisValue)

var playersArr = [
    {name: 'Jason', footedness: 'left', position: 'forward'},
    {name: 'Blake', footedness: 'right', position: 'defense'},
    {name: 'Philip', footedness: 'right', position: 'goalie'},
    {name: 'Logan', footedness: 'left', position: 'defense'},
    {name: 'Will', footedness: 'right', position: 'forward'}
];


var leftFootArr = playersArr.filter(function(player){
    return player.footedness === 'left';
});
console.log(leftFootArr);
/*This will log: 
[{name: 'Jason', footedness: 'left', position: 'forward'},
 {name: 'Logan', footedness: 'left', position: 'defense'}
];
 */