import { FaSignOutAlt } from "react-icons/fa";

export default function LogoutButton() {
  const handleLogout = () => {
    // Implement logout logic here, e.g., clearing user session, redirecting to login page, etc.
    console.log("User logged out");
    // Example: window.location.href = "/login";
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Sair
      <FaSignOutAlt size={16} style={{ marginLeft: 8 }} />
    </button>
  );
}
