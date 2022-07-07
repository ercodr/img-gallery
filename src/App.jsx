import React, { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import LoadingFX from './components/LoadingFX'
import SearchForm from './components/SearchForm'

const App = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const api_key = '28487137-191c4754f0cd9e0c364ce14aa'

  const onSubmit = (e) => {
    e.preventDefault()
    setSearchTerm(searchTerm)
  }

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://pixabay.com/api/?key=${api_key}&q=${searchTerm}&image_type=photo`,
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.hits)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [searchTerm])

  return (
    <div className="min-h-screen max-h-full w-full bg-slate-900 scrollbar-hide">
      <div className="container mx-auto space-y-8 py-8">
        <div className="border-2 px-4 py-2 w-max mx-auto text-2xl font-bold text-center bg-slate-100 transition-all duration-1000 ">
          <span className="font-black text-red-500">.</span>
          <span className="text-blue-500">imgfindr</span>
        </div>

        <SearchForm
          onSubmit={onSubmit}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {data.map((image) =>
            loading ? (
              <LoadingFX />
            ) : (
              <ImageCard key={image.id} image={image} />
            ),
          )}
        </ul>
        <div className="mx-auto text-xs text-slate-200 text-center">
          Made with <span>❤</span> by Trapcy
        </div>
      </div>
    </div>
  )
}

export default App
