//TRACCIA 1

// let v= 30;
// if (v<18){
//     console.log('Insufficiente');
// }else if(v>=18 && v<21){
//     console.log('Sufficiente'); 
// }else if(v>=21 && v<24){
//     console.log('Buono');
// }else if(v>=24 && v<27){
//     console.log('Distinto');
// }else if(v>=27 && v <= 29){
//     console.log('Ottimo');
// }else if(v == 30){
//     console.log('Eccellente');
// }else{
//     console.log('Voto non valido');
// };
 

//SWITCH CASE
// let v=31;
// switch(true){
//     case (v<18):
//      console.log('Insufficiente');
//     break;    
//     case(v>=18 && v<21):
//     console.log('Sufficiente');
//     break;
//     case(v>=21 && v<24):
//     console.log('Buono');
//     break;
//     case(v>=24 && v<27):
//     console.log('Distinto');
//     break;
//     case(v>=27 && v<=29):
//     console.log('Ottimo');
//     break;
//     case (v ==30):
//     console.log('Eccellente');
//     break;
//     default: console.log('Voto inserito non valido');
//     break;
// }
//TRACCIA 2
// let gradi = -5;

// if(gradi < -10){
//     console.log('copriti.. ancora ti raffreddi');
// }else if(gradi < 0) {
//     console.log(`Non è tanto il freddo quanto l'umidità`);
// }else if(gradi < 20){
//     console.log('Non ci sono più le mezze stagioni'); 
// }else if(gradi < 30 && gradi>20){
//     console.log('Mi dia una peroni sudata!');
// }else if (gradi >= 30 && gradi <45) {
//     console.log('lu mare, lu sole, lu ventu');
// }else{
//     console.log('Fa caldissimo');
// };

//SWITCH CASE
// let gradi=-10;
// switch(true){
//     case (gradi< -10):
//      console.log('Copriti.. ancora fa freddino');
//     break;    
//     case(gradi<0):
//     console.log(`Non è tanto il freddo quanto l'umidità`);
//     break;
//     case(gradi < 20):
//     console.log('Non ci sono più le mezze stagioni');
//     break;
//     case(gradi<30 && gradi > 20):
//     console.log('Mi dia una peroni sudata');
//     break;
//     case(gradi >=30 && gradi < 45):
//     console.log('Lu mare, lu sole, lu ventu');
//     break;
//     default: console.log('Temperatura inserita non valida');
//     break;
// }

//TRACCIA 3
// let numero= 2
// for (let i=0; i<= 10; i++){
//     console.log(i*2);    
// };

//TRACCIA 4
// let counter= 0;
// let accumulatore = 0;

// for (let i = 1; i <= 20; i++){
//     if (i % 2 == 0){
//       console.log(`${i} è un numero pari`);  
//   }else{
//     accumulatore++
//     counter = counter +i
// }
// }
// console.log(`La media di tutti i numeri dispari è ${counter/accumulatore}`);

//TRACCIA 5
// let num;
// do{
//     num = parseInt(prompt('Inserisci un numero'));
// }while (num!= 1 && num != 2 && num !=3)
//     switch(num){
//         case 1:
//             console.log(`E' stata selezionata l'acqua`);
//             break;
//         case 2:
//             console.log(`E' stata selezionata Coca cola`);
//             break;
//         case 3:
//             console.log(`E' stata seleziona Birra`);
                
//     }