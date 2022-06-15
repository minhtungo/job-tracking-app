import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to='add-job'>Add Job</Link>
        <Link to='all-jobs'>All Jobs</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Layout;
