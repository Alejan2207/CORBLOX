import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: false,
})
export class FavoritosPage implements OnInit {

  constructor() { }

  games: any[] = [
    {
      titulo: 'Lethal Company',
      subtitle: 'juego de terror cooperativo',
      descripcion: 'MUERE DE MIEDO MIENTRAS RECOGES CHATARRA CON TUS COMPAS EN LUNAS ALIENÍGENAS',
      imagen: 'assets/images/lethal.png',
      tags: ['terror', 'multijugador', 'supervivencia']
    },
    {
      titulo: 'Apex Legends',
      subtitle: 'juego de batallas',
      descripcion: 'MATATE ENTRE 100 PERSONAS EN UNA ISLA PERO CON MAS PODERES',
      imagen: 'assets/images/apex.png',
      tags: ['battle royale', 'shooter', 'habilidades']
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
      titulo: 'GTA',
      subtitle: 'juego de mundo abierto',
      descripcion: 'AGARRATE CON LA CHOTA CON 5 ESTRELLAS Y VIVE PARA CONTARLO',
      imagen: 'assets/images/gta.png',
      tags: ['mundo abierto', 'acción', 'aventura']
    },
    {
      titulo: 'Pokemon Escarlata/Púrpura',
      subtitle: 'juego de entrenadores pokemon',
      descripcion: 'ATRAPA BICHOS MUTANTES Y HAZLOS PELEAR, PERO AHORA EN MUNDO ABIERTO Y CON BUGS',
      imagen: 'assets/images/pokemon.png',
      tags: ['rpg', 'aventura', 'mundo abierto']
    },
    {
      titulo: 'Roblox',
      subtitle: 'juego de creacion de juegos',
      descripcion: 'PONTE A CREAR O JUEGA LOS JUEGOS DE NUESTRA COMUNIDAD',
      imagen: 'assets/images/roblox.png',
      tags: ['creacion', 'juegos', 'comunidad']
    },
    {
      titulo: 'Jojos Bizarre Adventure All Star Battle',
      subtitle: 'juego de peleas',
      descripcion: '¡¡¡SE ME ATORO LA TULA EN EL CIERRE!!!',
      imagen: 'assets/images/jojo.png',
      tags: ['peleas', 'aventura', 'juegos']
    },
    {
      titulo: 'Cinco noches con alfredo',
      subtitle: 'juego de terror',
      descripcion: 'SOBREVIVE COMO GUARDIA DE SEGURIDAD EN UNA PIZERRIA DURANTE 5 NOCHES',
      imagen: 'assets/images/cinco.png',
      tags: ['terror', 'aventura', 'supervivencia']
    },
  ];

  ngOnInit() {
  }
}