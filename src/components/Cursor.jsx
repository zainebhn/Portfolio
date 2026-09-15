import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { damping: 25, stiffness: 200, mass: 0.3 });
  const y = useSpring(mouseY, { damping: 25, stiffness: 200, mass: 0.3 });

  useEffect(() => {
    const handle = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block rounded-full bg-brand-purple/25"
      style={{ width: 22, height: 22, x, y, translateX: "-50%", translateY: "-50%" }}
    />
  );
}
