import Button from "../Components/Button";
import dogPic from '../Images/dogo.png'

export default function Home() {

    const model = {
        id: '1',
        username: 'TestUser'
    };

     return (
        <main className="h-screen bg-gradient-to-br from-emerald-50 to-pink-200">
            <div className="absolute bottom-1/2 left-16 w-2/3 max-w-[1200px]">
                <h1 className="">Keep track of 
                    <span className="text-emerald-500 font-bold"> your
                    </span>
                    Pets veterinary visits, diet and more with
                    <span className="">
                        <span className="text-pink-300 font-bold"> my
                        </span>
                        Pets
                    </span>
                </h1>
                <h3 className="">
                Aliquam commodo justo luctus purus sagittis, ut scelerisque arcu commodo. Etiam placerat erat accumsan libero varius, et rhoncus risus luctus. Fusce metus mi, malesuada sit amet eleifend vel, posuere in est. In volutpat sem ac eros vehicula convallis.
                </h3>
                <div className="mt-8">
                    <Button target='/user/pets' text={'Sign in'} bgHoverColor={'bg-pink-300'}/>
                    <Button target='/' text={'Create account'} bgHoverColor={'bg-emerald-300'}/>
                </div>
            </div>
            
            <img 
                className="absolute bottom-0 right-0 contrast-75 w-auto h-[50vw] aspect-auto"
                src={dogPic} 
                alt="dog"/>

        </main>
  )
}