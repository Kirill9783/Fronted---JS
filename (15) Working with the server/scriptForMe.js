const form = document.querySelector("#film-form");
const deleteAll = document.querySelector(".delete-all");

const tableForFilter = document.querySelector("#film-tbody").getElementsByTagName("tr");

let idFilm = null;

//ВАЛИДАЦИЯ
const validator = new JustValidate("#film-form");

validator
    .addField(document.querySelector("#title"), [
      {
        rule: "required",
        errorMessage: "Введите название фильма"
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: "Минимум 3 символа"
      }
    ])
    .addField(document.querySelector("#genre"), [
      {
        rule: "required",
        errorMessage: "Введите жанр фильма"
      },
    ])
    .addField(document.querySelector("#releaseYear"), [
      {
        rule: "required",
        errorMessage: "Введите год фильма"
      },
      {
        rule: "number",
        errorMessage: "Используйте цифры"
      },
    ]);

validator.onSuccess(() => {
  const title = document.querySelector("#title").value;
  const genre = document.querySelector("#genre").value;
  const releaseYear = document.querySelector("#releaseYear").value;
  const isWatched = document.querySelector("#isWatched").checked;

  const film = {
    title: title,
    genre: genre,
    releaseYear: releaseYear,
    isWatched: isWatched
  }

  addFilm(film);

});

//ДОБАВЛЯЕМ ФИЛЬМ
async function addFilm(film) {

  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "astapov@mail.ru",
    },
    body: JSON.stringify(film),
  });

  renderTable();
  form.reset();
}

//УДАЛЯЕМ ФИЛЬМ
async function deleteFilm(id) {
  const response = await fetch(`https://sb-film.skillbox.cc/films/${id}`, {
    method: "DELETE",
    headers: {
      email: "astapov@mail.ru"
    }
  });
  const data = await response.json();
  console.log(data);
  renderTable();
}

//УДАЛЯЕМ ВСЕ
async function deleteAllFilms() {
  const response = await fetch("https://sb-film.skillbox.cc/films", {
    method: "DELETE",
    headers: {
      email: "astapov@mail.ru"
    }
  });
  const data = await response.json();
  console.log(data);
  renderTable()
}

deleteAll.addEventListener("click", () => deleteAllFilms())

//ФИЛЬТРУЕМ
function titleFilter() {
  const titleFilter = document.querySelector("#title-sort").value.toUpperCase().trim();

  for (let i = 0; i < tableForFilter.length; i++) {
    let firstColumnContent = tableForFilter[i].cells[0].textContent.toUpperCase();
    tableForFilter[i].style.display = firstColumnContent.includes(titleFilter) ? "" : "none";
  }
}

function genreFilter() {
  const genreFilter = document.querySelector("#genre-sort").value.toUpperCase().trim();

  for (let i = 0; i < tableForFilter.length; i++) {
    let firstColumnContent = tableForFilter[i].cells[1].textContent.toUpperCase();
    tableForFilter[i].style.display = firstColumnContent.includes(genreFilter) ? "" : "none";
  }
}

function releaseYearFilter() {
  const releaseYearFilter = document.querySelector("#releaseYear-sort").value.toUpperCase().trim();

  for (let i = 0; i < tableForFilter.length; i++) {
    let firstColumnContent = tableForFilter[i].cells[2].textContent.toUpperCase();
    tableForFilter[i].style.display = firstColumnContent.includes(releaseYearFilter) ? "" : "none";
  }
}

function isWatchedFilter() {

  const isWatchedFilter = document.querySelector("#select").value

  for (let i = 0; i < tableForFilter.length; i++) {
    let firstColumnContent = tableForFilter[i].cells[3].textContent;
    tableForFilter[i].style.display = firstColumnContent.includes(isWatchedFilter) ? "" : "none";
  }
}

document.querySelector("#title-sort").addEventListener('keyup', titleFilter);
document.querySelector("#genre-sort").addEventListener('keyup', genreFilter);
document.querySelector("#releaseYear-sort").addEventListener('keyup', releaseYearFilter);
document.querySelector("#select").addEventListener("change", isWatchedFilter);

async function renderTable() {
  // const films = JSON.parse(localStorage.getItem("films")) || [];
  const filmsResponse = await fetch("https://sb-film.skillbox.cc/films", {
    headers: {
      email: "astapov@mail.ru",
    },
  });
  const films = await filmsResponse.json();

  const filmTableBody = document.getElementById("film-tbody");

  // Clear table body first
  filmTableBody.innerHTML = "";

  // Then add new rows
  films.forEach((film, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
    `;

    const td = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Удалить";
    deleteButton.setAttribute("type", "button");

    td.append(deleteButton);
    row.append(td);

    filmTableBody.append(row);

    deleteButton.addEventListener("click", () => {
      idFilm = film.id
      deleteFilm(idFilm)
    })
  });
}

// Display films on load
renderTable();