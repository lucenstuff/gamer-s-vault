function Footer() {
  return (
    <div className="bg-neutral-400  text-black py-5 text-center bottom-0 ">
      <div className="flex flex-col items-center py-10">
        <ul className="space-x-4 flex items-center justify-center">
          <li>
            <a
              href="store.html"
              className="no-underline text-black hover:underline"
            >
              INICIO
            </a>
          </li>
          <li>
            <a
              href="store.html"
              className="no-underline text-black hover:underline"
            >
              TIENDA
            </a>
          </li>
          <li>
            <a
              href="sales.html"
              className="no-underline text-black hover:underline"
            >
              OFERTAS
            </a>
          </li>
          <li>
            <a
              href="contact.html"
              className="no-underline text-black hover:underline"
            >
              CONTACTO
            </a>
          </li>
        </ul>
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
