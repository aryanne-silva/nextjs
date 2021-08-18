import User from '../components/user'

function UsersList({ users }) {
  return (
    <>
      <h1>List of Users</h1>
      {users?.map((user, index) => (
        <div key={index}>
          <User user={user} />
        </div>
      ))}
    </>
  )
}

export default UsersList

/*this async function will run at build time in production and
 *inside the function you can fetch external data
 *and send it as props to the page */

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  /*returning it, our component UsersList will receive these props at build time  */
  return {
    props: {
      users: data,
    },
  }
}
