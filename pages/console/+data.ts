// https://vike.dev/data

import type { PageContextServer } from 'vike/types';

export type Data = {
  commands: { text: string }[];
};

export default async function data(
  _pageContext: PageContextServer
): Promise<Data> {
  return { commands: [] };
}
