export default function CoursesError({ message }: { message: string }) {
  return (
    <div className="w-full p-6 border border-red-500/20 rounded-2xl bg-red-500/5 text-center col-span-full">
      <h3 className="text-red-400 font-semibold mb-2">Failed to load courses</h3>
      <p className="text-sm text-red-400/80 mb-4">{message}</p>
      <p className="text-xs text-white/50">Please ensure Supabase is configured correctly in .env.local and the database schema is applied.</p>
    </div>
  );
}
