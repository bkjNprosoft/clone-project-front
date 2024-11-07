import { useState } from 'react';
import GlobalNavbar from '../components/header/GlobalNavbar';
import sloganPc from '/images/sloganPc.svg';
const Home = () => {
  return (
    <>
      <GlobalNavbar
        activeTo="/"
        menuClassName="text-white border-solid border-b-[1px] border-b-white border-opacity-30"
      />
      <section
        id="bg-video"
        className="relative left-0 top-0 h-[100vh] after:absolute after:block after:content-[' '] after:top-0 after:left-0 after:w-[100%] after:h-[100%]
      after:bg-gradient-to-b from-black from-1% via-transparent via-[percentage:12%_88%] to-black to-99% after:-z-10"
      >
        <VideoPlayer
          autoPlay
          muted
          className="absolute w-[100%] h-[100%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] object-cover -z-10"
        />
        <div id="video-title" className="absolute left-0 bottom-0 w-[100%]">
          <div className="relative flex justify-between bottom-0 w-[100%] pl-16 pr-24 ">
            <div>
              <img src={sloganPc}></img>
            </div>
            <div className="flex justify-between items-end w-36 text-white pb-3">
              <button className="flex justify-center items-center w-14 h-14 border-solid border-white border-[1px] rounded-[50%] hover:bg-white  hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                  />
                </svg>
              </button>
              <button className="flex justify-center items-center w-14 h-14 border-solid border-white border-[1px] rounded-[50%] hover:bg-white  hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="relative block w-[100%] h-16 after:absolute after:content-[' '] after:w-[100%] after:h-[100%] after:bg-gradient-to-b from-black from-3% to-white to-93% after:-z-10"></div>
      <section></section>
    </>
  );
};

type VideoPlayerProps = {
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
};

const VideoPlayer = (props: VideoPlayerProps) => {
  const [index, setIndex] = useState(0);

  const videos = ['pv_01.mp4', 'pv_02.mp4', 'pv_03.mp4', 'pv_04.mp4'];

  const handleVideoEnd = () => {
    const nextIndex = (index + 1) % videos.length;
    setIndex(nextIndex);
  };

  return (
    <>
      <video
        src={`./videos/${videos[index]}`}
        autoPlay={props.autoPlay}
        loop={props.loop}
        muted={props.muted}
        onEnded={handleVideoEnd}
        className={props.className}
      ></video>
    </>
  );
};

export default Home;
