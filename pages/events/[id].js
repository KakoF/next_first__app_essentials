import { useRouter } from 'next/router'
import { Fragment } from 'react';
import EventSummary from '../../components/events/event-detail/event-summary';
import EventContent from '../../components/events/event-detail/event-content';
import EventLogistic from '../../components/events/event-detail/event-logistics';
import { getEventById } from '../../data/dummy-data'
import ErrorAlert from '../../components/ui/error-alert/error-alert';

function Event() {
    const router = useRouter();
    const id = router.query.id;
    const event = getEventById(id);

    if(!event){
        
        return  <Fragment>
        <ErrorAlert><p className="center">Evento não encontrado</p></ErrorAlert>
      </Fragment>
    }

    return <Fragment>
        <EventSummary title={event.title}/>
        <EventLogistic date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
        <EventContent>
        <p>{event.description}</p>
        </EventContent>

    </Fragment>
}

export default Event;