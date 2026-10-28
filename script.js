
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "Тёмная тема";
    } else {
        themeButton.textContent = "Сменить тему";
    }
});

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

const detailButtons = document.querySelectorAll(".details-button");

detailButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        modalTitle.textContent = button.dataset.car;
        modalText.textContent = button.dataset.info;

        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
