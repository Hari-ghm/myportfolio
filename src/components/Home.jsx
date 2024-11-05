const Home = () => {
  return (
    <>
      <div className="relative bg-neutral-900 min-h-screen w-full items-center flex ">
        <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-40 blur-[100px] z-0" />
        <div className="flex text-white z-20">
          <img className="h-72 w-72 rounded-3xl ml-36 opacity-80" src="src\assets\home photo.jpg" alt="my-photo"></img>
          <div className="text-white ml-24 m-20 z-20">
            <p className='text-3xl tracking-widest'>Hello, I am </p>
            <p className="text-6xl text-white font-bold tracking-wide mt-3">HARIMADHAV G</p>
            <h1 className="mt-4 text-2xl">Student | Full Stack Developer | UI/UX Designer</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home

