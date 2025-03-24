import HeroSection from '../components/herosection';
import Presale from '../components/presale';
import Partiners from '../components/partiners';
import Ecosystem from '../components/ecosystem';
import FundAllocation from '../components/fundalocation';
import Roadmap from '../components/roadmap';
import Team from '../components/team';
import Questions from '../components/questions';

function Dashboard() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="max-w-full">
        <HeroSection />
        <div className="max-w-full">
          <Presale />
        </div>
        <div className="max-w-full">
          <Partiners />
        </div>
        <div className="max-w-full">
          <Ecosystem />
        </div>
        <div className="max-w-full">
          <FundAllocation />
        </div>
        <div className="max-w-full">
          <Roadmap />
        </div>
        <div className="max-w-full">
          <Team />
        </div>
        <div className="max-w-full">
          <Questions />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
