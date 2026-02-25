import { supabaseAdmin } from '@/lib/supabase-server'

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('messages')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json(data)
}

export async function POST(request) {
  const body = await request.json()
  const { content, author } = body

  if (!content) {
    return Response.json({ error: 'content is required' }, { status: 400 })
  }

  const { data, error } = await supabaseAdmin
    .from('messages')
    .insert({ content, author: author || 'anonymous' })
    .select()
    .single()

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json(data, { status: 201 })
}
