import axios from "axios"
import { useQuery } from "react-query"
const getSingleSuperHero = ({ queryKey }) => {
   const id = queryKey[1]
   console.log(queryKey);
   return axios.get(`http://localhost:4000/superheroes/${id}`)
}

export const useSuperHeroInfo = (id) => {
   return useQuery(['super-hero-data', id], getSingleSuperHero)
}