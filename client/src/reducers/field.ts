import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SERVER_URL } from '../utils/constants';


export const fieldApi = createApi({
    reducerPath: 'fieldApi',
    baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL + '/api' }),
    endpoints: (builder) => ({
        getField: builder.query({
          query: () => '/nums',
          transformResponse: (response) => {
            const field = (response as Array<any>)?.reduce((accumulator, cell) => {
                return accumulator.set(cell.number, {
                    number: cell.number,
                    sound: cell.sound,
                    status: 'default'
                });
                }, new Map());
            return field;   
          }
        })
    })    
});

export const { useGetFieldQuery} = fieldApi;
