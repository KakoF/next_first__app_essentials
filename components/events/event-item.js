import Link from "next/link";
import Button from "../ui/button";
import classes from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRight from "../icons/arrow-right-icon";
function EventItem(props) {
    const { title, image, date, location, id } = props; 
    const humanReadbleDate = new Date(date).toLocaleDateString('es-US', {
        day: 'numeric',
        month : 'long',
        year: 'numeric'
    });
    const formattedAddress =  location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;
    return <li className={classes.item}>
        <img src={'/' + image} alt={title}/>
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
           
            <div className={classes.date}>
                <DateIcon />
                <time>{humanReadbleDate}</time>
            </div>
            <div className={classes.address}>
                <AddressIcon />
                <address>{formattedAddress}</address>
            </div>
        </div>
        <div className={classes.actions}>
           
           <Button link={exploreLink}><span>Ver Evento</span> <span className={classes.icon}> <ArrowRight /></span></Button>
        </div>
        </div>
    </li>;
}

export default EventItem;