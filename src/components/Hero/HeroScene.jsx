import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, MeshDistortMaterial, Sphere, Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function FloatingOrb() {
  const meshRef = useRef()
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time.current * 0.3) * 0.3
      meshRef.current.rotation.y += delta * 0.15
      meshRef.current.rotation.z = Math.cos(time.current * 0.2) * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1.8, 64, 64]}>
        <MeshDistortMaterial
          color="#f97316"
          attach="material"
          distort={0.45}
          speed={1.8}
          roughness={0}
          metalness={0.8}
          envMapIntensity={1.5}
          emissive="#f97316"
          emissiveIntensity={0.08}
          transparent
          opacity={0.85}
          wireframe={false}
        />
      </Sphere>
    </Float>
  )
}

function PurpleOrb() {
  const meshRef = useRef()
  const time = useRef(0)

  useFrame((state, delta) => {
    time.current += delta
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta * 0.1
      meshRef.current.rotation.x = Math.sin(time.current * 0.2) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[3.2, -0.8, -1]}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <MeshDistortMaterial
          color="#7b2ff7"
          distort={0.6}
          speed={2.5}
          roughness={0}
          metalness={0.9}
          emissive="#7b2ff7"
          emissiveIntensity={0.15}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  )
}

function SmallOrb() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(clock.elapsedTime * 1.2) * 0.4 - 1.5
      ref.current.position.x = Math.cos(clock.elapsedTime * 0.8) * 0.3 - 2.5
    }
  })

  return (
    <mesh ref={ref} position={[-2.5, -1.5, 0]}>
      <sphereGeometry args={[0.35, 32, 32]} />
      <meshStandardMaterial
        color="#f97316"
        emissive="#f97316"
        emissiveIntensity={0.6}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

function GridRing() {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.05
  })

  const geometry = useMemo(() => {
    const g = new THREE.TorusGeometry(3.5, 0.01, 8, 64)
    return g
  }, [])

  return (
    <mesh ref={ref} geometry={geometry} rotation={[Math.PI / 3, 0.3, 0]}>
      <meshBasicMaterial color="#f97316" transparent opacity={0.15} />
    </mesh>
  )
}

function OuterRing() {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z -= delta * 0.03
  })

  return (
    <mesh ref={ref} rotation={[-Math.PI / 4, 0.5, 0]}>
      <torusGeometry args={[4.5, 0.008, 8, 64]} />
      <meshBasicMaterial color="#7b2ff7" transparent opacity={0.12} />
    </mesh>
  )
}

function Particles() {
  const count = 100
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.01
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#f97316"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#f97316" />
      <pointLight position={[-5, -3, -5]} intensity={1} color="#7b2ff7" />
      <pointLight position={[0, -5, 3]} intensity={0.5} color="#ffffff" />

      <Stars
        radius={100}
        depth={50}
        count={1000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      <FloatingOrb />
      <PurpleOrb />
      <SmallOrb />
      <GridRing />
      <OuterRing />
      <Particles />
    </Canvas>
  )
}
