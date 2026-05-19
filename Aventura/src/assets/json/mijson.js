import mainImage from '../imgs/imagen_principal.jpg';
import playa from '../imgs/playa.jpeg';
import montaña from '../imgs/montaña.jpeg';


export default [
    {
        "titulo": "principal", 
        "descripcion": "puedes elegir cualquier destino",
        "fondo": mainImage,
        "zonas": [
            {
                "x": 15,
                "y": 20,
                "width": 50,
                "height": 30,
                "destino": "playa"
            },

            {
                "x": 300,
                "y": 50,
                "width": 120,
                "height": 130,
                "destino": "montaña"
            }
        ]

    }
]