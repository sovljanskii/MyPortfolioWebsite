import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
function RightBlock() {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const scene = useRef(new THREE.Scene());
  const camera = useRef(new THREE.PerspectiveCamera(25, 1, 0.1, 10000));
  const renderer = useRef(new THREE.WebGLRenderer({ antialias: true }));
  const circle = useRef(
    new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true })
    )
  );

  useEffect(() => {
    renderer.current.setSize(250, 250);
    renderer.current.setClearColor(0x000000, 0);
    if (canvasContainerRef.current && renderer.current.domElement) {
      canvasContainerRef.current.appendChild(renderer.current.domElement);
    }
    scene.current.add(circle.current);
    camera.current.position.z = 5;
    const controls = new OrbitControls(
      camera.current,
      renderer.current.domElement
    );
    const animate = () => {
      requestAnimationFrame(animate);
      if (
        circle.current &&
        renderer.current &&
        camera.current &&
        scene.current
      ) {
        circle.current.rotation.x += 0.01;
        circle.current.rotation.y += 0.01;
        circle.current.rotation.z += 0.01;
        controls.update();
        renderer.current.render(scene.current, camera.current);
      }
    };

    animate();

    return () => {
      if (canvasContainerRef.current && renderer.current.domElement) {
        canvasContainerRef.current.removeChild(renderer.current.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={canvasContainerRef}
      id="canvas-container"
      className="right-block w-1/2 pl-12 flex  items-center justify-center"
    />
  );
}

export default RightBlock;
