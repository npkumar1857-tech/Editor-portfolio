
const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1e1e1e]">
      <div className="py-8 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm tracking-[0.3em] text-[#f0ece4] uppercase font-light opacity-0 select-none">
          REEL & CUT
        </div>

        <div className="text-xs text-[#8a8578] tracking-wider text-center opacity-0 select-none">
          Connect with us for story driven
        </div>

        <div className="text-xs text-[#8a8578] opacity-0 select-none">
          &copy; Nax. All rights reserved.
        </div>
      </div>

      <div className="border-t border-[#1e1e1e] py-6 flex gap-8 justify-center opacity-0 select-none">
        <span className="text-xs tracking-[0.2em] uppercase text-[#8a8578]">Instagram</span>
        <span className="text-xs tracking-[0.2em] uppercase text-[#8a8578]">Vimeo</span>
        <span className="text-xs tracking-[0.2em] uppercase text-[#8a8578]">YouTube</span>
        <span className="text-xs tracking-[0.2em] uppercase text-[#8a8578]">Email</span>
      </div>
    </footer>
  );
};

export default Footer;
