import View from "./view.js";

class BookmarkView extends View {
  bookmarkBtn = document.querySelector(".js-bookmark-saved");
  bookmarksContainer = document.querySelector(".js-bookmark-list");
  savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

  _showBookmarks() {
    this.bookmarkBtn.addEventListener("click", () => {
      this.results.classList.toggle("showBookmark");
    });
  }

  _showSavedBookmarks() {
    this.savedBookmarks.forEach((bookmark) => this._renderBookmark(bookmark));
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
        const newBookmark = { name, region, flagImageUrl };
        this.savedBookmarks.push(newBookmark);
        this._renderBookmark(newBookmark);
        this._saveBookmarks();
      }
    });
  }

  _removeBookmark() {
    this.bookmarksContainer.addEventListener("click", (event) => {
      const deleteBtn = event.target.closest(".js-delete-bookmark");
      if (deleteBtn) {
        const savedItem = deleteBtn.closest(".js-saved-item");
        const bookmarkName = savedItem.querySelector(
          ".js-bookmarks-country"
        ).textContent;

        savedItem.remove();

        this.savedBookmarks = this.savedBookmarks.filter(
          (bookmark) => bookmark.name !== bookmarkName
        );
        this._saveBookmarks();
      }
    });
  }

  _renderBookmark(bookmark) {
    const markup = `
        <li class="header__bookmarks-saved js-saved-item">
            <a href="#${bookmark.name}" class="header__bookmarks-link">
                <div class="header__bookmarks-flag" style="background-image: url(${bookmark.flagImageUrl})"></div>
                <div class="header__bookmarks-tags">
                    <span class="header__bookmarks-country js-bookmarks-country">${bookmark.name}</span>
                    <span class="header__bookmarks-region">${bookmark.region}</span>
                </div>
            </a>
            <span class="header__bookmarks-delete js-delete-bookmark">x</span>
        </li>
    `;

    this.bookmarksContainer.insertAdjacentHTML("afterbegin", markup);
  }

  _saveBookmarks() {
    localStorage.setItem("bookmarks", JSON.stringify(this.savedBookmarks));
  }
}

export default new BookmarkView();
