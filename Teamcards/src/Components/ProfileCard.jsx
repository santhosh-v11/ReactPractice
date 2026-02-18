

const ProfileCard = ({name="Name",role="Developer",emailid})=>{
    

    return(
        <>
        <div className=" text-white   ">
            {/* card */}
            <div className="card hover:shadow-white shadow-md rounded-2xl w-sm flex flex-col justify-center items-center p-5 bg-white/30  hover:scale-105  transition-all duration-150">
                <div className="img bg-slate-400 rounded-full h-32 w-32 ring-2 ring-blue-950 ">
                    <img src="https://picsum.photos/200/300" className="object-cover w-full h-full rounded-full" alt="Profile"  />
                </div>
                <p className="font-semibold text-2xl">{name}</p>
                <p className="font-semibold text-lg">{role}</p>
                <div className="p-3 space-x-4">
                    <a href={`mailto:${emailid}`} className="border p-1 px-2 font-serif rounded-full hover:bg-red-500 transition-all duration-150 transform hover:shadow-2xl">Contact <i class="fa-solid fa-envelope"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="border p-1 px-2 hover:bg-blue-500 ease-in-out transition duration-200 font-serif rounded-full">LinkedIn <i class="fa-brands fa-linkedin"></i></a>
                </div> 

            </div>
        </div>
        </>
    )
}


export default ProfileCard;
