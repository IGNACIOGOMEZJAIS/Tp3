import { leerSuperheroes,agregarSuperheroes } from './untils.mjs';

const archivoOriginal = './superheroes.txt'
const archivoNuevo = './agregarSuperHeroes.txt'

agregarSuperheroes(archivoOriginal,archivoNuevo);

const superHeroes = leerSuperheroes(archivoOriginal);
console.log(`superheroes ordenados`);
console.log(superHeroes);

