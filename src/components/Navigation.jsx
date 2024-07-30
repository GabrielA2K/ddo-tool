


export default function Navigation(tabs) {
    // const pages =
    return (
        <>
            <div className="bg-white w-full h-[5rem] justify-self-end flex justify-evenly items-center">
            {(tabs.tabs).map((item, index)=>{ return (
                <div  key={index} className="bg-slate-100 px-8 py-2 rounded-[2rem] cursor-pointer hover:bg-slate-300 transition-all">
                    <p className="text-black">{item.name}</p>
                </div>
                
                
            )})}


            </div>
        </>
    )
}