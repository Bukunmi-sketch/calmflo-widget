export async function trackWidgetDeployment(widgetId) {
  const domain = window.location.hostname;
  const url = window.location.href;
  const key = `widget_deployment_${widgetId}_${domain}_${url}`;

  if (localStorage.getItem(key)) return;

  try {
    const response = await fetch(`http://localhost:8001/api/widget_deployment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ widget_id: widgetId, domain, url }),
    });
    if (response.ok) {
      console.log("Widget deployment tracked");
      localStorage.setItem(key, "true");
    }
  } catch (err) {
    console.error("Error tracking widget deployment:", err);
  }
}
