import React, { useEffect } from 'react';


const ItemsAddedAlert = () => {
    
    useEffect(() => {
        const timer = setTimeout(() => {
          onClose();
        }, 3000); // Automatically close the alert after 3 seconds
    
        return () => clearTimeout(timer);
      }, [onClose]);
      
  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-gray-800 text-white p-4 rounded-md shadow-md">
      {message}
    </div>
  )
}

export default ItemsAddedAlert
