## Definitions
- Node - an element containing data that make contain links to one or more parents/children May also be referred to as a vertex
- Edge - a connection between two nodes
- Root - The top node in a tree (a node without a parent)
- Parent - A node connected to another node when moving towards the root
- Child - a node connectd to another node when moving away from root
- Descendant - a node reachable by repeated processing from parent to child
- Ancestor - a node reachable by repeated processing from child to parent
- Leaf - a node without any children
- Degree - the number of sub trees of a node
- Path - a sequence of nodes and edges connecting a node with a descendant
- Depth - the depth of a node is the number of edges from the node to the tree’s root node
- Subtree - of a tree T is a tree consisting of a node in T and all of it’s descendants in T

## Binary Tree

A binary tree is a tree data structure in which each node has at most two children.

- Full Binary tree - every node in the tree has 0 or 2 children
- Perfect binary tree - all interior nodes have two children and all leaves have the same depth or level
- Complete binary tree - every level except possibly the last is completely filled, and all nodes in the last level are as far left as possible

## Binary Search Tree (BST)
A binary search tree (BST) is a data structure that binary tree that keeps it’s keys in sorted order, so that operations can take advantage of the binary search principle (a logarithmic search that takes happens in O(log n) time)

## B-Tree
A B-tree is a self-balancing tree data structure that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time. It is a generalization of a binary search tree in that a node can have more than two children. A B-tree is optimized for systems that read and write large blocks of data. B-tree’s are commonly used in databases and file systems.

## AVL Tree
An AVL Tree is a self-balancing binary search tree. The height of the two child subtrees of any node differ at most by one, otherwise the tree is re-balanced. Lookup, insertion, and deletion take O(log n) time. Insertions and deletion may cause a tree rotation

## Red-Black Tree
A red-black tree is a self-balancing binary search tree. Each node of the tree has an extra bit, which is interpreted as either black or red. The color bits are used to ensure the tree remains balanced during insertions and deletions. Operations occur in O(log n) time.

## B+ Tree
A B+ tree is a B-tree in which each node only contains keys (not key-values), and to which an additional level is added at the bottom with linked leaves.

This makes for more efficient retrieval of data in block-oriented storage (once you find the start of the block, you can read sequentially without having to traverse up and down the tree to retrieve data nodes). Additionally, all leave nodes must be the same distance from the root node.

SQL Server & Oracle store table indexes in B+ trees, which are similar to B-trees, except that data is only stored in leaf nodes - all other nodes hold only key values and pointers to the next nodes.

## Tree Traversal

### Depth-first search
In a depth-first search, the search is deepened as much as possible on each child before going to the next sibling

- Pre-Order
  - Display data of root
  - Traverse left subtree calling preorder function
  - Traverse right subtree calling preorder function

- In-Order
  - Traverse left subtree calling preorder function
  - Display data of root
  - Traverse right subtree calling preorder function

An In-Order search will return the sorted contents of a BST (Binary Search Tree)

- Post-Order
  - Traverse left subtree calling preorder function
  - Traverse right subtree calling preorder function
  - Display data of root

A stack can be used to perform a depth-first search

### Breadth-first search
In a breadth-first search, all nodes on a level are visited before going to a lower level.

A Queue is often used to peform a breadth-first search


## Tree Rotation
