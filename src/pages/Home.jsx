export default function Home() {
  return (
    <>
      <div className="w-full h-full mb-0 p-0">
        <div>
          <img
            className="home-image flex-wrap h-full w-full"
            src="src/images/movie-background-collage.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-20 transform text-white text-4xl">
        <h2>Selamat datang di website Film React</h2>
        <p>
          Website sederhana yang berisikan Film - Film yang menarik 
          <p>Selamat Menonton</p>
        </p>
      </div>
    </>
  );
}
