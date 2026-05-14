import sentadillas from './assets/imgs/sentadillas.png';
import puente from './assets/imgs/puente.png';
import laterales from './assets/imgs/laterales.png';
import brazos1 from './assets/imgs/brazos1.jpg';
import hombros from './assets/imgs/brazos2.jpg';
import codos from './assets/imgs/brazos3.jpg';

export default[
    { 
         "titulo": "Piernas ",
         "rutina":[
            {
               "ejercicio": "Sentadillas",
               "img": sentadillas,
               "repeticiones": 5
            },
            {
               "ejercicio": "Laterales",
               "img": laterales,
               "repeticiones": 9
            },
            {
               "ejercicio": "Puente",
               "img": puente,
               "repeticiones": 5
            }
         ]
     },
     { 
         "titulo": "Brazos",
         "rutina":[
            {
               "ejercicio": "Brazos 1",
               "img": brazos1,
               "repeticiones": 10
            },
            {
               "ejercicio": "Hombros",
               "img": hombros,
               "repeticiones": 13
            },
            {
               "ejercicio": "Codos",
               "img": codos,
               "repeticiones": 7
            }
         ]
     } 
]