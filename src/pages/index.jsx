import dynamic from 'next/dynamic';

const App = dynamic(() => import('../components/containers/AppShell'), {
  ssr: false
});

export default function Index() {
  return <App />;
}
