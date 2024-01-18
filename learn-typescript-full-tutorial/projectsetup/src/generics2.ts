interface Bottle {
  material: string;
  volume: number;
}

function getBottle<T>(bottles: T[]): T {
  const index = 3;
  return bottles[index];
}

const getMoreBottles = <T>(bottles: T[]): T => {
  return bottles[6];
};
