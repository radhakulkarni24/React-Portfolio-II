//this function created to dynamically take the images instead of giving images with path everytime in each file 
//dynamic import for image
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };

