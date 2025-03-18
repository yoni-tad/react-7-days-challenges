export default function Form(props) {
  return (
    <div className="w-full py-8">
      {props.signUpStatus && (
        <div className="p-2 bg-green-200 rounded-lg mb-8 font-semibold text-center">
          <p>Your account successfully registered, Please check your email</p>
        </div>
      )}

      <div className="mb-5">
        <input
          id="username"
          type="text"
          name="username"
          onChange={props.onChange}
          placeholder="Username"
          className="w-full border border-gray-500 rounded-lg px-4 py-1"
        />
        {props.errors.username && (
          <span className="text-red-500 font-semibold mt-2 px-2">
            {props.errors.username}
          </span>
        )}
      </div>
      <div className="mb-5">
        <input
          id="email"
          type="text"
          name="email"
          onChange={props.onChange}
          placeholder="Email"
          className="w-full border border-gray-500 rounded-lg px-4 py-1"
        />
        {props.errors.email && (
          <span className="text-red-500 font-semibold mt-2 px-2">
            {props.errors.email}
          </span>
        )}
      </div>
      <div className="mb-5">
        <input
          id="password"
          type="password"
          name="password"
          onChange={props.onChange}
          placeholder="Password"
          className="w-full border border-gray-500 rounded-lg px-4 py-1"
        />
        {props.errors.password && (
          <span className="text-red-500 font-semibold mt-2 px-2">
            {props.errors.password}
          </span>
        )}
      </div>
    </div>
  );
}
