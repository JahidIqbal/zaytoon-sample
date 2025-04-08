const InsuranceCards = () => {
  const insurances = [
    {
      type: 'Health Insurance',
      provider: 'MediCare Plus',
      policyNumber: 'HC-3456789',
      validity: 'Valid till: Dec 2026',
      icon: '🩺',
      bgColor: 'from-[#fbc2eb] to-[#a6c1ee]',
    },
    {
      type: 'Car Insurance',
      provider: 'AutoShield Co.',
      policyNumber: 'CR-9876543',
      validity: 'Valid till: Aug 2025',
      icon: '🚗',
      bgColor: 'from-[#f6d365] to-[#fda085]',
    },
    {
      type: 'Home Insurance',
      provider: 'SafeHome Ltd.',
      policyNumber: 'HM-1234567',
      validity: 'Valid till: Mar 2027',
      icon: '🏠',
      bgColor: 'from-[#84fab0] to-[#8fd3f4]',
    },
  ];

  return (
    <div className="py-16 px-6 sm:px-10 md:px-20 lg:px-32 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {insurances.map((insurance, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${insurance.bgColor} text-gray-900 p-8 rounded-3xl shadow-xl h-64 w-full transition-transform transform hover:scale-105`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">{insurance.type}</h3>
              <span className="text-4xl">{insurance.icon}</span>
            </div>
            <div className="mt-8 space-y-2 text-base">
              <p><span className="font-semibold">Provider:</span> {insurance.provider}</p>
              <p><span className="font-semibold">Policy No:</span> {insurance.policyNumber}</p>
              <p className="text-sm text-gray-800">{insurance.validity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceCards;
