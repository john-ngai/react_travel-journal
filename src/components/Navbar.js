import globe from '../images/globe.png';

export default function Navbar() {
  return (
    <nav>
      <img className='nav--logo' src={globe} alt='Globe icon' />
      <h3 className='nav--title'>my travel journal</h3>
    </nav>
  );
}