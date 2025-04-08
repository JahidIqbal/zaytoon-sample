
export const getCurrentMonthDateRange = () => {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1); 
    const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0); 
  
    return {
      start: startDate.toISOString().split('T')[0], 
      end: endDate.toISOString().split('T')[0],    
    };
  };