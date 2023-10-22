let scoreVvedenie = [20, 57, 10];
let scoreGit = [50, 15, 7];
let scoreJs = [25, 15, 12];
let Username = 'Landysh';
let Usersurname = 'Khusaenova';

let sumAverageScoreVvedenie = (scoreVvedenie.reduce((sum, current) => sum + current, 0)) / scoreVvedenie.length;
let sumAverageScoreGit = (scoreGit.reduce((sum, current) => sum + current, 0)) / scoreGit.length;
let sumAverageScoreJs = (scoreJs.reduce((sum, current) => sum + current, 0)) / scoreJs.length;

let averageScore = []; 
averageScore.push(sumAverageScoreVvedenie, sumAverageScoreGit, sumAverageScoreJs);
let averageScoreUser = (averageScore.reduce((sum, current) => sum + current, 0)) / averageScore.length;

// console.log(sumAverageScoreGit);
// console.log(sumAverageScoreVvedenie);
// console.log(sumAverageScoreJs);
// console.log(averageScore)

console.log(`Средний балл студента/студентки ${Username = Username.slice(0,1)}.${Usersurname}: ${Math.ceil(averageScoreUser)}`);




