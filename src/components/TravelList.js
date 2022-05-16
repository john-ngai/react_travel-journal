import TravelListItem from './TravelListItem';
import travelData from '../data';

export default function TravelList() {
  const travelListItems = travelData.map(item => {
    return <TravelListItem key={item.id} item={item} />
  });

  return (
    <section className="container--travel-list">
      {travelListItems}
    </section>
  );
}