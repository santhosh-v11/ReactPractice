import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProfileCard from "./Components/ProfileCard";

function App() {
  const profile = [
    { name: "Santhosh", role: "React.Js Developer", emailid: "san@gmail.com" },
    { name: "Shyam", role: "BackendDeveloper", emailid: "shyam@gmail.com" },
  ];
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1  w-full bg-slate-900  ">
          <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-sm:gap-5  sm:p-5 lg:gap-10 ">
            {/* bymapping */}
            {profile.map((dev, index) => {
              return (
                <ProfileCard key={index} name={dev.name} role={dev.role} emailid={dev.emailid}
                />
              );
            })}

            <ProfileCard name="santhosh" role="developer"emailid="vsa@mgil.com"/>

            <ProfileCard name="san" emailid={"san@gmail.com"}/>
          </section>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
