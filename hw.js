const HW=require('./hw(1).json');

console.log("ID");
for(let i=0;i<HW.length;i++){
console.log(HW[i].id);
}
for(let i=0;i<HW.length;i++){
    for(let z=0;z<(HW[i].batters.batter).length;z++){
    const b=HW[i].batters;
     console.log(b.batter[z].id);
}}
for(let i=0;i<HW.length;i++){
    for(let z=0;z<(HW[i].topping).length;z++){
    const t=HW[i].topping;
     console.log(t[z].id);
}}



console.log("\nThe type of batters");
for(let i=0;i<HW.length;i++){
    for(let z=0;z<(HW[i].batters.batter).length;z++){
    const b=HW[i].batters;
     console.log(b.batter[z].type);
}}



console.log("\nThe type of Topping");
for(let i=0;i<HW.length;i++){
    for(let z=0;z<(HW[i].topping).length;z++){
    const t=HW[i].topping;
     console.log(t[z].type);
}}


console.log("\nThe sum of ppu");
var sumOfppu=0;
for(let i=0;i<HW.length;i++){
    const element=(HW[i].ppu);
    sumOfppu+=(element);
    console.log(sumOfppu);
}


console.log("\nThe average of ppu");
var avgOfppu=0;
for(let i=0;i<HW.length;i++){
    const element=(HW[i].ppu);
    avgOfppu+=(element/HW.length);
    console.log(avgOfppu);
}












