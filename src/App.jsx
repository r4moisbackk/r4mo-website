import React, { useState, useEffect } from 'react';
import { FaDiscord, FaGithub, FaTwitter, FaSun, FaMoon } from 'react-icons/fa';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} transition duration-700`}>
      <div className="max-w-4xl mx-auto p-6">
        {/* Tema butonu */}
        <div className="flex justify-end mb-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full border border-gray-400">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <header className="text-center mb-10">
          <img
            src="https://cdn.discordapp.com/avatars/YOUR_ID/YOUR_AVATAR.webp"
            alt="Avatar"
            className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-lg animate__animated animate__fadeIn"
          />
          <h1 className="text-4xl font-bold mt-4 animate__animated animate__fadeInUp">Ramazan | RZ#0001</h1>
          <p className="text-gray-400 mt-2">Discord bot geliştiricisi • Front-end tutkunu</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://discord.com/users/YOUR_ID" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="text-blue-400 text-2xl hover:scale-110 transition" />
            </a>
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-2xl hover:scale-110 transition" />
            </a>
            <a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-sky-400 text-2xl hover:scale-110 transition" />
            </a>
          </div>
        </header>

        <section className="mb-10">
          <div className="p-6 border border-gray-700 rounded-2xl shadow-xl animate__animated animate__fadeInUp">
            <h2 className="text-2xl font-semibold mb-2">Hakkımda</h2>
            <p className="text-gray-300">
              Merhaba! Ben Ramazan. 3 yıldır Discord botları geliştiriyorum. JavaScript, Python ve React konularında
              tecrübeliyim. Açık kaynak projelere katkı sağlamaktan keyif alıyorum. Aktif olarak bazı sunucular için özel
              botlar yazıyorum.
            </p>
          </div>
        </section>

        <section className="mb-10 animate__animated animate__fadeInUp animate__delay-1s">
          <h2 className="text-2xl font-semibold mb-4">Projelerim</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border border-gray-700 rounded-2xl shadow-xl">
              <h3 className="text-xl font-semibold">GuardBot</h3>
              <p className="text-gray-300 text-sm">Sunucularınızı koruyan güçlü bir Discord Guard Bot.</p>
              <a
                href="https://github.com/YOUR_USERNAME/GuardBot"
                target="_blank"
                className="inline-block mt-2 bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700"
              >
                GitHub
              </a>
            </div>
            <div className="p-4 border border-gray-700 rounded-2xl shadow-xl">
              <h3 className="text-xl font-semibold">TicketSystem</h3>
              <p className="text-gray-300 text-sm">Kolay kurulumlu gelişmiş destek bileti sistemi.</p>
              <a
                href="https://github.com/YOUR_USERNAME/TicketSystem"
                target="_blank"
                className="inline-block mt-2 bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="text-center animate__animated animate__fadeInUp animate__delay-2s">
          <a
            href="https://discord.gg/YOUR_SERVER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl shadow-xl font-bold"
          >
            Discord Sunucuma Katıl
          </a>
        </section>
      </div>
    </div>
  );
}
