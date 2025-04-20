const scene = new THREE.Scene(); // Used const but can switch to var if needed for future work with three.js
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.6));

const directional = new THREE.DirectionalLight(0xffffff, 1);
directional.position.set(5, 10, 7.5);
scene.add(directional);

// Orbit controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Cube Shape
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial({ color: 0x00ff00 })
);
cube.position.x = -2;
scene.add(cube);

// Torus Shape
const torus = new THREE.Mesh(
  new THREE.TorusGeometry(1, 0.4, 16, 100),
  new THREE.MeshStandardMaterial({ color: 0xff00ff })
);
torus.position.x = 2;
scene.add(torus);

// Load OBJ + MTL (This took sooooooooo long to figure out, I wasn't loading the MTL >.< )
let rabbitModel;

const mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('models/');
mtlLoader.load('fg_spkRabbit.mtl', function (materials) {
  materials.preload();

  const objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.setPath('models/');
  objLoader.load('fg_spkRabbit.obj', function (object) {
    console.log("✅ fg_spkRabbit model loaded!", object);

    object.name = "fg_spkRabbit";
    object.scale.set(12, 12, 12);
    object.position.set(0, -1, 0);

    rabbitModel = object;
    scene.add(object);
  },
  undefined,
  function (error) {
    console.error("❌ Error loading OBJ:", error);
  });
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  if (rabbitModel) {
    rabbitModel.rotation.y += 0.01;
  }

  controls.update();
  renderer.render(scene, camera);
}
animate();
