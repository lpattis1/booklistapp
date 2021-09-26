// Document Variables

const bookForm = document.querySelector("#book-form");
const titleInput = document.querySelector(".book-title");
const authorInput = document.querySelector(".book-author");
const ibsnInput = document.querySelector(".book-isbn");
const submitBtn = document.querySelector(".submit-btn");
const bookContent = document.querySelector(".book-content");

const alertSuccess = document.querySelector(".alert-success");
const alertFailure = document.querySelector(".alert-failure");

// Event handler
eventHandler();

function eventHandler() {
  bookForm.addEventListener("submit", submitForm);
}

// Book object
class Book {
  constructor(title, author, ibsn) {
    this.bookRow = document.createElement("tr");
    this.bookRow.className = "book-added-row";

    this.bookColTitle = document.createElement("td");
    this.bookColTitle.className = "added-title";
    this.bookColTitle.textContent = title;

    this.bookColAuthor = document.createElement("td");
    this.bookColAuthor.className = "added-author";
    this.bookColAuthor.textContent = author;

    this.bookColIbsn = document.createElement("td");
    this.bookColIbsn.className = "added-ibsn";
    this.bookColIbsn.textContent = ibsn;

    this.bookColDelete = document.createElement("td");
    this.bookColDelete.className = "delete-option";
    this.bookColDelete.innerHTML = `<i class="fas fa-times delete-item"></i>`;

    this.bookRow.appendChild(this.bookColTitle);
    this.bookRow.appendChild(this.bookColAuthor);
    this.bookRow.appendChild(this.bookColIbsn);

    this.bookRow.appendChild(this.bookColDelete);

    bookContent.appendChild(this.bookRow);

    this.bookRow.children[3].addEventListener("click", () => {
      this.deleteBook();
    });
  }

  deleteBook() {
    this.bookRow.remove();
  }
}

// Submit form function
function submitForm(e) {
  e.preventDefault();

  if (
    titleInput.value === "" &&
    authorInput.value === "" &&
    ibsnInput.value === ""
  ) {
    alertFailure.classList.remove("d-none");
    setInterval(() => {
      alertFailure.classList.add("d-none");
    }, 3000);
  } else {
    alertSuccess.classList.remove("d-none");
    setInterval(() => {
      alertSuccess.classList.add("d-none");
    }, 5000);
    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      ibsnInput.value
    );
  }
}
