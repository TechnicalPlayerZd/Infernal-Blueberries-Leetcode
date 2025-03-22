class Solution {
  Map<int, List<int>> graph = {};
  int countCompleteComponents(int n, List<List<int>> edges) {
    for (final edge in edges) {
      final int verticeA = edge.first, verticeB = edge.last;

      graph[verticeA] ??= [];
      graph[verticeB] ??= [];
      graph[verticeA]?.add(verticeB);
      graph[verticeB]?.add(verticeA);
    }

    int count = 0;
    final Set<int> visited = {};

    for (int i = 0; i < n; i++) {
      if (!visited.contains(i)) {
        visited.add(i);
        final Set<int> component = {};
        dfs(i, component, visited);
        if (component.every(
            (node) => (graph[node]?.length ?? 0) == component.length - 1)) {
          count += 1;
        }
      }
    }

    return count;
  }

  void dfs(int i, Set<int> component, Set<int> visited) {
    component.add(i);
    for (final neighbor in (graph[i] ?? [])) {
      if (!visited.contains(neighbor)) {
        visited.add(neighbor);
        dfs(neighbor, component, visited);
      }
    }
  }
}