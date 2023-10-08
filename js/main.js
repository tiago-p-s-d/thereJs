import * as THREE from './three.module.js';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const canvasContainer = document.getElementById('canvas-container');
const renderer = new THREE.WebGLRenderer();
renderer.setSize( 500, 500 );
canvasContainer.appendChild(renderer.domElement);

//adicionando o cubo:

const geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff330 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 2;

//começando a animar:

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();