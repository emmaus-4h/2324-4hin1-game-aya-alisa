/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var health = 100;  // health van speler

var vijandX = 600;
var vijandY = 500;


/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler
  if (keyIsDown(RIGHT_ARROW)) {
    spelerX = spelerX + 5;
  }

  if (keyIsDown(LEFT_ARROW)) {
    spelerX = spelerX - 5;
  }

  if (keyIsDown(UP_ARROW)) {
    spelerY = spelerY - 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    spelerY = spelerY + 5;
  }



  // vijand

  var speed = 2.5

  if (vijandX < spelerX) {
    vijandX += speed;
  }

  else if (vijandX > spelerX) {
    vijandX -= speed;
  }

  if (vijandY < spelerY) {
    vijandY += speed;
  }

  else if (vijandY > spelerY) {
    vijandY -= speed;
  }

  // kogel
}

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
  if (spelerX - vijandX < 50 &&
    spelerX - vijandX > -50 &&
    spelerY - vijandY < 50 &&
    spelerY - vijandY > -50) {
    console.log("Botsing"); 
    health = health -1;
  }

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond

  // vijand
  fill('pink')
  ellipse(vijandX - 25, vijandY - 25, 50, 50);

  // kogel

  // speler
  fill("yellow");
  ellipse(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX - 30, spelerY - 32, 10, 10);

  // punten en health

};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    background('blue')
    verwerkBotsing();
    tekenAlles();
    
    if (health <= 0) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("game over");
    textSize(50);
    fill("white");
    text("GAME OVER :( Druk op spatie!", 100, 100);
    if (keyIsDown(32)) { // spatie
      spelStatus = UITLEG;
    }
  }

  if (spelStatus === UITLEG) {
    // teken uitleg scherm
    
    console.log("uitleg");
    textSize(50);
    fill("blue");
    rect(0, 0, 1280, 720);
    fill("white");
    text("UITLEG: Druk op spatie voor start =D", 200, 150);
    if(keyIsDown(13)) {
      spelStatus = SPELEN;
    }
   
  }
}
          