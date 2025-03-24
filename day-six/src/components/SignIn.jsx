import { Navigate, useNavigate } from "react-router-dom";

export default function SignIn(props) {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-110 bg-pink-100 rounded py-8 px-4">
        <form onSubmit={props.handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <p className="text-center font-bold text-4xl mb-2">Sign In</p>
            <p className="text-center">Welcome back</p>
          </div>
          <div className="flex flex-col gap-2 px-4 pb-4">
            <label htmlFor="email" className="text-xl font-semibold">
              Email
            </label>
            <input
              type="text"
              name="email"
              onChange={props.handleChanges}
              className="border rounded px-4 py-2"
              placeholder="Your email"
            />
          </div>
          <div className="flex flex-col gap-2 px-4 pb-4">
            <label htmlFor="password" className="text-xl font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={props.handleChanges}
              className="border rounded px-4 py-2"
              placeholder="Your password"
            />
          </div>
          <button
            type="submit"
            className="bg-pink-500 rounded-xl text-white py-2 mt-4 mx-4 font-bold text-xl"
          >
            Sign In
          </button>
          <div className="flex justify-center items-center pt-4 gap-2">
            <p>Have not account?</p>
            <p
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
