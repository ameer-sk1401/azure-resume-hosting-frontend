// Function to update counter
async function updateCounter() {
  const counterElement = document.getElementById("counter");

  try {
    // Replace with your actual Azure Function URL
    const API_URL = "https://your-function-app.azurewebsites.net/api/counter";

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    counterElement.textContent = data.count;
  } catch (error) {
    console.error("Error updating counter:", error);
    counterElement.textContent = "Error loading";
  }
}

// Call function when page loads
window.addEventListener("DOMContentLoaded", (event) => {
  updateCounter();
});
