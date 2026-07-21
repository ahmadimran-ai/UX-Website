import { check } from '../assets';
import { pricing } from '../constants';
import Button from './button';

const PricingList = () => {
  return (
    <div className="flex gap-6 max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-76 max-lg:w-full h-full px-6 bg-n-8 border-n-6 rounded-8 lg:w-auto even:py-14 odd:py-8 odd-my-4 even:scale-106 "
        >
          <h4
            className={`mb-4 text-3xl font-extrabold ${
              item.title === 'Basic'
                ? 'text-white'
                : item.title === 'Premium'
                  ? 'text-color-2'
                  : 'text-color-1'
            }`}
          >
            {item.title}
          </h4>
          <p className="body-2 mb-2 text-n-1/50 min-h-16">{item.description}</p>
          <div className=" flex justify-center h-22 mb-6">
            {item.price && (
              <>
                <div className="text-4xl">$</div>
                <div className="text-7xl font-bold">{item.price}</div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6 "
            href={item.price ? '/pricing' : 'mailto:info@gmail.com'}
            white={!!item.price}
          >
            {item.price ? 'Get Started' : 'Contact Us'}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li key={index} className="flex items-start py-5 border-t border-n-6">
                <img src={check} alt="check" width={25} height={25} />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
