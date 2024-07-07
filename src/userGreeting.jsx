

function UserGreeting( props ){
        

        // eslint-disable-next-line react/prop-types
        return(props.isLoggedIn ? <h2> Welcome {props.username}</h2> : <h1>Please Log in To Continue</h1>)
}

export default UserGreeting;