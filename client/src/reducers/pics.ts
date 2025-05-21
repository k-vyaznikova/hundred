import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SERVER_URL } from '../utils/constants';


export const picsApi = createApi({
    reducerPath: 'picsApi',
    baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL + '/api' }),
    endpoints: (builder) => ({
        getPics: builder.query({
          query: () => '/pics'
        })
    })    
});

export const { useGetPicsQuery } = picsApi;

