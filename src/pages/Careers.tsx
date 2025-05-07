import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Careers = () => {
  return (
    <div className="min-h-screen bg-solarized-base3 relative overflow-hidden">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="wrapper mb-12">
            <div className="hypno"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-solarized-base01 mb-6">
            Присоединяйся к команде
          </h1>
          <p className="text-xl text-solarized-base1 max-w-2xl mb-8">
            Если ты думаешь, что тебе к нам - пиши @TheLABL в Telegram
          </p>
        </div>
      </main>
      <Footer />
      <style>{`
        .wrapper {
          width: 300px;
          height: 300px;
          transform-style: preserve-3d;
          animation: tilt 8s infinite ease-in-out alternate;
        }

        .hypno {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: conic-gradient(
            #fdf6e3 0deg 30deg,
            #002b36 30deg 60deg,
            #fdf6e3 60deg 90deg,
            #002b36 90deg 120deg,
            #fdf6e3 120deg 150deg,
            #002b36 150deg 180deg,
            #fdf6e3 180deg 210deg,
            #002b36 210deg 240deg,
            #fdf6e3 240deg 270deg,
            #002b36 270deg 300deg,
            #fdf6e3 300deg 330deg,
            #002b36 330deg 360deg
          );
          animation: spin 4s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }

        @keyframes tilt {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(15deg) rotateY(25deg); }
        }
      `}</style>
    </div>
  );
};

export default Careers; 