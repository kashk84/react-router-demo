
function User({user}) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '320px',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <img
        src={user.image}
        alt={user.name}
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginRight: '16px'
        }}
      />
      <div>
        <h3 style={{ margin: '0 0 8px 0' }}>{user.name}</h3>
        <p style={{ margin: 0 }}>{user.email}</p>
        {user.details && <p style={{ margin: 0 }}>{user.details}</p>}
      </div>
    </div>
  )
}

export default User