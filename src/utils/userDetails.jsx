// // ---- API Helpers ----
// export async function fetchUserDetails(widgetId) {
//   try {
//     const response = await fetch(`http://localhost:8001/api/loadWidget/${widgetId}`);
//     const data = await response.json();
//     return { ...data, error_tab: false };
//   } catch (error) {
//     console.error("Error fetching user details:", error);

//     return { error: true, message: "Unable to connect to server. Please try again later." };
//     return {
//       widgetDetails: {
//         name: "Powered by Bucxai",
//         user_unique_id: null,
//         collect_leads: false,
//         home_tab: false,
//       },
//       error_tab: true,
//     };
//   }
// }


// ---- API Helpers ----
export async function fetchUserDetails(widgetId) {
  try {
    const response = await fetch(`http://localhost:8001/api/loadWidget/${widgetId}`);
    
    if (!response.ok) {
      let data;
      try {
        data = await response.json();
      } catch {} // Ignore if no JSON
      return {
        error: data?.error || `HTTP error: ${response.status}`,
        status: response.status,
        type: response.status === 401 || response.status === 403 ? 'unauthorized' : 'general'
      };
    }
    
    const data = await response.json();
    return { ...data, error_tab: false };
  } catch (error) {
    console.error(`Error fetching user details for widgetId ${widgetId}:`, error);
    // Detect network-specific errors
    let errorMessage = 'Unable to connect to server. Please try again later.';
    let errorType = 'general';
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      console.log('Network issues detected');
      errorMessage = 'Connection failed';
      errorType = 'network';
    }
    return { error: errorMessage, type: errorType };
  }
}
