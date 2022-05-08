const graph = {
  a: ["c", "b"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["c", "b", "e"],
  e: ["d"],
  f: ["g"],
  g: ["f"],
};

const shortestPath = (graph, startingNode, destinationNode) => {
  const v = new Set([startingNode]);
  const q = [[startingNode, 0]];

  while (q.length > 0) {
    const [node, d] = q.shift();

    if (node === destinationNode) return d;

    for (let n of graph[node]) {
      if (!v.has(n)) {
        v.add(n);
        q.push([n, d + 1]);
      }
    }
  }
  return "no path exists";
};

// path exists
console.log(shortestPath(graph, "a", "d"));
// no path exists
console.log(shortestPath(graph, "b", "g"));
