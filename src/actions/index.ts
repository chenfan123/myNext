'use server'
import { revalidatePath } from 'next/cache'

const data = ['吃饭','睡觉','打豆豆']


export async function getTodo() {
    return data
}

export async function addTodo(formData: FormData) {
    const todo = formData.get('todo') as string
    data.push(todo)
    // return data
    revalidatePath('/')
}