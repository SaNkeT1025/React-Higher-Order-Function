
const Dashboard = ({ user }: { user: { name: string; isAuthincated: boolean } }) => {
  return (
    <div>
      <h2>Welcome {user.name}</h2>
    </div>
  )
}

export default Dashboard
