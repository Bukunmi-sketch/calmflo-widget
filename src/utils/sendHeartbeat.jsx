import { API_BASE_URL } from "./url_config";
export async function sendHeartbeat(widgetId) {
  const domain = window.location.hostname;
  const url = window.location.href;

  try {
    const response = await fetch(`${API_BASE_URL}/api/widget_heartbeat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ widget_id: widgetId, domain, url }),
    });
    if (response.ok) {
      console.log("Heartbeat sent successfully.");
    }
  } catch (err) {
    console.error("Error sending heartbeat:", err);
  }
}