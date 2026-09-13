import { getAgentDirections } from '@/lib/agent-directions'

export async function GET() {
	const body = await getAgentDirections()

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	})
}
