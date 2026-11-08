import { sampleEvents } from "./data.js";

// Demonstrates fetch() and async/await. If the public demo API is unavailable,
// the app gracefully uses its included sample data.
export async function fetchEvents() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    const posts = await response.json();

    // Adapt API records into the event shape used by this application.
    return posts.map((post, index) => ({
      ...sampleEvents[index],
      title: sampleEvents[index]?.title ?? post.title,
      description: sampleEvents[index]?.description ?? post.body
    }));
  } catch (error) {
    console.info("Using local sample events:", error.message);
    return sampleEvents;
  }
}
