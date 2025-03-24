export default function Home(props) {   
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-110 bg-pink-100 rounded py-8 px-4">
        <div className="flex flex-col">
          <p className="text-center mb-4 font-bold text-2xl">Welcome to Home</p>

          <button
          onClick={
            props.logout
          }
            type="submit"
            className="bg-pink-500 rounded-xl text-white py-2 mt-4 mx-4 font-bold text-xl"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
