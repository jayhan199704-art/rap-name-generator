// components/ui/Background.tsx
export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-16 top-[-8rem] h-72 w-72 rounded-full bg-fuchsia-600/30 blur-3xl" />
      <div className="absolute right-[-5rem] top-[20%] h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-[25%] h-80 w-80 rounded-full bg-violet-700/30 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_50%)]" />
    </div>
  );
}
