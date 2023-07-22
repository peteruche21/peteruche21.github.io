import { SocialIcon } from "react-social-icons";

const socials = [
  "https://twitter.com/peteranyaogu",
  "https://github.com/peteruche21",
  "https://linkedin.com/in/anyaogu",
  "https://discordapp.com/users/700327336507080734",
  "mailto:anyaogupeter601@gmail.com",
];

const Socials = () => {
  const style = {
    width: 40,
    height: 40,
  };

  function renderSocials(): JSX.Element[] {
    return socials.map((social, idx) => {
      return <SocialIcon url={social} target="_blank" key={idx} style={style} />;
    });
  }

  return <div className="inline-flex items-center justify-center gap-x-3">{renderSocials()}</div>;
};

export default Socials;
