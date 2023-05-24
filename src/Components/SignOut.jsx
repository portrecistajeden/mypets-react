export default function SignOut({ signOut }) {
	return (
		<button
			id='sign-out'
			className='mx-2 p-2 bg-primary border-2 border-background rounded-[16px] hover:rounded-[4px] duration-200'
			onClick={signOut}>
			Sign Out
		</button>
	);
}
