export const Header = () => {
  return (
    <header className="bg-black text-white flex justify-between items-center border-b border-gray-200 h-14">
      <div className="flex justify-between items-center w-full bg-white p-2 mt-10 rounded-tl-lg rounded-tr-lg border-b border-gray-200">

        <img
          src="https://www.orbidi.com/wp-content/uploads/2022/11/ORBIDI-Logo-Negro-2048x382.png"
          alt="logo"
          loading="lazy"
          className="w-20 h-10 object-contain"
        />

        <nav className="flex text-black gap-3 font-bold">

          <a href="https://github.com/DanielSuarezDev/find-nearest" target="_blank">Github</a>
          <a href="https://www.danielsuarez.dev/" target="_blank">Web</a>

        </nav>
      </div>
    </header>
  );
};
