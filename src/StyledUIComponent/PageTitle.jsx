import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {
  const defaultTitle = '2024 공주온밤';
  return (
    <Helmet>
      <link rel="shortcut icon" href={'/images/favicon/favicon.png'} />
      <title>{title ? `${defaultTitle} - ${title}` : defaultTitle}</title>
    </Helmet>
  );
};

export default PageTitle;
