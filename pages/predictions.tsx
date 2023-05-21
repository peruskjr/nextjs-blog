import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Predictions() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(()=>{
    const getData = async () =>{
      const query = await fetch('https://jsonplaceholder.typicode.com/users')
      const response = await query.json();
      console.log('response from API ', response);
      setUserInfo(response);
    }
    getData();
  },[]);

  return (
    <Layout>
      <Head>
        <title>Preds</title>
      </Head>
      <h1 className="text-3xl font-bold underline">Predictions</h1>
      {
        userInfo && userInfo.length && userInfo.map((user:any)=>{
          return(
            <>
            <h4>
              {user.name}
              </h4>
              </>
          )
        })
      }
    </Layout>
  );
}

