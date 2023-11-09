import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/blog.interface';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private arrPosts: IPost[];

  constructor() {
    this.arrPosts = [
      {
        titulo: "Descubriendo la programación",
        texto: "Hoy me sumergí en el mundo de la programación. Es sorprendente lo que se puede crear con solo unas líneas de código. ¡Emocionado por lo que vendrá!",
        autor: "Ana Martínez",
        imagen: "https://s3.amazonaws.com/wordpress-production/wp-content/uploads/sites/19/2016/09/practicas-para-ser-un-buen-programador.jpg",
        fecha: "2023-01-10",
        categoria: "Programación",
      },
      {
        titulo: "Recuerdos de mi viaje a París",
        texto: "Caminar por las calles parisinas fue como estar en un sueño. La Torre Eiffel iluminada por la noche es algo que siempre llevaré en mi corazón.",
        autor: "Carlos Sánchez",
        imagen: "https://i.pinimg.com/736x/f1/35/fc/f135fc7a58f2ea5f458e8265dbf92454.jpg",
        fecha: "2023-02-05",
        categoria: "Viajes",
      },
      {
        titulo: "Mi primera maratón",
        texto: "Después de meses de entrenamiento, finalmente crucé la línea de meta. ¡Una experiencia agotadora pero increíblemente gratificante!",
        autor: "Laura Pérez",
        imagen: "https://c8.alamy.com/compes/2r49565/una-mujer-corriendo-a-lo-largo-de-la-carretera-durante-un-maraton-en-leiden-2r49565.jpg",
        fecha: "2023-03-20",
        categoria: "Deportes",
      },
      {
        titulo: "Noche de música en vivo",
        texto: "Asistí a un concierto en vivo de mi banda favorita. La energía, la música y la conexión con la multitud crearon una experiencia inolvidable.",
        autor: "Alejandro Gutiérrez",
        imagen: "https://as1.ftcdn.net/v2/jpg/00/77/87/54/1000_F_77875439_KdYMIKXGEcGhfGniQL8tky98nhXeAeeL.jpg",
        fecha: "2023-04-15",
        categoria: "Música",
      },
      {
        titulo: "Aventuras en la naturaleza",
        texto: "Exploré un bosque desconocido y me encontré con paisajes asombrosos. La naturaleza siempre tiene formas de sorprenderme.",
        autor: "Elena Rodríguez",
        imagen: "https://img.freepik.com/foto-gratis/mujer-mochila-viaje_23-2148523876.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699401600&semt=ais",
        fecha: "2023-05-12",
        categoria: "Aventura",
      },
      {
        titulo: "Descubriendo la gastronomía asiática",
        texto: "Probé platos exquisitos de la cocina asiática. Cada bocado era una explosión de sabores. ¡Definitivamente quiero repetir la experiencia!",
        autor: "Javier López",
        imagen: "https://img.freepik.com/foto-gratis/tiro-medio-hombre-feliz-comiendo_23-2148972801.jpg?size=626&ext=jpg&ga=GA1.1.1016474677.1696723200&semt=ais",
        fecha: "2023-08-14",
        categoria: "Gastronomía",
      },
      {
        titulo: "Día de playa perfecto",
        texto: "Disfruté de un día soleado en la playa con amigos. Arena, olas y risas. Estos momentos simples son los que hacen la vida especial.",
        autor: "Carolina Martín",
        imagen: "https://media.istockphoto.com/id/1211311866/es/foto/elegante-mujer-casual-disfrutando-del-sol-en-la-playa-tropical.jpg?s=612x612&w=0&k=20&c=OZlhdPUXREiBpYjfoRhvLM5EAPAbOjbdMLHXJ_sjL3I=",
        fecha: "2023-09-21",
        categoria: "Playa",
      },
      {
        titulo: "Noche de juegos de mesa",
        texto: "Organizamos una noche de juegos de mesa con amigos. Risas, estrategias y competencia amistosa. ¡Definitivamente una de las mejores noches!",
        autor: "Andrés Ramírez",
        imagen: "https://i.blogs.es/4d349b/1000_1000_6242349634_83982afdf5_b/450_1000.jpg",
        fecha: "2023-10-05",
        categoria: "Juegos",
      },
    ];

  }

  getAll(): IPost[] {
    return this.arrPosts;
  }

  createPost(post: IPost) {
    this.arrPosts.push(post);
  }

  getByCategoria(categoria: string): IPost[] {
    const postCategoria: IPost[] = [];
    for (let post of this.arrPosts) {
      if (post.categoria === categoria) {
        postCategoria.push(post);
      }
    }
    return postCategoria;
  }

}
