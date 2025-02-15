import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <p>Welcome to the main page</p>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export { HomePage };
