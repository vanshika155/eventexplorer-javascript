import { fetchEvents } from "./api.js";
import { filterEvents, getFreeEventCount, getTotalSeats } from "./events.js";
import { renderEvents } from "./ui.js";

const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");
const freeOnly = document.querySelector("#freeOnly");
const eventsGrid = document.querySelector("#eventsGrid");
const eventCount = document.querySelector("#eventCount");
const statusMessage = document.querySelector("#statusMessage");

let allEvents = [];

function updateView() {
  const visibleEvents = filterEvents(
    allEvents,
    searchInput.value,
    categoryFilter.value,
    freeOnly.checked
  );
  renderEvents(visibleEvents, eventsGrid, eventCount);
}

async function initialiseApp() {
  statusMessage.textContent = "Loading events…";
  allEvents = await fetchEvents();

  // Example array calculations using reduce and filter.
  const demoSeatCounts = [25, 40, 30];
  const totalDemoSeats = getTotalSeats(demoSeatCounts);
  console.info("Free events:", getFreeEventCount(allEvents));
  console.info("Example total seats:", totalDemoSeats);

  statusMessage.textContent = "";
  updateView();
}

searchInput.addEventListener("input", updateView);
categoryFilter.addEventListener("change", updateView);
freeOnly.addEventListener("change", updateView);

initialiseApp();
