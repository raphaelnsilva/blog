import MobileNavigation from "./MobileNavigation";
import Navigation from './Navigation'
import classes from "./Navigation.module.css"

const Navbar = () => {

  return (
    <div className={classes.Navbar}>
      <Navigation />
      <MobileNavigation />
    </div>
  )
}

export default Navbar