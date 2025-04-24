import './App.css';
import debianLogo from './assets/debian.svg';
import cpuImage from './assets/cpu.jpg';
import debianTextLogo from './assets/debian-logo.svg';


function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">

      {/* HEADER */}
      <header className="fixed top-0 w-full backdrop-blur-md bg-gray-900/80 shadow-lg z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
    
    {/* Kiri: Logo */}
    <div className="flex items-center space-x-2">
      <img src= {debianLogo} alt="Debian Logo" className="h-10 w-10" />
      <span className="text-white font-bold text-lg tracking-wider">
        <span className="text-red-500">DEBIAN</span> OS
      </span>
    </div>

    {/* Kanan: Navigasi */}
    <nav className="hidden md:flex space-x-6 text-sm md:text-base ">
      {["Home", "Why Debian", "Features", "Architectures", "Community", "Get Started"].map((item, index) => {
        const id = ["home", "why", "features", "arch", "community", "get"][index];
        return (
          <a
            key={id}
            href={`#${id}`}
            className="text-gray-300 hover:text-white transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-500 after:transition-all after:duration-300"
          >
            {item}
          </a>
        );
      })}
    </nav>
  </div>
</header>


      {/* HOME */}
      <section
      id="home"
      className="h-screen bg-gray-900 bg-cover bg-center flex flex-col justify-center items-center text-center px-6 pt-32"
      >
      <img src={debianLogo} alt="Debian Background" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none -z-10" />

        <div className="max-w-3xl mx-auto">
          <h4 className="text-red-400 font-semibold text-sm mb-2 uppercase">Open Source. Stable. Secure.</h4>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Welcome to Debian</h1>
          <p className="text-gray-200 mb-6 text-base">
            Debian is a free and powerful Linux-based operating system, trusted by developers, enterprises, and communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded text-white">Get Started</button>
            <button className="border border-red-500 text-red-400 px-6 py-3 rounded hover:bg-red-900">Learn More</button>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6 pt-32" data-aos="fade-right">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Image */}
          <div className="flex justify-center">
            <img src={debianTextLogo} alt="Debian Logo" className="w-64 md:w-80" />
          </div>
          {/* Text */}
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-6">Why Choose Debian?</h2>
            <p className="text-gray-300 mb-6">
              Debian is renowned for its unmatched stability and reliability. With a strong foundation in free software and global collaboration,
              it’s perfect for everything from personal use to large-scale infrastructure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="text-white font-semibold">Reliable Updates</h4>
                <p className="text-gray-400">Debian’s release cycle ensures long-term support and consistent software updates.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold">Secure by Default</h4>
                <p className="text-gray-400">Security patches are quickly applied and reviewed by a dedicated team.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold">Freedom & Transparency</h4>
                <p className="text-gray-400">Fully open-source, Debian gives users total control of their system.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold">Community-Powered</h4>
                <p className="text-gray-400">Thousands of contributors ensure Debian evolves with global needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="h-screen px-6 pt-32 pb-20 bg-gray-800" data-aos="fade-up">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">

    {/* TEXT - muncul dari kiri */}
    <div
      className="text-left"
      data-aos="fade-left"
      data-aos-delay="100"
      data-aos-anchor-placement="top-bottom"
    >
      <h2 className="text-3xl font-bold mb-4 text-white">Core Features of Debian</h2>
      <p className="text-gray-300 mb-6">
        Debian provides an unmatched balance of freedom, stability, and scalability. It is trusted by enterprises,
        developers, and enthusiasts around the globe.
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Thousands of tested open-source packages</li>
        <li>Advanced package management with APT</li>
        <li>Multi-architecture support</li>
        <li>Proven security with LTS</li>
        <li>Completely free and community-maintained</li>
      </ul>
    </div>

    {/* IMAGE - muncul dari kanan */}
    <div
      className="relative flex justify-center"
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-anchor-placement="top-bottom"
    >
      <img
        src={cpuImage}
        alt="Debian Core Feature"
        className="rounded-lg shadow-lg max-w-full h-auto brightness-75 transform transition duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg pointer-events-none"></div>
    </div>
  </div>

  {/* SUB FEATURES - muncul dari bawah */}
  <div
    className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-16 text-gray-300"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <div className="hover:scale-105 transition">
      <h4 className="text-white font-semibold text-lg mb-2">Stability You Can Trust</h4>
      <p>Each release is rigorously tested to meet the demands of production environments.</p>
    </div>
    <div className="hover:scale-105 transition">
      <h4 className="text-white font-semibold text-lg mb-2">Built for All Platforms</h4>
      <p>From servers to IoT, Debian supports numerous architectures and device types.</p>
    </div>
    <div className="hover:scale-105 transition">
      <h4 className="text-white font-semibold text-lg mb-2">Efficient and Lightweight</h4>
      <p>Run Debian on minimal hardware or scale it for enterprise-grade deployment.</p>
    </div>
  </div>
</section>


<section
  id="arch"
  className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6 pt-32"
  style={{ backgroundImage: `url(${cpuImage})` }}
  data-aos="fade-up"
>
  {/* OVERLAY HITAM */}
  <div className="absolute inset-0 bg-black/60 z-0"></div>

  {/* KONTEN */}
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Supported Architectures</h2>
    <p className="text-gray-300 mb-10 max-w-3xl mx-auto">
      Debian supports a wide variety of hardware platforms...
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
      {[
        "amd64", "i386", "arm64", "armhf",
        "ppc64el", "s390x", "riscv64", "mips64el"
      ].map((arch, idx) => (
        <div
          key={arch}
          data-aos="zoom-in"
          data-aos-delay={idx * 75}
          className="bg-gray-800/60 border border-gray-700 text-white py-6 px-4 rounded-lg shadow-md hover:scale-105 transition text-sm font-semibold"
        >
          {arch.toUpperCase()}
        </div>
      ))}
    </div>

    <div
      className="mx-auto max-w-3xl bg-gray-700/40 border border-gray-600 rounded-xl p-6 shadow-lg backdrop-blur-md"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h3 className="text-white font-semibold text-lg mb-2">Future Platforms & Community Ports</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        In addition to its officially supported architectures, Debian constantly evolves...
      </p>
    </div>
  </div>
</section>


      {/* COMMUNITY */}
      <section id="community" className="h-screen bg-gray-800 bg-center flex flex-col justify-center items-center text-center px-6 pt-32" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Community & Contribution</h2>
          <p className="text-gray-300 mb-4">
            Debian thrives because of its contributors. Whether you're a developer, translator, documenter, or user—you are welcome.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left text-sm">
            <div>
              <h4 className="text-white font-semibold">Translate & Localize</h4>
              <p className="text-gray-400">Help Debian reach users around the globe by translating documentation and interfaces.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold">Package Development</h4>
              <p className="text-gray-400">Maintain or contribute to packages that power millions of Debian-based systems.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold">Join Events</h4>
              <p className="text-gray-400">Connect with developers and enthusiasts in global conferences like DebConf.</p>
            </div>
           {/* TESTIMONI - Lebih Ergonomis */}
<div className="mt-12 grid md:grid-cols-3 gap-6 text-left" data-aos="fade-up" data-aos-delay="300">
  <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
    <p className="text-gray-300 italic leading-relaxed">
      "Debian is my go-to OS for servers. It’s stable, secure, and gets the job done without fuss."
    </p>
    <div className="mt-4 text-sm text-gray-400 font-medium text-right">
      — Arif, <span className="italic">SysAdmin</span>
    </div>
  </div>

  <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
    <p className="text-gray-300 italic leading-relaxed">
      "I love the community spirit in Debian. Everything feels open, transparent, and collaborative."
    </p>
    <div className="mt-4 text-sm text-gray-400 font-medium text-right">
      — Sinta, <span className="italic">Open Source Advocate</span>
    </div>
  </div>

  <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
    <p className="text-gray-300 italic leading-relaxed">
      "From my Raspberry Pi to my laptop, Debian just works. I always recommend it to my students."
    </p>
    <div className="mt-4 text-sm text-gray-400 font-medium text-right">
      — Raka, <span className="italic">IT Lecturer</span>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* GET STARTED */}
      <section id="get" className="h-screen bg-gray-900 bg-center flex flex-col justify-center items-center text-center px-6 pt-32" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Try Debian?</h2>
          <p className="text-gray-300 mb-4">
            Whether you're a first-time user or long-time sysadmin, Debian is designed to fit your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a href="https://www.debian.org/distrib/" target="_blank" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded">
              Download Now
            </a>
            <a href="https://wiki.debian.org/" target="_blank" className="border border-red-500 text-red-400 px-6 py-3 rounded hover:bg-red-900">
              Explore Documentation
            </a>
          </div>
          <p className="mt-8 text-sm text-gray-500">Need help? Join our community forums and mailing lists.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-400 text-xs sm:text-sm text-center py-6 px-4">
        ©2024 Debian Project. Built for freedom, by the community. | Learn more at debian.org
      </footer>

      {/* Scroll Progress */}
      <div id="scroll-progress" className="fixed top-0 left-0 h-1 bg-red-500 z-[9999]"></div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 right-5 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        ↑ Top
      </button>

      {/* Floating Action Button */}
      <a href="#get" className="fixed bottom-20 right-5 bg-white text-gray-800 hover:bg-gray-200 font-semibold px-4 py-2 rounded-full shadow-lg z-50">
        🚀 Get Debian
      </a>

      <div className="bg-gray-900 text-white font-sans">
        

        {/* TODO: Add full sections (Home, Why, Features, Arch, Community, Get Started, FAQ) with all previously defined features */}
      </div>
      
    </div>
    
  );
}

export default App;
