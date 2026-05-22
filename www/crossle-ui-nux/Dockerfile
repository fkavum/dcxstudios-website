FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# ─── Builder ──────────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN NODE_OPTIONS="--max-old-space-size=3072" pnpm build

# ─── Runner ───────────────────────────────────────────────────────────────────
FROM base AS runner
WORKDIR /app
COPY --from=builder /app/.output ./.output

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV NITRO_PORT=3000

# Optional: Add labels for better image management/identification
LABEL org.opencontainers.image.source="https://github.com/dcxstudios/crossle"
LABEL org.opencontainers.image.description="Crossle - Online Word Duel"
LABEL org.opencontainers.image.licenses="Proprietary"


EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
