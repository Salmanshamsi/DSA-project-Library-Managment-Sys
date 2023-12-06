class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.status = "available"
        self.next = None


class Library:
    def __init__(self):
        self.books = None
        self.checkedOutQueue = []

    def addBook(self, title, author, isbn):
        newBook = Book(title, author, isbn)
        newBook.next = self.books
        self.books = newBook
        print(f"Book '{title}' added to the library.")

    def displayBooks(self):
        currentBook = self.books
        print("\nLibrary Books:")
        while currentBook:
            print(f"Title: {currentBook.title}, Author: {currentBook.author}, ISBN: {currentBook.isbn}, Status: {currentBook.status}")
            currentBook = currentBook.next

    def search_books(self, keyword):
        results = []
        currentBook = self.books
        while currentBook:
            if keyword.lower() in currentBook.title.lower() or keyword.lower() in currentBook.author.lower():
                results.append(currentBook)
            currentBook = currentBook.next
        return results

    def checkOutBook(self, isbn):
        currentBook = self.books
        while currentBook:
            if currentBook.isbn == isbn and currentBook.status == "available":
                currentBook.status = "checkedOut"
                self.checkedOutQueue.append(currentBook)
                print(f"Book '{currentBook.title}' checked out successfully.")
                return
            currentBook = currentBook.next
        print("Book not found or not available for checkout.")

    def check_in_book(self, isbn):
        for i, checkedOutBook in enumerate(self.checkedOutQueue):
            if checkedOutBook.isbn == isbn:
                checkedOutBook.status = "available"
                del self.checkedOutQueue[i]
                print(f"Book '{checkedOutBook.title}' checked in successfully.")
                return
        print("Book not found or not checked out.")


def main():
    library = Library()

    while True:
        print("\nLibrary Management System Menu:")
        print("1. Add Book")
        print("2. Display Available Books")
        print("3. Search for Books")
        print("4. Check Out a Book")
        print("5. Check In a Book")
        print("6. Exit")

        choice = input("Enter your choice (1-6): ")

        if choice == "1":
            title = input("Enter the title of the book: ")
            author = input("Enter the author of the book: ")
            isbn = input("Enter the ISBN of the book: ")
            library.addBook(title, author, isbn)

        elif choice == "2":
            library.displayBooks()

        elif choice == "3":
            keyword = input("Enter a keyword to search for books: ")
            search_results = library.search_books(keyword)
            print("\nSearch Results:")
            for result in search_results:
                print(f"Title: {result.title}, Author: {result.author}, ISBN: {result.isbn}, Status: {result.status}")

        elif choice == "4":
            isbn = input("Enter the ISBN of the book you want to check out: ")
            library.check_out_book(isbn)

        elif choice == "5":
            isbn = input("Enter the ISBN of the book you want to check in: ")
            library.check_in_book(isbn)

        elif choice == "6":
            print("Exiting the Library Management System. Goodbye!")
            break

        else:
            print("Invalid choice. Please enter a number between 1 and 6.")


if __name__ == "__main__":
    main()
