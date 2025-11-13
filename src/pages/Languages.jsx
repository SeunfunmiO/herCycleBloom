
import { useNavigate } from 'react-router-dom'
import LanguageSelector from '../components/LanguageSelector'

const Languages = () => {
    const navigate = useNavigate()
    
   


    return (
        <div className='bg-[#f9f9f9] h-screen'>

            <div className="bg-white flex w-full items-center pt-10 pb-5 px-3">
                <img
                    onClick={() => navigate(-1)}
                    src="./Arrow Left.svg" alt="arrow left" />
                <h1 className="font-bold text-xl md:text-2xl w-full flex justify-center">
                    Languages
                </h1>
            </div>

           
               <LanguageSelector/>

        
        </div>
    )
}

export default Languages