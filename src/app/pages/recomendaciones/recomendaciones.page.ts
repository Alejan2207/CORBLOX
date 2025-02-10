import { Component, OnInit } from '@angular/core';

interface Game {
  titulo: string;
  subtitle: string;
  descripcion: string;
  imagen: string;
  tags: string[];
}

interface Filter {
  id: number;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.page.html',
  styleUrls: ['./recomendaciones.page.scss'],
  standalone: false,
})
export class RecomendacionesPage implements OnInit {
  games: Game[] = [
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
      titulo: 'Jojos Bizarre Adventure All Star Battle',
      subtitle: 'juego de peleas',
      descripcion: '¡¡¡SE ME ATORO LA TULA EN EL CIERRE!!!',
      imagen: 'assets/images/jojo.png',
      tags: ['peleas', 'anime', 'acción']
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
      titulo: 'Call of Duty Black Ops 2',
      subtitle: 'juego de disparos y mucha historia',
      descripcion: 'JUEGO DE DISPAROS Y MUCHA HISTORIA',
      imagen: 'assets/images/cod.png',
      tags: ['shooter', 'accion', 'estrategia', 'aventura']
    },
    {
      titulo: 'Poppy Playtime',
      subtitle: 'juego de terror',
      descripcion: 'ERES UN EMPLEADO DE LA EMPRESA DE POPPY COMPANY DEBES ENCONTRAR LAS ATROCIDADES QUE HICO LA FABRICA DE JUGUETES',
      imagen: 'assets/images/poppy.png',
      tags: ['terror', 'supervivencia', 'estrategia']
    }
  ];

  filters: Filter[] = [
    { id: 1, name: 'Acción', selected: false },
    { id: 2, name: 'Aventura', selected: false },
    { id: 3, name: 'Terror', selected: false },
    { id: 4, name: 'Shooter', selected: false },
    { id: 5, name: 'Mundo Abierto', selected: false },
    { id: 6, name: 'Battle Royale', selected: false },
    { id: 7, name: 'Supervivencia', selected: false },
    { id: 8, name: 'Multijugador', selected: false },
    { id: 9, name: 'RPG', selected: false },
    { id: 10, name: 'Sandbox', selected: false },
  ];

  selectedFilter: Filter | null = null;

  get filteredGames(): Game[] {
    if (!this.selectedFilter) {
      return this.games;
    }

    return this.games.filter(game => 
      game.tags.some(tag => 
        tag.toLowerCase() === this.selectedFilter!.name.toLowerCase()
      )
    );
  }

  constructor() { }

  ngOnInit() { }

  toggleFilter(filter: Filter) {
    // Si el filtro seleccionado es el mismo que ya está activo, lo desactivamos
    if (this.selectedFilter === filter) {
      this.selectedFilter = null;
      filter.selected = false;
    } else {
      // Desactivamos el filtro anterior si existe
      if (this.selectedFilter) {
        this.selectedFilter.selected = false;
      }
      // Activamos el nuevo filtro
      this.selectedFilter = filter;
      filter.selected = true;
    }
  }
}