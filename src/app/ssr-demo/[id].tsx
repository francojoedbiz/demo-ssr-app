// pages/ssr-demo/[id].tsx
import { useRouter } from 'next/router';
import ClientComponent from '../../components/ClientComponent';
import SSRDemo from '../../app/ssr-demo/page';

const SSRDemoPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <ClientComponent serverMessage={''} />
      <SSRDemo id={id as string} />
    </div>
  );
};

export default SSRDemoPage;
