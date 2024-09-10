import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false, // 仅在客户端加载
});

export default function Home() {
  return (
    <div >
      <Spline
        scene="https://prod.spline.design/ZTahTQ9NkWlPmfES/scene.splinecode" 
      />
    </div>
  );
}
