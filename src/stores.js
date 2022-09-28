import { writable } from 'svelte/store';
import Sources from './Sources';
import Albums from './Albums';
import Mixes from './Mixes';
import Videos from './Videos';

export const sources = writable(Sources);
export const albums = writable(Albums);
export const mixes = writable(Mixes);
export const videos = writable(Videos);
