<script setup>
import * as THREE from 'three';
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

const canvasRef = ref(null);
const skillDetailsRef = ref(null);

onMounted(() => {
  const sizes = { width: window.innerWidth, height: window.innerHeight };

  // Scene configuration
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0a1a);

  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
  camera.position.z = 20;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Create planets
  const textureLoader = new THREE.TextureLoader();

  const createPlanet = (texturePath, position) => {
    const texture = textureLoader.load(texturePath);
    const bumpMap = textureLoader.load(texturePath); // Optionnel, pour le relief.

    const planet = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 64, 64),
        new THREE.MeshStandardMaterial({
          map: texture,
          bumpMap: bumpMap,
          bumpScale: 0.1,
          emissive: 0x000000,
          roughness: 0.9,
          metalness: 0.1,
        })
    );

    planet.position.copy(position);
    scene.add(planet);
    return planet;
  };

// Exemple d'utilisation
  const planets = {
    Earth: createPlanet('/textures/earth.jpg', new THREE.Vector3(-6, 0, 0)),
    Mars: createPlanet('/textures/mars.jpg', new THREE.Vector3(0, 6, 0)),
    Jupiter: createPlanet('/textures/jupiter.jpg', new THREE.Vector3(6, 0, 0)),
  };


  // Add stars background
  const starsGeometry = new THREE.BufferGeometry();
  const starPositions = new Float32Array(10000 * 3);
  for (let i = 0; i < 10000 * 3; i++) {
    starPositions[i] = (Math.random() - 0.5) * 200;
  }
  starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
  const stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  // Interaction setup
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const showSkillDetails = (planetName) => {
    const details = {
      Frontend: 'Frontend development with Vue, Tailwind, and JavaScript.',
      Backend: 'Backend expertise in PHP, Symfony, and MySQL.',
      Tools: 'Tools like Docker, GitHub, and VS Code for development.',
    };

    if (skillDetailsRef.value) {
      skillDetailsRef.value.innerHTML = `
        <div class="skill-details-header">
          <button class="close-skill-details">&times;</button>
          <h2>${planetName}</h2>
        </div>
        <p>${details[planetName]}</p>
      `;
      skillDetailsRef.value.style.display = 'block';

      const closeButton = skillDetailsRef.value.querySelector('.close-skill-details');
      if (closeButton) {
        closeButton.addEventListener('click', () => {
          skillDetailsRef.value.style.display = 'none';
        });
      }
    }
  };

  const hoverEffect = (intersectedObject) => {
    Object.values(planets).forEach((planet) => {
      if (planet === intersectedObject) {
        // Augmente l'intensité émissive pour la planète survolée
        gsap.to(planet.material, {
          emissiveIntensity: 1.5, // Augmente la luminosité
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        // Réinitialise les autres planètes
        gsap.to(planet.material, {
          emissiveIntensity: 0.3, // Luminosité par défaut
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });
  };

  const onDocumentMouseMove = (event) => {
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(Object.values(planets), true);

    if (intersects.length > 0) {
      const target = intersects[0].object.isMesh
          ? intersects[0].object
          : intersects[0].object.parent;

      if (target) {
        document.body.style.cursor = "pointer";
        hoverEffect(target);
      }
    } else {
      document.body.style.cursor = "default";
      hoverEffect(null);
    }
  };


  const onDocumentMouseDown = () => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(Object.values(planets));

    if (intersects.length > 0) {
      const selectedPlanet = intersects[0].object;
      const planetName = Object.keys(planets).find((key) => planets[key] === selectedPlanet);

      gsap.to(camera.position, {
        x: selectedPlanet.position.x,
        y: selectedPlanet.position.y,
        z: selectedPlanet.position.z + 5,
        duration: 1,
        onUpdate: () => camera.lookAt(selectedPlanet.position),
      });

      showSkillDetails(planetName);
    } else {
      gsap.to(camera.position, {
        x: 0,
        y: 0,
        z: 20,
        duration: 1,
        onUpdate: () => camera.lookAt(0, 0, 0),
      });
    }
  };

  window.addEventListener('mousemove', onDocumentMouseMove);
  window.addEventListener('mousedown', onDocumentMouseDown);

  const tick = () => {
    Object.values(planets).forEach((planet) => {
      planet.rotation.y += 0.005;
    });
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };
  tick();

  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', onDocumentMouseMove);
    window.removeEventListener('mousedown', onDocumentMouseDown);
  });
});
</script>

<template>
  <div class="portfolio-galaxy">
    <canvas ref="canvasRef"></canvas>
    <div ref="skillDetailsRef" class="skill-details"></div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  overflow: hidden;
  background-color: #0a0a1a;
  font-family: 'Arial', sans-serif;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.skill-details {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 300px;
  display: none;
  z-index: 100;
}

.skill-details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.skill-details h2 {
  margin: 0;
  color: #4ecdc4;
}

.close-skill-details {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
}

.close-skill-details:hover {
  color: #ff4500;
}
</style>
