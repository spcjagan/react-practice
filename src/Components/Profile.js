const Profile = (props)=>{
    const {name,lastname}=props;
    return(
        <div>
            <center>
                <h2>Name: {name} {lastname}</h2>
            </center>
        </div>
    )
}
export default Profile;