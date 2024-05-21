import { Language } from "../enums"
import { miselanea, days } from "../dictionaries"

const today:Date = new Date()


const storedLan:string | null = localStorage.getItem('language')

let lanSelected:Language = storedLan ? Language[Language[parseInt(storedLan)] as keyof typeof Language] : Language.English


const lanOptions = Object.values(Language).filter(x => { return !Number.isInteger(x) } )

let labels = miselanea[lanSelected]

const save = () => {
  localStorage.setItem('language', JSON.stringify(lanSelected))
  window.location.reload()
}

const changeLanguage = (val:number) => {
  lanSelected = Language[Language[val] as keyof typeof Language]
}

const Header = () => (
  <header id="header" className=" text-white bg-indigo-800 flex">

    <span className="flex-1">{ labels.today_is + " : " +

    today.getFullYear() +  " - " + days[lanSelected][today.getDay()] + " " +today.getDate() + " - " + today.getMonth () } </span>

    
  <span className="flex-1 text-right">
    <select className="text-black"  defaultValue={lanSelected} onChange={(e) => { changeLanguage(parseInt(e.target.value))}}>
      {lanOptions.map((obj, index) => {
        return <option key={index} value={index}>{obj}</option>
      })}
    </select>
    <button type="button" className="text-3xl  hover:brightness-110 px-5" onClick={() => {save()}}>
      💿
    </button>
  </span>
    
  </header>
  
);

export default Header;