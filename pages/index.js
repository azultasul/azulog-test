import Head from 'next/head'
import Image from 'next/image'
import { supabase } from '~/utils/supabaseClient';
import FilledTitle from '~/components/FilledTitle';
import { useEffect } from 'react';

const Home = ({ works }) => {
  // useEffect(() => {
  //   console.log("supabase", supabase);
  //   console.log("works", works);
  // }, [])

  return (
    <div>
      <Head>
        <title>AzulTasul</title>
        <meta name="description" content="AzulTasul's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <FilledTitle></FilledTitle>
        {/* {works.map((work) => (
          <li key={work.id}>{work.name}</li>
        ))} */}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from('works').select()

  return {
    props: {
      works: {data, error}
    },
  }
}

export default Home;