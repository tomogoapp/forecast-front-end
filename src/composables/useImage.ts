const useImage = () => {

  const images = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,gif,svg}');

  const localImage = (folder: string, name: string, extension: string): string => {
    const imagePath = `/src/assets/images/${folder}/${name}.${extension}`;
    const match = images[imagePath];

    if (match) {
      return imagePath;
    } else {
      return "https://p7.hiclipart.com/preview/711/621/180/error-computer-icons-orange-error-icon.jpg";
    }
  }

  const bgImage = (image:string, extension:string) => {
      let bg = null;
      if (image == null) {
        bg = "background-color:white;";
      } else {
        bg =
          "background-image: url(  " +
          require("src/assets/images/" + image + "." + extension) +
          "); background-size: cover; background-position: center;";
      }
      return bg;
    }


    const bgImagePortrait = (image:string, extension:string) => {
      let bg = null;
      if (image == null) {
        bg = "background-color:white;";
      } else {
        bg =
          "background-image: url(  " +
          require("src/assets/images/" + image + "." + extension) +
          "); background-size: contain; background-position: center;";
      }
      return bg;
    }


  return{
      localImage,
      bgImage,
      bgImagePortrait
  }
}


export { useImage }
