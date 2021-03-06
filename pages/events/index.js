import { getAllEvents } from "../../data/dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/events-list";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
function Events() {
 
  const events = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
      const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
export default Events;
