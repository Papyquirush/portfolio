<template>
  <div>
    <div v-if="!showGalaxy" class="welcome-screen">
      <button class="see-skills-button" @click="displayGalaxy">See My Skills</button>
    </div>
    
    <div ref="popupRef" class="popup">Press ESC to exit full screen</div>
    
    <div v-show="showGalaxy" class="portfolio-galaxy">
      <canvas ref="canvasRef"></canvas>
      <div ref="skillDetailsRef" class="skill-details"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import gsap from 'gsap';

const canvasRef = ref(null);
const skillDetailsRef = ref(null);
const popupRef = ref(null);

const showGalaxy = ref(false);

const showPopup = () => {
  if (popupRef.value) {
    popupRef.value.style.visibility = 'visible';
    popupRef.value.style.opacity = '1';

    setTimeout(() => {
      if (popupRef.value) {
        popupRef.value.style.opacity = '0';
        setTimeout(() => {
          if (popupRef.value) {
            popupRef.value.style.visibility = 'hidden';
          }
        }, 500);
      }
    }, 3000);
  }
};


const displayGalaxy = () => {
  console.log('Bouton cliqué : affichage de la galaxie...');
  showGalaxy.value = true;

  const galaxyElement = document.querySelector('.portfolio-galaxy');
  if (galaxyElement) {
    console.log('Mise à jour de la visibilité...');
    galaxyElement.style.visibility = 'visible';
  }

  gsap.to('.portfolio-galaxy', {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    onComplete: () => console.log('Animation terminée.'),
  });

  showPopup();
};

const hideGalaxy = () => {
  console.log('Touche Échap pressée : masquage de la galaxie...');
  showGalaxy.value = false;

  const galaxyElement = document.querySelector('.portfolio-galaxy');
  if (galaxyElement) {
    gsap.to('.portfolio-galaxy', {
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        galaxyElement.style.visibility = 'hidden';
      },
    });
  }
};

onMounted(() => {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && showGalaxy.value) {
      hideGalaxy();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
  });

  const sizes = {width: window.innerWidth, height: window.innerHeight};

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


  const textureLoader = new THREE.TextureLoader();

  const createPlanet = (texturePath, position) => {
    const texture = textureLoader.load(texturePath);
    const bumpMap = textureLoader.load(texturePath);

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

  const planets = {
    Frontend: createPlanet('/textures/earth.jpg', new THREE.Vector3(-6, 0, 0)),
    Backend: createPlanet('/textures/mars.jpg', new THREE.Vector3(0, 6, 0)),
    Tools: createPlanet('/textures/jupiter.jpg', new THREE.Vector3(6, 0, 0)),
  };


  const starsGeometry = new THREE.BufferGeometry();
  const starPositions = new Float32Array(10000 * 3);
  for (let i = 0; i < 10000 * 3; i++) {
    starPositions[i] = (Math.random() - 0.5) * 200;
  }
  starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
  const stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const showSkillDetails = (skill) => {
    const details = {
      Vue: 'Expert in Vue.js framework.',
      Tailwind: 'Proficient in Tailwind CSS.',
      JavaScript: 'Advanced JavaScript knowledge.',
      PHP: 'Experienced in PHP development.',
      Symfony: 'Skilled in Symfony framework.',
      MySQL: 'Proficient in MySQL database management.',
      Docker: 'Experienced with Docker containers.',
      GitHub: 'Proficient in version control with GitHub.',
      VSCode: 'Skilled in using VS Code for development.',
    };

    if (skillDetailsRef.value) {
      skillDetailsRef.value.innerHTML = `
        <div class="skill-details-header">
          <button class="close-skill-details">&times;</button>
          <h2>${skill}</h2>
        </div>
        <p>${details[skill]}</p>
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

  const createStarsAroundPlanet = (planet, skills) => {
    const starGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    skills.forEach((skill, index) => {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      const angle = (index / skills.length) * Math.PI * 2;
      const radius = 3;
      star.position.set(
          planet.position.x + Math.cos(angle) * radius,
          planet.position.y + Math.sin(angle) * radius,
          planet.position.z
      );
      scene.add(star);

      star.userData = { skill };

      star.addEventListener('click', () => {
        showSkillDetails(skill);
      });
    });
  };

  const hoverEffect = (intersectedObject) => {
    Object.values(planets).forEach((planet) => {
      if (planet === intersectedObject) {
        gsap.to(planet.material, {
          emissiveIntensity: 1.5,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(planet.material, {
          emissiveIntensity: 0.3,
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
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const selectedObject = intersects[0].object;

      if (selectedObject.userData?.skill) {
        showSkillDetails(selectedObject.userData.skill);
      } else {
        const selectedPlanet = Object.values(planets).find((planet) => planet === selectedObject);
        if (selectedPlanet) {
          const planetName = Object.keys(planets).find((key) => planets[key] === selectedPlanet);

          gsap.to(camera.position, {
            x: selectedPlanet.position.x,
            y: selectedPlanet.position.y,
            z: selectedPlanet.position.z + 5,
            duration: 1,
            onUpdate: () => camera.lookAt(selectedPlanet.position),
          });

          const skills = {
            Frontend: ['JavaScript', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'HTML', 'CSS'],
            Backend: ['PHP', 'Symfony', 'CakePHP', 'Angular', 'MySQL', 'Java', 'C++'],
            Tools: ['GitHub', 'GitLab', 'Docker', 'Talend', 'VS Code', 'JetBrains Tools', 'Android Studio', 'Postman', 'Office Suite', 'Inkscape', 'QT Creator',],
          };

          createStarsAroundPlanet(selectedPlanet, skills[planetName]);
        } else {
          gsap.to(camera.position, {
            x: 0,
            y: 0,
            z: 20,
            duration: 1,
            onUpdate: () => camera.lookAt(0, 0, 0),
          });
        }
      }
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



<style scoped>
body {
  margin: 0;
  overflow: hidden;
  font-family: 'Arial', sans-serif;
}

.welcome-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0a0a1a;
}

.see-skills-button {
  background-color: #4ecdc4;
  color: white;
  font-size: 1.5rem;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.see-skills-button:hover {
  background-color: #3ba89c;
}

.portfolio-galaxy {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0; 
  visibility: hidden; 
  transition: opacity 1s ease;
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

.popup {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  opacity: 0; 
  visibility: hidden; 
  transition: opacity 0.5s ease, visibility 0.5s ease;
  z-index: 200;
}

</style>
