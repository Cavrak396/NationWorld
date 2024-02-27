import View from "./view.js";

class BookmarkView extends View {
  bookmarkSaved = this.parentEl.querySelector(".js-bookmark-save");
  bookmarkBtn = document.querySelector(".js-bookmark-saved");
  results = document.querySelector(".js-bookmark-results");
  bookmarks = document.querySelector(".js-bookmarks");

  _showBookmarks() {
    this.bookmarkBtn.addEventListener("click", () => {
      this.results.classList.toggle("showBookmark");
    });
  }
}

export default new BookmarkView();
