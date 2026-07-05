"use strict";

// Initialize Bootstrap tooltips if any element opts in via data-bs-toggle="tooltip".
document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  if (tooltipTriggerList.length && window.bootstrap) {
    tooltipTriggerList.forEach((el) => new bootstrap.Tooltip(el));
  }
});
