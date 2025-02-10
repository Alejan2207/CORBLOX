import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {

  constructor() { }

  users: any[] = [
    { id: 1, name: 'User 1', avatar: 'assets/images/teto.png' },
    { id: 2, name: 'User 2', avatar: 'assets/images/teto.png' },
    { id: 3, name: 'User 3', avatar: 'assets/images/teto.png' },
    { id: 4, name: 'User 4', avatar: 'assets/images/teto.png' },
    { id: 5, name: 'User 5', avatar: 'assets/images/teto.png' },
    { id: 6, name: 'User 6', avatar: 'assets/images/teto.png' },
    { id: 7, name: 'User 7', avatar: 'assets/images/teto.png' },
    { id: 8, name: 'User 8', avatar: 'assets/images/teto.png' },
    { id: 9, name: 'User 9', avatar: 'assets/images/teto.png' },
    { id: 10, name: 'User 10', avatar: 'assets/images/teto.png' },
  ];

  games: any[] = [
    { titulo: 'Minecraft', subtitle: 'juego de cubitos hecho por mojang', descripcion: 'LA BATALLA YA A EMPEZADO EN UN MUNDO MUY CUADRADO', imagen: 'assets/images/minecraft.png' },
    { titulo: 'Fornite', subtitle: 'juego de batallas', descripcion: 'MATATE ENTRE 100 PERSONAS EN UNA ISLA', imagen: 'assets/images/fortnite.png' },
    { titulo: 'Apex', subtitle: 'juego de batallas', descripcion: 'MATATE ENTRE 100 PERSONAS EN UNA ISLA PERO CON MAS PODERES', imagen: 'assets/images/apex.png' },
    { titulo: 'GTA', subtitle: 'juego de mundo abierto', descripcion: 'AGARRATE CON LA CHOTA CON 5 ESTRELLAS Y VIVE PARA CONTARLO', imagen: 'assets/images/gta.png' },
    { titulo: 'Roblox', subtitle: 'juego de creacion de juegos', descripcion: 'PONTE A CREAR O JUEGA LOS JUEGOS DE NUESTRA COMUNIDAD', imagen: 'assets/images/roblox.png' },
    { titulo: 'Jojos Bizarre Adventure All Star Battle', subtitle: 'juego de peleas', descripcion: '¡¡¡SE ME ATORO LA TULA EN EL CIERRE!!!', imagen: 'assets/images/jojo.png' },
    { titulo: 'Cinco noches con alfredo', subtitle: 'juego de terror', descripcion: 'SOBREVIVE COMO GUARDIA DE SEGURIDAD EN UNA PIZERRIA DURANTE 5 NOCHES', imagen: 'assets/images/cinco.png' },
  ];

  recommendedGames = [
    {
      titulo: 'Call of Duty Black Ops 2',
      subtitle: 'juego de disparos y mucha historia',
      descripcion: 'JUEGO DE DISPAROS Y MUCHA HISTORIA',
      imagen: 'assets/images/cod.png',
      tags: ['shooter', 'accion', 'estrategia', 'aventura']
    },
    {
      titulo: 'Jojos Bizarre Adventure All Star Battle',
      subtitle: 'juego de peleas',
      descripcion: '¡¡¡SE ME ATORO LA TULA EN EL CIERRE!!!',
      imagen: 'assets/images/jojo.png',
      tags: ['peleas', 'anime', 'acción']
    },
    {
      titulo: 'Minecraft',
      subtitle: 'juego de cubitos hecho por mojang',
      descripcion: 'LA BATALLA YA A EMPEZADO EN UN MUNDO MUY CUADRADO',
      imagen: 'assets/images/minecraft.png',
      tags: ['sandbox', 'aventura', 'supervivencia']
    },
    {
      titulo: 'Fornite',
      subtitle: 'juego de batallas',
      descripcion: 'MATATE ENTRE 100 PERSONAS EN UNA ISLA',
      imagen: 'assets/images/fortnite.png',
      tags: ['battle royale', 'shooter', 'multijugador']
    },
    {
      titulo: 'Apex',
      subtitle: 'juego de batallas',
      descripcion: 'MATATE ENTRE 100 PERSONAS EN UNA ISLA PERO CON MAS PODERES',
      imagen: 'assets/images/apex.png',
      tags: ['battle royale', 'shooter', 'habilidades']
    },
    {
      titulo: 'GTA',
      subtitle: 'juego de mundo abierto',
      descripcion: 'AGARRATE CON LA CHOTA CON 5 ESTRELLAS Y VIVE PARA CONTARLO',
      imagen: 'assets/images/gta.png',
      tags: ['mundo abierto', 'acción', 'aventura']
    },
    {
      titulo: 'Roblox',
      subtitle: 'juego de creacion de juegos',
      descripcion: 'PONTE A CREAR O JUEGA LOS JUEGOS DE NUESTRA COMUNIDAD',
      imagen: 'assets/images/roblox.png',
      tags: ['creatividad', 'multijugador', 'sandbox']
    },
    {
      titulo: 'Cinco noches con alfredo',
      subtitle: 'juego de terror',
      descripcion: 'SOBREVIVE COMO GUARDIA DE SEGURIDAD EN UNA PIZERRIA DURANTE 5 NOCHES',
      imagen: 'assets/images/cinco.png',
      tags: ['terror', 'supervivencia', 'estrategia']
    },
    {
      titulo: 'The Legend of Zelda: Tears of the Kingdom',
      subtitle: 'juego de aventura épica',
      descripcion: 'CONSTRUYE MAQUINAS LOCAS Y LANZATE DESDE EL CIELO PORQUE YOLO',
      imagen: 'assets/images/zelda.png',
      tags: ['aventura', 'acción', 'mundo abierto']
    },
    {
      titulo: 'Pokemon Escarlata/Púrpura',
      subtitle: 'juego de entrenadores pokemon',
      descripcion: 'ATRAPA BICHOS MUTANTES Y HAZLOS PELEAR, PERO AHORA EN MUNDO ABIERTO Y CON BUGS',
      imagen: 'assets/images/pokemon.png',
      tags: ['rpg', 'aventura', 'mundo abierto']
    },
    {
      titulo: 'Lethal Company',
      subtitle: 'juego de terror cooperativo',
      descripcion: 'MUERE DE MIEDO M  IENTRAS RECOGES CHATARRA CON TUS COMPAS EN LUNAS ALIENÍGENAS',
      imagen: 'assets/images/lethal.png',
      tags: ['terror', 'multijugador', 'supervivencia']
    },
    {
      titulo: 'Crash Bandicoot',
      subtitle: 'juego de aventura,epic',
      descripcion: 'CONSTRUYE MAQUINAS LOCAS Y LANZATE DESDE EL CIELO PORQUE YOLO',
      imagen: 'assets/images/crash.png',
      tags: ['aventura', 'accion', 'mundo abierto']
    },
    {
      titulo: 'Halo 4',
      subtitle: 'juego de disparos y mucha historia',
      descripcion: 'ERES EL JEFE MAESTRO Y TENDRAS QUE SALVAR A LA HUMANIDAD CON TU MINITA HOLOGRAFICA',
      imagen: 'assets/images/halo4.png',
      tags: ['shooter', 'accion', 'estrategia', 'aventura']
    },
    {
      titulo: 'Super Mario Odyssey',
      subtitle: 'juego de aventura,epic',
      descripcion: 'FONTANERO QUE TIENE QUE AYUDAR A LA PRINCESA PEACH AHORA CON LA AYUDA DE CAPPY',
      imagen: 'assets/images/mario.png',
      tags: ['aventura', 'accion', 'mundo abierto']
    },
    {
      titulo: 'Alien Hominid',
      subtitle: 'Juego bite mope',
      descripcion: 'SOMOS UN ALIEN QUE NECESITA RECUPERAR LA NAVE QUE SE LLEVO EL GOBERNO',
      imagen: 'assets/images/alien.png',
      tags: ['aventura', 'accion', 'supervivencia']
    },
    {
      titulo: 'Poppy Playtime',
      subtitle: 'juego de terror',
      descripcion: 'ERES UN EMPLEADO DE LA EMPRESA DE POPPY COMPANY DEBES ENCONTRAR LAS ATROCIDADES QUE HICO LA FABRICA DE JUGUETES',
      imagen: 'assets/images/poppy.png',
      tags: ['terror', 'supervivencia', 'estrategia']
    }
  ];

  formVisible = false;
  selectedGame: { titulo: string, subtitle: string, descripcion: string, imagen: string} | null = null;

  toggleForm() {
    this.formVisible = !this.formVisible;
  }

  addGame() {
    if (this.selectedGame) {
      this.games.push({
        titulo: this.selectedGame.titulo,
        subtitle: this.selectedGame.subtitle,
        imagen: this.selectedGame.imagen,
        descripcion: this.selectedGame.descripcion
      });
      this.formVisible = false;
    }
  }

  ngOnInit() {
  }

}
