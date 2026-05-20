import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './supabase'
import backgroundVideo from './assets/0512.mp4'

type Entry = {
  id?: number
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

  // Load entries from Supabase on mount
  useEffect(() => {
    loadEntries()
  }, [])

  const loadEntries = async () => {
    const { data, error } = await supabase
      .from('entries')
      .select('*')
      .order('id', { ascending: false })

    if (error) {
      console.error('Error loading entries:', error)
      return
    }

    setEntries(data || [])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() || middle.trim()) {
      const { data, error } = await supabase
        .from('entries')
        .insert([{ name, middle, date }])
        .select()

      if (error) {
        console.error('Error saving entry:', error)
        return
      }

      if (data) {
        setEntries([...data, ...entries])
      }
      setName('')
      setMiddle('')
      setDate(today)
    }
  }

  const handleDelete = async (id: number) => {
    const { error } = await supabase
      .from('entries')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting entry:', error)
      return
    }

    setEntries(entries.filter((entry) => entry.id !== id))
  }

  return (
    <div className="App">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <h1>utlån kirkeparken</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  className="name-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Navn"
                />
              </td>
              <td>
                <input
                  className="middle-input"
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
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.name}</td>
                <td>{entry.middle}</td>
                <td>{entry.date}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => entry.id && handleDelete(entry.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default App

