<script setup>
import * as THREE from 'three';
import { Text } from 'troika-three-text';
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

const canvasRef = ref(null);
const skillDetailsRef = ref(null);

onMounted(() => {
  const sizes = { width: window.innerWidth, height: window.innerHeight };

  // Scene configuration with more depth
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0a1a);

  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
  camera.position.z = 20;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Galactic Background
  const createGalaxyBackground = () => {
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 10000;
    const posArray = new Float32Array(starsCount * 3);

    for(let i = 0; i < starsCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 200;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);
  };
  createGalaxyBackground();

  // Detailed Skills Data
  const skillsData = {
    Frontend: {
      color: 0x3498db,
      skills: [
        {
          name: 'JavaScript',
          level: 90,
          description: 'Expertise in modern JavaScript, including ES6+ features and functional programming',
          projects: ['Complex web applications', 'Interactive data visualizations']
        },
        {
          name: 'Vue.js',
          level: 85,
          description: 'Advanced Vue.js development with Vuex and Vue Router',
          projects: ['Single Page Applications', 'Component-based architectures']
        },
        {
          name: 'Tailwind CSS',
          level: 80,
          description: 'Proficient in utility-first CSS framework',
          projects: ['Responsive design', 'Custom design systems']
        }
      ]
    },
    Backend: {
      color: 0xe74c3c,
      skills: [
        {
          name: 'PHP',
          level: 87,
          description: 'Server-side development with modern PHP frameworks',
          projects: ['Enterprise applications', 'RESTful API design']
        },
        {
          name: 'Symfony',
          level: 82,
          description: 'Advanced Symfony framework development',
          projects: ['Complex backend systems', 'Microservices']
        },
        {
          name: 'MySQL',
          level: 85,
          description: 'Database design and optimization',
          projects: ['High-performance databases', 'Complex query optimization']
        }
      ]
    },
    Tools: {
      color: 0x2ecc71,
      skills: [
        {
          name: 'Docker',
          level: 80,
          description: 'Containerization and deployment expertise',
          projects: ['Microservices architecture', 'Continuous integration']
        },
        {
          name: 'GitHub',
          level: 90,
          description: 'Version control and collaborative development',
          projects: ['Open source contributions', 'Team workflow management']
        },
        {
          name: 'VS Code',
          level: 95,
          description: 'Advanced IDE usage and extension development',
          projects: ['Custom development environments', 'Productivity tools']
        }
      ]
    }
  };

  // Planets Creation
  const createPlanet = (color, position) => {
    const planet = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 64, 64),
        new THREE.MeshStandardMaterial({
          color: color,
          emissive: color,
          emissiveIntensity: 0.3
        })
    );
    planet.position.copy(position);
    scene.add(planet);
    return planet;
  };

  const planets = {
    Frontend: createPlanet(skillsData.Frontend.color, new THREE.Vector3(-6, 0, 0)),
    Backend: createPlanet(skillsData.Backend.color, new THREE.Vector3(0, 6, 0)),
    Tools: createPlanet(skillsData.Tools.color, new THREE.Vector3(6, 0, 0))
  };

  // Create Skills Stars
  const createSkillStars = (planetPosition, skills, color) => {
    const skillStarsGroup = new THREE.Group();
    const radius = 4;

    skills.forEach((skill, index) => {
      const angle = (index / skills.length) * Math.PI * 2;

      // Skill Star
      const skillStar = new THREE.Mesh(
          new THREE.SphereGeometry(0.2, 16, 16),
          new THREE.MeshStandardMaterial({
            color: color,
            emissive: color,
            emissiveIntensity: 0.5
          })
      );

      skillStar.position.set(
          planetPosition.x + radius * Math.cos(angle),
          planetPosition.y + radius * Math.sin(angle),
          planetPosition.z
      );

      // Custom data attachment
      skillStar.userData = skill;

      skillStarsGroup.add(skillStar);
    });

    scene.add(skillStarsGroup);
    return skillStarsGroup;
  };

  const skillStars = {
    Frontend: createSkillStars(planets.Frontend.position, skillsData.Frontend.skills, skillsData.Frontend.color),
    Backend: createSkillStars(planets.Backend.position, skillsData.Backend.skills, skillsData.Backend.color),
    Tools: createSkillStars(planets.Tools.position, skillsData.Tools.skills, skillsData.Tools.color)
  };

  // Hide skill stars initially
  Object.values(skillStars).forEach(group => group.visible = false);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  // Interaction Setup
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const showSkillDetails = (skill) => {
    if (skillDetailsRef.value) {
      skillDetailsRef.value.innerHTML = `
        <h2>${skill.name}</h2>
        <p>Level: ${skill.level}%</p>
        <p>${skill.description}</p>
        <h3>Notable Projects:</h3>
        <ul>
          ${skill.projects.map(project => `<li>${project}</li>`).join('')}
        </ul>
      `;
      skillDetailsRef.value.style.display = 'block';
    }
  };

  const onDocumentMouseDown = (event) => {
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    // Check planet intersections first
    const planetIntersects = raycaster.intersectObjects(Object.values(planets));
    const skillStarIntersects = raycaster.intersectObjects(
        Object.values(skillStars).flatMap(group => group.children)
    );

    // Reset all skill stars visibility
    Object.values(skillStars).forEach(group => group.visible = false);

    if (planetIntersects.length > 0) {
      const target = planetIntersects[0].object;
      const planetName = Object.keys(planets).find(key => planets[key] === target);

      // Zoom to planet
      gsap.to(camera.position, {
        x: target.position.x,
        y: target.position.y,
        z: target.position.z + 5,
        duration: 1,
        onUpdate: () => camera.lookAt(target.position),
      });

      // Show corresponding skill stars
      if (skillStars[planetName]) {
        skillStars[planetName].visible = true;
        skillStars[planetName].children.forEach((star, index) => {
          gsap.fromTo(star.position,
              { z: star.position.z - 5 },
              {
                z: star.position.z,
                duration: 1,
                delay: index * 0.2,
                ease: "elastic.out(1, 0.3)"
              }
          );
        });
      }
    } else if (skillStarIntersects.length > 0) {
      // Show skill details when skill star is clicked
      const skillStar = skillStarIntersects[0].object;
      showSkillDetails(skillStar.userData);
    } else {
      // Reset camera
      gsap.to(camera.position, {
        x: 0,
        y: 0,
        z: 20,
        duration: 1,
        onUpdate: () => camera.lookAt(0, 0, 0),
      });

      // Hide skill details
      if (skillDetailsRef.value) {
        skillDetailsRef.value.style.display = 'none';
      }
    }
  };

  window.addEventListener('mousedown', onDocumentMouseDown);

  // Animation Loop
  const tick = () => {
    Object.values(planets).forEach(planet => {
      planet.rotation.y += 0.005;
    });

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };
  tick();

  // Resize Handling
  const onResize = () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  };
  window.addEventListener('resize', onResize);

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('mousedown', onDocumentMouseDown);
    window.removeEventListener('resize', onResize);
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
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 300px;
  display: none;
}

.skill-details h2 {
  margin-top: 0;
  color: #4ecdc4;
}

.skill-details ul {
  padding-left: 20px;
}
</style>