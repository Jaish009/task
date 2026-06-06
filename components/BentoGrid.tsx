"use client";

import { motion, Variants } from "framer-motion";
import { Course } from "@/types";
import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";
import QuickStatsTile from "./QuickStatsTile";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 280, damping: 26 },
  },
};

export default function BentoGrid({ courses }: { courses: Course[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero — spans 2 cols on lg */}
      <motion.div variants={tileVariants} className="sm:col-span-2">
        <HeroTile />
      </motion.div>

      {/* Quick stats */}
      <motion.div variants={tileVariants}>
        <QuickStatsTile />
      </motion.div>

      {/* Course cards */}
      {courses.map((course, i) => (
        <motion.div key={course.id} variants={tileVariants}>
          <CourseCard course={course} index={i} />
        </motion.div>
      ))}

      {/* Activity */}
      <motion.div variants={tileVariants} className="sm:col-span-2 lg:col-span-1">
        <ActivityTile />
      </motion.div>
    </motion.div>
  );
}
