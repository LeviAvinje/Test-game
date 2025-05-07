import { useState } from 'react'
import './App.css'
import { createClient } from '@supabase/supabase-js'

// Supabase config
const supabaseUrl = 'https://obtgicxyyygzkgofrsts.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9idGdpY3h5eXlnemtnb2Zyc3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MTAxNzAsImV4cCI6MjA2MjE4NjE3MH0.Mh-ZnA_Y6OLZWyYAUxIMUVg2Iv7a5_s3YFvhpcM3HEk'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Ticket type
export type Ticket = {
  id: number
  created_at: string
  context: string
}

// Insert ticket into Supabase
async function createTicket(description: string, created_at: string) {
  const { data, error } = await supabase
    .from('tickets')
    .insert([{ description, created_at }])

  if (error) {
    console.error('Error creating ticket:', error)
    return null
  }

  return data
}

function App() {
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    const result = await createTicket(description, date)

    if (result) {
      setStatus('Ticket created!')
      setDescription('')
      setDate('')
    } else {
      setStatus('Failed to create ticket.')
    }
  }

  return (
    <div className="App">
      <h1>Create Ticket</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label><br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label><br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Ticket</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  )
}

export default App
