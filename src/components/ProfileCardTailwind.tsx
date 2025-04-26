import React from 'react';

interface User {
  avatar_url?: string;
  name?: string | null;
  login: string;
  bio?: string | null;
  public_repos?: number;
  html_url?: string;
}

interface ProfileCardTailwindProps {
  user: User | null;
}

function ProfileCardTailwind({ user }: ProfileCardTailwindProps) {
  const myProfileUrl = 'https://github.com/Ian-Siveris';

  return (
    <div className="rounded-md shadow-md p-5 w-80 flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden flex justify-center items-center">
        <img src="https://avatars.githubusercontent.com/u/81689494?v=4" alt="Meu Perfil" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-center">Ian Siveris</h2>
      <p className="text-gray-600 mb-3 text-center">Desenvolvedor Front-end | Apaixonado por tecnologia e aprendizado contínuo.</p>
      <a
        href={myProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Meu Perfil
      </a>
    </div>
  );
}

export default ProfileCardTailwind;