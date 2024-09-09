export const useGetUserLocation = () => {
  
  const getUserLocation = (): Promise<GeolocationPosition> =>{
    return new Promise((resolve, reject) =>{
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(resolve, reject)
      } else {
        reject(new Error('No hay soporte de geolocalizacion'))
      }
    })
  }

  return { getUserLocation }

}
