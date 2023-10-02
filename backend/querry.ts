import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


async function main() {
  const channelMembership = await prisma.channelMembership.create({
    data: {
      user: {
        connect: {
          id: 1 // the current user that created the channel
        }
      },
      isActive: true,
      isModerator: true,
      isOwner: true,
      channel:
      {
        create: {
          name: 'channelName',
          image: 'a url to the image',
          type: {
            create: {
              name: 'public',
            },
          },
        },
      },
    }
  })
  console.log(channelMembership)
}


main()

  .then(async () => {

    await prisma.$disconnect()

  })

  .catch(async (e) => {

    console.error(e)

    await prisma.$disconnect()

    process.exit(1)

  })



