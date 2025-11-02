import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google'

// Generates a unique CSS class that applies that font safely.
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400'] })