import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  selectedPkm   : any;
  nameFilter    = '';
  projects: any = [];
  isAlive       = true;
  searchText    = '';

  
  get pokemonList(){
    return this.pokeapi.pokeList.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  }

  get pkmSprite(){
    const number = ('000' + this.selectedPkm.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }

  constructor(
    private pokeapi: PokeapiService
  ) { }

  ngOnInit() {
  this.pokemonList;
  }
  
  selectPokemon(pkm:any){
    this.selectedPkm = pkm;
  }

}
