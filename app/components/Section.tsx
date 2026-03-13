type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 scroll-mt-20 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 md:mb-12 border-b border-cyan-500/30 pb-2 w-fit">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
