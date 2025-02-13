type Coords = [number, number][];

function flipCoords(coords: Coords) {
  // Turn 1/8 of circle into 1/4 and remove duplicate points
  return [
    ...coords,
    ...coords.map<Coords[number]>(([x, y]) => [y, x]).reverse(),
  ].filter(([x, y], i, arr) => {
    const [lx, ly] = arr[i - 1] ?? [-1, -1];
    return !i || lx !== x || ly !== y;
  });
}

function mirrorCoords(coords: Coords) {
  return [
    ...coords.map(([x, y]) => [`${x}px`, `${y}px`]),
    ...coords.map(([x, y]) => [`calc(100% - ${y}px)`, `${x}px`]),
    ...coords.map(([x, y]) => [`calc(100% - ${x}px)`, `calc(100% - ${y}px)`]),
    ...coords.map(([x, y]) => [`${y}px`, `calc(100% - ${x}px)`]),
  ];
}

function addCorners(coords: Coords) {
  return coords.reduce((result, point, idx, { length }) => {
    const [x, y] = point;
    const [nx, ny] = coords[idx + 1] ?? [-1, -1];
    result.push(point);

    if (length > 1 && idx < length - 1 && nx !== x && ny !== y) {
      result.push([nx, y]);
    }
    return result;
  }, [] as Coords);
}

function mergeCoords(coords: Coords) {
  return coords.reduce((acc, point, idx, { length }) => {
    const [px, py] = coords[idx - 1] ?? [-1, -1];
    const [x, y] = point;
    const [nx] = coords[idx + 1] ?? [-1, -1];
    const isStart = idx === 0;
    const isEnd = idx === length - 1;

    // More or less anything which doesn't contribute to a polygon coord
    const isHorizontalStart = !isEnd && !x && !nx;
    const isVerticalStart = !isStart && !y && !py;
    const isMiddle = !isStart && !isEnd && x === px && x === nx;

    if (!isHorizontalStart && !isVerticalStart && !isMiddle) {
      acc.push(point);
    }
    return acc;
  }, [] as Coords);
}

function generatePoints(radius: number, size: number, offset = 0) {
  let lastCoords = [-1, -1];
  const coords: Coords = [];

  // Draw 1/8ish of a circle
  for (let i = 270; i > 225; i--) {
    const x =
      Math.floor(radius * Math.sin((2 * Math.PI * i) / 360) + radius + 0.5) *
      size;
    const y =
      Math.floor(radius * Math.cos((2 * Math.PI * i) / 360) + radius + 0.5) *
      size;
    if (x !== lastCoords[0] || y !== lastCoords[1]) {
      lastCoords = [x, y];
      coords.push([x + offset * size, y + offset * size]);
    }
  }

  const mergedCoords = mergeCoords(coords);
  const corners = addCorners(mergedCoords);
  return corners;
}

function generatePath(coords: Coords, flip = false) {
  const mirror = mirrorCoords(coords);
  return (flip ? mirror.reverse() : mirror)
    .map((coord) => coord.join(' '))
    .join(',');
}

export function getClipPath(radius: number, size: number, offset = 0) {
  const points = generatePoints(radius, size, offset);
  const flipped = flipCoords(points);
  return generatePath(flipped);
}
