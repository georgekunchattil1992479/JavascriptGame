//Setup website here
let hero = document.querySelector("#hero");
let villain = document.querySelector("#villain");
let lightning = document.querySelector("#lightning");

//Setup animation code here
let lightningStart  = {"left": "290px"};
let lightningEnd    = {"left": "900px"};
let options         = {"duration": 1000};


 //## Challenge - Hero Story, Part 2 : Shrink villian
    let hitTheVillain = () => {
    let villainStart = {
        transform: 'scale(1)', //scale() used to shrink the villian image
    };
    let villanEnd = {
       transform: 'scale(0)',
    };
    let options = {"duration": 1500};
    villain.animate([villainStart, villanEnd], options);
} 
//******************** */

/***  Hero Story, Pt.2 
  let hitTheVillain = () => {
    let villainStart = {
        transform: 'rotate(0deg)',
        opacity: 100
    };
    let villanEnd = {
       transform: 'rotate(1000deg)',
       opacity:0
    };
    let options = {"duration": 1500};
    villain.animate([villainStart, villanEnd], options);
} */

//Run animation code here
lightning.animate([lightningStart, lightningEnd],options).onfinish = hitTheVillain;




// ###########################################
/******###Challenge #1 ***************/
/* # hero character 'hero'
let lightningStart  = {"left": "290px", "top": "320px"};
let lightningEnd    = {"left": "900px", "top": "0px"};
let options         = {"duration": 800}; */

//# Replace character 'lego boy
/* let lightningStart  = {"left": "290px"};
let lightningEnd    = {"left": "900px"};
let options         = {"duration": 800};

//Run animation code here
lightning.animate([lightningStart, lightningEnd],options).onfinish = hitTheVillain;
 */
/**********************************************/
//#############################################