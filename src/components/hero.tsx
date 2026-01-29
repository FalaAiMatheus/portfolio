export const HeroSection = () => {
  return (
    <section className="flex h-[80vh] w-full items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance xl:text-6xl">
          Matheus França
        </h1>
        <div>
          <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-1 text-center text-xl">
            <span className="animate-gradient-x animate-pulse bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 bg-[length:200%_auto] bg-clip-text text-transparent">
              Full Stack Developer
            </span>
            <span>•</span>
            <span>Palestrante</span>
            <span>•</span>
            <span>Organizador</span>
          </div>
        </div>
      </div>
    </section>
  );
};
