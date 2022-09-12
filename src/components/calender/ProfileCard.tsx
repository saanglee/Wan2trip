import React from 'react';

type member = {
  name: string;
  github: string;
  called: string;
  description: string;
  blog: string;
};

const ProfileCard = (data: member) => {
  return (
    <div className="mx-auto bg-white shadow-xl card w-96 hover:shadow">
      <img
        className="w-32 mx-auto -mt-20 border-8 border-white rounded-full"
        src="https://v-phinf.pstatic.net/20210710_23/1625895857059IrsGx_GIF/image.GIF?type=w1000"
        alt=""
      />
      <div className="mt-2 text-3xl font-medium text-center">{data.name}</div>
      <div className="mt-2 text-sm font-light text-center">
        <button onClick={() => window.open(data.github, '_blank')}>
          @{data.github.split('/')[3]}
        </button>
      </div>
      <div className="mt-2 text-lg font-normal text-center">{data.called}</div>
      <div className="px-6 mt-2 text-sm font-light text-center">
        <p>{data.description}</p>
      </div>
      <hr className="mt-8" />
      <div className="flex p-4">
        <div className="w-full text-center">
          <button onClick={() => window.open(data.blog, '_blank')}>
            contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
