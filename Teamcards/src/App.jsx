
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ProfileCard from './Components/ProfileCard'

function App() {
  const profile = [{name:"Santhosh", role:"React.Js Developer"},{name:"Shyam",role:"BackendDeveloper"}]
  return (
    <>
    <div className="min-h-screen flex flex-col">
    <Header /> 
    <main className="flex-1  w-full bg-slate-900  ">
    <section className='container mx-auto grid grid-cols-3 gap-8 p-10'>
        
    {/* bymapping */}
    {profile.map((dev,index)=>{
      return  <ProfileCard key={index} name={dev.name} role={dev.role}/>
    })}
    <ProfileCard name="santhosh" role="developer"/>
    <ProfileCard/>

    </section>
    </main>
    <Footer/>
    </div>
    </>
  )
}

export default App
