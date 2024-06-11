import { useEffect, useRef } from "react";
import * as THREE from "three";
import earthPic from "../../assets/earth.jpg";
import { OrbitControls } from "three/examples/jsm/Addons.js";

function RightBlock() {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const scene = useRef(new THREE.Scene());
  const camera = useRef(new THREE.PerspectiveCamera(25, 1, 0.1, 10000));
  const renderer = useRef(new THREE.WebGLRenderer({}));
  const circle = useRef<THREE.Mesh>();

  const textureLoader = new THREE.TextureLoader();

  useEffect(() => {
    renderer.current.setSize(400, 400);
    renderer.current.setClearColor(0x000000, 0);
    if (canvasContainerRef.current && renderer.current.domElement) {
      canvasContainerRef.current.appendChild(renderer.current.domElement);
    }
    camera.current.position.z = 5;
    const controls = new OrbitControls(
      camera.current,
      renderer.current.domElement
    );

    // Load the texture and create the mesh in the onLoad callback
    textureLoader.load(earthPic, (texture) => {
      circle.current = new THREE.Mesh(
        new THREE.SphereGeometry(1, 128, 128),
        new THREE.MeshBasicMaterial({ map: texture })
      );
      scene.current.add(circle.current);
    });

    const animate = () => {
      requestAnimationFrame(animate);

      if (
        circle.current &&
        renderer.current &&
        camera.current &&
        scene.current
      ) {
        controls.update();
        renderer.current.render(scene.current, camera.current);
      }
      renderer.current.render(scene.current, camera.current);
    };
    animate();
  }, []);

  return <div ref={canvasContainerRef} />;
}

export default RightBlock;
