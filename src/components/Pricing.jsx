import Section from './Section';
import { smallSphere, stars } from '../assets';
import Heading from './Heading';
import PricingList from './PricingList';
import { LeftLine, RightLine } from './design/Pricing';

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative">
        <div className="hidden relative justify-center mb-26 lg:flex">
          <img
            src={smallSphere}
            alt="small_sphere_icon"
            className="relative z-1"
            width={300}
            height={300}
          />
          <div className="absolute top-1/2 left-1/2 w-240 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img src={stars} alt="stars" className="w-full " width={950} height={400} />
          </div>
        </div>
        <Heading title="One Time Payment, useful for forever" tag="Get started with BrainWave" />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-15">
          <a
            href="/pricing"
            className="text-xs font-code font-bold uppercase tracking-wider border-b"
          >
            See the Full Details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
