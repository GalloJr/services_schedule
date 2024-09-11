import { client, db } from '.'
import { schedules } from './schema'

async function seed() {
  await db.delete(schedules)

  await db.insert(schedules).values([
    {
      owner: 'Renato',
      vehicle: 'Gol',
      telphone: '12988888888',
      description: 'Funilaria',
      time: '08:00',
      date: '2024-09-23',
    },
    {
      owner: 'Larissa',
      telphone: '12999998888',
      vehicle: 'ASX',
      description: 'Revisão Geral',
      time: '15:00',
      date: '2024-09-23',
    },
  ])
}

seed().finally(() => {
  client.end()
})
