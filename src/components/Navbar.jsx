import MobileNavigation from './Nav/MobileNavigation'
import Navigation from './Nav/Navigation'
import classes from "./Nav/Navigation.module.css"

const Navbar = () => {

  return (
    <div className={classes.Navbar}>
      <Navigation />
      <MobileNavigation />
    </div>
  )
}

export default Navbar