import { faker } from "@faker-js/faker"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const domainsApi = createApi({
    reducerPath: 'domains',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/"
    }),
    endpoints(builder) {
        return {
            fetchDomain: builder.query({
                query: () => {
                    return {
                        url: '/domains',
                        method: 'GET',
                    }
                }
            }),
            addDomain: builder.mutation({
                query: () => {
                    return {
                        url: '/domains',
                        method: 'POST',
                        body: {
                            domainName: faker.internet.domainName(),
                        }
                    }
                }
            })
        }
    }
})

export const { useAddDomainMutation, useFetchDomainQuery } = domainsApi;
export { domainsApi };