import View from "./view.js";

class BookmarkView extends View {
  bookmarkBtn = document.querySelector(".js-bookmark-saved");
  results = document.querySelector(".js-bookmark-results");
  bookmarksContainer = document.querySelector(".js-bookmark-list");
  savedBookmarks = [];

  _showBookmarks() {
    this.bookmarkBtn.addEventListener("click", () => {
      this.results.classList.toggle("showBookmark");
    });
  }

  _saveBookmark() {
    const bookmarkSave = this.parentEl.querySelector(".js-bookmark-save");
    const name = this.parentEl.querySelector(".js-country-title").textContent;
    const region =
      this.parentEl.querySelector(".js-country-region").textContent;
    const flagStyle = getComputedStyle(
      this.parentEl.querySelector(".js-country-flag")
    );
    const flagImageUrl = flagStyle.backgroundImage
      .slice(4, -1)
      .replace(/["']/g, "");

    bookmarkSave.addEventListener("click", () => {
      if (!this.savedBookmarks.some((bookmark) => bookmark.name === name)) {
        const newBookmark = {
          name: name,
          region: region,
          flagImageUrl: flagImageUrl,
        };
        this.savedBookmarks.push(newBookmark);

        const markup = `
        <li class="header__bookmarks-saved js-saved-item">
            <a href="#${newBookmark.name}" class="header__bookmarks-link">
                <div class="header__bookmarks-flag" style="background-image: url(${newBookmark.flagImageUrl})"></div>
                <div class="header__bookmarks-tags">
                    <span class="header__bookmarks-country js-bookmarks-country">${newBookmark.name}</span>
                    <span class="header__bookmarks-region">${newBookmark.region}</span>
                </div>
            </a>
            <span class="header__bookmarks-delete js-delete-bookmark">x</span>
        </li>
    `;
        this.bookmarksContainer.insertAdjacentHTML("afterbegin", markup);
        this._removeBookmark(); // chnage letter to controller
      }
    });
  }

  _removeBookmark() {
    const savedItems = document.querySelectorAll(".js-saved-item");
    savedItems.forEach((savedItem) => {
      const deleteBtn = savedItem.querySelector(".js-delete-bookmark");
      deleteBtn.addEventListener("click", (e) => {
        const bookmarkName = savedItem.querySelector(
          ".js-bookmarks-country"
        ).textContent;

        // Remove element from DOM
        savedItem.remove();

        // Removing element with same name
        this.savedBookmarks = this.savedBookmarks.filter(
          (bookmark) => bookmark.name !== bookmarkName
        );
      });
    });
  }
}

export default new BookmarkView();
