// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://6373a0bb0bb6b698b6117bec.mockapi.io/',
//   }),
//   tagTypes: ['Contact'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => '/phonebook',
//       providesTags: ['Contact'],
//     }),
//     creatContact: builder.mutation({
//       query: newContact => ({
//         url: '/phonebook',
//         method: 'POST',
//         body: newContact,
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//     deleteContact: builder.mutation({
//       query: contactId => ({
//         url: `/phonebook/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useDeleteContactMutation,
//   useCreatContactMutation,
// } = contactsApi;
