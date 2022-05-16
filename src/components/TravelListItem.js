import pin from '../images/pin.png';

export default function TravelListItem() {
  return (
    <div className='container--travelListItem'>
      <img src='https://source.unsplash.com/WLxQvbMyfas' alt='Travel destination' />
      
      <div>
        <span className="item--location">
          <img src={pin} alt='Location pin icon' />
          <h2>JAPAN</h2>
          <a href='#'>View on Google Maps</a>
        </span>
        
        <h1 className='location--name'>Mount Fiji</h1>
        <p className='location--dates'>12 Jan, 2021 - 24 Jan, 2021</p>
        <p className='location--text'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
      </div>
    </div>
  );
}