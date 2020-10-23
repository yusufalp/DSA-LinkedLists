class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    }
    else {
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
         and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    console.log(currNode);
  }
  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

// Available functions: 
/*  main, 
    insertBefore, 
    insertAfter, 
    insertAt, 
    display, 
    size, 
    isEmpty, 
    reversedLinkedList
*/

// Available methods: insertFirst, insertLast, find, remove
const SLL = new LinkedList()

function main() {
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')
  SLL.insertLast('Tauhida')
}

isEmpty()
main()
// display()

function insertBefore(linkedList, item, before) {
  let firstList = linkedList.head
  let previousNode = firstList
  // if linkedList is empty
  if (firstList === null) {
    linkedList.head = { value: item, next: null }
    return
  }
  // If adding before the first item
  if (firstList.value === before) {
    linkedList.head = { value: item, next: firstList }
    return
  }
  while (firstList) {
    if (firstList.value === before) {
      previousNode.next = { value: item, next: firstList }
      return
    }
    previousNode = firstList
    firstList = firstList.next
  }
  console.log("after insertBefore-> ", linkedList)
}

// insertBefore(SLL, 'Athena', 'Boomer')
// display()

function insertAfter(linkedList, item, after) {
  let firstList = linkedList.head
  let nextNode = firstList.next
  // if LinkedList is empty
  if (firstList === null) {
    linkedList.head = { value: item, next: null }
    return
  }
  while(firstList){
    if(firstList.value === after){
      firstList.next = {value: item, next: firstList.next}
      nextNode = nextNode.next
      return
    }
    firstList = firstList.next
    nextNode = nextNode
  }

  console.log("after insertAfter-> ", linkedList)
}

// display()
// insertAfter(SLL, 'Hotdog', 'Apollo')
// display()

function insertAt(value, index) {
  let starter = SLL.head
  let counter = 0
  while (starter) {
    counter++
    if (counter === index) {
      let next = starter.next
      starter.next = { value, next }
      return
    }
    starter = starter.next
  }
}

// insertAt('Lessie', 2)
// display()
// insertAt('Yusuf', 5)
// display()


function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
  console.log("What does this one do? ->", current)
}

// WhatDoesThisProgramDo(SLL)
// display()

function reverseLinkedList() {
  let node = SLL.head
  let next = null
  let previous = null

  while(node.next){
    next = node.next
    node.next = previous
    temp = next.next
    // next.next = node
    // a => node => c
    // a <= node <= c
    previous = node
    node = next
  }
  return SLL.head = previous
}

// reverseLinkedList()
// display()

function fromTheEnd(){

}

function middleOfList(){

}

function cycleList(){

}

function sortList(){
  
}




function display() {
  let node = SLL.head
  console.log('-----------')
  while (node) {
    console.log("display ->", node.value)
    node = node.next
  }
}

function size() {
  let starter = SLL.head
  let counter = 0
  while (starter) {
    counter++
    starter = starter.next
  }
  console.log("Size is ->", counter)
}

function isEmpty() {
  console.log("isEmpty ->", SLL.head === null ? true : false)
}