import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface Scrollable3DModelProps {
  modelPath: string;
  className?: string;
  scrollProgress?: number;
  startPosition?: {
    rotation: { x: number; y: number; z: number };
    scale: number;
    position: { x: number; y: number; z: number };
  };
  endPosition?: {
    rotation: { x: number; y: number; z: number };
    scale: number;
    position: { x: number; y: number; z: number };
  };
  showDebugInfo?: boolean;
}

function Model({ 
  modelPath, 
  scrollProgress, 
  startPosition, 
  endPosition,
  showDebugInfo = false
}: { 
  modelPath: string; 
  scrollProgress: number;
  startPosition?: {
    rotation: { x: number; y: number; z: number };
    scale: number;
    position: { x: number; y: number; z: number };
  };
  endPosition?: {
    rotation: { x: number; y: number; z: number };
    scale: number;
    position: { x: number; y: number; z: number };
  };
  showDebugInfo?: boolean;
}) {
  const gltf = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      // Default positions if not provided
      const defaultStart = {
        rotation: { x: 0, y: 0, z: 0 },
        scale: 0.5,
        position: { x: 0, y: 0, z: 0 }
      };
      
      const defaultEnd = {
        rotation: { x: Math.PI * 0.3, y: Math.PI * 2, z: 0 },
        scale: 1.0,
        position: { x: 0, y: 0, z: 0 }
      };

      const start = startPosition || defaultStart;
      const end = endPosition || defaultEnd;

      // Interpolate between start and end positions based on scroll progress
      const rotationX = start.rotation.x + (end.rotation.x - start.rotation.x) * scrollProgress;
      const rotationY = start.rotation.y + (end.rotation.y - start.rotation.y) * scrollProgress;
      const rotationZ = start.rotation.z + (end.rotation.z - start.rotation.z) * scrollProgress;
      
      const scale = start.scale + (end.scale - start.scale) * scrollProgress;
      
      const positionX = start.position.x + (end.position.x - start.position.x) * scrollProgress;
      const positionY = start.position.y + (end.position.y - start.position.y) * scrollProgress;
      const positionZ = start.position.z + (end.position.z - start.position.z) * scrollProgress;

      // Apply interpolated values
      modelRef.current.rotation.set(rotationX, rotationY, rotationZ);
      modelRef.current.scale.setScalar(scale);
      modelRef.current.position.set(positionX, positionY, positionZ);

      // Debug logging
      if (showDebugInfo && scrollProgress % 0.1 < 0.01) { // Log every 10% progress
        console.log('3D Model Debug Info:', {
          scrollProgress: scrollProgress.toFixed(2),
          currentRotation: {
            x: rotationX.toFixed(2),
            y: rotationY.toFixed(2),
            z: rotationZ.toFixed(2)
          },
          currentScale: scale.toFixed(2),
          currentPosition: {
            x: positionX.toFixed(2),
            y: positionY.toFixed(2),
            z: positionZ.toFixed(2)
          }
        });
      }
    }
  });

  return (
    <group ref={modelRef}>
      <primitive object={gltf.scene} />
    </group>
  );
}

const Scrollable3DModel: React.FC<Scrollable3DModelProps> = ({ 
  modelPath, 
  className = "w-full h-screen",
  scrollProgress = 0,
  startPosition,
  endPosition,
  showDebugInfo = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <Model 
          modelPath={modelPath} 
          scrollProgress={scrollProgress}
          startPosition={startPosition}
          endPosition={endPosition}
          showDebugInfo={showDebugInfo}
        />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white/70 text-sm mb-2">Scroll to rotate</div>
        <div className="w-32 h-1 bg-white/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white/70 rounded-full transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>

      {/* Debug info overlay */}
      {showDebugInfo && (
        <div className="absolute top-4 left-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono max-w-xs">
          <div className="mb-2 font-bold">3D Model Debug Info</div>
          <div>Scroll Progress: {(scrollProgress * 100).toFixed(1)}%</div>
          <div className="mt-2">
            <div className="font-semibold">Current Values:</div>
            <div>Rotation X: {((startPosition?.rotation.x || 0) + ((endPosition?.rotation.x || 0) - (startPosition?.rotation.x || 0)) * scrollProgress).toFixed(2)}</div>
            <div>Rotation Y: {((startPosition?.rotation.y || 0) + ((endPosition?.rotation.y || 0) - (startPosition?.rotation.y || 0)) * scrollProgress).toFixed(2)}</div>
            <div>Rotation Z: {((startPosition?.rotation.z || 0) + ((endPosition?.rotation.z || 0) - (startPosition?.rotation.z || 0)) * scrollProgress).toFixed(2)}</div>
            <div>Scale: {((startPosition?.scale || 0.5) + ((endPosition?.scale || 1) - (startPosition?.scale || 0.5)) * scrollProgress).toFixed(2)}</div>
            <div>Position X: {((startPosition?.position.x || 0) + ((endPosition?.position.x || 0) - (startPosition?.position.x || 0)) * scrollProgress).toFixed(2)}</div>
            <div>Position Y: {((startPosition?.position.y || 0) + ((endPosition?.position.y || 0) - (startPosition?.position.y || 0)) * scrollProgress).toFixed(2)}</div>
            <div>Position Z: {((startPosition?.position.z || 0) + ((endPosition?.position.z || 0) - (startPosition?.position.z || 0)) * scrollProgress).toFixed(2)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scrollable3DModel;
