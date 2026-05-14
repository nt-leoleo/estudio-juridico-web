import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'estudio-juridico-web';
const isGitHubPagesBuild =
  process.env.GITHUB_ACTIONS === 'true' &&
  process.env.GITHUB_REPOSITORY?.endsWith(`/${repoName}`);

export default defineConfig({
  base: isGitHubPagesBuild ? `/${repoName}/` : '/',
  plugins: [react()],
});
