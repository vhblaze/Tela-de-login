import Image from "@/img/image.png";
export default function SigninPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* ----- Formulário ----- */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Login</h2>
          <p className="text-gray-500 mb-6">If you have an account, please login</p>

          <label className="block text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="text-right mb-6">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
            Log In
          </button>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-3 text-gray-500">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            <span className="text-gray-700 font-medium">Login with Google</span>
          </button>

          <p className="text-center text-gray-500 mt-6">
            If you don&apos;t have an account...
            <a
              href="/register"
              className="ml-2 inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Register
            </a>
          </p>
        </div>

        {/* ----- Imagem ----- */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://media.discordapp.net/attachments/1294487246405374003/1387528449408766094/image.png?ex=685dac11&is=685c5a91&hm=39eb353356d8e61a495f7881bd1c0c176c55de27deda6277a00179fcbb6838b5&=&format=webp&quality=lossless&width=959&height=960"
            alt="Coding setup"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
