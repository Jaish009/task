-- Create courses table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  progress INTEGER NOT NULL DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  icon_name TEXT NOT NULL DEFAULT 'BookOpen',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Allow public read access (anon key)
CREATE POLICY "Public read access" ON courses
  FOR SELECT USING (true);

-- Seed data
INSERT INTO courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns', 75, 'Layers'),
  ('System Design Fundamentals', 42, 'Network'),
  ('TypeScript Mastery', 88, 'Code2'),
  ('Next.js App Router Deep Dive', 30, 'Zap');
