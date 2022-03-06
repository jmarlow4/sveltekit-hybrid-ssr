import { fClient } from '$lib/fauna-client';
import type { RequestHandlerOutput } from '@sveltejs/kit';
import { Collection, Get, Let, Ref, Select, Var } from 'faunadb';

/** @type {import('./[id]').RequestHandler} */
export async function get({ params }): Promise<RequestHandlerOutput> {
	return {
		body: {
			speaker: await fClient.query(
				Let(
					{
						doc: Get(Ref(Collection('Speaker'), params.id))
					},
					{
						doc: Var('doc'),
						id: Select(['ref', 'id'], Var('doc'))
					}
				)
			)
		}
	};
}
