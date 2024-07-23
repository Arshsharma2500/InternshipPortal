import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Opportunity from '../Opportunity/Opportunity';

function Opportunities() {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const response = await axios.get('https://internshipportal-uu4z.onrender.com/api/opportunities');
        const internshipsMeta = response.data[0].internships_meta;
        
        const details = Object.values(internshipsMeta).flat(); // Flatten the nested array
        setOpportunities(details);
      } catch (error) {
        console.error('Error fetching opportunities:', error);
      }
    };

    fetchOpportunities();
  }, []);

  return (
    <div className='flex justify-center items-center min-h-screen px-4'>
      <div className='w-full md:w-4/6 text-center'>
        <div className='flex flex-col gap-4 pt-20 items-center'>
          {opportunities.map((opportunity, index) => (
            <div key={index} className='w-full'>
              <Opportunity opportunity={opportunity} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Opportunities;
