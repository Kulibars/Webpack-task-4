import "./index.css";
import JS_IMAGE from './assets/kisspng-javascript.png';

// Остальной код

const img = document.createElement("img");
img.src = JS_IMAGE;
const loveJavaScript = document.createElement("h1");
loveJavaScript.textContent = 'I love JavaScript';
document.body.append(loveJavaScript);
document.body.append(img);

console.log('Hello World!');

