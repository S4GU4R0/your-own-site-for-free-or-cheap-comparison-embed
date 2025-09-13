import { useState } from 'react'
import './App.css'

function App() {
  const [resources, setResources] = useState([
    { "Name": "Neocities", "URL": "https://neocities.org/", "Has a Free Tier?": true, "Difficulty": "Easy", "Funded By": "❤️", "Requires a Computer?": true, "Made for Mobile?": false },
    { "Name": "Montaigne", "URL": "https://montaigne.io", "Has a Free Tier?": true, "Difficulty": "Easy", "Funded By": "❤️", "Requires a Computer?": false, "Made for Mobile?": true },
    { "Name": "Plunker", "URL": "https://plnkr.co", "Has a Free Tier?": true, "Difficulty": "Medium", "Intended Audience": "Web developers", "Funded By": "❤️", "Requires a Computer?": false, "Made for Mobile?": false },
    { "Name": "Straw Page", "URL": "https://straw.page", "Has a Free Tier?": true, "Difficulty": "Easy", "Funded By": "❤️", "Requires a Computer?": false, "Made for Mobile?": true },
    {
      "Name": "GitHub Pages",
      "URL": "https://pages.github.com/",
      "Has a Free Tier?": true, "Difficulty": "Medium",
      "Funded By": "👺",
      "Requires a Computer?": false,
      "Made for Mobile?": false
    },
  ])

  return (
    <>
      <div className="mb-16">
        <div className="rounded-md bg-red-500
 glass p-2 m-2 overflow-x-auto">
          <div className="">
            <div className="my-2 w-fit-content bg-base-100  inline-block p-2 rounded-md">
              <span className="text-base-content font-bold">Legend:</span>
              <span className="text-base-content ml-2">Intended Audience = you (potentially) |</span>
              <span className="text-base-content ml-2"> ❤️ = the people |</span>
              <span className="text-base-content ml-2"> 👺 = the rich.
              </span>

              <div className="my-2 w-[80vw] bg-base-100  block p-2 rounded-md">
                <input type="text" className="input" placeholder="Which browser do you use" list="browsers" />
                <datalist id="browsers">
                  {resources.map((resource) => (
                    <option key={resource.Name} value={resource.Name}></option>
                  ))}
                </datalist>
              </div>
            </div>
            <table className="table table-zebra table-pin-cols  bg-base-100 shadow-md mb-16">
              <thead className="mt-2 rounded-t-md">
                <tr className="" >
                  {
                    Object.keys(resources[0]).map((column) => {
                      return (
                        <th key={column}>{column}</th>
                      )
                    })}
                </tr>
              </thead>
              <tbody className=''>
                {
                  resources.map((row, index) => {
                    return (
                      <tr key={row["Name"]}>
                        <td ><strong>{row["Name"]}</strong></td>
                        <td >
                          <a href={row[" URL"]} target="_blank">{row["URL"]}</a>
                        </td>
                        <td >{row["Has a Free Tier?"] ? "✅" : "❌"}</td>
                        <td >{row["Difficulty"] === "Easy" ? <span className="text-green-500">Easy</span> : row["Difficulty"] === "Medium" ? <span className="text-orange-500">Medium</span> : <span className="text-red-500">Hard</span>}</td>
                        <td>{row["Funded By"]}</td>
                        <td >{row["Requires a Computer?"] ? "✅" : "❌"}</td>
                        <td >{row["Made for Mobile?"] ? "✅" : "❌"}</td>

                      </tr>
                    )
                  })}

              </tbody>
            </table>
            <div className="watermarks absolute bottom-0 right-0 m-2 opacity-70 flex">
              {/* S4GU4R0 */}
              <a href="#">

                <div className="mr-2">

                  <svg height="49" width="141" xmlns="http://www.w3.org/2000/svg">
                    <rect width="35" height="49" fill="#000000" />
                    <rect x="35" width="106" height="49" fill="#000000" />
                    <text text-anchor="middle" font-weight="bold" font-size="20" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" fill="#ffffff" x="18" y="50%" dy=".35em">🌵</text>
                    <text text-anchor="middle" font-size="20" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" fill="#ffffff" x="88" y="50%" dy=".35em">S4GU4R0</text>
                  </svg>
                </div>
              </a>
              {/* COMRADE CIRCUITS */}

              <a href="#">
                <svg height="49" width="200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="35" height="49" fill="#000000" />
                  <rect x="35" width="165" height="49" fill="#000000" />
                  <text text-anchor="middle" font-weight="bold" font-size="20" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" fill="#ffffff" x="18" y="50%" dy=".35em">🔻</text>
                  <text text-anchor="middle" font-size="15" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" fill="#ffffff" x="118" y="50%" dy=".35em">COMRADE CIRCUITS</text>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
