// ---- API Helpers ----
export async function fetchUserDetails(widgetId) {
  try {
    const response = await fetch(`http://localhost:8001/api/loadWidget/${widgetId}`);
    const data = await response.json();
    return { ...data, error_tab: false };
  } catch (error) {
    console.error("Error fetching user details:", error);
    return {
      widgetDetails: {
        name: "Powered by Bucxai",
        user_unique_id: null,
        collect_leads: false,
        home_tab: false,
      },
      error_tab: true,
    };
  }
}


