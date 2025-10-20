import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function Hero() {
  return (
    <section>
      {/* Background Ripple Effect */}
      <BackgroundRippleEffect 
        rows={12} 
        cols={30} 
        cellSize={48}
      />
    </section>
  );
}
