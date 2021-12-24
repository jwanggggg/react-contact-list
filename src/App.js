import useFetch from 'react-fetch-hook'
import { useEffect, useState } from 'react'
import ContactCards from './ContactCards'

const App = () => {
  const url = 'https://randomuser.me/api/'
  const { isLoading, data, error } = useFetch(url+'?results=200')
  const [contactList, setContactList] = useState()
  const [filterQuery, setFilterQuery] = useState()

  useEffect(() => {
      if (!filterQuery) {
        setContactList(data?.results?.slice(0, 20))
      } else {
        const queryString = filterQuery.toLowerCase()
        const filteredData = data?.results?.filter(contact => {
          const fullName = `${contact.name.first} ${contact.name.last}`

          // if it's just one letter, return all names that start with it
          if (queryString.length === 1) {
            const firstLetter = fullName.charAt(0).toLowerCase()
            return firstLetter === queryString
          }
          else {
            return fullName.toLowerCase().includes(queryString)
          }
        })
        setContactList(filteredData)
      }
    }, [data, filterQuery])

  return (
    <div className="bg-gray-100">
      <section>
        <form>
          <input
            type="text"
            className="ml-20 mt-6 rounded-md p-2"
            onChange={event => setFilterQuery(event.target.value)}
            placeholder="type here to filter..."
          />
        </form>
      </section>
      <section className="p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {contactList?.length < 1 && (
          <h1>No data matches your search</h1>
        )}
        <ContactCards contactList={contactList}/>
      </section>
    </div>
  );
}

export default App;
