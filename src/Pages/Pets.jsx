
export default function Pets({data}) {
    
    const collection = data.firestore.collection('users');

    const getUser = async (userEmail) => {
        const user = await collection.where('email', '==', userEmail).get();
        return user;
    } 

    console.log(getUser(data.user.email))

    return(
        <div>
            pets
        </div>
    )
}