const Dashboard = () => {
  return (
    <div className="dashboard-container">
      
      <nav className="navbar">
        <div className="nav-right">
          <span>Welcome back, Alex!</span>
          <button className="logout-btn">Logout</button>
        </div>
      </nav>

      <section className="welcome-section">
        <h1>Welcome, Alex!</h1>
        <p>
          Everything looks great today. You have 3 new notifications and your
          system status is healthy.
        </p>
      </section>

      <section className="cards-section">
        <div className="card">
          <h3>My Profile</h3>
          <p>View and edit your personal information.</p>
        </div>

        <div className="card">
          <h3>Recent Activity</h3>
          <p>Check your latest interactions and logs.</p>
        </div>

        <div className="card">
          <h3>Notifications</h3>
          <p>Stay updated with alerts and messages.</p>
        </div>

        <div className="card">
          <h3>Account Settings</h3>
          <p>Manage your security and preferences.</p>
        </div>
      </section>

      <section className="feature-banner">
        <h2>Try the new Data Explorer</h2>
        <p>
          Visualize your data flow with our new interactive engine.
        </p>
        <button className="get-started-btn">Get Started</button>
      </section>

    </div>
  );
};

export default Dashboard;
