import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  pokeList = [
    {name: 'Bulbasaur', number: 1},
    {name: 'Ivysaur', number: 2},
    {name: 'Venusaur', number: 3},
    {name: 'Charmander', number: 4},
    {name: 'Pikachu ', number: 25},
    {name: 'Vulpix', number: 37},
    {name: 'Psyduck', number: 54},
    {name: 'Gastly', number: 92},
  ]
  constructor() { }
}
