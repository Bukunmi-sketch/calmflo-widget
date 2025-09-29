
export async function sendHeartbeat(widgetId) {
  const domain = window.location.hostname;
  const url = window.location.href;

  try {
    const response = await fetch(`http://localhost:8001/api/widget_heartbeat`, {
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