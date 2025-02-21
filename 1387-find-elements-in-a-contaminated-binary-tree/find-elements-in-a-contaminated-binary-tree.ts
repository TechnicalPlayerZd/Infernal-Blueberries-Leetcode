class FindElements {
    private values: Set<number>;

    constructor(root: TreeNode | null) {
        this.values = new Set<number>();
        this.recoverTree(root, 0);
    }

    private recoverTree(node: TreeNode | null, value: number): void {
        if (!node) return;
        node.val = value;
        this.values.add(value);
        this.recoverTree(node.left, 2 * value + 1);
        this.recoverTree(node.right, 2 * value + 2);
    }

    find(target: number): boolean {
        return this.values.has(target);
    }
}