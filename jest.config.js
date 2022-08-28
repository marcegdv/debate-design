module.exports = {              
    roots: ["<rootDir>/src"],          
    
    setupFilesAfterEnv: [        
      "@testing-library/jest-dom/extend-expect",
      "@testing-library/jest-dom",
    ],    
  
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

    testEnvironment: 'jsdom',
  };  