import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as dotenv from 'dotenv'
import * as schema from '../../../migrations/schema';
import { migrate } from "drizzle-orm/postgres-js/migrator";

dotenv.config({ path: '.env' })
const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
    console.log('🔴 Cannot find database URL! from supabase/db.ts')
}

const client = postgres(dbUrl as string, { max: 1 })
const db = drizzle(client, { schema })
const migrateDb = async () => {
    try {
        console.log('🟠 Migrating client from supabase/db.ts');
        await migrate(db, { migrationsFolder: 'migrations' })
        console.log('🟢 Successfully Migrated from supabase/db.ts');
    } catch (error) {
        console.log('🔴 Error Migrating Client from supabase/db.ts')
    }
}
migrateDb()
export default db