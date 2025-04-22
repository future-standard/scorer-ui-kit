// import React, { useState } from 'react';
// import axios from 'axios';
// import { Switch } from 'scorer-ui-kit';

// const SwitchWithAPI: React.FC = () => {
//   const [isChecked, setIsChecked] = useState<boolean>(false);
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const fetchData = async (apiUrl: string) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(apiUrl);
//       setData(response.data);
//       setIsChecked(!isChecked); // ✅ Only update switch if API call succeeds
//     } catch (err) {
//       setError('Failed to fetch data');
//       setData([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSwitchChange = async () => {
//     console.log("Switch Toggled:", isChecked);
//     const apiUrl = isChecked
//       ? 'https://fakestoreapi.com/users'
//       : 'https://fakestoreapi.com/products';

//     await fetchData(apiUrl);
//   };

//   return (
//     <div style={{ padding: '50px' }}>
//       <Switch
//         labelText="Fetch Data"
//         checked={isChecked}
//         isControlled={true} // to make it controlled
//         onChangeCallback={handleSwitchChange}
//       />
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {data && (
//         <ul>
//           {data.map((item: any) => (
//             <li key={item.id}>{item.username || item.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SwitchWithAPI;


import React, { useState } from 'react';
import axios from 'axios';
import { Switch } from 'scorer-ui-kit';

const SwitchWithAPI: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (apiUrl: string) => {
    setLoading(true);
    setError(null);
    try {
      // const response = await axios.get(apiUrl);
      const response = await axios.get('failUrl');
      setData(response.data);
      setIsChecked(!isChecked);
    } catch (err) {
      setError('Failed to fetch data');
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSwitchChange = async () => {
    console.log("Switch Toggled:", isChecked);
    const apiUrl = isChecked
      ? 'https://fakestoreapi.com/users'
      : 'https://fakestoreapi.com/products';

    await fetchData(apiUrl);
  };

  return (
    <div style={{ padding: '50px' }}>
      <Switch
        labelText="Fetch Data"
        defaultChecked={isChecked} // To make it controlled
        onChangeCallback={handleSwitchChange} // To make it controlled
        // checked={isChecked}
        // onChangeCallback={() => {setIsChecked(!isChecked)}}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>{item.username || item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SwitchWithAPI;
