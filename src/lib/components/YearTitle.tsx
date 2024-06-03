type Params = {
  year: number
}
export default function YearTitle(params: Params) {
  return (
    <div id="year-head" className=" text-white bg-indigo-800 text-3xl fixed w-full">
      <div>{params.year}</div>
    </div>)
}
