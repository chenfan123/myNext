import React from 'react'
import { List, Avatar } from 'antd';
import { data } from '../../data';
import Link from 'next/link';
import type { Metadata } from 'next';
import BlogList from '../../components/BlogList';

export const metadata: Metadata = {
  title: 'Blog List',
  description: 'Blog page',
}

export default function page()
 {
  return (
    <BlogList />
  )
}
