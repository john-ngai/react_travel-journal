import globe from '../images/globe.png';

export default function Navbar() {
  return (
    <nav>
      <img src={globe} alt='Globe icon' />
      <h3 className='nav--title'>my travel journal</h3>
    </nav>
  );
}