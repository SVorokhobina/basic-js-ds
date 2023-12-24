const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    function addNewNode(node) {
      if (node === null) {
        node = new Node(data);
      } else {
        if (node.data > data) {
          node.left = addNewNode(node.left);
        } else if (node.data < data) {
          node.right = addNewNode(node.right);
        }
      }
      return node;
    }
    this.treeRoot = addNewNode(this.treeRoot);    
  }

  has(data) {
    function hasNode(node) {
      if (node === null) {
        return false;
      } 
      
      if (node.data === data) {
        return true;
      } else if (node.data > data) {
        return hasNode(node.left);
      } else if (node.data < data) {
        return hasNode(node.right);
      }
    }
    return hasNode(this.treeRoot);
  }

  find(data) {
    function findNode(node) {      
      if (node === null || node.data === data) {
        return node;
      } else if (node.data > data) {
        return findNode(node.left);
      } else if (node.data < data) {
        return findNode(node.right);
      }
    }
    return findNode(this.treeRoot);
  }

  remove(data) {
    function removeNode(node, data) {
      if (node === null) {
        return null;
      }
      if (node.data === data) {
        if (node.left === null && node.right === null) {
          node = null;
        } else if (node.left === null) {
          node = node.right;
        } else if (node.right === null) {
          node = node.left;
        } else if (node.left !== null && node.right !== null) {
          // Look for a minimum element in the right subtree
          let minElemRight = node.right;
          while (minElemRight.left !== null) {
            minElemRight = minElemRight.left;
          }
          node.data = minElemRight.data;
          node.right = removeNode(node.right, minElemRight.data);

          //Look for a maximum element in the left subtree
          /*let maxElemLeft = node.left;
          while (maxElemLeft.right !== null) {
            maxElemLeft = maxElemLeft.right;
          }
          node.data = maxElemLeft.data;
          node.left = removeNode(node.left, maxElemLeft.data);*/
        }
      } else if (node.data > data) {
        node.left = removeNode(node.left, data);
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
      }
      return node;
    }
    this.treeRoot = removeNode(this.treeRoot, data);
  }

  min() {
    if (this.treeRoot === null) {
      return null;
    }
    let currentNode = this.treeRoot;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    } 
    return currentNode.data;
  }

  max() {
    if (this.treeRoot === null) {
      return null;
    }
    let currentNode = this.treeRoot;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    } 
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};