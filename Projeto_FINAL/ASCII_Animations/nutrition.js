const sleepFunction = require("../lib/sleep");

exports.nutritionAnimation = () => {
  console.clear();
  console.log(`
                          ____
              .----------'    '-.
             /  .      '     .   \\\\
            /        '    .      /|
           /      .             \\ /
          /  ' .       .     .  || |
         /.___________    '    / //
         |._          '------'| /|
         '.............______.-' /  
         |-.                  | /
         '"""""""""""""-.....-'
`);

  sleepFunction.sleep(400);

  console.clear();
  console.log(`

             _....----"""----...._
          .-'  o    o    o    o   '-.
         /  o    o    o         o    \\
        /     o      o   o     o    o \\
      _|   o   o    o      o  o     o  |_
     / '''-----.................-----''' \\
     \\___________________________________/
       \\~'-'.__.'-~'._.~'-'~.-~.__.~'-'/
        \\                             /
         '-._______________________.-'
`);

  sleepFunction.sleep(400);

  console.clear();
  console.log(`

              __.......__
         ,-"''           ''"-.
         |;------.-'      _.-'\\
         ||______|'  ' ' '    |
         ||------|            |
        _;|______|            |_
      ('''"""""""|            |'')
      \\'._       '-.........-'_.'/
       '._'""===........===""'_.'
          ''"""=========="""''
`);

  sleepFunction.sleep(400);

  console.clear();
  console.log(`

                     ___
            __..--"".--.'""--..__
      _..--"   _.--/    \\''--.   "--..
    .'       .--.  '-..-'     ) (''\\  '.
   |   .--''/    \\-'''-. __.-' _.'  )   |
   ;\\ (     '-..-'      )  _.-' _.-'   /;
    \\'-:-._    _.._.-'''  ( ,.-'   _.-'/
     '-._ ''--'..___     __:.--''''_.-'
         ''--..___  '''''  __..--''
                  '''''''''
`);

  sleepFunction.sleep(400);
};
