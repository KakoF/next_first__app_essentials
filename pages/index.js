import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "../components/events/events-list";
function HomePage() {
    const featureEvents = getFeaturedEvents();

    return <div>
        <EventList items={featureEvents}/>
        </div>
}

export default HomePage;