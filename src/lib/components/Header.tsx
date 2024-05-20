const today:Date = new Date()

const save = () => {

  localStorage.setItem('save', JSON.stringify(""))
  console.log("saved")
}

const Header = () => (
  <header id="header" className=" text-white bg-indigo-800 flex">

    <span className="flex-1">{today.getFullYear() +  " - " + today.getDay()}</span>

  <span>
    <button type="button" className="text-white text-3xl text-right flex-1 hover:brightness-110 px-5" onClick={() => {save()}}>
      💿
    </button>
  </span>
    
  </header>
  
);

export default Header;