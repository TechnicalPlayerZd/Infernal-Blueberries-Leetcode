const modulo = 1e9 + 7

type Node struct {
	distanceFromSource int64
	intersection       int
}

type MinHeap []Node

func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i].distanceFromSource < h[j].distanceFromSource }
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Push(x interface{}) {
	*h = append(*h, x.(Node))
}

func (h *MinHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func countPaths(numIntersections int, roads [][]int) int {
	adjacencyList := make([][]Node, numIntersections)
	for i := 0; i < numIntersections; i++ {
		adjacencyList[i] = []Node{}
	}
	for _, road := range roads {
		intersection1, intersection2, travelTime := road[0], road[1], road[2]
		adjacencyList[intersection1] = append(adjacencyList[intersection1], Node{int64(travelTime), intersection2})
		adjacencyList[intersection2] = append(adjacencyList[intersection2], Node{int64(travelTime), intersection1})
	}
	minHeap := &MinHeap{}
	heap.Init(minHeap)
	distanceFromSource := make([]int64, numIntersections)
	numWaysToReach := make([]int, numIntersections)
	for i := 0; i < numIntersections; i++ {
		distanceFromSource[i] = math.MaxInt64
		numWaysToReach[i] = 0
	}
	distanceFromSource[0] = 0
	numWaysToReach[0] = 1
	heap.Push(minHeap, Node{0, 0})

	for minHeap.Len() > 0 {
		currentNode := heap.Pop(minHeap).(Node)
		currentDistance := currentNode.distanceFromSource
		currentIntersection := currentNode.intersection
		for _, neighbor := range adjacencyList[currentIntersection] {
			neighborIntersection := neighbor.intersection
			travelTimeToNeighbor := neighbor.distanceFromSource
			if currentDistance+travelTimeToNeighbor < distanceFromSource[neighborIntersection] {
				distanceFromSource[neighborIntersection] = currentDistance + travelTimeToNeighbor
				heap.Push(minHeap, Node{distanceFromSource[neighborIntersection], neighborIntersection})
				numWaysToReach[neighborIntersection] = numWaysToReach[currentIntersection]
			} else if currentDistance+travelTimeToNeighbor == distanceFromSource[neighborIntersection] {
				numWaysToReach[neighborIntersection] = (numWaysToReach[neighborIntersection] + numWaysToReach[currentIntersection]) % int(modulo)
			}
		}
	}

	return numWaysToReach[numIntersections-1] % int(modulo)
}