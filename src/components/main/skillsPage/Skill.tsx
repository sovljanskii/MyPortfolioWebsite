import { motion } from "framer-motion";
import React from "react";

interface Props {
  name: string;
  percentage: any;
  color: string;
}

const SkillBar: React.FC<{ percentage: string; color: string }> = ({
  percentage,
  color,
}) => (
  <div className="skill-bar-container h-2 rounded bg-black bg-opacity-20 overflow-hidden">
    <motion.div
      className="h-2 rounded"
      initial={{ width: "0%", backgroundColor: color }}
      animate={{ width: `${percentage}%` }}
      transition={{ duration: 1, type: "tween" }}
    />
  </div>
);

const Skill: React.FC<Props> = ({ name, percentage, color }) => {
  return (
    <div className={`skill-${name} relative pb-3`}>
      <div>
        <p className="inline">{name}</p>
        <span style={{ position: "absolute", left: `${percentage - 10}%` }}>
          {percentage}%
        </span>
      </div>
      <SkillBar percentage={percentage} color={color} />
    </div>
  );
};

export default Skill;
