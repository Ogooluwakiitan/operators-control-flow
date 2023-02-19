//

let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";

let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";

let artsSubjects = "Government, Economics, Literature, History";

let generalSubjects = "English, Mathematics";

let classGroup = scienceSubjects;
if (classGroup == scienceSubjects) {
  console.log(scienceSubjects + generalSubjects);
} else if (classGroup == artsSubjects) {
  console.log(artsSubjects + generalSubjects);
} else if (classGroup == socialScienceSubjects) {
  console.log(socialScienceSubjects + generalSubjects);
} else classGroup == generalSubjects;
{
  console.log(generalSubjects);
}
// Physics, Chemistry, Biology, Technical DrawingEnglish, Mathematics
// English, Mathematics

// Question 5
let num = 20;
let pwr;
for (let index = 2; index < 20; index = index ** 2) {
  pwr = index;
}
console.log("The number " + pwr + " is the power of 2 nearest to " + num);
// The number 16 is the power of 2 nearest to 20
// console.log(pwr);
