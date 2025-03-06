export default function getStatusClass(description) {
    const statusDescription = description.toLowerCase();
  
    switch (statusDescription) {
      case "good service":
        return "good-service";
      case "minor delays":
        return "minor-delays";
      case "severe delays":
        return "severe-delays";
      default:
        return "standard-status";
    }
  }