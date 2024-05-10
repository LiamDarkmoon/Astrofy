import Spotify from '@auth/core/providers/spotify';
import { defineConfig } from 'auth-astro';

export default defineConfig({
  callbacks: {

  },
  providers: [
    Spotify({
      clientId: import.meta.env.SPOTIFY_CLIENT_ID,
      clientSecret: import.meta.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
});