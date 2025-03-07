function getStatusClass(status) {
  if (!status) return "standard-status";

  const severity = status.lineStatuses[0]?.statusSeverityDescription;

  switch (severity) {
    case "Good Service":
      return "good-service"; // Green
    case "Minor Delays":
      return "minor-delays"; // Yellow
    case "Severe Delays":
      return "severe-delays"; // Red
    default:
      return "standard-status"; // My Fallback
  }
}

export default getStatusClass;