'use client';
import React from 'react'
import { List, Avatar } from 'antd';
import { data } from '../../data';
import Link from 'next/link';

export default function index() {
  return (
    <List
    itemLayout="horizontal"
    dataSource={[...data]}
    renderItem={(item, index) => (
      <List.Item key={item.id}>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<Link href={`/Blog/${item.id}`}>{item.title}</Link>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
  )
}
