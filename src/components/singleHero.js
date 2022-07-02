import React from 'react';
import { useParams } from 'react-router-dom';
import { useSuperHeroInfo } from '../hooks/useSuperHeroInfo';

const SingleHero = () => {
   const { id } = useParams()
   // console.log(id)
   const { isError, error, data,isLoading } = useSuperHeroInfo(id)
   // console.log(isError, error);
   // console.log(data.data);
   if (isError) {
      return <div>{ error.message}</div>
   }


   return (
       <div>
           {data?.status === 200 ? (
               <>
                   {" "}
                   {isLoading ? (
                       <div>
                           <h1>Loading ...</h1>
                       </div>
                   ) : (
                       <>
                           <h3>Single Super Hero Info| Id :{id} </h3>
                           <br />
                           <hr />
                           <p>
                               <strong>ID: </strong>
                               {data?.data?.id}
                           </p>
                           <p>
                               <strong>Name: </strong>
                               {data?.data?.name}
                           </p>
                           <p>
                               <strong>Ego: </strong>
                               {data?.data?.alterEgo}
                           </p>
                       </>
                   )}
               </>
           ) : (
               <h1>Sorry No data found</h1>
           )}
       </div>
   );
};

export default SingleHero;