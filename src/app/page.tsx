import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to Korean locale by default (as per business requirements)
  redirect('/ko');
}