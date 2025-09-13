import { useState } from 'react'
import './App.css'

function App() {
  const [resources, setResources] = useState([{ "Name": "Montaigne", "URL": "https://montaigne.io", "Has a Free Tier?": true, "Difficulty": "Easy", "Intended Audience": "Apple device owners" }, { "Name": "Plunker", "URL": "https://plnkr.co", "Has a Free Tier?": true, "Difficulty": "Medium", "Intended Audience": "Web developers" }])

  return (
    <>
      <div className="">
        <div className="rounded-md bg-red-500 p-2 m-2 overflow-x-auto">
          <table className="table table-zebra table-pin-cols border border-base-content/5 bg-base-100 shadow-md">
            <thead>
              <tr>
                {
                  Object.keys(resources[0]).map((column) => {
                    return (
                      <th key={column}>{column}</th>
                    )
                  })}
              </tr>
            </thead>
            <tbody>
              {
                resources.map((row, index) => {
                  return (
                    <tr key={row["Name"]}>
                      <td >{row["Name"]}</td>
                      <td >
                        <a href={row[" URL"]} target="_blank">{row["URL"]}</a>
                      </td>
                      <td >{row["Has a Free Tier?"] ? "✅" : "❌"}</td>
                      <td >{row["Difficulty"] === "Easy" ? <span className="text-green-500">Easy</span> : row["Difficulty"] === "Medium" ? <span className="text-orange-500">Medium</span> : <span className="text-red-500">Hard</span>}</td>
                      <td>{row["Intended Audience"]}</td>
                    </tr>
                  )
                })}

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
