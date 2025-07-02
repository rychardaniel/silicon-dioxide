// MoleculeModel.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
function Atom({
    position,
    color,
    size = 0.2,
    label,
}: {
    position: [number, number, number];
    color: string;
    size?: number;
    label?: string;
}) {
    return (
        <group position={position}>
            <mesh>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} />
            </mesh>
            {label && (
                <Html
                    position={[0, 0, 0]}
                    center
                    style={{
                        color: "white",
                        fontSize: `${size * 40}px`,
                        fontWeight: "bold",
                        textShadow: "1px 1px 2px black",
                        pointerEvents: "none",
                        userSelect: "none",
                    }}
                >
                    {label}
                </Html>
            )}
        </group>
    );
}

function Bond({
    start,
    end,
    radius = 0.05,
}: {
    start: [number, number, number];
    end: [number, number, number];
    radius?: number;
}) {
    // Calcular posição central
    const centerX = (start[0] + end[0]) / 2;
    const centerY = (start[1] + end[1]) / 2;
    const centerZ = (start[2] + end[2]) / 2;

    // Calcular comprimento da ligação
    const dx = end[0] - start[0];
    const dy = end[1] - start[1];
    const dz = end[2] - start[2];
    const length = Math.sqrt(dx * dx + dy * dy + dz * dz);

    // Calcular rotação para alinhar horizontalmente (rodar 90° em Z)
    const rotationY = Math.atan2(dx, dz);

    return (
        <mesh
            position={[centerX, centerY, centerZ]}
            rotation={[Math.PI / 2, 0, rotationY]}
        >
            <cylinderGeometry args={[radius, radius, length, 16]} />
            <meshStandardMaterial color="#C0C0C0" />
        </mesh>
    );
}

export default function MoleculeModel() {
    return (
        <Canvas
            camera={{ position: [2, 2, 4], fov: 30 }}
            style={{ height: "50vh" }}
        >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />

            <Atom position={[0, 0, 0]} color="#EEAD2D" size={0.45} label="Si" />

            <Atom position={[-1, 0, 0]} color="#FF6961" size={0.25} label="O" />
            <Atom position={[1, 0, 0]} color="#FF6961" size={0.25} label="O" />

            <Bond start={[0, 0, 0]} end={[-1, 0, 0]} />
            <Bond start={[0, 0, 0]} end={[1, 0, 0]} />
        </Canvas>
    );
}
