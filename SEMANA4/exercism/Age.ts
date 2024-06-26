enum Planets {
    mercury = 0.2408467,
    venus = 0.61519726,
    earth = 1.0,
    mars = 1.8808158,
    jupiter = 11.862615,
    saturn = 29.447498,
    uranus = 84.016846,
    neptune = 164.79132
  }
  const ONE_EARTH_ORBITAL_TO_SECONDS = 31557600;
  export function age(planet: keyof typeof Planets, seconds: number): any {
    let days = seconds / Planets[planet] / ONE_EARTH_ORBITAL_TO_SECONDS;
    return Number(days.toFixed(2));
  }
   