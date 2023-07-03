import { setInner } from "https://jscroot.github.io/element/croot.js";


export let Urlpost = "https://app-profile.herokuapp.com/profil"

export function GetRes(result) {
    console.log(result);
    setInner("All", result.message);
}

export function Reset(){

  }