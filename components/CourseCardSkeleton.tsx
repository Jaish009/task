export default function CourseCardSkeleton() {
  return (
    <div className="bento-tile p-5 animate-pulse bg-white/5">
      <div className="w-10 h-10 rounded-xl bg-white/10 mb-4" />
      <div className="h-4 w-3/4 bg-white/10 rounded mb-6" />
      <div className="h-2 w-full bg-white/10 rounded-full" />
    </div>
  );
}
