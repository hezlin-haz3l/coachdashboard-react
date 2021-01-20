import DashboardPanel from './DashboardPanel.js';
import DashboardCard from './DashboardCard.js';
import DashboardStats from './DashboardStats.js';
import DashboardTable from './DashboardTable.js';

export default function Main() {
    return (
        <main>
            <div className="container py-5">
                <div className="row">
                    <div className="col-3">
                        <DashboardPanel />
                        <DashboardCard />
                    </div>


                    <div className="col-9">
                        <DashboardStats />
                        <DashboardTable />

                    </div>
                </div>
            </div>
        </main>
    )
}

const styles = {
    bgMain: {
        backgroundColor: 'rgb(220,60,50)'
    }
}