export interface Edge {
  from: number;
  to: number;
  weight?: number;
}

export class Graph {
  vertices: number[];
  edges: Edge[];

  constructor(vertices: number[] = [], edges: Edge[] = []) {
    this.vertices = vertices;
    this.edges = edges;
  }

  addVertex(vertex: number) {
    this.vertices.push(vertex);
  }

  addEdge(from: number, to: number, weight?: number) {
    this.edges.push({ from, to, weight });
  }

  printGraph() {
    console.log("Vertices:", this.vertices);
    console.log("Edges:", this.edges);
  }
}
