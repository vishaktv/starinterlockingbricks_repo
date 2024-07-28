import classNames from 'classnames';
import { useContext } from 'react';
import classes from "../../styles/humburger.module.scss";
import { DrawerContext } from '../providers/drawerProvider';

const Hamburger = () => {
  const {open,toggleHandler}=useContext(DrawerContext)

  const handleClick = () => {

    toggleHandler();
    
  };
// `${isOpen ? 'open ' : ''} ${classes.navIcon1}`
  return (
    <div className={classNames([classes.navIcon1,{
        [classes.open]: open
    }])} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
