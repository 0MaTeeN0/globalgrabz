import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export default function QuantumSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Post-processing with bloom
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      0.4, // bloomStrength
      0.5, // bloomRadius
      0.85 // bloomThreshold
    );
    composer.addPass(bloomPass);
    composerRef.current = composer;

    // Main sphere group
    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    // Main icosahedron wireframe
    const clementineColor = new THREE.Color('#FF5722');
    const sphereGeo = new THREE.IcosahedronGeometry(1.8, 24);
    const wireGeo = new THREE.WireframeGeometry(sphereGeo);
    const sphereMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: clementineColor },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor;
        varying vec2 vUv;
        void main() {
          vec3 color = vUv.x * uColor;
          color.r += sin(uTime + vUv.y);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });
    const mainSphere = new THREE.LineSegments(wireGeo, sphereMat);
    sphereGroup.add(mainSphere);

    // Inner dodecahedrons
    const innerGeos: THREE.Object3D[] = [];
    for (let i = 0; i < 10; i++) {
      const innerGeo = new THREE.DodecahedronGeometry(0.4, 0);
      const innerWire = new THREE.WireframeGeometry(innerGeo);
      const innerMat = new THREE.LineBasicMaterial({ color: 0xffffff });
      const mesh = new THREE.LineSegments(innerWire, innerMat);
      const pivot = new THREE.Object3D();
      const angle = (i / 10) * Math.PI * 2;
      const radius = 0.8 + Math.random() * 0.4;
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 0.7) * 0.5,
        Math.sin(angle) * radius
      );
      pivot.add(mesh);
      sphereGroup.add(pivot);
      innerGeos.push(pivot);
    }

    // Clock
    const clock = new THREE.Clock();

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Update uniforms
      sphereMat.uniforms.uTime.value = elapsed;

      // Rotate main sphere
      sphereGroup.rotation.y += 0.001 * delta * 60;
      sphereGroup.rotation.x += 0.0005 * delta * 60;

      // Animate inner dodecahedrons
      innerGeos.forEach((pivot, i) => {
        pivot.rotation.x += 0.01 * (i % 2 === 0 ? 1 : -1) * delta * 60;
        pivot.rotation.y += 0.015 * ((i % 3) - 1) * delta * 60;
      });

      composer.render();
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
      bloomPass.resolution.set(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      sphereGeo.dispose();
      wireGeo.dispose();
      sphereMat.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
