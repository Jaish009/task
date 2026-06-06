import { Suspense } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import CoursesLoader from "@/components/CoursesLoader";
import Loading from "./loading";

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "var(--bg-void)" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-4 py-6 pb-24 md:pb-6">
          {/* Top bar */}
          <header className="flex items-center justify-between mb-6">
            <div>
              <h2
                className="text-xs font-mono uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                Student Portal
              </h2>
              <p
                className="text-lg font-semibold mt-0.5"
                style={{ color: "var(--text-primary)" }}
              >
                Dashboard
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="text-xs font-mono px-3 py-1.5 rounded-lg"
                style={{
                  background: "var(--bg-elevated)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {new Date().toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
          </header>

          {/* Bento grid with Suspense */}
          <Suspense fallback={<Loading />}>
            <CoursesLoader />
          </Suspense>
        </div>
      </main>

      {/* Mobile nav */}
      <MobileNav />
    </div>
  );
}
