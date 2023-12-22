const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queueStart = null;
    this.queueLength = 0;
  }

  enqueue(value) {
    if (this.queueLength === 0) {
      this.queueStart = new ListNode(value);
    } else {
      let currentElem = this.queueStart;
      while (currentElem.next !== null) {
        currentElem = currentElem.next;
      }
      currentElem.next = new ListNode(value);
    }
    this.queueLength ++;
  }

  dequeue() {
    if (this.queueLength === 0) {
      return null;
    } else {
      let deletedElem = this.queueStart;
      this.queueStart = this.queueStart.next;
      this.queueLength --;
      return deletedElem.value;
    }    
  }

  getUnderlyingList() {
    return this.queueStart;
  }
}

module.exports = {
  Queue
};
