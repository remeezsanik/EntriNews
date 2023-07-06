import Marquee from "react-fast-marquee";

interface IProps {
  text: string;
}

const ScrollerText = ({ text }: IProps) => {
  return (
    <div className="overflow-hidden">
      <Marquee
        speed={80}
        gradient={false}
        pauseOnHover
        className="text-xl md:text-2xl font-serif border-t border-gray-300/60  p-2 font-bold mt-2 mb-2"
      >
        {text}
      </Marquee>
    </div>
  );
};

export default ScrollerText;
