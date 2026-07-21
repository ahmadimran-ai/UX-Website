import TagLine from './Tagline';

const Heading = ({ className, title, tag }) => {
  return (
    <div className={`${className} max-w-200 mx-auto mb-12 lg:mb-20 md:text-center`}>
      {tag && <TagLine className="mb-3 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
