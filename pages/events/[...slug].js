import { useRouter } from "next/router";
import { Fragment } from "react";
import ResultTitle from "../../components/events/results-title/results-title";
import EventList from "../../components/events/events-list";
import { getFilteredEvents } from "../../data/dummy-data";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";

function EventsFilter() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert><p className="center">Parâmetros Inválidos</p></ErrorAlert>
        <div className="center">
          <Button link="/events">Exibir Todos Eventos</Button>
        </div>
      </Fragment>
    );
  }

  const events = getFilteredEvents({ year: numYear, month: numMonth });

  if (!events || events.length === 0) {
    return (
      <Fragment>
        <ErrorAlert><p className="center">Nenhum evento encontrado</p></ErrorAlert>
        <div className="center">
          <Button link="/events">Exibir Todos Eventos</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth);

  return (
    <Fragment>
      <ResultTitle date={date} />
      <EventList items={events} />
    </Fragment>
  );
}

export default EventsFilter;
