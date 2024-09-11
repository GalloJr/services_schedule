import { text, pgTable, date, time } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const schedules = pgTable('schedules', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  owner: text('owner').notNull(),
  vehicle: text('vehicle').notNull(),
  telphone: text('telphone').notNull(),
  description: text('description').notNull(),
  date: date('date').notNull(),
  time: time('time').notNull(),
})
