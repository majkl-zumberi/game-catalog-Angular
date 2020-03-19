import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  constructor() { }
  getDataFromObject(){
    let obj:object=[
      {
        "appid": 362003,
        "name": "Grand Theft Auto V"
      },
      {
        "appid": 362010,
        "name": "Fantasy Grounds - PFRPG The Road to Revolution: The Campaign (PFRPG)"
      },
      {
        "appid": 361200,
        "name": "Coast Guard"
      },
      {
        "appid": 361210,
        "name": "Axis Game Factory's AGFPRO - Zombie Survival Pack DLC"
      },
      {
        "appid": 361220,
        "name": "Football Manager Ruined My Life"
      },
      {
        "appid": 361230,
        "name": "Super Daryl Deluxe"
      },
      {
        "appid": 361240,
        "name": "KF2 - Full Game"
      },
      {
        "appid": 361250,
        "name": "Strange Space"
      },
      {
        "appid": 361270,
        "name": "Dark Storm VR Missions Free Edition"
      },
      {
        "appid": 361290,
        "name": "OMSI 2 Add-on Chicago Downtown"
      },
      {
        "appid": 361310,
        "name": "Depth - Legendary Hammerhead Skin"
      },
      {
        "appid": 361312,
        "name": "Depth - Corsair APS Skin"
      },
      {
        "appid": 361313,
        "name": "Depth - Corsair P-11 Skin"
      },
      {
        "appid": 361314,
        "name": "Depth - Corsair Knife Skin"
      },
      {
        "appid": 361320,
        "name": "Casino Inc"
      },
      {
        "appid": 361330,
        "name": "Shrooms"
      },
      {
        "appid": 361340,
        "name": "Carnivores: Dinosaur Hunter Reborn - Backer Rifle"
      },
      {
        "appid": 361350,
        "name": "Skyhook"
      },
      {
        "appid": 361360,
        "name": "Goosebumps"
      },
      {
        "appid": 361370,
        "name": "Deer Hunter: Reloaded"
      },
      {
        "appid": 361380,
        "name": "World War I"
      },
      {
        "appid": 361400,
        "name": "Are You Smarter Than a 5th Grader"
      },
      {
        "appid": 361430,
        "name": "The Little Crane That Could"
      },
      {
        "appid": 361440,
        "name": "Primal Carnage: Extinction Soundtrack"
      },
      {
        "appid": 361470,
        "name": "METAL SLUG DEFENSE - “KOF Pack” Vol.1"
      },
      {
        "appid": 361480,
        "name": "Tom Clancy’s Ghost Recon Phantoms - NA: Oni: Weapons pack (Assault)"
      },
      {
        "appid": 361481,
        "name": "Tom Clancy’s Ghost Recon Phantoms - NA: Oni: Weapons pack (Recon)"
      },
      {
        "appid": 361482,
        "name": "Tom Clancy’s Ghost Recon Phantoms - NA: Oni: Weapons pack (Support)"
      },
      {
        "appid": 361483,
        "name": "Tom Clancy’s Ghost Recon Phantoms - NA: Oni: Complete pack (Assault)"
      }
    ];
    return obj;
  }
}
