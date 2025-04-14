$(document).ready(function () {
  $(".gallery").mauGallery({
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
    },
    lightBox: true,
    lightboxId: "myAwesomeLightbox",
    showTags: true,
    tagsPosition: "top",
  });
  // Fix for page being prevented from back/forward cache
  // Adding a click event listener dynamically
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", handleGalleryItemClick);
  });
});

// Clean up dynamically added event listeners
window.addEventListener("pagehide", () => {
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.removeEventListener("click", handleGalleryItemClick);
  });
});

// Event handler
function handleGalleryItemClick(event) {
  console.log("Gallery item clicked:", event.target);
}
