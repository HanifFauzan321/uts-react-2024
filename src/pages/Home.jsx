export default function Home() {
  return (
    <>
      <div className="w-full h-full mb-0 p-0">
        <div>
          <img
            className="home-image flex-wrap h-full w-full"
            src="src/images/Background.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-20 transform text-white text-4xl">
        <h2 className="text-fuchsia-600 font-bold text-5xl italic">Selamat datang di website PhoneStore</h2>
        <p>
          Website place store sederhana yang berisikan Handphone / SmartPhone yang menarik 
          <p>Selamat Berbelanja</p>
        </p>
      </div>
    </>
  );
}
