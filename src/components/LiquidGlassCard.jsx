export function LiquidGlassCard({ id, className = "", children, innerClassName = "", bgImage = "" }) {
  const classes = ["outer-card", "liquid-glass-card", className].filter(Boolean).join(" ");
  
  const style = bgImage ? { "--card-background-image": `url(${bgImage})` } : {};

  return (
    <section className={classes} id={id} style={style}>
      <div className={innerClassName}>{children}</div>
    </section>
  );
}
