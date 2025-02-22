function recoverFromPreorder(traversal: string): TreeNode | null {
    for (let count = 100; count > 0; count--) {
        traversal = traversal.replace(new RegExp("-".repeat(count), "g"), String.fromCharCode(count + 65));
    }

    function buildTree(parts: string, level: number): TreeNode | null {
        const splitParts = parts.split(String.fromCharCode(level + 65));
        const node = new TreeNode(parseInt(splitParts[0], 10));

        node.left = splitParts.length > 1 ? buildTree(splitParts[1], level + 1) : null;
        node.right = splitParts.length > 2 ? buildTree(splitParts[2], level + 1) : null;

        return node;
    }

    return buildTree(traversal, 1);
}