import { Lato, Montserrat } from 'next/font/google';
import { Session } from 'next-auth';
import { headers } from 'next/headers';

import AuthContext from './AuthContext';
import './globals.css';

const lato = Lato({ subsets: ['latin'], weight: '400', variable: '--font-lato' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata = {
  title: 'Listed - Capital for creators',
  description: 'listed.fans',
};

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(`${process.env.LOCAL_AUTH_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession(headers().get('cookie') ?? '');

  return (
    <html lang='en' className={`${montserrat.variable} ${lato.variable}`}>
      <body className='font-montserrat'>
        <AuthContext session={session}>{children}</AuthContext>
      </body>
    </html>
  );
}
