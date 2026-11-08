// DOM rendering is kept separate from data and API logic.
export function renderEvents(events, gridElement, countElement) {
  countElement.textContent = `${events.length} event${events.length === 1 ? "" : "s"} found`;

  if (events.length === 0) {
    gridElement.innerHTML = '<div class="empty-state">No events match your search. Try another filter.</div>';
    return;
  }

  gridElement.innerHTML = events.map((event) => `
    <article class="event-card">
      <div class="card-top">
        <span class="category">${escapeHTML(event.category)}</span>
        <span class="fee">${event.fee === 0 ? "FREE" : `₹${event.fee}`}</span>
      </div>
      <h3>${escapeHTML(event.title)}</h3>
      <p class="event-description">${escapeHTML(event.description)}</p>
      <div class="event-meta">
        <span>📍 ${escapeHTML(event.city)}</span>
        <span>📅 ${formatDate(event.date)}</span>
      </div>
    </article>
  `).join("");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric"
  });
}
