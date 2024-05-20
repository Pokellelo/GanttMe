
const today:Date = new Date()

const Header = () => (
  <header id="header">
    <div>{today.getFullYear() +  " - " + today.getDay()}</div>
  </header>
);

export default Header;