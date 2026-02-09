import React from 'react'
import { Card } from 'antd';
import { data } from '../../../data';

interface Iparams {params:Promise<{id:string}>}
export async function generateMetadata({params}:Iparams){
    const { id } = await params;
    console.log(params,'params')
    return {
        title:`博客详情 - ${id}`
    }
}
export default async function page({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    const { Meta } = Card;

    const item = data.find((item) => item.id === parseInt(id));
    console.log(id,item,data)
  return (
    <div>
        <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        draggable={false}
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
  </Card>
    </div>
  )
}