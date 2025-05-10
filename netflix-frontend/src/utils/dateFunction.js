export function formatReleaseDate(date) {
    const parsedDate = new Date(date);
  
    // Check if the date is valid
    if (isNaN(parsedDate)) {
      return "Invalid Date"; // Return a fallback message if the date is invalid
    }
  
    return parsedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  