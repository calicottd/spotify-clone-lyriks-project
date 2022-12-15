import{ createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
            prepareHeaders:(headers)=> {
                headers.set('X-RapidAPI-Key', '47e1cd8e6emsh0398fcaadd8ed42p1752ffjsnd5770e431c05');
                return headers;
            },
        }),
        endpoints:(builder)=> ({
            getTopCharts: builder.query({ query: () => '/charts/world' }),
            getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
            getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
            getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
            getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
            getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
        }),

    });

    export const{
        useGetTopChartsQuery,
        useGetSongsByGenreQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
        useGetSongsBySearchQuery,
    } = shazamCoreApi;