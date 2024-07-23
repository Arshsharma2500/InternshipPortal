import React from 'react';

const Opportunity = ({ opportunity }) => {
  const { stipend } = opportunity;

  return (
    <div className="opportunity-card">
      <div className='grid grid-cols-1 md:grid-cols-4 border border-solid border-black p-2 gap-2 bg-gray-200 rounded'>
        <div className='md:col-span-1 flex items-center'>
          <img src={opportunity.company_logo} alt='company_logo' className='max-w-full h-auto'></img>
        </div>

        <div className='md:col-span-2 flex flex-col gap-1'>
          <p><strong>Company:</strong> {opportunity.company_name}</p>
          <p><strong>Profile name:</strong> {opportunity.profile_name}</p>
          <p><strong>Location:</strong> {opportunity.location_names.join(', ')}</p>
          <p><strong>Duration:</strong> {opportunity.duration}</p>
          <p><strong>Start Date:</strong> {opportunity.start_date}</p>
        </div>

        <div className='md:col-span-1 flex items-center justify-center'>
          <p>₹ {`${stipend.salaryValue1} - ${stipend.salaryValue2} ${stipend.currency} (${stipend.salaryType})`}</p>
        </div>

        <div className='md:col-span-4 flex justify-center mt-2 w-full'>
          <button className='bg-gray-600 px-4 py-2 rounded text-white' onClick={() => {alert("Applied Successfully")}}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
