import { PivotControls } from "@react-three/drei";
import { useRef } from "react";

export const MovableItem = ({ children }) => {

    const ref = useRef;

    const displayItemNewPosition = () => {
        console.log("new position", position);
        console.log("new rotation", rotation);
    }

    return (
        <PivotControls depthTest={false} onDragEnd={displayItemNewPosition}>
            <group ref={ref}>{children}</group>
        </PivotControls>
    )
}