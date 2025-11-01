'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;

    // Scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 3;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Glow sphere
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0x9fd6ff,
      roughness: 0.2,
      metalness: 0.1,
      emissive: new THREE.Color(0x224466),
      emissiveIntensity: 0.6
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Halo
    const haloGeom = new THREE.SphereGeometry(1.2, 64, 64);
    const haloMat = new THREE.MeshBasicMaterial({ color: 0x9fd6ff, transparent: true, opacity: 0.08 });
    const halo = new THREE.Mesh(haloGeom, haloMat);
    scene.add(halo);

    // Lights
    const key = new THREE.PointLight(0xa4d5ff, 3, 10);
    key.position.set(2, 2, 2);
    scene.add(key);
    const fill = new THREE.PointLight(0x88b7ff, 1.2, 10);
    fill.position.set(-2, -1, 1);
    scene.add(fill);

    // Resize handling
    const onResize = () => {
      const { clientWidth, clientHeight } = mount;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    let raf = 0;
    const animate = () => {
      sphere.rotation.y += 0.003;
      halo.rotation.y -= 0.0015;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    // Mouse parallax
    const onMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      camera.position.x = x * 0.5;
      camera.position.y = y * 0.3;
      camera.lookAt(0, 0, 0);
    };
    window.addEventListener('mousemove', onMouse);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      haloGeom.dispose();
      haloMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-[60vh] rounded-2xl border border-white/10 shadow-lg shadow-cyan-500/10" />;
}
