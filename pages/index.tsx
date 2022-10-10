import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='text-3xl'>
      <h1 className='text-4xl font-bold text-red-500 underline'>
        Hello world!
      </h1>
    </div>
  );
};

export default Home;
