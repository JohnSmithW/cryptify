import { Link } from 'react-router-dom';
import { Container } from '@/shared/ui/container';
import { HomePageList } from './home-page-list';

const HomePage = () => {
  return (
    <Container data-testid="home-page">
      <div className="flex h-screen w-full flex-col items-center py-2">
        <h1 className="text-3xl text-black">Home Page</h1>
        <Link to="/dashboard">Dashboard</Link>

        <HomePageList />
      </div>
    </Container>
  );
};

export { HomePage };
