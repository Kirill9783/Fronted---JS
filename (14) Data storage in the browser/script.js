const form = document.querySelector("#film-form");
const saveButton = document.querySelector(".save");

let indexFilm = null;

const stopUpdateButton = document.querySelector("#cancelEdit");
stopUpdateButton.style.display = "none";

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

    if (indexFilm != null) {
        editFilmToLocalStorage(film, indexFilm);
    } else {
        addFilmToLocalStorage({
            ...film,
            id: `${Date.now()} - ${Math.floor(Math.random() * 1000)}`
        });
    }

    renderTable();
    form.reset();
});

//ДОБАВЛЕНИЕ ФИЛЬМА
function addFilmToLocalStorage(film) {
    const films = JSON.parse(localStorage.getItem("films")) || [];

    films.push(film);
    localStorage.setItem("films", JSON.stringify(films));
}

//ИЗМЕНЕНИЕ ФИЛЬМА
function editFilmToLocalStorage(film, id) {
    const films = JSON.parse(localStorage.getItem("films")) || [];

    const newFilmsArr = films.map(item => item.id === id ? {...film, id: item.id} : item);

    films.push(film);
    localStorage.setItem("films", JSON.stringify(newFilmsArr));

    indexFilm = null;
    saveButton.textContent = "Сохранить";
    stopUpdateButton.style.display = "none";
}

//УДАЛЕНИЕ ФИЛЬМА
function deleteFilm(film) {
    const films = JSON.parse(localStorage.getItem("films"));

    const filmsAfterDelete = films.filter((item) => film.id !== item.id);

    localStorage.setItem("films", JSON.stringify(filmsAfterDelete));
    renderTable();
}

//РЕДАКТИРОВАНИЕ ФИЛЬМА
function editFilm(film) {

    document.querySelector("#title").value = film.title;
    document.querySelector("#genre").value = film.genre;
    document.querySelector("#releaseYear").value = film.releaseYear;
    document.querySelector("#isWatched").checked = film.isWatched;

    saveButton.textContent = "Обновить";
    stopUpdateButton.style.display = "block";

    form.append(stopUpdateButton);
    const updateAndStopUpdate = document.querySelector(".btns");
    updateAndStopUpdate.append(stopUpdateButton);

    stopUpdateButton.addEventListener("click", function () {
        stopUpdateButton.style.display = "none";
        indexFilm = null;
        saveButton.textContent = "Сохранить";
        form.reset();
    })
}

//СОРТИРОВКА
const sort = document.querySelector(".select");

sort.addEventListener("change", () => {
    const criterion = sort.value;
    const films = JSON.parse(localStorage.getItem("films")) || [];

    films.sort((a, b) => a[criterion].localeCompare(b[criterion]))

    localStorage.setItem("films", JSON.stringify(films));
    renderTable();
})

function renderTable() {
    const films = JSON.parse(localStorage.getItem("films")) || [];

    const filmTableBody = document.querySelector("#film-tbody");

    filmTableBody.innerHTML = "";

    films.forEach((film) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.releaseYear}</td>
            <td>${film.isWatched ? "Да" : "Нет"}</td>
        `;

        row.setAttribute("id", `${film.id}`);
        row.setAttribute("class", "film-html");

        const td = document.createElement("td");

        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.setAttribute("type", "button")
        editButton.textContent = "Редактировать";

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.textContent = "Удалить";
        deleteButton.setAttribute("type", "button");

        td.append(editButton);
        td.append(deleteButton);
        row.append(td);
        filmTableBody.append(row);

        deleteButton.addEventListener("click", () => {
            if (confirm("Вы уверены?")) {
                indexFilm = film.id;
                deleteFilm(film);
            }
        });

        editButton.addEventListener("click", () => {
            indexFilm = film.id;
            editFilm(film);
        });
    });
}

renderTable();