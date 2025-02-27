import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSeachBar = ()=>{

    const langKey = useSelector((store)=>store.config.lang)

    return (
        <div className="pt-[10%] flex justify-center" >
            <form className="w-1/2 grid grid-cols-12 bg-black" >
                <input className="p-4 m-4 col-span-9" type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg" >{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GPTSeachBar;