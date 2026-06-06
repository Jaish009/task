"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";
import { Course } from "@/types";

type IconName = keyof typeof LucideIcons;

function DynamicIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Icon = LucideIcons[name as IconName] as React.FC<LucideProps> | undefined;
  if (!Icon) return <LucideIcons.BookOpen {...props} />;
  return <Icon {...props} />;
}

const cardColors = [
  { from: "#6366f1", to: "#8b5cf6", glow: "rgba(99,102,241,0.15)" },
  { from: "#06b6d4", to: "#6366f1", glow: "rgba(6,182,212,0.15)" },
  { from: "#f43f5e", to: "#f59e0b", glow: "rgba(244,63,94,0.15)" },
  { from: "#10b981", to: "#06b6d4", glow: "rgba(16,185,129,0.15)" },
];

interface CourseCardProps {
  course: Course;
  index: number;
}

function AnimatedProgressBar({
  value,
  color,
}: {
  value: number;
  color: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="relative h-1.5 w-full rounded-full overflow-hidden"
      style={{ background: "rgba(255,255,255,0.06)" }}
    >
      <motion.div
        className="absolute left-0 top-0 h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, ${color}aa, ${color})`,
          boxShadow: `0 0 8px ${color}66`,
        }}
        initial={{ width: "0%" }}
        animate={{ width: mounted ? `${value}%` : "0%" }}
        transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
      />
    </div>
  );
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const colors = cardColors[index % cardColors.length];
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      className="bento-tile p-5 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 0 0 1px ${colors.from}44, 0 20px 40px ${colors.glow}`,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      {/* Gradient mesh bg */}
      <div
        className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, ${colors.from}20 0%, transparent 60%), radial-gradient(ellipse at bottom left, ${colors.to}15 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full gap-4">
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${colors.from}25, ${colors.to}15)`,
            border: `1px solid ${colors.from}30`,
          }}
        >
          <DynamicIcon
            name={course.icon_name}
            size={18}
            style={{ color: colors.from }}
            strokeWidth={1.8}
          />
        </div>

        {/* Title */}
        <div className="flex-1">
          <h3
            className="text-sm font-semibold leading-snug"
            style={{ color: "var(--text-primary)" }}
          >
            {course.title}
          </h3>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
              Progress
            </span>
            <span
              className="text-xs font-bold font-mono"
              style={{ color: colors.from }}
            >
              {course.progress}%
            </span>
          </div>
          <AnimatedProgressBar value={course.progress} color={colors.from} />
        </div>
      </div>
    </motion.article>
  );
}
