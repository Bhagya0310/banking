import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user="Guest"
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]} 
            totalBanks={0} 
            totalCurrentBalance={0} 
          />
        </header>
      </div>

      <RightSidebar 
        user={null} 
        transactions={[]} 
        banks={[]} 
      />
    </section>
  );
}

export default Home;
