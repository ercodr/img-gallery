import React, { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import SearchForm from './components/SearchForm'

const App = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const api_key = '28487137-191c4754f0cd9e0c364ce14aa'

  const onSubmit = (e) => {
    e.preventDefault()
    setSearchTerm(searchTerm)
  }

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${api_key}&q=${searchTerm}&image_type=photo`,
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.hits)
      })
      .catch((err) => console.log(err))
  }, [searchTerm])

  return (
    <div className="min-h-screen max-h-full w-full bg-slate-900 scrollbar-hide">
      <div className="container mx-auto space-y-8 py-8">
        <SearchForm
          onSubmit={onSubmit}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {data.map((image) => {
            return data.length > 0 ? (
              <ImageCard key={image.id} image={image} />
            ) : (
              <div className="text-2xl text-slate-100">No image found</div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
