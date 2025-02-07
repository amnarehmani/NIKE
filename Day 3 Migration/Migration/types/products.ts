export interface Product {
    _id: string;
    _type: 'product';
    productName: string;
    category: string;    
    price: number;       
    inventory: number;   
    colors: string[];   
    status: string;      
    image?: {
      _type: 'image';     
      asset: {
        _type: 'reference';
        _ref: string;
      };
    };
    description: string; 
  }
  