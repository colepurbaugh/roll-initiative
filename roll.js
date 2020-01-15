var readlineSync = require('readline-sync');

var bug = {
  name: "Bugbear",
  hp: [5, 8, 0],
  ac: 16,
  xp: 200,
  stats: [2, 2, 1, -1, 0, -1]
}
var com = {
  name: "Commoner",
  hp: [1, 8, 0],
  ac: 10,
  xp: 10,
  stats: [0, 0, 0, 0, 0, 0]
}
var cul = {
  name: "Cultist",
  hp: [2, 8, 0],
  ac: 12,
  xp: 25,
  stats: [0, 1, 0, 0, 0, 0]
}
var dop = {
  name: "Doppelganger",
  hp: [8, 8, 0],
  ac: 14,
  xp: 700,
  stats: [0, 4, 2, 0, 1, 2]
}
var evi = {
  name: "Evil Mage",
  hp: [5, 8, 0],
  ac: 12,
  xp: 200,
  stats: [-1, 2, 0, 3, 1, 0]
}
var fla = {
  name: "Flameskull",
  hp: [9, 4, 0],
  ac: 13,
  xp: 1100,
  stats: [-5, 3, 2, 3, 0, 0]
}
var gho = {
  name: "Ghoul",
  hp: [5, 8, 0],
  ac: 12,
  xp: 200,
  stats: [1, 2, 0, -2, 0, -2]
}
var gia = {
  name: "Giant Spider",
  hp: [4, 10, 4],
  ac: 14,
  xp: 200,
  stats: [2, 3, 1, -4, 0, -3]
}
var gob = {
  name: "Goblin",
  hp: [2, 6, 0],
  ac: 15,
  xp: 50,
  stats: [-1, 2, 0, 0, -1, -1]
}
var gri = {
  name: "Grick",
  hp: [6, 8, 0],
  ac: 14,
  xp: 450,
  stats: [2, 2, 0, -4, 2, -3]
}
var hob = {
  name: "Hobgoblin",
  hp: [2, 8, 2],
  ac: 18,
  xp: 100,
  stats: [1, 1, 1, 0, 0, -1]
}
var mor = {
  name: "Mormesk the Wraith",
  hp: [6, 8, 18],
  ac: 13,
  xp: 700,
  stats: [-2, 3, 3, 1, 2, 2]
}
var nez = {
  name: "Nezznar the Black Spider",
  hp: [6, 8, 0],
  ac: 11,
  xp: 450,
  stats: [-1, 1, 0, 3, 2, 1]
}
var not = {
  name: "Nothic",
  hp: [6, 8, 18],
  ac: 15,
  xp: 450,
  stats: [2, 3, 3, 1, 0, -1]
}
var och = {
  name: "Ochre Jelly",
  hp: [6, 10, 0],
  ac: 8,
  xp: 450,
  stats: [2, -2, 2, -4, -2, -5]
}
var ogr = {
  name: "Ogre",
  hp: [7, 10, 21],
  ac: 11,
  xp: 450,
  stats: [4, -1, 3, -3, -2, -2]
}
var orc = {
  name: "Orc",
  hp: [2, 8, 6],
  ac: 13,
  xp: 100,
  stats: [3, 1, 3, -2, 0, 0]
}
var owl = {
  name: "Owlbear",
  hp: [7, 10, 21],
  ac: 13,
  xp: 700,
  stats: [5, 1, 3, -4, 1, -2]
}
var red = {
  name: "Redbrand Ruffian",
  hp: [3, 8, 3],
  ac: 14,
  xp: 100,
  stats: [0, 2, 1, -1, -1, 0]
}
var sil = {
  name: "Sildar Hallwinter",
  hp: [5, 8, 5],
  ac: 16,
  xp: 200,
  stats: [1, 0, 1, 0, 0, 0]
}
var ske = {
  name: "Skeleton",
  hp: [2, 8, 4],
  ac: 13,
  xp: 50,
  stats: [0, 2, 2, -2, -1, -3]
}
var spe = {
  name: "Spectator",
  hp: [6, 8, 12],
  ac: 14,
  xp: 700,
  stats: [-1, 2, 2, 1, 2, 0]
}
var sti = {
  name: "Stirge",
  hp: [1, 4, 0],
  ac: 14,
  xp: 25,
  stats: [-3, 3, 0, -4, -1, -2]
}
var twi = {
  name: "Twig Blight",
  hp: [1, 6, 1],
  ac: 13,
  xp: 25,
  stats: [-2, 1, 1, -3, -1, -4]
}
var wol = {
  name: "Wolf",
  hp: [2, 8, 2],
  ac: 13,
  xp: 50,
  stats: [1, 2, 1, -4, 1, -2]
}
var you = {
  name: "Young Green Dragon",
  hp: [16, 10, 48],
  ac: 18,
  xp: 3900,
  stats: [4, 1, 3, 3, 1, 2]
}
var zom = {
  name: "Zombie",
  hp: [3, 8, 9],
  ac: 8,
  xp: 50,
  stats: [1, -2, 3, -4, -2, -1]
}

//Calculates and returns initiative value of "creature"
var initiative = function (creature){
  creature = eval(creature);
  var roll = Math.floor(Math.random() * (20 - 1)) + 1;
  var modifier = creature.stats[1];
  return (roll + modifier);
}

//Calculates and returns hit points of "creature"
var hitPoints = function (creature){
  creature = eval(creature);
  var tempDie = 0;
  var hpTotal = 0;
  for (var i = 0; i < (creature.hp[0]); i++){
    tempDie = Math.floor(Math.random() * (creature.hp[1] - 1)) + 1;
    hpTotal += tempDie;
  };
  return hpTotal + creature.hp[2];
}

//creature is the first three letters of the creature's name
//x is how many creatures you want to spawn
var spawn = function(creature, x){
  creature = eval(creature);
  console.log(creature.name, "stats |", "Str:", creature.stats[0], "|", "Dex", creature.stats[1], "|", "Con", creature.stats[2], "|", "Int", creature.stats[3], "|", "Wis", creature.stats[4], "|", "Cha",creature.stats[5], "|", "AC", creature.ac, "|");
  for(i = 0; i < x; i++){
    console.log(creature.name, i, ":", "initiative =", initiative(creature), ",", "hit points =", hitPoints(creature));
  }
  console.log("XP total:", x * creature.xp);
}



while(true){
  var creatureQueryName = readlineSync.question('What Creature? ');
  var creatureQueryQuantity = readlineSync.question('How Many? ');
  spawn(creatureQueryName, creatureQueryQuantity);
}

