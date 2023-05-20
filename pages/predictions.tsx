import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Preds</title>
      </Head>
      <h1 className="text-3xl font-bold underline">Predictions</h1>
    </Layout>
  );
}