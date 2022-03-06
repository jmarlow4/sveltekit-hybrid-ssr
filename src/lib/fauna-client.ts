import { Client } from 'faunadb';

export const fClient = new Client({
	secret: import.meta.env.VITE_PUBLIC_FAUNA_KEY as string,
	domain: 'db.fauna.com'
});

export const fQuery = fClient.query;
export const fStream = fClient.stream;
export const fPage = fClient.paginate;
