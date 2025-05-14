const form = document.querySelector("#film-form");
const deleteAll = document.querySelector(".delete-all");

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

const titleSort = document.querySelector("#title-sort");
const genreSort = document.querySelector("#genre-sort");
const releaseYearSort = document.querySelector("#releaseYear-sort");
const selectSort = document.querySelector("#select");

titleSort.addEventListener('keyup', renderTable);
genreSort.addEventListener('keyup', renderTable);
releaseYearSort.addEventListener('keyup', renderTable);
selectSort.addEventListener("change", renderTable);

async function renderTable() {
    const titleValue = titleSort.value;
    const genreValue = genreSort.value;
    const releaseYearValue = releaseYearSort.value;
    const selectValue = selectSort.value;

    const filmsResponse =
        await fetch(`https://sb-film.skillbox.cc/films?title=${titleValue}&genre=${genreValue}&releaseYear=${releaseYearValue}&isWatched=${selectValue}`, {
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