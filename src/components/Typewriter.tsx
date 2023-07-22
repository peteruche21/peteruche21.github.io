import Typewriter from "typewriter-effect";

const TypeWriter = ({ sentences, delay = 100 }: { sentences: string[]; delay?: number }) => {
  const className = "text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]";
  return (
    <span>
      <Typewriter
        options={{
          strings: sentences,
          autoStart: true,
          loop: true,
          delay,
          cursor: "_",
          wrapperClassName: className,
          cursorClassName: className,
          deleteSpeed: 20,
        }}
      />
    </span>
  );
};

export default TypeWriter;
