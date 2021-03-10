import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <div>
      <ul>
        {items.map((event) => {
          return <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />;
        })}
      </ul>
    </div>
  );
}

export default EventList;
