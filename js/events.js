// Pure functions for searching, filtering, and summarizing event data.
export function filterEvents(events, searchText, category, freeOnly) {
  const query = searchText.trim().toLowerCase();

  return events.filter((event) => {
    const matchesSearch = !query ||
      [event.title, event.city, event.category].some((value) =>
        value.toLowerCase().includes(query)
      );
    const matchesCategory = category === "all" || event.category === category;
    const matchesFee = !freeOnly || event.fee === 0;
    return matchesSearch && matchesCategory && matchesFee;
  });
}

export function getFreeEventCount(events) {
  return events.filter((event) => event.fee === 0).length;
}

export function getTotalSeats(seatCounts) {
  return seatCounts.reduce((total, seats) => total + seats, 0);
}
