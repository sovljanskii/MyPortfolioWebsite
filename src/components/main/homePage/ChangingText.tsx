import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function ChangingText() {
  const textIndex = useMotionValue(0);
  const texts = [
    "Software engineer",
    "Web developer",
    "Creative problem-solver",
    "Software engineering student",
    "Hobbyist Game Developer",
    "Linux enthusiast",
    "Tech lover",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest]);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, []);

  return (
    <motion.span className="inline opacity-100 text-p1">
      {displayText}
    </motion.span>
  );
}

export default ChangingText;
