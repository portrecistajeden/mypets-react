import SignIn from '../Components/Homepage/SignIn';
import dogPic from '../Images/dogo.png';

export default function Home({ data }) {
	const { auth, provider } = data;
	return (
		<main className='h-screen bg-gradient-to-br from-background from-20% to-accent'>
			<div className='absolute bottom-1/2 left-16 w-2/3 max-w-[1200px]'>
				<h1 className='text-5xl my-8'>
					Keep track of
					<span className='text-primary font-bold'> your</span>
					Pets veterinary visits, diet and more with
					<span className=''>
						<span className='text-accent font-bold'> my</span>
						Pets
					</span>
				</h1>
				<h3 className='text-2xl my-2'>
					Aliquam commodo justo luctus purus sagittis, ut scelerisque arcu commodo. Etiam placerat erat accumsan libero
					varius, et rhoncus risus luctus. Fusce metus mi, malesuada sit amet eleifend vel, posuere in est. In volutpat
					sem ac eros vehicula convallis.
				</h3>
				<div className='mt-8'>
					<SignIn data={{ auth: auth, provider: provider }} />
					{/* <Button target='/user/pets' text={'Sign in'} bgHoverColor={'bg-pink-300'}/> */}
				</div>
			</div>

			<img className='absolute bottom-0 right-0 contrast-75 w-auto h-[50vw] aspect-auto' src={dogPic} alt='dog' />
		</main>
	);
}
