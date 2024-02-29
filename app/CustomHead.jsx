import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>DemoLab AI -{title}</title>
    </Head>
  );
};

export default CustomHead;
