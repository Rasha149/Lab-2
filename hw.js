const HW=require('./hw(1).json');
allID();
batters();
topp();
sum();
avg();


function allID(){
console.log("ID");
for(let i=0;i<HW.length;i++){
    for(let z=0;z<(HW[i].batters.batter).length;z++){
    const b=HW[i].batters;
    const t=HW[i].topping;
     console.log(HW[i].id,b.batter[z].id,t[z].id);
}}}




function batters(){
console.log("\nThe type of batters");
for(let i=0;i<HW.length;i++){
    for(let z=0;z<(HW[i].batters.batter).length;z++){
    const b=HW[i].batters;
     console.log(b.batter[z].type);
}}}


function topp(){
console.log("\nThe type of Topping");
for(let i=0;i<HW.length;i++){
    for(let z=0;z<(HW[i].topping).length;z++){
    const t=HW[i].topping;
     console.log(t[z].type);
}}}

function sum(){
console.log("\nThe sum of ppu");
var sumOfppu=0;
for(let i=0;i<HW.length;i++){
    const element=(HW[i].ppu);
    sumOfppu+=(element);
   
} console.log(sumOfppu);}

function avg(){
console.log("\nThe average of ppu");
var avgOfppu=0;
for(let i=0;i<HW.length;i++){
    const element=(HW[i].ppu);
    avgOfppu+=(element/HW.length);}
    console.log(avgOfppu);}











