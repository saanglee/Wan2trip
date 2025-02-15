import React from 'react';
import tw from 'tailwind-styled-components';
// import { ReactComponent as Logo } from "../../static/image/Logo.svg";
import Back from '../../static/image/background.jpg';
import { Link } from 'react-router-dom';

const BackHeader = () => {
  return (
    <EngSkyHeader>
      <img
        src={Back}
        alt=""
        className="object-cover w-full min-h-400 md:h-full"
      />
    </EngSkyHeader>
  );
};

export default BackHeader;

const EngSkyHeader = tw.div`
relative md:absolute  w-full  md:h-1/2 bg-gray-300 top-0 left-0 flex items-end object-cover
`;
