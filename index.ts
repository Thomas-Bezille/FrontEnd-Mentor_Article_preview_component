const popup = document.querySelector(
  ".card__profile--active",
) as HTMLDivElement;
const profilElement = document.querySelector(
  ".card__profile",
) as HTMLDivElement;
const btnShare = document.querySelector(
  ".card__profile__btn-share",
) as HTMLButtonElement;
const btnShareActive = document.querySelector(
  ".card__profile--active__btn-share",
) as HTMLButtonElement;

btnShare?.addEventListener("click", event => {
  event.stopPropagation();
  displayPopup();
});

btnShareActive.addEventListener("click", () => {
  popup.style.display = "none";
  profilElement.style.display = "flex";
});

document.addEventListener("click", event => {
  if (!popup.contains(event.target as Node)) {
    popup.style.display = "none";
    if (window.innerWidth < 992) {
      profilElement.style.display = "flex";
    }
  }
});

/**
 * Shows or hides the share popup as well as the profile element.
 *
 * - If the popup is visible, it is hidden and the profile element is redisplayed (on screens < 992px)
 * - If the popup is hidden, it is displayed and the profile element is hidden (on screens < 992px)
 *
 * @returns {void}
 */
function displayPopup(): void {
  if (popup.style.display === "flex") {
    popup.style.display = "none";
    if (window.innerWidth < 992) {
      profilElement.style.display = "flex";
    }
  } else {
    popup.style.display = "flex";
    if (window.innerWidth < 992) {
      profilElement.style.display = "none";
    }
  }
}
