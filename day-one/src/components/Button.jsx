export default function Button(props) {
  return (
    <button
      onClick={props.submit}
      className="w-full rounded-lg py-2 bg-purple-700 hover:bg-purple-600 text-white mb-4"
    >
      {props.signUpStatus ? "Signup Success" : "Sign Up"}
    </button>
  );
}
