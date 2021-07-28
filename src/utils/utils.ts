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

export function getRandomString(limit=7): string{
  return Math.random().toString(36).substring(limit);
}
export const defaultColors = [
  '#81bef1',
  '#ad8bf2',
  '#bff288',
  '#de7878',
  '#a5aac5',
  '#6ff2c5',
  '#f0da5e',
  '#eb5972',
  '#f6be5d',
];