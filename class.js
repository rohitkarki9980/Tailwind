class Student {
    constructor(firstName,lastName){
    this.fName=firstName,
    this.lName=lastName
    }
    bioData(){
        console.log(`my name is ${this.fName} ${this.lName}`);
    }
}

class Player extends Student{
    constructor(firstName,lastName,game){
        super(firstName,lastName)
        this.game=game
    }
    player_Data(){
        return  super.bioData()
    }
}

const rollOne =new Player("rohit","karki")
const rollTwo=new Player("Nona","Dhakal")


console.log(rollOne.player_Data(),
rollTwo.player_Data());


