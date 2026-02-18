

const ProfileCard = ({name="Name",role="Developer"})=>{

    return(
        <>
        <div className=" text-white">
            {/* card */}
            <div className="card border rounded-2xl w-sm flex flex-col justify-center items-center p-5 bg-white/30">
                <div className="img bg-slate-400 rounded-full h-32 w-32 ring-2 ">
                    {/* img */}
                </div>
                <p className="font-semibold text-2xl">{name}</p>
                <p className="font-semibold text-lg">{role}</p>
                <div className="p-3 space-x-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="border p-1 px-2 font-serif rounded-full">Contact <i class="fa-solid fa-envelope"></i> </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="border p-1 px-2 font-serif rounded-full">LinkedIn <i class="fa-brands fa-linkedin"></i></a>
                </div> 

            </div>
        </div>
        </>
    )
}


export default ProfileCard;
