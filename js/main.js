/*import * as THREE from './three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

const canvasContainer = document.getElementById('canvas-container');
const renderer = new THREE.WebGLRenderer();
canvasContainer.appendChild(renderer.domElement);

let cube = null;

function createCube() {
  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff33 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}

function removeCube() {
    if (cube) {
      scene.remove(cube);

      cube.geometry.dispose();
      cube.material.dispose();
    }
  }



function resizeModel() {
  const containerWidth = canvasContainer.clientWidth;
  const containerHeight = canvasContainer.clientHeight;

  renderer.setSize(containerWidth, containerHeight);
  camera.aspect = containerWidth / containerHeight;
  camera.updateProjectionMatrix();
}

window.addEventListener('resize', resizeModel);
resizeModel();

camera.position.z = 2;

const generateCubeButton = document.getElementById('generate-cube-button');

let x = 0

generateCubeButton.addEventListener('click', () => {
    x++

    if(x==1){
        createCube();
        animate();
    }else{
        removeCube();
        x=0;
    }
});



function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}*/

/*
import * as THREE from './three.module.js';

let scene = null;
let camera = null;
let renderer = null;
let cube = null;

function createScene() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

  const canvasContainer = document.getElementById('canvas-container');
  renderer = new THREE.WebGLRenderer();
  canvasContainer.appendChild(renderer.domElement);

  camera.position.z = 2;
}

function createCube() {
  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff33 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}



function resizeModel() {
  const containerWidth = canvasContainer.clientWidth;
  const containerHeight = canvasContainer.clientHeight;

  renderer.setSize(containerWidth, containerHeight);
  camera.aspect = containerWidth / containerHeight;
  camera.updateProjectionMatrix();
}

window.addEventListener('resize', resizeModel);

const generateCubeButton = document.getElementById('generate-cube-button');
const clearSceneButton = document.getElementById('clear-scene-button');

generateCubeButton.addEventListener('click', () => {
  clearScene();
  createScene();
  createCube();
  animate();
});

clearSceneButton.addEventListener('click', () => {
  clearScene();
});

function clearScene() {
  if (scene) {
    // Remova a cena atual e o renderizador
    const canvasContainer = document.getElementById('canvas-container');
    canvasContainer.removeChild(renderer.domElement);

    // Limpe a cena e o renderizador
    scene.dispose();
    renderer.dispose();

    // Defina todas as variáveis como nulas
    scene = null;
    camera = null;
    renderer = null;
    cube = null;
  }
}

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
*/

import * as THREE from './three.module.js';

let scene = null;
let camera = null;
let renderer = null;
let cube = null;
let canvasContainer = null; // Mova a declaração para o escopo global
let x = 0;

scene = new THREE.Scene();

  // Crie uma câmera
  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 2;

  // Crie um renderizador e adicione-o ao DOM
  canvasContainer = document.getElementById('canvas-container'); // Defina a variável aqui
  renderer = new THREE.WebGLRenderer();
  canvasContainer.appendChild(renderer.domElement);

  // Crie um cubo
  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff33 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Redimensione o modelo com base no tamanho do contêiner
  resizeModel();

  // Adicione um ouvinte de redimensionamento para manter o tamanho correto
  window.addEventListener('resize', resizeModel);

  // Inicie a animação
  animate();

  hideCanvas()
window.createScene = function() {
  // Crie uma cena Three.js
  if(x==0){
    showCanvas()
  
  x++;
}else{
    hideCanvas()
    x=0
}

}

function hideCanvas() {
    const canvas = document.querySelector('canvas'); // Encontra a tag canvas
    canvas.style.display = 'none'; // Define a propriedade display como 'none'
  }

  function showCanvas() {
    const canvas = document.querySelector('canvas'); // Encontra a tag canvas
    canvas.style.display = 'block'; // Define a propriedade display de volta para 'block'
  }

function resizeModel() {
  const containerWidth = canvasContainer.clientWidth;
  const containerHeight = canvasContainer.clientHeight;

  renderer.setSize(containerWidth, containerHeight);
  camera.aspect = containerWidth / containerHeight;
  camera.updateProjectionMatrix();
}

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
