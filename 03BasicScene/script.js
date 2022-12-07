
//create scene
const scene = new THREE.Scene();

//create red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color : 0xff0000 });
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh)

const sizes = {
  with:800,
  height:800
}
//camera
const camera = new THREE.PerspectiveCamera(75, sizes.with / sizes.height)
camera.position.z = 4
camera.position.x = 1
camera.position.y = 2
scene.add(camera)

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})

renderer.setSize( sizes.with , sizes.height );
renderer.render(scene, camera);