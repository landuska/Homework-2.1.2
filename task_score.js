let scoreVvedenie = [20, 30, 10];
let scoreGit = [50, 15, 7];
let scoreJs = [25, 15, 10];
let averageScore;
let Username = 'Landysh';
let Usersurname = 'Khusaenova';

let sumScoreVvedenie = scoreVvedenie.reduce((sum, current) => sum + current, 0);
let sumScoreGit = scoreGit.reduce((sum, current) => sum + current, 0);
let sumScoreJs = scoreJs.reduce((sum, current) => sum + current, 0);
averageScore = (sumScoreVvedenie + sumScoreGit + sumScoreJs) / 3;
//console.log(sumScoreGit);
//console.log(sumScoreVvedenie);
//console.log(sumScoreJs);
console.log(`Средний балл студента/студентки ${Username} ${Usersurname}: ${Math.ceil(averageScore)}`);



