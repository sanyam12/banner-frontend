import React, { useState } from 'react';
import Banner from './components/banner';
// import axios from 'axios';



const App: React.FC = () => {
  const [hours, setHours] = useState<number>(1);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [showBanner, setShowBanner] = useState<boolean>(false);
  // const [bannerId, setBannerId] = useState<string>('');

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setter(value);
      }
    };

  const handleGetStarted = async () => {
    // const data = await axios.get(`https://bannerbackend.thesanyam.com/banner?id=${bannerId}}`);
    // if(data.status === 200){
      // console.log("started fetching");
      // setTitle(data.data.title);
      // setDescription(data.data.description);
      // setLink(data.data.url);
      // const durationInSeconds = data.data.timer;
      // setHours(Math.floor(durationInSeconds / 3600));
      // setMinutes(Math.floor((durationInSeconds % 3600) / 60));
      // setSeconds(durationInSeconds % 60);
      setShowBanner(true);
    // }else{
    //   console.log("Error in fetching data");
    // }
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const handlePublish = async () => {
    // const response = await axios.post('https://bannerbackend.thesanyam.com/banner', {
    //   title: title,
    //   description: description,
    //   timer: totalSeconds,
    //   url: link,
    //   id: bannerId
    // });
    // if(response.status === 200){
    //   console.log("Banner published successfully");
    // }else{
    //   console.log("Error in publishing banner");
    // }
  };

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  return (
    <div className="min-h-screen flex flex-col">
      {showBanner && (
        <Banner
          title={title}
          description={description}
          url={link}
          duration={totalSeconds}
          onClose={handleCloseBanner}
        />
      )}
      <header className="bg-white p-4">
        <nav className="flex justify-end items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Docs</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Log In</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Sign up</button>
        </nav>
      </header>

      <main className="flex-grow flex flex-col">
        <div className="flex-grow flex">
          <div className="w-1/2 bg-gray-400 p-12 flex items-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold text-white mb-4">Create beautiful announcements</h1>
              <p className="text-xl text-white mb-6">Use Acme Co to create and publish announcements that match your brand, without writing any code.</p>
              <input
                type="text"
                placeholder="Enter your banner ID"
                className="bg-white p-4 rounded-md w-full mb-4"
                // onChange={
                //   // (e: React.ChangeEvent<HTMLInputElement>) => setBannerId(e.target.value)
                // }
              ></input>
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600"
                onClick={handleGetStarted}
              >
                Load given banner ID
              </button>
            </div>
          </div>
          <div className="w-1/2 bg-gray-800">
            {/* This space is intentionally left blank to match the image */}
          </div>
        </div>

        <div>
          <div className="bg-white p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Create a new announcement</h2>
              <p className="text-lg text-gray-600 mb-3">Enter the duration for which you want to display the announcement.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex space-x-4 mb-6">
              {[
                { value: hours, setter: setHours, label: 'Hours' },
                { value: minutes, setter: setMinutes, label: 'Minutes' },
                { value: seconds, setter: setSeconds, label: 'Seconds' }
              ].map(({ value, setter, label }, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-md text-center flex-1">
                  <input
                    type="number"
                    value={value}
                    onChange={handleInputChange(setter)}
                    className="text-4xl font-bold mb-2 w-full bg-transparent text-center"
                    min="0"
                  />
                  <div className="text-gray-600">{label}</div>
                </div>
              ))}
            </div>
            {/* <button
              className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600"
              onClick={handlePublish}
            >
              Save Timer
            </button> */}
          </div>
        </div>

        <div>
          <div className="bg-white p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Enter the title for your banner</h2>
              <p className="text-lg text-gray-600 mb-3">Enter the title you want to display on the announcement.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex space-x-4 mb-6">
              {/* //set initial value of title */}
              <input
                type="text"
                value={title}
                placeholder="Enter the title for your banner"
                className="w-full bg-gray-100 p-4 rounded-md text-lg"
                onChange={
                  (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
                }
              />
            </div>
            {/* <button
              className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600"
              onClick={() => {
                console.log(`Title is ${title}`);
              }}
            >
              Save Title
            </button> */}
          </div>
        </div>



        <div>
          <div className="bg-white p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Enter the description for your banner</h2>
              <p className="text-lg text-gray-600 mb-3">Enter the description you want to display on the announcement.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex space-x-4 mb-6">
              <input
                type="text"
                value={description}
                placeholder="Enter the description for your banner"
                className="w-full bg-gray-100 p-4 rounded-md text-lg"
                onChange={
                  (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)
                }
              />
            </div>
            {/* <button
              className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600"
              onClick={() => {
                console.log(`Description is ${description}`);
              }}
            >
              Save Description
            </button> */}
          </div>
        </div>


        <div>
          <div className="bg-white p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Enter the link for your banner</h2>
              <p className="text-lg text-gray-600 mb-3">Enter the link you want to display on the announcement.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex space-x-4 mb-6">
              <input
                type="url"
                value={link}
                placeholder="Enter the link for your banner"
                className="w-full bg-gray-100 p-4 rounded-md text-lg"
                onChange={
                  (e: React.ChangeEvent<HTMLInputElement>) => setLink(e.target.value)
                }
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600"
              onClick={handlePublish}
            >
              Save Banner Details
            </button>
          </div>
        </div>

        {/* <div className="bg-white p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex space-x-4 mb-6">
              <input
                type="url"
                placeholder="Enter the banner id"
                className="w-full bg-gray-100 p-4 rounded-md text-lg"
                onChange={
                  (e: React.ChangeEvent<HTMLInputElement>) => setBannerId(e.target.value)
                }
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-600"
              onClick={() => {
                console.log(`Banner ID is ${bannerId}`);
              }}
            >
              Save Banner Details
            </button>
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default App;