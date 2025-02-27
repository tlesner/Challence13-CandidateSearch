import { Link, useLocation } from 'react-router-dom';


const Nav = () => {
  const currentPage = useLocation().pathname;

  // TODO: Add necessary code to display the navigation bar and link between the pages

  return (
    <nav>
      <div className='nav'>
        <div>
          <Link to='/' className='nav-item'>
            <strong>Home</strong>
          </Link>
        </div>
        <div>
          <Link to='/SavedCandidates' className='nav-item'>
            <strong>Saved Candidates</strong>
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
