import React, { useState, useEffect } from 'react';

const requestMethods = [
  { slug: 'get', method: 'GET' },
  { slug: 'post', method: 'POST' },
  { slug: 'put', method: 'PUT' },
  { slug: 'patch', method: 'PATCH' },
  { slug: 'delete', method: 'DELETE' },
];

export default function UrlEditor({
  url,
  setUrl,
  reqMethod,
  setReqMethod,
  onInputSend,
  onChangeBody
}) {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    fetch('https://8ac5-157-245-159-47.ngrok-free.app/getsample')
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  const handleChange = (val) => {
    let selData = data.find((x) => x.sample == val);
    setSelectedData(selData);
    if(val){
      onChangeBody(selData);
    }
    // else
    // {
    //   onChangeBody({
    //       "data": selectedData.data,
    //       "sample": selectedData.sample,
    //       "type": selectedData.type,
    //       "url": selectedData.url
    //   });
    // }
  };

  // const handleChangeReqMethod =(val) => {
  //   let tempSelData = {...selectedData};
  //   tempSelData.type = val;
  //   setSelectedData(tempSelData);
  //   onChangeBody({
  //       "data": selectedData.data,
  //       "sample": selectedData.sample,
  //       "type": selectedData.type,
  //       "url": selectedData.url
  //   });
  // }

  // const handleChangeUrl =(val) => {
  //   let tempSelData = {...selectedData};
  //   tempSelData.url = val;
  //   setSelectedData(tempSelData);
  //   onChangeBody({
  //       "data": selectedData.data,
  //       "sample": selectedData.sample,
  //       "type": selectedData.type,
  //       "url": selectedData.url
  //   });
  // }

  return (
    <>
    <ul>
    </ul>
      <form>
        <div>
          <div className='pb-3'>
            <select
                className="px-4 py-2 border rounded-md border-gray-300 hover:border-blue-500 focus:outline-none bg-gray-100"
                value={selectedData?.sample}
                onChange={(e) => handleChange(e.target.value)}
              >
                <option key="" value="">
                  Api Type
                </option>
                {data?.map((option) => (
                  <option key={option.sample} value={option.sample}>
                    {option.sample.charAt(0).toUpperCase() + option.sample.slice(1)}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex">
            <select
              className="px-4 py-2 border rounded-md border-gray-300 hover:border-blue-500 focus:outline-none bg-gray-100"
              value={selectedData?.type}
              //onChange={(e) => handleChangeReqMethod(e.target.value)}
            >
              {requestMethods.map((option) => (
                <option key={option.slug} value={option.method}>
                  {option.method}
                </option>
              ))}
            </select>
            <input
              className="ml-3 w-full px-4 py-2 border rounded-md border-gray-300 hover:border-blue-500 focus:outline-blue-500"
              value={selectedData?.url}
              //onChange={(e) => handleChangeUrl(selectedData.url)}
            />
            <button
              className="ml-3 px-6 py-2 rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600"
              type="button"
              onClick={onInputSend}
            >
              Send
            </button>

          </div>
        </div>
      </form>
    </>
  );
}
