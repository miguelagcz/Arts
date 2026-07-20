type MarqueeProps = {
  items: string[];
  tone?: "magenta" | "cyan";
  angle?: number;
  speed?: number; // segundos por ciclo
};

export default function Marquee({
  items,
  tone = "magenta",
  angle = -3,
  speed = 28,
}: MarqueeProps) {
  const text = items.join("  ·  ") + "  ·  ";

  return (
    <div
      className={`marquee marquee--${tone}`}
      style={
        {
          "--marquee-angle": `${angle}deg`,
          "--marquee-speed": `${speed}s`,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <div className="marquee__track">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
