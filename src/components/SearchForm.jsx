import { FaSearch } from 'react-icons/fa'

const SearchForm = ({ onSubmit, setSearchTerm, searchTerm }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="appearance-none p-4 flex justify-center w-full"
    >
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="search..."
        className="appearance-none px-4 py-2 rounded-l rounded-r-none outline-none"
      />
      <button
        type="submit"
        className="appearance-none text-slate-100 bg-blue-500 px-4 py-2 rounded-r"
      >
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchForm
