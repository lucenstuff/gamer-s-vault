function Footer() {
  return (
    <div className="bg-neutral-400 text-black py-5 text-center bottom-0 shadow-neutral-600 shadow-sm ">
      <div className="flex flex-col items-center py-4">
        <ul className="flex items-center space-x-2.5 pt-4">
          <li>
            <a href="http://x.com">
              <img
                src="https://res.cloudinary.com/dcbmvyyes/image/upload/v1705370930/icons/x-twitter_peqiqj.png"
                alt="X-logo"
                className="w-6 h-auto"
              />
            </a>
          </li>
          <li>
            <a href="http://facebook.com">
              <img
                src="https://res.cloudinary.com/dcbmvyyes/image/upload/v1705370931/icons/facebook_nu4b2p.png"
                alt="F-logo"
                className="w-6 h-auto"
              />
            </a>
          </li>
          <li>
            <a href="http://instagram.com">
              <img
                src="https://res.cloudinary.com/dcbmvyyes/image/upload/v1705370930/icons/instagram_rrpp2a.png"
                alt="Ig-logo"
                className="w-6 h-auto"
              />
            </a>
          </li>
          <li>
            <a href="http://whatsapp.com">
              <img
                src="https://res.cloudinary.com/dcbmvyyes/image/upload/v1705370930/icons/whatsapp_vvss3j.png"
                alt="WP-logo"
                className="w-6 h-auto"
              />
            </a>
          </li>
        </ul>
      </div>
      <p className="m-0">&copy; Gamer's Vault 2023</p>
    </div>
  );
}

export default Footer;
