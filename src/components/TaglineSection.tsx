const TaglineSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-between overflow-hidden bg-surface-dark">
      <div className="relative z-10 w-full flex items-center justify-between px-8 md:px-20">
        <div className="text-left">
          <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-wider">
            SPARKING
          </h2>
          <h2 className="text-4xl md:text-6xl font-display text-primary tracking-wider">
            INNOVATION
          </h2>
        </div>

        <div className="text-right">
          <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-wider">
            FUELING
          </h2>
          <h2 className="text-4xl md:text-6xl font-display text-primary tracking-wider">
            GROWTH
          </h2>
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;
