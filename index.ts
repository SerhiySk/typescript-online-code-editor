// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const sum=(a:number,b:number):number=>{
  return a+b
}
console.log(sum('1',6))