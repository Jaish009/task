"use client";

import Image from "next/image";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Trophy,
  Settings,
  ChevronLeft,
  Zap,
  Bell,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "My Courses", icon: BookOpen },
  { id: "progress", label: "Progress", icon: BarChart3 },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      animate={{ width: collapsed ? 68 : 220 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative hidden md:flex flex-col h-screen border-r border-white/5 glass shrink-0"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-white/5">
        <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0">
          <Image src="/logo.png" alt="LearnOS Logo" width={32} height={32} className="object-cover" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15 }}
              className="font-bold text-sm tracking-wider text-white whitespace-nowrap"
            >
              LEARN<span className="text-gradient-accent">OS</span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 p-2 flex-1 mt-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors w-full"
              style={{ color: isActive ? "var(--text-primary)" : "var(--text-secondary)" }}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.08) 100%)",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon size={17} strokeWidth={isActive ? 2.2 : 1.8} className="relative z-10 shrink-0" />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.15 }}
                    className="relative z-10 text-sm font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-2 border-t border-white/5">
        {/* Notifications */}
        <button className="relative flex items-center gap-3 px-3 py-2.5 w-full rounded-xl hover:bg-white/5 transition-colors"
          style={{ color: "var(--text-secondary)" }}>
          <Bell size={17} strokeWidth={1.8} className="shrink-0" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm font-medium"
              >
                Notifications
              </motion.span>
            )}
          </AnimatePresence>
          <span className="absolute top-2 left-6 w-1.5 h-1.5 rounded-full bg-indigo-400" />
        </button>

        {/* User */}
        <div className="flex items-center gap-3 px-3 py-3 mt-1">
          <div className="w-8 h-8 rounded-full shrink-0 overflow-hidden bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-xs font-bold text-white">
            AJ
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="text-xs font-semibold text-white leading-tight">Alex Johnson</p>
                <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Pro Plan</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-16 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center z-50 hover:border-indigo-500/50 transition-colors"
        style={{ background: "var(--bg-elevated)" }}
      >
        <motion.div animate={{ rotate: collapsed ? 180 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
          <ChevronLeft size={12} style={{ color: "var(--text-secondary)" }} />
        </motion.div>
      </button>
    </motion.aside>
  );
}
