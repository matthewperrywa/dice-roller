/**
 * Description: Rolls the amount of dice with the number of sides that are specified.
 * Pre-Condition: Both form fields must be filled with positive numbers.
 * Post-Condition: The results of the dice roll are displayed below the button.
 */
function buttonPressed(){
    let diceList = document.getElementById("diceList");
    let dice = document.querySelectorAll("#diceList li");
    for(let i = 0; i < dice.length; i+=1){
        diceList.removeChild(dice[i]);
    }
    let num = document.getElementById("numOfDice").value;
    for(let i = 0; i < num; i+=1){
        let li = document.createElement("li");
        let sides = document.getElementById("numOfSides").value;
        li.innerText = Math.floor(Math.random() * sides) + 1;
        document.getElementById("diceList").appendChild(li);
    }
}