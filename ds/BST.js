class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  searchNode(value) {
    let rootNode = this.root;
    while (true) {
      if (!rootNode.left && !rootNode.right) {
        return rootNode;
      } else {
        if (value < rootNode.value) {
          rootNode = rootNode.left;
        } else {
          rootNode = rootNode.right;
        }
      }
    }
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      // first insert
      this.root = newNode;
    } else {
      const lastNode = this.searchNode(this.root);
      console.log('lastNode: ', lastNode);
      if (value < lastNode.value) {
        lastNode.left = newNode;
      } else {
        lastNode.right = newNode;
      }
    }
  }


  // insert(value) {
  //   let rootNode = this.traverse(this.root);
  //   const newNode = new TreeNode(value);
  //   if (!rootNode) {
  //     rootNode = newNode;
  //   }
  // }

  // traverse(root) {
  //   if (!root || !root.left || !root.right) {
  //     return root;
  //   } else {
  //     const rootVal = root.value;
  //     if (rootVal <)
  //   }
  // }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(9);
bst.insert(2);
console.log(bst);