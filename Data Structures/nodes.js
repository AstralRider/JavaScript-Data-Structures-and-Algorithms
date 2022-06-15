export class Node {
    constructor(data) {
      this.data = data;
      //When a node is created it is intially set to null
      this.next = null;
    }
    //When a node is passed in here, it is linked to the node before. 
    setNextNode(node) {
        //conditional to make sure only instances of nodes are able to be set to next nodes.

        if (node instanceof Node || node === null) {
          this.next = node
        } else {
          throw new Error('Not a node or null')
        }
      }

      //returns the next node, if there is one
      getNextNode() {
        return this.next
      }


    }
  
  //Create an instance of the first node
  const firstNode = new Node('I am an instance of a Node!');

  //Create an instance of the second node
  const secondNode = new Node('Second node');

  //Set firstNode -> secondNode
  firstNode.setNextNode(secondNode);

  