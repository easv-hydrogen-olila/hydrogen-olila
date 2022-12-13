import React from 'react'
import { Heading } from '../elements/Heading';
import { Layout } from '../index';

export default function SearchPage({
    searchTerm,
    children
}:{
    searchTerm?: string | null;
    children: React.ReactNode;
}) {
  return (
    <Layout>
        <Heading component='h3'>
            Search
        </Heading>
        <>
            {children}
        </>
    </Layout>
  )
}
