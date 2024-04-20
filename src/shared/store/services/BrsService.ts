import { Brs } from "@/entities/brs/IBrs";
import { API_URL } from "@/shared/lib/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const brsAPI = createApi({
    reducerPath: "brsAPI",
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (build) => ({
        getBrs: build.query<Brs[], string>({
            query: (userId) => ({
                url: "/brs",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                credentials: "include",
                params: {userId}
            }),
        })
    })
});

export const { useGetBrsQuery } = brsAPI;