import pin from '../images/pin.png';

export default function TravelListItem(props) {
  return (
    <div className='container--travelListItem'>
      <img src={props.item.imageUrl} alt='Travel destination' />
      
      <div>
        <span className="item--location">
          <img src={pin} alt='Location pin icon' />
          <h2>{props.item.location}</h2>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </span>
        
        <h1 className='location--name'>{props.item.title}</h1>
        <p className='location--dates'>{props.item.startDate} - {props.item.endDate}</p>
        <p className='location--text'>{props.item.description}</p>
      </div>
    </div>
  );
}