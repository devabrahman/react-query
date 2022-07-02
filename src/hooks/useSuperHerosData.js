import axios from "axios";
import { useQuery } from "react-query";
const fetchingHeroData = () => axios.get(`http://localhost:4000/superheroes`);

const useSuperHerosData = (success, error, obj = {}) => {
   // console.log(obj);
   return useQuery("rqSuperHero", fetchingHeroData,
   
      {
         // staleTime: 400,
         // cacheTime: 5000,
         // refetchOnWindowFocus: true,
         // refetchInterval: 2000,
         // refetchIntervalInBackground: true,
         enabled: obj ? obj.enable : true,
         onSuccess: success,
         onError: error,
         // select: (data) => {
         //    const superHeroalt = data.data.map(altName => altName.name);
         //    // console.log(superHeroalt);
         //    return superHeroalt;
         // }
      })
};

export default useSuperHerosData;