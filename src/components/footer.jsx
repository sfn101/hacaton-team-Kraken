import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-pink-400">Glowette</h2>
          <p className="text-sm mt-1">&copy; 2025 Tous droits réservés.</p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-pink-400 transition">Accueil</a>
          <a href="#" className="hover:text-pink-400 transition">À propos</a>
          <a href="#" className="hover:text-pink-400 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaTiktok /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaFacebook /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
