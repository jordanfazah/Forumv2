import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const passwordHash = await bcrypt.hash('admin123', 10)

  const user = await prisma.user.create({
    data: {
      email: 'admin@forum.local',
      username: 'admin',
      passwordHash
    }
  })

  const category = await prisma.category.create({
    data: {
      name: 'General Discussion',
      slug: 'general-discussion'
    }
  })

  await prisma.thread.create({
    data: {
      title: 'Welcome to Forum Hybrid',
      slug: 'welcome-thread',
      content: 'First thread in the platform.',
      authorId: user.id,
      categoryId: category.id
    }
  })
}

main()
