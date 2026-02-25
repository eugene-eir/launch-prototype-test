import { supabaseAdmin } from '@/lib/supabase-server'

export async function GET() {
  // Quick connectivity test — count rows in messages table
  const { count, error } = await supabaseAdmin
    .from('messages')
    .select('*', { count: 'exact', head: true })

  if (error) {
    return Response.json({ ok: false, error: error.message }, { status: 500 })
  }

  return Response.json({
    ok: true,
    message: 'Hello from LAUNCH API 🚀',
    messages_count: count,
  })
}
