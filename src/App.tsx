import { useState } from 'react'
import './App.css'

type Entry = {
  name: string
  middle: string
  date: string
}

function App() {
  const today = new Date().toISOString().split('T')[0]
  const [entries, setEntries] = useState<Entry[]>([])
  const [name, setName] = useState('')
  const [middle, setMiddle] = useState('')
  const [date, setDate] = useState(today)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() || middle.trim()) {
      setEntries([...entries, { name, middle, date }])
      setName('')
      setMiddle('')
      setDate(today)
    }
  }

  return (
    <div className="App">
      <h1>låne ladere</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Navn"
                  style={{ width: '80%' }}
                />
              </td>
              <td>
                <input
                  value={middle}
                  onChange={(e) => setMiddle(e.target.value)}
                  placeholder="ID"
                />
              </td>
              <td>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </td>
              <td>
                <button type="submit">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {entries.length > 0 && (
        <table>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.middle}</td>
                <td>{entry.date}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default App
