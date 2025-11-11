import { useState } from 'react';

function ProfileCard() {
  const [isFollowed, setIsFollowed] = useState(false);
  const [message, setMessage] = useState('');

  const handleFollowClick = () => {
    const newFollowState = !isFollowed;
    setIsFollowed(newFollowState);

    if (newFollowState) {
      setMessage('You are now following Mulero Reuben!');
    } else {
      setMessage('You have unfollowed Mulero Reuben.');
    }

    setTimeout(() => {
      setMessage('');
    }, 8000);
  };

  return (
    <div className="w-80 bg-white rounded-xl shadow p-4">
      <div className="h-20 bg-gradient-to-r from-green-600 via-white to-green-600 rounded-lg"></div>

      <div className="flex justify-center -mt-10">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQGxSun4Mwgqyw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662409322783?e=1764201600&v=beta&t=8RlThcO0IFGWp9s00sPmTU3QaM199gLze8Ax-b6D09k"
          className="w-20 h-20 rounded-full bg-gray-300 border-4 border-white object-cover"
        />
      </div>

      <div className="text-center mt-2">
        <h2 className="text-lg font-semibold">Mulero Reuben</h2>
        <p className="text-sm text-gray-600">AI Developer</p>
        <p className="text-xs text-gray-500">Ogun, Nigeria</p>
      </div>

      <div className="flex justify-between mt-4">
        <div className="text-center">
          <h3 className="text-lg font-bold">4.5k</h3>
          <p className="text-xs text-gray-500">Followers</p>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-bold">100</h3>
          <p className="text-xs text-gray-500">Posts</p>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-bold">10k</h3>
          <p className="text-xs text-gray-500">Likes</p>
        </div>
      </div>

      <p className="text-sm text-gray-700 mt-4">
        Artificial intelligence with expertise in business management and designs
      </p>

      <button
        onClick={handleFollowClick}
        className={
          isFollowed
            ? 'w-full bg-gray-500 text-white py-2 rounded-lg mt-4'
            : 'w-full bg-green-600 text-white py-2 rounded-lg mt-4'
        }
      >
        {isFollowed ? 'Following' : 'Follow'}
      </button>

      {message && (
        <p className={`text-center text-sm mt-2 ${isFollowed ? 'text-green-600' : 'text-gray-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default ProfileCard;