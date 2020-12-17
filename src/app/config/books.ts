import { BooksGeneral, BooksNovelas, BooksFiccion } from '../classes/books.interface';

export const books: BooksGeneral[] = [
	{
      nombre: "HABÍA UNA VEZ UNA PERUANA",
      descripcion: "Las historias de más de cincuenta peruanas que con su talento musical, científico o literario, han hecho de nuestro país un espacio mejor para todas las mujeres.",
      img: "assets/img/habia_peruana.jpg",
      publicacion: "04-02-2019",
      editorial:"XILÓFONO",
	  autor:"AA.VV.",
	  precio:"65.90",
	  categoria:"General"
    },
	{
      nombre: "ASESINATO EN EL ORIENTE EXPRESS",
      descripcion: "El detective privado Hércules Poirot recibe un telegrama en el que se le pide que cancele sus compromisos y regrese a Inglaterra lo antes posible, por lo que decide viajar en el Orient Express que parte esa noche. Durante el viaje, Poirot conoce a un norteamericano llamado Ratchett, al que vio en el Tokatlian. Ratchett cree que su vida está en peligro y quiere contratar a Poirot, pero éste se niega diciendo a Ratchett que 'no le gusta su cara'.",
      img: "assets/img/asesinato_oriente.jpg",
      publicacion: "01-01-1939",
      editorial:"HERCULES",
	  autor:"CHRISTIE, AGATHA",
	  precio:"55.90",
	  categoria:"General"
    },
	{
      nombre: "PARA SIEMPRE, LARA JEAN",
      descripcion: "Lara Jean está disfrutando del su mejor año. Va a graduarse. Está completamente enamorada de su novio, Peter. Su padre está a punto de volver a casarse. Y Margot regresará a casa en verano justo a tiempo para asistir a la boda. Pero en el horizonte se acercan cambios y mientras Lara Jean se divierte ayudando en los preparativos de la boda, no puede dejar de pensar que tendrá que tomar decisiones muy pronto.",
      img: "assets/img/para-siempre.jpg",
      publicacion: "04-04-2018",
      editorial:"CROSSBOOKS",
	  autor:"HAN,JENNY",
	  precio:"80.00",
	  categoria:"General"
    }	
];

export const booksNovela: BooksNovelas[] = [
    {
        nombre: "EL PERFUME",
        descripcion: "Jean-Baptiste Grenouille es, gracias a su prodigioso sentido del olfato, el mejor elaborador de perfumes de todos los tiempos. Pero es un ser grotesco, deforme y repulsivo a los ojos de las mujeres. Como venganza a tanta ofensa sufrida a causa de su aspecto físico, elabora un raro perfume que subyuga la voluntad de quien lo huele. Así, Jean-Baptiste consigue el favor de las damas de la alta sociedad y el dominio de los poderosos. Existe un único problema: para obtener la esencia elemental de la mágica fragancia se necesitan los fluidos corporales de jovencitas vírgenes, y para ello el perfumista no duda en convertirse en un obsesivo, cruel y despiadado asesino.",
        img: "assets/img/perfume.jpg",
        publicacion: "15-07-2015",
        editorial:"BOOKET",
        autor:"SUSKIND,PATRICK",
        precio:"32.00",
        categoria:"Novela"
      },
      {
        nombre: "EL AMOR EN LOS TIEMPOS DEL CÓLERA",
        descripcion: "Cuando el refugiado de guerra antillano Jeremiah de Saint-Amour se suicida con un sahumerio de cianuro de oro, el doctor Juvenal Urbino atiende su caso (uno que creía perdido) y se asombra al saber que es el primer suicidio, en muchos años, no llevado a cabo por razones tan justificadas como el amor. Esa misma tarde el doctor Juvenal Urbino muere, tratando de alcanzar a su única mascota (un loro) y deja viuda a su amada esposa Fermina Daza. Al final del funeral, mientras Fermina está cerrando la puerta de su casa ve a Florentino Ariza, un espíritu del pasado que ahora arrastra consigo la promesa de un amor que él ha profesado, y así en un momento de inspiración le reitera su promesa de amor que ha cumplido durante cincuenta y un años, nueve meses y cuatro días.",
        img: "assets/img/el-amor-en-los-tiempos-del-colera.jpg",
        publicacion: "02-07-1985",
        editorial:"HOUSE",
        autor:"GARCÍA MÁRQUEZ,GABRIEL",
        precio:"45.00",
        categoria:"Novela"
      },
      {
        nombre: "ORGULLO Y PREJUICIO",
        descripcion: "Desarrolla el tema de cómo las jóvenes necesitan dejar a un lado su orgullo y sus prejuicios para conseguir un marido apropiado. Es una novela realista, con cierto aire de comedia o sátira social, donde quedan reflejadas las costumbres de las clases medias, rurales de la Inglaterra de la época que deben ocuparse para conseguir una determinada posición social.",
        img: "assets/img/orgullo-prejuicio.jpg",
        publicacion: "15-08-2014",
        editorial:"EDIMAT",
        autor:"AUSTEN,JANE",
        precio:"38.90",
        categoria:"Novela"
      }
];

export const booksFiccion: BooksFiccion[] = [
  {
    nombre: "CAZADORES DE SOMBRAS 1.",
    descripcion: "En el Pandemonium, la discoteca de moda de Nueva York, Clary sigue a un atractivo chico de pelo azul hasta que presencia su muerte a manos de tres jóvenes cubiertos de extraños tatuajes. Desde esa noche, su destino se une al de esos tres cazadores de sombras, guerreros dedicados a liberar a la tierra de demonios y, sobre todo, al de Jace, un chico con aspecto de ángel y tendencia a actuar como un idiota. Queridos Edward y Jacob: los adoro a los dos. Pero voy a pasar el fin de semana con Jace.",
    img: "assets/img/cazadores_sombras_1.jpg",
    publicacion: "01-11-2016",
    editorial:"BOOKET",
    autor:"CLARE,CASSANDRA",
    precio:"40.90",
    categoria:"Ficción"
  },
  {
    nombre: "CAZADORES DE SOMBRAS 2.",
    descripcion: "Clary Fray desearía que su vida volviera a la normalidad. Si pudiera dejar atrás el mundo de los cazadores de sombras, tendría más tiempo para Simón, su mejor amigo, que se está convirtiendo en algo más... Pero el mundo subterráneo que acaba de descubrir no está preparado para dejarla ir; en especial ese apuesto y exasperante Jace....Para complicar las cosas, una ola de asesinatos sacude la ciudad. Clary cree que Valentine está detrás de esas muertes, pero ¿cómo podrá detenerlo si Jace parece dispuesto a traicionar todo en lo que cree para ayudar a su padre?.",
    img: "assets/img/cazadores_sombras_2.jpg",
    publicacion: "01-06-2017",
    editorial:"BOOKET",
    autor:"CLARE,CASSANDRA",
    precio:"40.90",
    categoria:"Ficción"
  },
  {
    nombre: "CAZADORES DE SOMBRAS 3.",
    descripcion: "Arriesgando su vida, Clary no duda en entrar en la Ciudad de Cristal sin permiso. Además, ha conocido a un misterioso y encantador cazador de sombras llamado Sebastián y está decidida a descubrir los secretos de su pasado familiar.",
    img: "assets/img/cazadores_sombras_3.jpg",
    publicacion: "15-10-2018",
    editorial:"BOOKET",
    autor:"CLARE,CASSANDRA",
    precio:"40.90",
    categoria:"Ficción"
  }
];