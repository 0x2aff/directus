import type { MergeCoreCollection } from '../index.js';
import type { DirectusRole } from './role.js';
import type { DirectusUser } from './user.js';

export type DirectusShare<Schema extends object> = MergeCoreCollection<
	Schema,
	'directus_shares',
	{
		id: string;
		name: string | null;
		collection: string | null;
		item: string | null;
		role: DirectusRole<Schema> | string | null;
		password: string | null;
		user_created: DirectusUser<Schema> | string | null;
		date_created: string | null;
		date_start: string | null;
		date_end: string | null;
		times_used: number | null;
		max_uses: number | null;
	}
>;
