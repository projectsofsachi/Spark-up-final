const AboutSection = () => {
  return (
    <section className="relative bg-surface-dark bg-noise py-20 px-6 md:px-20">
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* YouTube embed */}
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <div className="aspect-video bg-secondary flex items-center justify-center">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/7fy6cGg1xIo"
              title="Spark Up Summit Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* About text */}
        <div>
          <h2 className="font-display text-primary text-4xl md:text-5xl mb-8">
            About Us
          </h2>
          <p className="text-foreground font-mono text-sm md:text-base leading-relaxed mb-6">
            Welcome to the Spark Up Summit, where innovation and entrepreneurship converge to ignite extraordinary possibilities! This summit isn't just an event—it's a vibrant platform for visionaries, creators, and changemakers to unite and spark the next wave of ideas that will shape the future.
          </p>
          <p className="text-foreground font-mono text-sm md:text-base leading-relaxed">
            At Spark Up, bold startups, cutting-edge technology, and fresh perspectives take centre stage. Here, innovators showcase their brilliance, engage in inspiring discussions, and connect with industry leaders and investors eager to back the next big thing. Whether you're pitching your idea, networking, or learning from the best, Spark Up will fuel your entrepreneurial spirit and propel your ideas into the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
