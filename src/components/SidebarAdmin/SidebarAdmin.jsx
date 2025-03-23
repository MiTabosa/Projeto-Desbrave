import "./SidebarAdmin.css";

export default function SidebarAdmin({ children }) {
  return (
    <div className="dashboard-container">
      
      <div className="dashboard-content">{children}</div>
    </div>
  );
}