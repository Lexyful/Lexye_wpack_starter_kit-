
const fetchData = (url) => {
  return fetch(url)
   .then(response => response.json())
}

const fetchAll = (id) => {
  return Promise.all([
   fetchData(`http://localhost:3001/api/v1/customers/${id}`),
   fetchData("http://localhost:3001/api/v1/rooms"),
   fetchData("http://localhost:3001/api/v1/bookings")
])
}
   export default fetchAll