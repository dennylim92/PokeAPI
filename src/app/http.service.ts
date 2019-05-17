import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let count: number;
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getRandom();
  }
  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => console.log("info -> ", data[`abilities`][0][`ability`][`name`]));
  }

  getRandom(){
    console.log("hello");
    let PokemonDex = this._http.get('https://pokeapi.co/api/v2/pokemon');
    PokemonDex.subscribe(data => {
      count = data[`count`]
      var PokemonIndex = Math.round(Math.random() * count) + 1;
      let randomPokemon = this._http.get(`https://pokeapi.co/api/v2/pokemon/${PokemonIndex}`);
      randomPokemon.subscribe(data => console.log("data ->", data));
    });
  }
}
