
const getAssetsFile = (url:string) => {
    return new URL(`../assets/icon/${url}`, import.meta.url).href;
  };
   
  export default {getAssetsFile
}
  