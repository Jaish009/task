import { getCourses } from "@/lib/supabase";
import BentoGrid from "./BentoGrid";
import CoursesError from "./CoursesError";

export default async function CoursesLoader() {
  try {
    const courses = await getCourses();
    return <BentoGrid courses={courses ?? []} />;
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return <CoursesError message={msg} />;
  }
}
