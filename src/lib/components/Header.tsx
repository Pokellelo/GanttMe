import { Language } from "../enums"
import { miselanea } from "../dictionaries"
import { useState } from "react"

const storedLan: string | null = localStorage.getItem('language')

let lanSelected: Language = storedLan ? Language[Language[parseInt(storedLan)] as keyof typeof Language] : Language.English


const lanOptions = Object.values(Language).filter(x => { return !Number.isInteger(x) })


const save = () => {
  localStorage.setItem('language', JSON.stringify(lanSelected))
  window.location.reload()
}



export default function Header() {

  const [labels, updatelabels] = useState(miselanea[lanSelected])

  const changeLanguage = (val: number) => {
    lanSelected = Language[Language[val] as keyof typeof Language]

    updatelabels(miselanea[lanSelected])
  }

  return (
    <header id="header" className=" text-white bg-indigo-800 flex">

      <span className="flex-1 text-3xl ">Gantt</span>


      <span className="flex-1 text-right">
        <select className="text-black" defaultValue={lanSelected} onChange={(e) => { changeLanguage(parseInt(e.target.value)) }}>
          {lanOptions.map((obj, index) => {
            return <option key={index} value={index}>{obj}</option>
          })}
        </select>
        <button type="button" className="text-3xl  hover:brightness-110 px-5" onClick={() => { save() }}>
          💿
        </button>
      </span>

    </header>)

}
