
"use client";
import { ShootingStars } from "@/components/ui/shooting-stars";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background with stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,185,223,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="stars absolute inset-0" />
      </div>

      {/* Multiple shooting star layers with different colors and speeds */}
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#2EB9DF"
        trailColor="#9E00FF"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
    </div>
  );
}
