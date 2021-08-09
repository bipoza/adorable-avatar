import { defaultColors, defaultEyes, defaultNose, defaultMouth } from "../constants";

// Create hash code from ID
export function hashCode(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
     hash = str.charCodeAt(i) + ((hash >> 5) - hash);
  }
  return hash;
} 


export function getIntFromInterval(integer, max) { 
  return Math.floor(parseFloat('0.'+integer) * max);
}


export function getColor(name:string){
  let colorIndex = getIntFromInterval(hashCode(name), defaultColors.length);
  return defaultColors[colorIndex]
}

export function getEyes(name:string){
  let colorIndex = getIntFromInterval(hashCode(name), defaultEyes.length);
  return defaultEyes[colorIndex]
}

export function getNose(name:string){
  let colorIndex = getIntFromInterval(hashCode(name), defaultNose.length);
  return defaultNose[colorIndex]
}

export function getMouth(name:string){
  let colorIndex = getIntFromInterval(hashCode(name), defaultMouth.length);
  return defaultMouth[colorIndex]
}


export function getRandomString(limit=7): string{
  return Math.random().toString(36).substring(limit);
}
