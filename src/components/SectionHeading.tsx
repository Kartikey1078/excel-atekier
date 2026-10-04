type SectionHeadingProps = {
  tag: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  tag,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl space-y-4 ${className}`}>
      <p className="text-p-sm uppercase tracking-wide text-white">{tag}</p>
      <h2 className="text-h1 tracking-tight text-white">{title}</h2>
      {description ? (
        <p className="text-p text-white/50">{description}</p>
      ) : null}
    </div>
  );
}
