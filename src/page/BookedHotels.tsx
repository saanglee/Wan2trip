import React from 'react';
import Header from '../components/layout/Header';
import SearchBar from '../components/search/SearchBar';
import Layout from '../components/layout/Layout';
import BookedList from '../components/book/BookedList';

// import tw from 'tailwind-styled-components';

const BookedHotels = () => {
  return (
    <Layout>
      <Header />
      <BookedList />
    </Layout>
  );
};

export default BookedHotels;
