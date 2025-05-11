export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-20">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop:blur">
        <a href="#" className="nav-item hover:bg-white/10 hover:text-white">
          Home
        </a>
        <a href="#" className="nav-item hover:bg-white/10 hover:text-white">
          Projects
        </a>
        <a href="#" className="nav-item hover:bg-white/10 hover:text-white">
          Contact
        </a>
        <a href="#" className="nav-item hover:bg-white/10 bg-white text-gray-900 hover:text-white">
          About
        </a>
      </nav>
    </div>
  );
};
