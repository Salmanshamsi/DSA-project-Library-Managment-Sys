class Book {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Library {
  constructor() {
    this.head = null;
    this.checkedOutQueue = []
  }

  append(data) {
    const newNode = new Book(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  delete(title) {
    if (!this.head) {
      return;
    }

    if (this.head.data.title === title) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current && current.data.title !== title) {
      previous = current;
      current = current.next;
    }

    if (!current) {
      // Book not found
      return;
    }

    previous.next = current.next;
  }

  searchByTitle(title) {
    let current = this.head;

    while (current) {
      if (current.data.title === title) {
        return current.data;
      }
      current = current.next;
    }

    return null;
  }

  checkoutBook(title) {
    let currentBook = this.head;
    while (currentBook) {

      if (currentBook.data.title === title) {
          currentBook.data.status = "Not Available";
          this.checkedOutQueue.push(currentBook);
      }
      currentBook = currentBook.next;
    }

  }

  checkinBook(title) {

    for (let i = 0; i < this.checkedOutQueue.length; i++) {
      const book = this.checkedOutQueue[i];
      if (book.data.title === title) {
        book.data.status = "available";
        this.checkedOutQueue.splice(i, 1);
      }
    }
  }

  printList() {
    const Books = [];
    let current = this.head;
    let i = 0;

    while (current) {
      Books[i] = current.data;
      this.count++
      current = current.next;
      i++;
    }

    this.bubbleSortLinkedList()

    return Books;
  }

  CountNodes() {
    let current = this.head
    let count = 0
    while (current) {
      count += 1
      current = current.next;
    }
    return count;
  }

  bubbleSortLinkedList() {
    for (let i = 0; i < this.CountNodes() - 1; i++) {
      let current = this.head;
      for (let j = 0; j < this.CountNodes() - i - 1; j++) {
        if (current.data.title > current.next.data.title) {
          [current.data, current.next.data] = [current.next.data, current.data];
        }

        current = current.next;
      }
    }
  }


}

const library = new Library();


export { library };
