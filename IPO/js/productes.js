var productes={
	"producte1":{
		"nom": "Canon EOS 1200D",
		"preu": "500 €",
		"resum": "Canon EOS 1200D - Cámara réflex digital de 18 Mp (pantalla 3\", estabilizador óptico, kit con objetivo EF-S 18-55mm f/3.5 IS II), negro.",
		"descripció": "Sensor de 18 Mp con tamaño APS-C y tecnología CMOS, EF-S 18-55mm f/3.5 IS II, Pantalla de 3\" pulgadas y estabilizador de imagen óptico, Dispara con el ajuste correcto gracias al Modo de Escenas Automático Inteligente, Sencilla Guía de funciones incorporada y aplicación Guía Canon EOS, Mejora tus recuerdos y consigue resultados artísticos con los Filtros Creativos",
		"imatge": "images/productes/producte1.png"
	},
	"producte2":{
		"nom": "Play Station 4 500GB",
		"preu": "300 €",
		"resum": "Con PS4 disfrutarás de los videojuegos más alucinantes y trepidantes de esta generación de videoconsolas con una fluidez bestial.",
		"descripció": "Los números no mienten. La videoconsola Play 4 de 500GB es la consola más potente de la llamada Next Gen al incorporar la última tecnología y aplicarla también a su pad. La interacción de la videoconsola con el pad llega hasta cotas nunca antes vistas en una PlayStation. El Hiperrealismo ha llegado a los juegos de PS4. Los avances tecnológicos permiten a la PS4 hacer cosas sorprendentes. Por ejemplo, que los LED del pad  te avisen del estado de salud de tu personaje,  guiar tus movimientos a través del panel táctil. Disfruta del sonido envolvente gracias a sus altavoces integrados. Este pad hace todo esto y además cuenta con todas las virtudes de los anteriores modelos de PlayStation. Y si todo esto te parece poco, comparte tus partidas con tan solo pulsar el botón Share y presume de lo pro que eres jugando con tu PlayStation 4. Puedes jugarlo todo en tu PS4 por las ofertas que PlayStation Plus. Comprar PlayStation 4 es entrar de lleno en un mundo de fantasía, hechizos y espadas, carreras trepidantes, acción a raudales… todos los géneros y los gráficos más hiperrealistas que hayas visto antes están en tu Play 4. Emitir  tus partidas de PS4 en tus juegos favoritos es fácil y puedes hacerlo  directamente en streaming en Twitch o Youtube, echar una mano a tus colegas a pasarse un jefe final podrás hacerlo incluso sin tener el juego.",
		"imatge": "images/productes/producte2.jpg"
	},
	"producte3":{
		"nom": "Samarreta Nike 2016",
		"preu": "25 €",
		"resum": "La camiseta de manga larga NikeCourt para hombre incorpora un estampado desteñido y un llamativo logotipo que ofrecen un impresionante y moderno look de tenis",
		"descripció": "Tejido: 100 % algodón, Lavar a máquina, De importación",
		"imatge": "images/productes/producte3.jpg"
	},
	"producte4":{
		"nom": "Moble Fusta de pí 2 portes",
		"preu": "90 €",
		"resum": "Birlea Corona - Mueble esquinero para televisión (madera de pino encerada)",
		"descripció": "Acabado encerado, contrastando bisagras, Manijas negras adornadas, Mueble tv estilo tradticional de pino macizo",
		"imatge": "images/productes/producte4.jpg"
	},
	"producte5":{
		"nom": "Pala de padel Head 2016",
		"preu": "150 €",
		"resum": "Pertenece a la colección 2016 de palas Head. Pala destinada a jugadores de nivel profesional y avanzado. Modelo utilizado por el jugador profesional Sanyo Gutiérrez para la temporada 2016.",
		"descripció": "Graphene XT: el ya conocido Graphene es ahora utilizado de una manera más eficiente. Las celdas son ahora mayores y son un 30% más fuertes que las del Graphene de primera generación. El GrapheneXT se usa en el marco y en la cara de la pala logrando aún más potencia y durabilidad. Chip (Circular Holes Intelligent Pattern): nueva disposición de los agujeros con tamaños variables junto con el Comfort System aporta mayor punto dulce (más tolerancia, confort y control) y mayor rigidez en el impacto (más potencia). Flexible Chassis: es un nueva construcción en el tubular de la pala para lograr una unión más suave con la goma y obtener así un mayor confort y punto dulce. Este tubular, construido a base de capas de carbono premoldeadas, se diseñan pensando en las diferentes zonas del marco para dar mayor o menor rigidez/flexión a cada zona según las necesidades. De esta forma, el marco es rígido en las zonas donde hay más torsión y es flexible en las zonas donde se necesita un mayor punto dulce y comodidad.    Goma ULTRA SOFT: desarrollada a partir de la ya conocida goma N2, ahora con una densidad nueva y memoria más rápida para mejorar elsonido y de la jugabilidad. Anti Shock Skin: lámina hecha a base de un polímero de alta duración y resistente a los arañazos. Colocado sobre el marco, protege de los rasguños y de los golpes.",
		"imatge": "images/productes/producte5.jpg"
	},
	"producte6":{
		"nom": "Transportador de mascotes",
		"preu": "20 €",
		"resum": "El transportín para perros y gatos TK-Pet es un transportín de plástico de primera calidad, compacto y ligero para el cómodo transporte de animales.",
		"descripció": "Este transportín para mascotas incluye una puerta de metal con un cierre de seguridad con cuatro ganchos. Además, tiene un asa de plástico integrada en la parte superior para llevarlo cómodamente. Por otra parte, la puerta frontal y las rejillas laterales aseguran una correcta circulación del aire dentro del habitáculo. Es un accesorio muy práctico y sencillo de montar, ya que no tiene enganches laterales. Tan solo hay que encajar la parte superior con la inferior y cerrar las pestañas. TK-Pet ha elegido un diseño moderno para este transportín que está disponible en rojo, azul y pistacho. Pídelo ya y déjate sorprender por el color que te toque ya que este producto viene en colores surtidos.La base del transportín TK-Pet para perros y gatos tiene unos surcos que mantienen al animal lejos de la suciedad y las humedades. Puede desmontarse para guardarlo sin que ocupe mucho espacio y es de fácil limpieza y desinfección. TK-Pet es una marca especializada en productos para mascotas de una excelente calidad y a unos precios aptos para todos los bolsillos, de venta exclusiva en Tiendanimal.",
		"imatge": "images/productes/producte6.jpg"
	}	
};

var idProd= getId();
	
function getId(){
	"use strict";
	var id= location.href.split("?id=");
	if (location.href.indexOf("?id=") <0){
		return "producte1";
	}else{
		return "producte"+id[1];	
	}
}