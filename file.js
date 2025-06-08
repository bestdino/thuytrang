const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const texts = ["thuy trangg xinh gái", "dễ thw", "cute phô mai que"];
const particles = [];

new THREE.FontLoader().load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', font => {
  texts.forEach(word => {
    for (let i = 0; i < 30; i++) {
      const g = new THREE.TextGeometry(word, { font, size: 1, height: 0.2 });
      const m = new THREE.MeshBasicMaterial({ color: 0xff99ff });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set((Math.random() - 0.5)*100, (Math.random() - 0.5)*100, (Math.random() - 0.5)*100);
      scene.add(mesh);
      particles.push(mesh);
    }
  });
});

camera.position.z = 50;
(function animate() {
  requestAnimationFrame(animate);
  particles.forEach(p => { p.rotation.x += 0.005; p.rotation.y += 0.01; });
  renderer.render(scene, camera);
})();