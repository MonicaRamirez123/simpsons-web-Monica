import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Image className=" w-screen h-screen object-cover"
        src={ "/Background.jpg" }
        width={ 500 }
        height={ 500 }

        alt="BackgroundSimpsons"
      />


      <div className="w-64 g">
        <h1>hola mundo </h1>
      </div>

    </div>
  );
}
