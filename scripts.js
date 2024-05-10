const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


//ENUMS
const GAME_OPTIONS = {
    PEDRA:  'pedra',
    PAPEL: 'papel',
    TESOURA:'tesoura'
}



const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {

    const choices = [GAME_OPTIONS.PAPEL, GAME_OPTIONS.PEDRA, GAME_OPTIONS.TESOURA]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('humano: ' + human + "Robo: " + machine)

    if (human === machine) {
        result.innerHTML = "Empate!"
    } else if (
        (human === GAME_OPTIONS.PAPEL && machine === GAME_OPTIONS.PEDRA) ||
        (human === GAME_OPTIONS.PEDRA && machine === GAME_OPTIONS.TESOURA) ||
        (human === GAME_OPTIONS.TESOURA && machine === GAME_OPTIONS.PAPEL)
    ) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu!"
    }


}




/*const number = [1,2, 3, 4, 5, 6, 7, 8]

const double = number.map((item) => item * 2 )

const list = [

    {name: 'Rodolfo', vip: true},
    {name: 'Maria', vip: false},
    {name: 'joão', vip: false},
    {name: 'Jose', vip: false},
    {name: 'Karol', vip: true},
    {name: 'Julio', vip: true},
    {name: 'Jorge', vip: true},
    {name: 'Jackeline', vip: true},

]
 
const newList = list.map(user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }
    return newUser
    
}) 

console.log(newList)*/




/*const students = [

    {name: 'Rodolfo', testGrade: 7},
    {name: 'Rodolfo', testGrade: 2},
    {name: 'Rodolfo', testGrade: 6},
    {name: 'Rodolfo', testGrade: 1},
    {name: 'Rodolfo', testGrade: 8},
    {name: 'Rodolfo', testGrade: 4},
    {name: 'Rodolfo', testGrade: 3},
    {name: 'Rodolfo', testGrade: 5},

]

const newstudents = students.map(student =>{
    return{ 
        name: student.name,
        studentStatus: student.testGrade >= 5 ? 'Promovido' : 'Reprovado'
    }
})

console.log(newstudents)*/


