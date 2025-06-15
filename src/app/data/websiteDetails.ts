import { WebsiteDetails } from "../types/website";

let cachedData: WebsiteDetails | null = null;

export async function getWebsiteDetails(): Promise<WebsiteDetails> {
  // Return cached data if available
  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await fetch("/data/websiteDetails.json");
    if (!response.ok) {
      throw new Error("Failed to fetch website details");
    }
    const data: WebsiteDetails = await response.json();
    // Cache the data
    cachedData = data;
    return data;
  } catch (error) {
    console.error("Error loading website details:", error);
    return {};
  }
}

// Helper function to get a single website by ID
export async function getWebsiteById(id: string) {
  const data = await getWebsiteDetails();
  return data[id];
}
