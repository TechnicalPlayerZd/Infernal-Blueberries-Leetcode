import 'dart:collection';

class Solution {
  List<String> findAllRecipes(List<String> recipes, List<List<String>> ingredients, List<String> supplies) {
    Map<String, List<String>> graph = {}; // ingredient -> list of recipes
    Map<String, int> indegree = {};       // recipe -> number of ingredients needed
    Set<String> available = Set.from(supplies);
    List<String> result = [];

    // Step 1: Initialize graph and indegree
    for (int i = 0; i < recipes.length; i++) {
      String recipe = recipes[i];
      indegree[recipe] = ingredients[i].length;

      for (String ing in ingredients[i]) {
        graph.putIfAbsent(ing, () => []).add(recipe);
      }
    }

    // Step 2: Queue for BFS starting from available supplies
    Queue<String> queue = Queue.from(supplies);

    while (queue.isNotEmpty) {
      String item = queue.removeFirst();
      if (graph.containsKey(item)) {
        for (String next in graph[item]!) {
          indegree[next] = indegree[next]! - 1;

          if (indegree[next] == 0) {
            // All ingredients available, recipe can be made
            result.add(next);
            queue.add(next); // This new recipe is now a supply
          }
        }
      }
    }

    return result;
  }
}